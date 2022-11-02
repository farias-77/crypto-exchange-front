import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/reset.css";
import "./assets/styles.css";

import Header from "./components/Header.js/Header";
import SignIn from "./pages/SignIn/SignIn";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(() => checkLocalStorage());

    function checkLocalStorage() {
        if (window.localStorage.getItem("userData")) {
            return true;
        }
        return false;
    }

    return (
        <BrowserRouter>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
