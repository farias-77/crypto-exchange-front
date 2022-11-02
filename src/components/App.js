import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/reset.css";
import "../assets/styles.css";

import SignIn from "./SignIn/SignIn";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
