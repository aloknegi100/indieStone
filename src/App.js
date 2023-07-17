import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections";
import Form from "./pages/Form/Form";
import Account from "./pages/Account/Account";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/my-account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
