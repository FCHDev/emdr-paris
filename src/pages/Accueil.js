import React from 'react';
import paysage from "../assets/images/dunemerdunord.jpg";

const Accueil = () => {
    return (
        <div className="w-full flex justify-center mx-auto pt-[125px]">
            <img className="object-cover overflow-y-hidden" src={paysage} alt="paysage"/>
        </div>
    );
};

export default Accueil;