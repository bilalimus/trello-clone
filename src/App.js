import "./App.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>


    // <div className="App">
    //   {data.map((el, index) => {
    //     return (
    //       <Lists
    //         key={el.id}
    //         id={el.id}
    //         title={el.title}
    //         card={el.card}
    //         index={index}
    //       />
    //     );
    //   })}
    //   {!addList && <AddList />}
    // </div>
  );
}

export default App;
