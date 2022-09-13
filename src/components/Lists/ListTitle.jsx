import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/dataSlice";
import trash from "../../assets/trash.png"
import styled from "styled-components";
import { uiActions } from "../../store/uiSlice";

const ListTitle = ({ index, id }) => {
  const [inputText, setInputText] = useState("");
  const {data} = useSelector(state => state.data)
  console.log(data, 'in listTitle');
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setInputText(e.target.value)
  };

  const blurHandler = () => {
    dispatch(dataActions.setTitle({index, title: inputText}))
  }

  const deleteClickHandler = () => {
    if(data.length == 1){
      dispatch(uiActions.toggleAddList({set: false}));
    }
    dispatch(dataActions.deleteList({index, id}))
    
  }

  return (
    <TitleDiv>
      <input onBlur={blurHandler} onChange={changeHandler} type="text" />
      <img src={trash} alt="trash" width={20} onClick={deleteClickHandler}/>
      {/* <span onClick={deleteClickHandler} style={{cursor: "pointer"}}>X</span> */}
    </TitleDiv>
  );
};

export default ListTitle;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

