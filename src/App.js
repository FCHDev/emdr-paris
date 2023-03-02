import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopNavBanner from "./components/TopNavBanner";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import React from "react";
import Faq from "./pages/Faq";
import EmdrClinique from "./pages/EmdrClinique";
import BougerLesYeux from "./pages/BougerLesYeux";
import EmdrEfficace from "./pages/EmdrEfficace";
import EmdrDecouvert from "./pages/EmdrDecouvert";
import EmdrPhasesProtocol from "./pages/EmdrPhasesProtocol";

function App() {
    return (
        <BrowserRouter>
            <div className="fixed w-full top-0">
                <TopNavBanner/>
                <Navbar/>
            </div>
            <div className="mx-auto">
                <Routes>
                    <Route exact path="/" element={<Accueil/>}/>
                    <Route path="/bougerlesyeux" element={<BougerLesYeux/>}/>
                    <Route path="/emdrefficace" element={<EmdrEfficace/>}/>
                    <Route path="/emdrdecouvert" element={<EmdrDecouvert/>}/>
                    <Route path="/huitphases" element={<EmdrPhasesProtocol/>}/>
                    <Route path="/indication-clinique" element={<EmdrClinique/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Accueil />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
