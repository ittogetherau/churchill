const ALLOWED_ATTRS = new Set(["href", "src", "alt", "colspan", "rowspan"]);
const UNWRAP_TAGS = new Set([
  "font",
  "span",
  "b",
  "i",
  "u",
  "s",
  "em",
  "strong",
  "big",
  "small",
  "strike",
  "tt",
]);

function unwrapNode(el: HTMLElement): void {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}

function walk(node: Node): void {
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const el = node as HTMLElement;

  let child = node.firstChild;
  while (child) {
    const next = child.nextSibling;
    walk(child);
    child = next;
  }

  for (const attr of Array.from(el.attributes)) {
    if (!ALLOWED_ATTRS.has(attr.name)) el.removeAttribute(attr.name);
  }

  if (UNWRAP_TAGS.has(el.tagName.toLowerCase())) unwrapNode(el);
}

export function stripStyles(html: string): string {
  if (typeof DOMParser === "undefined") {
    return html
      .replace(/\s[\w-]+=(?:"[^"]*"|'[^']*')/gi, "")
      .replace(/<\/?(?:font|span)\b[^>]*>/gi, "");
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  walk(doc.body);
  return doc.body.innerHTML;
}
