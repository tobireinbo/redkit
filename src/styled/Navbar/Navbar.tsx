import React, { useState } from "react";

type Link = { route: string; title: string };
const Navbar: React.FC<{
  logo?: string;
  links?: Array<Link>;
  onSelect?(link: Link): void;
}> = ({ logo, links }) => {
  const [currentLink, setCurrentLink] = useState<Link>();

  return (
    <nav className="sticky-top w-max h-3 flx-btwn p-2">
      <div>{logo && <img src={logo} />}</div>
      <div className="flx _gapx-1">
        {links &&
          links.map((link) => {
            const isCurrent = currentLink?.route === link.route;
            return (
              <div
                className="transition-1 p-1 bg-1_hvr br-r-2 pointer"
                onClick={() => setCurrentLink(link)}
                style={
                  isCurrent
                    ? {
                        backgroundColor: "var(--area-color-2-focus)",
                      }
                    : {}
                }
              >
                <h3 className={isCurrent ? "t-acc-1" : ""}>{link.title}</h3>
              </div>
            );
          })}
      </div>
    </nav>
  );
};

export default Navbar;
