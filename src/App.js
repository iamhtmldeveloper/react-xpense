// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Overview from "./Components/Overview/Overview";
import Always from "./Components/Always/Always";
import Free from "./Components/Free/Free";
import Use from "./Components/Use/Use";
import Products from "./Components/Products/Products";
import Cards from "./Components/Products/Cards";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Overview />
      <Always />
      <Free />
      <Use />
      <Products />
      <Cards />
    </div>
  );
}

export default App;
