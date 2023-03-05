import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovie from "./component/AddMovie";
import EditMovie from "./component/EditMovie";
import Header from "./component/header/Header";
import ListMovies from "./component/ListMovies";
import Main from "./component/Main/Main";
import Products from "./component/Products/Products";
import RealtimeList from "./component/RealtimeList";
import Slider from "./component/Slider/Slider";
import Virtual from "./component/Virtual/Virtual";
import BookLayout from "./Pages/BookLayout";
import BookList from "./Pages/BookList";
import BookRouters from "./Pages/BookRouters";
import Books from "./Pages/Books";
import Home from "./Pages/Home";
import NewBook from "./Pages/NewBook";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <>
      <RealtimeList />
      <AddMovie />
      <EditMovie />
      {/* <Routes>
        <Route path="/books" element={<h1>I am other route</h1>} />
      </Routes> */}
      {/* <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/books"}>BooksList</Link>
          </li>
        </ul>
      </nav> */}
      {/* <BookLayout /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRouters />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
    // <div className="App">
    //   <Header />
    //   <Main />
    //   <Slider />
    //   <Virtual />
    //   <Products />
    // </div>
  );
};
export default App;
