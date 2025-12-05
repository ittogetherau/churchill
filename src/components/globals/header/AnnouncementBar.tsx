import React from "react";
import { Button } from "@/components/ui/button";
import { Marquee, MarqueeContent } from "@/components/ui/shadcn-io/marquee";
import ContainerLayout from "@/layouts/container-layout";

type AnnouncementBarProps = {
  visible: boolean;
  text: string;
  onClose: () => void;
};

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  visible,
  text,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <div className="bg-primary">
      <ContainerLayout className="flex items-center">
        <Marquee>
          <MarqueeContent>
            <p className="px-12 text-sm font-semibold text-background">{text}</p>
          </MarqueeContent>
        </Marquee>

        <Button
          variant={"ghost"}
          onClick={onClose}
          size={"icon"}
          className="text-white hover:text-alt-background"
        >
          <i className="fi fi-rr-cross-small flex"></i>
        </Button>
      </ContainerLayout>
    </div>
  );
};

export default AnnouncementBar;
