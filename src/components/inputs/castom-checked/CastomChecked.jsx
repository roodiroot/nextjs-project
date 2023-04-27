import st from "./CastomChecked.module.css";

function CastomChecked({ children, style }) {
  return (
    <form style={style} className={st.checkedWrapper}>
      {children}
    </form>
  );
}

export default CastomChecked;
