import React from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";

interface message {
  text: string;
  _id: number;
  count: number;
}

interface ContextProps {
  //functions
  addMessage: (message: string) => void;
  addGenericErrorMessage: () => void;
}
const createDefault = (): ContextProps => ({
  //functions
  addMessage: () => {},
  addGenericErrorMessage: () => {},
});
export const SystemMessageContext = React.createContext<ContextProps>(
  createDefault()
);
export const SystemMessageProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<Array<message>>([]);

  function addMessage(message: string) {
    const findMessage = messages.find((m) => m.text === message);

    if (findMessage) {
      setMessages((prevState) => {
        const temp = prevState.slice();
        const index = temp.findIndex((o) => o._id === findMessage._id);
        temp[index] = { ...temp[index], count: temp[index].count + 1 };

        return temp;
      });
    } else {
      setMessages((prevState) =>
        prevState.concat({ text: message, _id: Math.random(), count: 1 })
      );
    }
  }

  function addGenericErrorMessage() {
    addMessage("Something went wrong! Try again later.");
  }

  return (
    <SystemMessageContext.Provider
      value={{ addMessage, addGenericErrorMessage }}
    >
      {children}
      <div
        style={{
          bottom: "10px",
          right: "10px",
          zIndex: 99999,
          position: "fixed",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((m, index) => (
          <Expire delay={3000} msgSetter={setMessages} msg={m} key={m._id}>
            <div style={{ position: "relative" }}>
              <div className="br-1 br-r-2 sdw-1 flx bg-1 ovfl-h">
                {/* <div className="bg-acc-1" style={{ width: "10px" }}></div> */}
                <div className="p-2 flx-btwn gap-2 rel">
                  <h3>{m.text}</h3>
                </div>
              </div>
              {m.count > 1 && (
                <div
                  className="bg-red br-r-50 flx-c-c abs ml-a"
                  style={{
                    position: "absolute",
                    background: "red",
                    top: "-10px",
                    right: "-10px",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <h5 style={{ color: "white" }}>{m.count}</h5>
                </div>
              )}
            </div>
          </Expire>
        ))}
      </div>
    </SystemMessageContext.Provider>
  );
};
export const useSysMsg = () => React.useContext(SystemMessageContext);

export const Expire: React.FC<{
  delay: number;
  msg: message;
  msgSetter: Dispatch<SetStateAction<Array<message>>>;
}> = (props) => {
  const [visible, setVisible] = useState(true);
  const [animation, setAnimation] = useState<boolean>(true);

  useEffect(() => {
    console.log(`${props.msg.text} visible`);
    setVisible(true);
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, Math.floor(props.delay * 0.75));

    setTimeout(() => {
      props.msgSetter((prevState) =>
        prevState.filter((o) => o._id !== props.msg._id)
      );

      setVisible(false);
      console.log("gone");
    }, props.delay);
  }, [props.delay]);

  return visible ? (
    <div
      style={{
        animation: "0.2s ease 0s 1 show_sysMsg",
        transition: "0.2s ease",
        opacity: !animation ? "0" : "1",
        transform: !animation ? "scale(0.8)" : "unset",
      }}
    >
      {props.children}
    </div>
  ) : (
    <div />
  );
};
