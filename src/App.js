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
import ChoosePlan from "./Components/ChoosPlan/ChoosePlan";
import BestWishers from "./Components/BestWishers/BestWishers";
import Footer from "./Components/Footer/Footer";
import Downloaded from "./Components/Downloaded/Downloaded";

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
      <ChoosePlan />
      <BestWishers />
      <Downloaded />
      <Footer />
    </div>
  );
}

export default App;
