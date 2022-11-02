import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/reset.css";
import "./assets/styles.css";

import Header from "./components/Header.js/Header";
import SignIn from "./pages/SignIn/SignIn";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
