import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const LINKS = [
  {
    title: "Student Application Portal",
    href: "https://application.churchill.edu.au/login",
    icon: LayoutDashboard,
  },
  {
    title: "Learning Management Portal",
    href: "https://elearning.churchill.nsw.edu.au/login/index.php",
    icon: LayoutDashboard,
  },
] as const;

const HeaderAdditionalButtons = () => {
  return LINKS.map((el) => (
    <Link href={el.href} key={el.href}>
      <Button size={"sm"} variant={"glass"}>
        <el.icon />
        <span className="text-xs">{el.title}</span>
      </Button>
    </Link>
  ));
};

export default HeaderAdditionalButtons;
