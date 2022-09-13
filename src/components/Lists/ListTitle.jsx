import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";

const ListTitle = ({ index, id }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setInputText(e.target.value)
  };

  const blurHandler = () => {
    dispatch(dataActions.setTitle({index, title: inputText}))
  }

  const deleteClickHandler = () => {
    dispatch(dataActions.deleteList({index, id}))
  }

  return (
    <div style={{display: "flex"}}>
      <input onBlur={blurHandler} onChange={changeHandler} type="text" />
      <span onClick={deleteClickHandler} style={{cursor: "pointer"}}>X</span>
    </div>
  );
};

export default ListTitle;
