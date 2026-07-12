import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/contact";
import CartPage from "./components/CartPage";
import Error from "./components/Error";
import Footer from "./components/Footer";

const AppLayout = () => {
    const location = useLocation();
    const hideLayout = location.pathname === "/error";

    return (
        <div>
            {!hideLayout && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {!hideLayout && <Footer />}
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
};

export default App;