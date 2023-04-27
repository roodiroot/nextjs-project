import { useState } from "react";
import st from "./CastomChecked.module.css";
import classNames from "classnames";
import SvgCombain from "../SvgCombain/SvgCombain";

function CheckedItem({ children, setValue, allValue, value }) {
  const [itemValue, setItemValue] = useState(false);

  const changeValue = (e) => {
    if (itemValue) {
      setValue(allValue.filter((i) => i !== value));
      setItemValue(false);
    }
    if (!itemValue) {
      setValue([...allValue, value]);
      setItemValue(true);
    }
  };

  return (
    <div className={st.checkedWrapperElement} onClick={changeValue}>
      <div className={classNames(st.checkElement, itemValue && st.active)}>
        <SvgCombain ok />
      </div>
      <div className={st.checkElementText}>{children}</div>
    </div>
  );
}

export default CheckedItem;
