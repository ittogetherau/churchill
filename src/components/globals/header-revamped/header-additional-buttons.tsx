import { Button } from "@/components/ui/button";
import { LayoutDashboard, University } from "lucide-react";
import Link from "next/link";

const LINKS = [
  {
    title: "Student Application Portal",
    href: "/apply-for-course-admission",
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

const HeaderAdditionalButtons = () => {
  return (
    <>
      {renderButton(LINKS[0])}
      {renderButton(LINKS[1])}
    </>
  );
};

export default HeaderAdditionalButtons;
