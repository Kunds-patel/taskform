import React from "react";
import { Link } from "react-router-dom";

function Step4() {
  return (
    <div>
      <p>Finishing up</p>
      {}
      <div className="flex justify-between">
        <Link to="/step3">go Back</Link>
        <Link>Confirm</Link>
      </div>
    </div>
  );
}

export default Step4;
