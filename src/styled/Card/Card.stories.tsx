import React from "react";
import Card from "./Card";

export default {
  title: "Card",
};

const inner = (
  <>
    <h1>Test</h1>
    <p>
      nklfnalköfwklahfökwaföl jajföawljf aöljflöawmö äa ölwjöl öl wöl.
      fzifadfjwhv mlöökwöld
    </p>
  </>
);

export const Variant1 = () => <Card>{inner}</Card>;

export const Variant2 = () => <Card variant="2">{inner}</Card>;

export const Accent1 = () => <Card variant="acc-1">{inner}</Card>;
