import React from "react";

function TextInput({ title, state, setState,error}) {
  return (
    <React.Fragment>
      <span className="title">{title}</span>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={title}
      />
      { state>99 && error && <span className="error">{title} Cant' Be above 100%</span>}
    </React.Fragment>
  );
}

export default TextInput;