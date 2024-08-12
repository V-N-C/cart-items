import "./App.css";
import CartPage from "./CartPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ListingItem from "./ListingItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/:Listingid" element={<ListingItem />} />
        <Route path="*" element={<h1>404 Page not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;