// Generated with util/create-component.js
import React from "react";
import BurgerMenu from "./BurgerMenu";

export default {
  title: "BurgerMenu",
};

const links = [{ url: "/a", title: "Homepage" }];

export const WithLinks = () => (
  <BurgerMenu links={links}>
    {(link) => <button>{link.title}</button>}
  </BurgerMenu>
);

export const Styled = () => (
  <BurgerMenu
    links={links}
    styles={{ burgerBar: { backgroundColor: "purple" } }}
  >
    {(link) => (
      <button
        style={{ padding: "5px", border: "none" }}
        onClick={() => alert(link.url)}
      >
        {link.title}
      </button>
    )}
  </BurgerMenu>
);
