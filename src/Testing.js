import React, { useState } from "react";

export default function Testing(props) {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log("passwords match");
    } else {
      console.log("passwords do not match");
    }

    if (formData.agreed) {
      console.log("Subscribed to news letter");
    }

    console.log(formData);
  }

  // console.log(formData.agreed);

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={formData.email}
      />

      <br></br>
      <br></br>

      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={formData.password}
      />

      <br></br>
      <br></br>

      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        onChange={handleChange}
        value={formData.confirmPassword}
      />

      <br></br>
      <br></br>

      <input
        id="agreed"
        type="checkbox"
        name="agreed"
        onChange={handleChange}
        checked={formData.agreed}
      />
      <label htmlFor="agreed">Want to subscribe to the newsletter?</label>

      <br></br>
      <br></br>

      <button>Sign Up</button>
    </form>
  );
}
