import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import RestaurantMenu_Zomato from "./components/menu_zomato";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path = "/menu" element = {<RestaurantMenu_Zomato />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
