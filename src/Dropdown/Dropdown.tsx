// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../util/hooks";

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
        } else if (option.title.includes(search)) {
          return (
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
              <i className={option.icon}></i>
              <h4>{option.title}</h4>
            </label>
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
        {selection && (
          <i
            className={options.find((o) => o.value === selection).icon || ""}
          ></i>
        )}
        <input
          style={{
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
          }}
          onChange={handleSearchInput}
          value={search}
          ref={searchInputRef}
          placeholder={options.find((o) => o.value === selection)?.title}
          disabled={!preferences.searchable}
        />

        {preferences.searchable && (
          <button
            onClick={handleSearchClear}
            className={classNames.clear}
            style={styles.clear}
          >
            clear
          </button>
        )}
      </div>
      {isOpen && _Dropdown}
    </div>
  );
};

export default Dropdown;
