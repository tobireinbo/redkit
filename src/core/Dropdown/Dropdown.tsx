// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../util/hooks";

import { DropdownProps, Option } from "./Dropdown.types";

const Dropdown: React.FC<DropdownProps> = (props) => {
  /*
   *
   * defaults
   *
   */
  const { onChange, options, initialSelection = undefined } = props;
  const preferences = {
    showSelectionInList: true,
    wipeSelectionOnClear: true,
    searchable: true,
    clearButton: true,
    throwErrorOnSelectionMismatch: false,
    ...props.preferences,
  };
  const classNames = { ...props.classNames };
  const styles = { ...props.styles };
  const activeStyles = { ...props.activeStyles };

  /*
   *
   * hooks
   *
   */
  const [search, setSearch] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<any>(initialSelection);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, handleOutsideClick);

  useEffect(() => {
    if (
      initialSelection &&
      !options.find((o) => o.value === initialSelection)
    ) {
      if (preferences.throwErrorOnSelectionMismatch)
        throw new Error("can't find initial selection in options");
    }
  }, [initialSelection]);

  /*
   *
   * handlers
   *
   */
  function handleDropdownClick() {
    setOpen(true);
  }

  function handleSelection(option: Option<any>) {
    onChange && onChange(option.value);
    setSelection(option.value);
    setSearch("");
    setOpen(false);
  }

  function handleOutsideClick() {
    setSearch("");
    setOpen(false);
  }

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (preferences.searchable) {
      setSearch(event.target.value);
    }
  }

  function handleSearchClear(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    if (preferences.wipeSelectionOnClear) {
      setSelection(undefined);
      onChange && onChange(undefined);
    }
    setSearch("");
  }

  /*
   *
   * return
   *
   */
  const _Dropdown = (
    <div
      className={classNames.list}
      style={{ position: "absolute", ...styles.list }}
    >
      {options.map((option, index) => {
        const isSelected = selection === option.value;

        if (isSelected && !preferences.showSelectionInList) {
          return null;
        } else if (option.title.toUpperCase().includes(search.toUpperCase())) {
          return (
            <>
              <label
                className={classNames.option}
                key={index}
                style={Object.assign(
                  { display: "flex", alignItems: "center" },
                  !isSelected ? styles.option : activeStyles.option
                )}
              >
                <input
                  type="radio"
                  name="options"
                  onChange={() => handleSelection(option)}
                  style={{ display: "none" }}
                />

                <div className="t-inherit">{option.title}</div>
              </label>
              {option.breakAfter && (
                <div className={classNames.break} style={styles.break} />
              )}
            </>
          );
        }
      })}
    </div>
  );

  return (
    <div
      className={classNames.wrapper}
      style={{ position: "relative", ...styles.wrapper }}
      onClick={handleDropdownClick}
      ref={wrapperRef}
    >
      <div
        className={classNames.selection}
        style={{
          display: "flex",
          justifyContent: "space-between",
          ...styles.selection,
        }}
        onClick={() => {
          preferences.searchable && searchInputRef.current?.focus();
        }}
      >
        <input
          className="t-inherit"
          style={{
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
          }}
          onChange={handleSearchInput}
          value={search}
          ref={searchInputRef}
          placeholder={options.find((o) => o.value === selection)?.title || ""}
          disabled={!preferences.searchable}
        />

        {preferences.searchable && preferences.clearButton && (
          <button
            onClick={handleSearchClear}
            className={classNames.clear}
            style={styles.clear}
          >
            <CloseCircle />
          </button>
        )}
      </div>
      {isOpen && _Dropdown}
    </div>
  );
};

export default Dropdown;

export const CloseCircle: React.FC = () => (
  <div
    style={{
      clipPath: `
      polygon(
        10% 0, 0 10%, 40% 50%, 0 90%, 10% 100%, 50% 60%,
        90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%
      )
    `,
      height: "10px",
      width: "10px",
      backgroundColor: "black",
    }}
  />
);
