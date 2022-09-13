import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { dataActions } from "../store/dataSlice";
import { uiActions } from "../store/uiSlice";

const AddList = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const addListHandler = () => {
    dispatch(dataActions.setList({ id: Math.random(), title: "", card: [] }));
    dispatch(uiActions.toggleAddList({ set: false }));
    dispatch(uiActions.toggleAddCard({ set: false }));
  };

  return (
    <div>
      <button onClick={addListHandler}>
        {!data.length > 0 ? "+ Add a List" : "+ Add another list"}
      </button>
    </div>
  );
};

export default AddList;
