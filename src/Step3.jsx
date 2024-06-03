import React from "react";
import { Link } from "react-router-dom";

function Step3() {
  return (
    <div>
      <p>Pick add-ons</p>
      <div>
        <div>
          <input type="checkbox" id="service" name="service" />
          <label htmlFor="">Online Service</label>
        </div>
        <div>
          <input type="checkbox" id="storage" name="storage" />
          <label htmlFor="">Larger Storage</label>
        </div>
        <div>
          <input type="checkbox" id="profile" name="profile" />
          <label htmlFor="">Customizable Profile</label>
        </div>
      </div>
      <div className="flex justify-between">
        <Link to="/step2">go Back</Link>
        <Link to="/step4">Next</Link>
      </div>
    </div>
  );
}

export default Step3;
