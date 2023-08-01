import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections";
import Account from "./pages/Account/Account";
import Order from "./components/UserAccount/Order";
import Wishlist from "./components/UserAccount/WishList";
import Address from "./components/UserAccount/Address";
import EditAddress from "./components/UserAccount/EditAddress";
import Form from "./pages/Form/Form";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/my-account/orders" element={<Order />} />
        <Route path="/my-account/wishlist" element={<Wishlist />} />
        <Route path="/my-account/address" element={<Address />} />
        <Route path="/my-account/edit-account" element={<EditAddress />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
