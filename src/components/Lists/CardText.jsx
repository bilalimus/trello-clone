import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from 'react-textarea-autosize';
import { dataActions } from "../../store/dataSlice";
import styled from "styled-components";
import delcard from "../../assets/delcard.png";


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
    <CardDiv>
      <TextareaAutosize onBlur={blurHandler} onChange={changeHandler} style={{paddingBottom: '20px'}} value={text}/>
      <img src={delcard} alt="delcard" width={20} onClick={deleteClickHandler}/>
      {/* {/* <span style={{cursor: "pointer"}} onClick={deleteClickHandler}>X</span> */}
    </CardDiv>
  );
};

export default CardText;

const CardDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`
