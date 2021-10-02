import React, { useState } from "react";
import Card from "./Card/Card";
import Button from "./Button/Button";
import Container from "./Container/Container";
import Dropdown from "./Dropdown/Dropdown";
import Frame from "./Frame/Frame";
import "./main.css";

export default {
  title: "Styled Page",
};

export const Page1 = () => {
  const [isFrameOpen, openFrame] = useState(true);

  return (
    <div className="flx-v w-max h-max flx-ac">
      <Container>
        <h1>
          <b>Page Title</b>
        </h1>
        <div
          className="gap-2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <Card variant="2" title="Graphcontrol" options={{ floating: false }}>
            <h3>Graphcontrol</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Card>
          <Card variant="acc-1-grad">
            <h3>
              <b>Redkit</b>
            </h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Card>
          <Card variant="warn-1">
            <h3>Test</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Card>
          <Card variant="1" title="Graphcontrol" options={{ floating: false }}>
            <h3>Graphcontrol</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Card>
        </div>
        <div className="w-max flx _gapx-1">
          <Button variant="acc-1" size="3" onClick={() => openFrame(true)}>
            Open Frame
          </Button>
          <Button variant="acc-1-grad" size="3">
            Acion
          </Button>
          <Button variant="warn-1" size="3">
            Delete
          </Button>
        </div>
        {isFrameOpen && (
          <Frame title="Hello World" animate onClose={() => openFrame(false)}>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Dropdown
              options={[
                { value: "1", title: "First" },
                { value: "2", title: "Second" },
                { value: "3", title: "Third" },
                { value: "4", title: "Fourth" },
                { value: "5", title: "Fifth" },
                { value: "6", title: "Sixth" },
                { value: "7", title: "Seventh" },
                { value: "8", title: "Eigth" },
                { value: "9", title: "Nineth" },
              ]}
              initialSelection={"2"}
              preferences={{ clearButton: true }}
            />
          </Frame>
        )}
      </Container>
    </div>
  );
};
