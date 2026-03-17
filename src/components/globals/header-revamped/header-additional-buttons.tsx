"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, University } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const LINKS = [
  {
    title: "Student Application Portal",
    href: "https://application.churchill.edu.au/",
    icon: LayoutDashboard,
    external: false,
  },
  {
    title: "Learning Management Portal",
    href: "https://elearning.churchill.nsw.edu.au/login/index.php",
    icon: University,
    external: true,
  },
] as const;

const renderButton = (link: (typeof LINKS)[number]) => {
  const Icon = link.icon;

  return (
    <Link
      key={link.href}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
    >
      <Button size="sm" variant="glass">
        <Icon />
        <span className="text-xs">{link.title}</span>
      </Button>
    </Link>
  );
};

const PagesToRenderStdPortalBtnIn = [
  "offshore-international-student-information",
  "onshore-international-student-admission-information",
];

const HeaderAdditionalButtons = () => {
  const params = useParams();
  const slugParam = params?.slug;

  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  return (
    <>
      {slug && PagesToRenderStdPortalBtnIn.includes(slug)
        ? renderButton(LINKS[0])
        : null}
      {renderButton(LINKS[1])}
    </>
  );
};

export default HeaderAdditionalButtons;
