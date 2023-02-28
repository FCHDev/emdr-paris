import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import logoEMDR from "../assets/svg/logoEtienne.svg"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // un tableau d'objets qui contient les liens et les sous-liens de la navbar
    const links = [
        {
            "name": "Accueil",
            "url": "/",
        },
        {
            "name": "Qu'est-ce que l'EMDR ?",
            "url": "/whatisemdr",
            "sublinks": [
                {
                    "name": "Juste bouger les yeux ?",
                    "url": "/bougerlesyeux",
                },
                {
                    "name": "Comment l’EMDR est-il efficace ?",
                    "url": "/emdrefficace",
                },
                {
                    "name": "Comment l’EMDR a t-il été découvert ? ",
                    "url": "/emdrdecouvert",
                },
            ]
        },
        {
            "name": "EMDR, comment ça marche ?",
            "url": "/howemdr",
            "sublinks": [
                {
                    "name": "Les 8 phases du protocole",
                    "url": "/huitphases",
                },
                {
                    "name": "EMDR : pourquoi ça marche ?",
                    "url": "/whyemdr",
                },
                {
                    "name": "Comment guérir un traumatisme ?",
                    "url": "/guerirtraumatisme",
                },
            ]
        },
        {
            "name": "EMDR : indication-clinique",
            "url": "/indication-clinique",
        },
        {
            "name": "FAQ",
            "url": "/faq",
        },
        {
            "name": "Dico EMDR",
            "url": "/dico",
        },
        {
            "name": "Contact",
            "url": "/contact",
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <nav className="flex h-[90px] w-full justify-evenly items-center shadow-md bg-white">
            <img className="pt-5 pl-4 z-20" src={logoEMDR}
                 alt="Étienne DUMÉNIL psychologue spécialiste EMDR à Paris et Pontoise"/>
            <div className="flex w-full justify-evenly">
                {links.map((link, index) => (
                    <Menu as="div" className="relative inline-block text-left font-classic" key={index}>
                        {link.sublinks
                            ? <Menu.Button
                                className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 2xl:text-xl text-base font-medium text-bleu hover:bg-gray-50 focus:outline-none">
                                {link.name}
                                <ChevronDownIcon className={`-mr-1 ml-2 h-5 w-5`}
                                                 aria-hidden="true"/>
                            </Menu.Button>

                            : <NavLink to={link.url}>
                                <div
                                    className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 2xl:text-xl text-base font-medium text-bleu hover:bg-gray-50 focus:outline-none">
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
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {link.sublinks && link.sublinks.map((sublink, index) => (
                                                <Menu.Item key={index}>
                                                    {({active}) => (
                                                        <a
                                                            href={sublink.url}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {sublink.name}
                                                        </a>
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
        </nav>
    );
};

export default Navbar;