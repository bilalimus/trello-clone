import React from "react";
import styled from "styled-components";
import ListTitle from "./ListTitle";
import CardText from "./CardText";
import ButtonAdd from "./ButtonAdd";


const Lists = ({title, card, index, id}) => {
  
  return (
    <ListsCont>
      <ListTitle title={title} index={index} id={id}/>
      {card.map((el) => {
        return (
          <CardText index={index} id={el.id} key={el.id} text={el.text}/>
        )
      })}
      <ButtonAdd index={index} id={id}/>
    </ListsCont>
  );
};

export default Lists;

const ListsCont = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
  margin: 0 20px;
  gap: 5px
`;
