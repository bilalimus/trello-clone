import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <FormWrap>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </FormWrap>
  );
};

export default Form;

const FormWrap = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`