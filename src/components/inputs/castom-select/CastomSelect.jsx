import { useState } from "react";

function CastomSelect({ children }) {
  const [show, setShow] = useState(false);
  const showSelect = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={showSelect}
      className="
        relative
        "
      id="select-1"
    >
      {children[0]}
      {show && children[1]}
    </div>
  );
}

export default CastomSelect;
