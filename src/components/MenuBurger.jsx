import React, { useState } from 'react';
import iconAccueil from "../assets/svg/accueil.svg";
import iconQuoi from "../assets/svg/emdr2.svg";
import iconComment from "../assets/svg/commentmarche.svg";
import iconClinic from "../assets/svg/clinic.svg";
import iconFaq from "../assets/svg/faq.svg";
import iconContact from "../assets/svg/contact.svg";

const MenuBurger = () => {
    // STATES
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Définissez une fonction pour basculer l'état du menu burger
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // CONSTANTES
    const links = [
        {
            "name": "Accueil",
            "url": "/",
            "icon": iconAccueil
        },
        {
            "name": "Qu'est-ce que l'EMDR ?",
            "url": "/whatisemdr",
            "icon": iconQuoi,
            "sublinks": [
                {
                    "name": "Juste bouger les yeux ?",
                    "url": "/bougerlesyeux",
                },
                {
                    "name": "Pourquoi l’EMDR est-il efficace ?",
                    "url": "/emdrefficace",
                },
                {
                    "name": "Comment l’EMDR a t-il été découvert ? ",
                    "url": "/emdrdecouvert",
                },
            ]
        },
        {
            "name": "Comment ça marche ?",
            "url": "/howemdr",
            "icon": iconComment,
            "sublinks": [
                {
                    "name": "Les 8 phases du protocole",
                    "url": "/huitphases",
                },
                {
                    "name": "C'est quoi la méthode EMDR ?",
                    "url": "/methode",
                },
                {
                    "name": "Faut-il revivre son trauma pour s’en débarrasser ?",
                    "url": "/traumatisme",
                },
            ]
        },
        {
            "name": "Est-ce que l'EMDR est fait pour moi ?",
            "url": "/indication-clinique",
            "icon": iconClinic
        },
        {
            "name": "FAQ",
            "url": "/faq",
            "icon": iconFaq
        },
        // {
        //     "name": "Dico EMDR",
        //     "url": "/dico",
        //     "icon": iconDico
        // },
        {
            "name": "Contact",
            "url": "/contact",
            "icon": iconContact
        },
    ]


    return (
        <div className="lg:hidden">
            <button
                className="text-bleu inline-flex items-center justify-center w-full px-4 py-2 2xl:text-lg text-sm font-semibold focus:outline-none"
                onClick={toggleMenu}
            >
                Menu Burger
            </button>
            {/* Afficher le menu burger s'il est ouvert */}
            {isMenuOpen && (
                <div className="bg-white">
                    {/* Bouclez à travers les liens principaux pour afficher les éléments de menu */}
                    {links.map((link, index) => (
                        <div key={index}>
                            {/* Vérifiez s'il y a des sous-liens */}
                            {link.sublinks ? (
                                <div>
                                    {/* Affichez le lien principal */}
                                    <div className="px-4 py-2 text-gray-700">{link.name}</div>
                                    {/* Bouclez à travers les sous-liens pour afficher les éléments de menu */}
                                    {link.sublinks.map((sublink, subIndex) => (
                                        <div key={subIndex} className="pl-8 pr-4 py-2 text-gray-500">
                                            {sublink.name}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Si aucun sous-lien, afficher simplement le lien principal
                                <div className="px-4 py-2 text-gray-700">{link.name}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuBurger;
