import { useState } from "react";
import st from "./CastomChecked.module.css";
import classNames from "classnames";

function RadioItem({ onClick, children, value, checked }) {
  const [itemValue, setItemValue] = useState();
  const changeValue = () => {
    onClick();
    setItemValue(!itemValue);
  };
  return (
    <div className={st.checkedWrapperElement} onClick={changeValue}>
      <input
        type="radio"
        name="radio"
        id={value}
        className={st.checkElement}
        onChange={(e) => setItemValue(e.target.value)}
      ></input>
      <label
        htmlFor={value}
        className={classNames(st.radioElement, checked && st.active)}
      >
        {children}
      </label>
    </div>
  );
}

export default RadioItem;
