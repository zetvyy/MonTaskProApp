import React from "react";

export const FormLoginRegis = ({ handleChange }) => {
  return (
    <form>
      <input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(data) => handleChange(data)}
      />
      <br />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(data) => handleChange(data)}
      />
      <br />
    </form>
  );
};
