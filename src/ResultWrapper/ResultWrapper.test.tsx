// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ResultWrapper from "./ResultWrapper";
import { ResultWrapperProps } from "./ResultWrapper.types";

describe("Test Component", () => {
  let props: ResultWrapperProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ResultWrapper {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ResultWrapper");

    expect(component).toHaveTextContent("harvey was here");
  });
});
