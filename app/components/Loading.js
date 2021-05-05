import React from "react";
import { ThemeConsumer } from "../contexts/theme";

export default function Loading() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="loading-div">
          <div className={`loading ${theme}`}></div>
        </div>
      )}
    </ThemeConsumer>
  );
}
