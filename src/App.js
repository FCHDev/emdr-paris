import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopNavBanner from "./components/TopNavBanner";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import React from "react";
import Faq from "./pages/Faq";
import EmdrClinique from "./pages/EmdrClinique";

function App() {
    return (
        <BrowserRouter>
            <div className="absolute w-full">
                <TopNavBanner/>
                <Navbar/>
            </div>
            <div className="mx-auto">
                <Routes>
                    <Route exact path="/" element={<Accueil/>}/>
                    <Route path="/indication-clinique" element={<EmdrClinique/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
