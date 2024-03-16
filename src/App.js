/** @format */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";
import AdvertPage from "./pages/advertPage/advertPage.js";
import AddAdvertPage from "./pages/addAdvertPage/addAdvertPage.js";
import NotFound from "./pages/notFound.js";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/ilanlar" />} />
                <Route path="/ilanlar" element={<HomePage />} />
                <Route path="/ilan" element={<AdvertPage />} />
                <Route path="/ilan-ver" element={<AddAdvertPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
