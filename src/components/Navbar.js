import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import logoEMDR from "../assets/svg/logoEtienne.svg"
import iconAccueil from "../assets/svg/accueil.svg"
import iconQuoi from "../assets/svg/emdr2.svg"
import iconComment from "../assets/svg/commentmarche.svg"
import iconClinic from "../assets/svg/clinic.svg"
import iconFaq from "../assets/svg/faq.svg"
import iconDico from "../assets/svg/dico.svg"
import iconContact from "../assets/svg/contact.svg"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // un tableau d'objets qui contient les liens et les sous-liens de la navbar
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
                    "name": "Comment guérir un traumatisme ?",
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
        {
            "name": "Dico EMDR",
            "url": "/dico",
            "icon": iconDico
        },
        {
            "name": "Contact",
            "url": "/contact",
            "icon": iconContact
        },
    ]


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <nav className="flex h-[90px] w-full justify-evenly items-center shadow-md bg-white">
            <img className="pt-5 pl-2 xl:h-32" src={logoEMDR}
                 alt="Étienne DUMÉNIL psychologue spécialiste EMDR à Paris et Pontoise"/>
            <div className="flex w-full justify-center">
                {links.map((link, index) => (
                    <Menu as="div" className="relative inline-block text-left font-classic" key={index}>
                        {link.sublinks
                            ? <Menu.Button as={"button"}
                                className={`text-bleu inline-flex w-full justify-center items-center rounded-md bg-white px-2 2xl:px-3 py-2 2xl:text-lg text-sm font-semibold  hover:bg-gray-50 focus:outline-none`}>
                                <img className="h-[20px] w-auto pr-2" src={link.icon} alt={link.name}/>
                                {link.name}
                                <ChevronDownIcon className={`-mr-1 ml-2 h-5 w-5`}
                                                 aria-hidden="true"/>
                            </Menu.Button>

                            : <NavLink to={link.url}>
                                <div
                                    className={`text-bleu inline-flex w-full justify-center items-center rounded-md bg-white px-2 2xl:px-3 py-2 2xl:text-lg text-sm font-semibold hover:bg-gray-50 focus:outline-none`}>
                                    <img className="h-[20px] w-auto pr-2" src={link.icon} alt={link.name}/>
                                    {link.name}
                                </div></NavLink>
                        }


                        {link.sublinks
                            ? (
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                                        <div className="py-1 z-30">
                                            {link.sublinks && link.sublinks.map((sublink, index) => (
                                                <Menu.Item key={index}>
                                                    {({active}) => (
                                                        <NavLink
                                                            to={sublink.url}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900 z-30' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm z-30'
                                                            )}
                                                        >
                                                            {sublink.name}
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            )
                            : null}
                    </Menu>
                ))}
            </div>
            <div className="2xl:w-48 xl:w-40 mr-3 2xl:mr-10">
                <a className="" href="tel:[+33]633544582">
                    <button
                        className="w-full text-base xl:text-sm flex items-center justify-center mx-auto bg-orange text-white font-classic font-bold px-2 py-2 rounded-2xl transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300">
                        <span className="ml-2 md:block hidden">06 33 54 45 82</span>
                    </button>
                </a>
            </div>

        </nav>
    );
};

export default Navbar;