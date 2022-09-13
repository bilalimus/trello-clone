import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/dataSlice";
import { uiActions } from "../../store/uiSlice";

const ButtonAdd = ({ index, id }) => {
  const { addList, addCard } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const buttonAddClickHandler = () => {
    if (addCard) {
      dispatch(dataActions.setCard({ index }));
    }
    dispatch(uiActions.toggleAddCard({set: true}));
    dispatch(uiActions.toggleAddList({set: true}));
  };

  return (
    <div>
      <button onClick={buttonAddClickHandler}>
        {!addList ? "Add list" : "Add card"}
      </button>
    </div>
  );
};

export default ButtonAdd;
