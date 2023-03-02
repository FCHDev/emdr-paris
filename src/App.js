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
import EmdrMethode from "./pages/EmdrMethode";
import EmdrTrauma from "./pages/EmdrTrauma";
import Dico from "./pages/Dico";
import Footer from "./components/Footer";

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
                    <Route exact path="/bougerlesyeux" element={<BougerLesYeux/>}/>
                    <Route exact path="/emdrefficace" element={<EmdrEfficace/>}/>
                    <Route exact path="/emdrdecouvert" element={<EmdrDecouvert/>}/>
                    <Route exact path="/huitphases" element={<EmdrPhasesProtocol/>}/>
                    <Route exact path="/methode" element={<EmdrMethode/>}/>
                    <Route exact path="/traumatisme" element={<EmdrTrauma/>}/>
                    <Route exact path="/indication-clinique" element={<EmdrClinique/>}/>
                    <Route exact path="/faq" element={<Faq/>}/>
                    <Route exact path="/dico" element={<Dico/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Accueil />} />
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
