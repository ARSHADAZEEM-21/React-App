import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;