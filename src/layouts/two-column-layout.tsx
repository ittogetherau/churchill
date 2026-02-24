import React from "react";
import clsx from "clsx";
import ContainerLayout from "./container-layout";

interface TwoColumnLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  reversed?: boolean; // >= md
  isReversedInSmall?: boolean; // < md only
  sticky?: boolean;
  className?: string;
  mainClassName?: string;
  sidebarClassName?: string;
  isEqual?: boolean;
  isContainer?: boolean;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  children,
  sidebar,
  reversed = false,
  isReversedInSmall = false,
  sticky = true,
  className,
  mainClassName,
  sidebarClassName,
  isEqual = false,
  isContainer = true,
}) => {
  const grid = clsx(
    "relative grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-4 xl:grid-cols-6 xl:gap-6",
    className,
  );

  const stickyWrap = (node: React.ReactNode) =>
    sticky ? (
      <div className="h-fit w-full md:sticky md:top-30">{node}</div>
    ) : (
      node
    );

  const mainCols = isEqual
    ? "md:col-span-2 xl:col-span-3"
    : "md:col-span-2 xl:col-span-4";

  const sidebarCols = isEqual
    ? "md:col-span-2 xl:col-span-3"
    : "md:col-span-2 xl:col-span-2";

  // order logic
  // mobile (<md)
  const mobileMainOrder = isReversedInSmall ? "order-2" : "order-1";
  const mobileSidebarOrder = isReversedInSmall ? "order-1" : "order-2";

  // desktop (>=md)
  const desktopMainOrder = reversed ? "md:order-2" : "md:order-1";
  const desktopSidebarOrder = reversed ? "md:order-1" : "md:order-2";

  const Main = (
    <section
      className={clsx(
        mainCols,
        mobileMainOrder,
        desktopMainOrder,
        mainClassName,
      )}
    >
      {stickyWrap(children)}
    </section>
  );

  const Sidebar = (
    <aside
      className={clsx(
        sidebarCols,
        mobileSidebarOrder,
        desktopSidebarOrder,
        sidebarClassName,
      )}
    >
      {stickyWrap(sidebar)}
    </aside>
  );

  const Wrapper = isContainer ? ContainerLayout : "div";

  return (
    <Wrapper className={grid}>
      {Main}
      {Sidebar}
    </Wrapper>
  );
};

export default TwoColumnLayout;
