import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/reset.css";
import "./assets/styles.css";

import Header from "./components/Header.js/Header";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

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
                <Route
                    path="/"
                    element={<SignIn setLoggedIn={setLoggedIn} />}
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
