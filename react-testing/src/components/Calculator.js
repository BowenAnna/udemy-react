import React from "react";
import * as math from "./mathFunctions";

export default function Calculator() {
  return (
    <div>
      <ul>
        <li>{math.add(1, 2)}</li>
        <li>{math.multiply(2, 3)}</li>
        <li>{math.subtract(7, 2)}</li>
        <li>{math.divide(5, 2)}</li>
      </ul>
    </div>
  );
}
