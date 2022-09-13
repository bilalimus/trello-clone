import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from 'react-textarea-autosize';
import { dataActions } from "../../store/dataSlice";


const CardText = ({text, index, id}) => {
  console.log(id, 'id in CardText');
  const [textInput, setTextInput] = useState('')
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setTextInput(e.target.value)

  }

  const blurHandler = () => {
    dispatch(dataActions.setCard({textInput}))
  }

  const deleteClickHandler = () => {
    dispatch(dataActions.deleteCard({index, id}))
  }

  return (
    <>
      <TextareaAutosize onBlur={blurHandler} onChange={changeHandler} style={{paddingBottom: '20px'}} value={text}/>
      <span style={{cursor: "pointer"}} onClick={deleteClickHandler}>X</span>
    </>
  );
};

export default CardText;
