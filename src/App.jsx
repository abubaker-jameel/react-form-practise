import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi();
    console.log(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id=""
          placeholder="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          id=""
          placeholder="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <textarea
          name="comments"
          onChange={handleChange}
          value={formData.comments}
          placeholder="comments"
          id=""
          cols="60"
          rows="10"
        />
        <br />
        <input
          type="checkbox"
          name="isFriendly"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are You Friendly</label>
        <br />
        <fieldset>
          <legend>Current Employment Status</legend>
          <input
            type="radio"
            name="employment"
            id="unemployment"
            onChange={handleChange}
            value="unemployment"
            checked={formData.employment === "unemployment"}
          />
          <label htmlFor="unemployment">Unemployment</label>
          <input
            type="radio"
            name="employment"
            id="part-time"
            onChange={handleChange}
            value="part-time"
            checked={formData.employment === "part-time"}
          />
          <label htmlFor="part-time">Part-Time</label>
          <input
            type="radio"
            name="employment"
            id="full-time"
            onChange={handleChange}
            value="full-time"
            checked={formData.employment === "full-time"}
          />
          <label htmlFor="full-time">Full-Time</label>
        </fieldset>
        <label htmlFor="favColor">Your Favorite Color</label>
        <br />
        <select
          name="favColor"
          onChange={handleChange}
          value={formData.favColor}
          id="favColor"
        >
          <option value=""> -- Select Color -- </option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
          <option value="grey">Grey</option>
          <option value="yellow">Yellow</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
