import React, { useState } from "react";

const Tabs: React.FC<{
  links?: Array<string>;
  initialTab?: string | number;
}> = ({ links, children, initialTab = 0 }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="flx-v _gapy-1">
      <div className="flx _gapx-1">
        {links &&
          links.map((link, index) => {
            const isCurrent = currentTab === index;
            return (
              <div
                className="transition-1 p-1 bg-1_hvr br-r-2 pointer"
                onClick={() => setCurrentTab(index)}
                style={
                  isCurrent
                    ? {
                        backgroundColor: "var(--area-color-2-focus)",
                      }
                    : {}
                }
              >
                <h3 className={isCurrent ? "t-acc-1" : ""}>{link}</h3>
              </div>
            );
          })}
      </div>
      {React.Children.map(children, (child, i) =>
        i === currentTab ? child : null
      )}
    </div>
  );
};

export default Tabs;
