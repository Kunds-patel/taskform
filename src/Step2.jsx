import React, { useState } from "react";
import { Link } from "react-router-dom";

function Step2() {
  const [plan, setPlan] = useState({});

  let plans = [
    {
      plan: "Arced",
      price: "$9",
      isSelected: true,
    },
    {
      plan: "Advance",
      price: "$12",
      isSelected: false,
    },
    {
      plan: "Pro",
      price: "$15",
      isSelected: false,
    },
  ];
  const onSetupButton = (data) => {
    setPlan(data);
    plans.map((x) => {
      if (x.plan === data.plan) {
        return { ...x, isSelected: true };
      }
      return { ...x, isSelected: false };
    });
  };

  return (
    <div className="flex flex-col ">
      <p>Select Your Plan</p>
      <div className="flex-1 flex flex-col">
        {plans.map((x) => {
          return (
            <button
              key={x.price}
              className={`border rounded-lg ${
                x.isSelected ? "border-blue-500" : "border"
              }`}
              onClick={() => onSetupButton(x)}
            >
              <p>{x.plan}</p>
              <p>{x.price}/mo</p>
            </button>
          );
        })}
      </div>
      <div className="flex justify-between">
        <Link to="/">go Back</Link>
        <Link to="/step3">Next</Link>
      </div>
    </div>
  );
}

export default Step2;
