// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import LoadingSpinner from "./LoadingSpinner";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";

describe("Test Component", () => {
  let props: LoadingSpinnerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LoadingSpinner {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LoadingSpinner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
