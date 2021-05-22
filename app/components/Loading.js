import React from "react";
import ThemeContext from "../contexts/theme";

export default function Loading() {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="loading-div">
      <div className={`loading ${theme}`}></div>
    </div>
  );
}
