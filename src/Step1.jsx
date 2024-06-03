import React from "react";
import { useNavigate } from "react-router-dom";

function Step1() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    // e.preventDefault();
    navigate("/step2");
  };

  return (
    <div className="flex flex-col">
      <p>Personal Info</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="e.g. Stephen King"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="e.g. stephenking@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            name="number"
            id="number"
            autoComplete="tel"
            placeholder="e.g. 1234567890"
            required
          />
        </div>
        <button type="submit">
          Next
          {/* <Link to="/step2">Next</Link> */}
        </button>
      </form>
    </div>
  );
}

export default Step1;
