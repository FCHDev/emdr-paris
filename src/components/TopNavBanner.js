import React from 'react';

const TopNavBanner = () => {
    return (
        <div className="w-full h-[35px] bg-vert text-white flex justify-between items-center pl-40 pr-5">
            <div className="font-classic text-sm font-bold">Psychologue clinicien, EMDR, psychanalyste</div>
            <div className="font-classic text-sm">
                <a href={"https://maps.app.goo.gl/1QoHdkCA5WJk8swbA"} target="_blank" rel="noreferrer">Pontoise-gare (Val d’Oise 95)</a> |
                <a href={"https://maps.app.goo.gl/rHSJbLfRRNsSLrxX8"} target="_blank" rel="noreferrer"> Paris 9 (Madeleine / St Lazare / Opéra)</a>
            </div>
        </div>
    );
};

export default TopNavBanner;