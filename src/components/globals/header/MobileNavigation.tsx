import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog-header";
import { DialogPortal } from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavigationItems from "./NavigationItems";
import { useMobile } from "@/hooks/useMobile";
import ContainerLayout from "@/layouts/container-layout";
import { Button } from "@/components/ui/button";
import { HeaderQuery } from "@/graphql/generated/graphql";

type MobileNavigationProps = {
  degrees?: HeaderQuery["degree"];
  links?: any;
};

const MobileNavigation = ({
  degrees = [],
  links,
}: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();

  if (!isMobile) return null;

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"ghost"} className="text-foreground">
            <Menu />
          </Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogContent className="h-full overflow-y-auto p-1 [&>button]:hidden">
            <ContainerLayout className="space-y-8">
              <div className="flex items-center justify-between gap-2">
                <DialogTitle className="max-h-22">
                  <Link
                    className="block"
                    href="/"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src="/assets/logo.svg"
                      width={400}
                      height={400}
                      alt="Main Logo"
                      className="w-[240px] object-contain"
                      priority
                    />
                  </Link>
                  <span className="sr-only">
                    Churchill Institute of Higher Education
                  </span>
                </DialogTitle>

                <Button
                  onClick={() => setOpen(false)}
                  variant={"ghost"}
                  className="text-foreground"
                >
                  <X />
                </Button>
              </div>

              <NavigationItems
                links={links}
                degrees={degrees}
                onLinkClick={() => setOpen(false)}
              />
            </ContainerLayout>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};
export default MobileNavigation;
