import { createSlice } from "@reduxjs/toolkit";

let array = [{
  id: 1,
  title: "test1",
  card: [
    {id: 1,
    text: "SOME TEXT"},
    {id: 2,
    text: "SOME2 text"}
  ]
},
{
  id: 2,
  title: "test2",
  card: [
    {id: 1,
    text: "SOME11 TEXT"},
    {id: 2,
    text: "SOME22 text"}
  ]
},]


const initialState = {
  data: array,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setList(state, action) {
      state.data.push(action.payload)
    },
    setCard(state, action){
      state.data[action.payload.index].card.push({id: Math.random()})
    },
    setTitle(state, action){
      state.data[action.payload.index].title = action.payload.title
    },
    deleteList(state, action) {
      const filterData = state.data.filter((el) => el.id !== action.payload.id)
      state.data = filterData
    },
    deleteCard(state, action){
      console.log(action.payload)
      const filterData = state.data[action.payload.index].card.filter((el) => el.id !== action.payload.id)
      console.log(filterData);
      state.data[action.payload.index].card = filterData
      
    }
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
