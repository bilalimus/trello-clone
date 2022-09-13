import Lists from "./Lists";
import AddList from "../AddList";
import { useSelector } from "react-redux";

const Main = () => {
  const { data } = useSelector((state) => state.data);
  const { addList } = useSelector((state) => state.ui);

  
  return (
    <>
      {data.map((el, index) => {
        return (
          <Lists
            key={el.id}
            id={el.id}
            title={el.title}
            card={el.card}
            index={index}
          />
        );
      })}
      {data.length < 1 && <AddList />}
      {addList &&  <AddList />}
    </>
  );
};

export default Main;
