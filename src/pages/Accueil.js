import React from 'react';
import imageAccueil from '../assets/images/randonneurcouple.jpeg';
import soleil from "../assets/images/soleillacgele.jpg";
import sherpa from "../assets/images/sherpa.jpg";
import SVGProtocol from "../assets/svg/checklist.svg";
import SVGTherapy from "../assets/svg/therapy.svg";
import SVGStudies from "../assets/svg/open-book.svg";
import SVGProximity from "../assets/svg/proximity.svg";
import {NavLink} from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Accueil = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10">
            <ScrollToTopOnMount />
            <div className="w-full mx-auto relative -z-10">
                <img className="h-[300px] w-full object-cover" src={imageAccueil} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-40">
                    <div className="flex flex-col lg:flex-row w-full h-full lg:h-3/4 py-5 font-classic italic text-base lg:text-lg">
                        <span className="flex w-2/3 lg:w-1/4 pl-5 lg:pl-20 font-title items-top lg:pt-5">
                        "La nuit n’est jamais complète.<br/>
                        Il y a toujours puisque je le dis,<br/>
                        Puisque je l’affirme,<br/>
                        Au bout du chagrin,<br/>
                        une fenêtre ouverte,<br/>
                        une fenêtre éclairée.<br/>
                        Il y a toujours un rêve qui veille,</span>
                        <span className="hidden lg:flex w-1/3 lg:w-1/4 lg:pl-8 font-title items-top pt-5">
                        Désir à combler,<br/>
                        faim à satisfaire,<br/>
                        un cœur généreux,<br/>
                        une main tendue,<br/>
                        une main ouverte,<br/>
                        des yeux attentifs,<br/>
                        une vie : la vie à se partager."</span>
                        <span className="lg:hidden pl-5">[...]</span>
                        <p className="lg:hidden italic font-title text-sm pl-5 pt-3">Paul Éluard, extrait du recueil <span className="underline">Derniers poèmes d’amour</span> (écrit en 1951)</p>
                    </div>
                    <blockquote className="hidden lg:block lg:pl-16">
                        <p className="italic font-title text-sm lg:pt-10">Paul Éluard, extrait du recueil <span className="underline">Derniers poèmes d’amour</span> (écrit en 1951)</p>
                    </blockquote>

                </div>
            </div>

            <div className="container mx-auto mt-5 lg:mt-10 lg:p-3 font-classic rounded-xl animate-appear">
                <h2 className="text-3xl text-bleu font-title font-semibold lg:pb-8 text-center">Pourquoi j’aime être
                    thérapeute EMDR ?</h2>
                <div className="flex w-full my-5 h-max flex-col lg:flex-row items-center">
                    <div
                        className="lg:w-1/2 flex items-center justify-center h-80 lg:h-56 border my-5 shadow-md rounded-xl bg-white lg:mr-4">
                        <div className="w-1/5 flex items-center justify-center bg-vert h-full rounded-l-xl">
                            <img src={SVGTherapy} alt="checklist" className="h-[40px] lg:h-[90px]"/>
                        </div>
                        <div className="w-4/5 px-3 flex flex-col justify-center h-full lg:pt-5">
                            <h2 className="text-lg lg:text-xl font-bold pb-3 text-vert">
                                Thérapie complète et efficace
                            </h2>
                            <p className="text-base lg:text-base">...qui <span className="font-bold">aide vraiment les personnes</span>. Malgré mon scepticisme de départ – ce « truc » de bouger les yeux
                                c’est bizarre quand même –
                                je n’ai pû que m’incliner devant la solidité des effets cliniques positifs pour les
                                patients.</p>
                        </div>
                    </div>
                    <div
                        className="lg:w-1/2 flex items-center justify-center h-80 lg:h-56 border my-5 shadow-md rounded-xl bg-white">
                        <div className="w-1/5 flex items-center justify-center bg-vert h-full rounded-l-xl">
                            <img src={SVGProtocol} alt="checklist" className="h-[40px] lg:h-[90px]"/>
                        </div>
                        <div className="w-4/5 px-3 flex flex-col justify-center h-full lg:pt-5">
                            <h2 className="text-lg lg:text-xl font-bold pb-3 text-vert">
                                Protocole solide
                            </h2>
                            <p className="text-base lg:text-base">Les avancées thérapeutiques sont pour
                                ainsi dire <span className="font-bold">mesurables…</span> C’est comme pour un pilote de rallye : s’il n’a pas d’abord
                                confiance
                                dans sa
                                voiture, il ne pourra pas être performant dans sa conduite…</p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full my-5 h-max flex-col lg:flex-row items-center">
                    <div
                        className="lg:w-1/2 flex items-center justify-center h-80 lg:h-56 border mb-5 lg:my-5 shadow-md rounded-xl bg-white lg:mr-4">
                        <div className="w-1/5 flex items-center justify-center bg-vertflash h-full rounded-l-xl">
                            <img src={SVGStudies} alt="checklist" className="h-[40px] lg:h-[90px]"/>
                        </div>
                        <div className="w-4/5 px-3 flex flex-col justify-center h-full lg:pt-5">
                            <h2 className="text-lg lg:text-xl font-bold pb-3 text-vertflash">
                                Études & recherches
                            </h2>
                            <p className="text-base lg:text-base">L’EMDR est la forme de thérapie qui, ses dernières années, a
                                concentré <span className="font-bold">le plus d’études et de recherches.</span> <br/>Faire partie de la « communauté EMDR »
                                c’est d’une part, ne pas être seule et d’autre part, avoir le sentiment de participer au
                                sens de l’histoire…</p>
                        </div>
                    </div>
                    <div
                        className="lg:w-1/2 flex items-center justify-center h-80 lg:h-56 border my-5 shadow-md rounded-xl bg-white lg:mr-4">
                        <div className="w-1/5 flex items-center justify-center bg-vertflash h-full rounded-l-xl">
                            <img src={SVGProximity} alt="checklist" className="h-[40px] lg:h-[90px]"/>
                        </div>
                        <div className="w-4/5 px-3 flex flex-col justify-center h-full lg:pt-5">
                            <h2 className="text-lg lg:text-xl font-bold pb-3 text-vertflash h-[40px]">
                                Proximité avec le patient
                            </h2>
                            <p className="text-base lg:text-base">Être proche du patient (psychiquement et physiquement pendant les
                                désensibilisations). <span className="font-bold">Lui faire confiance, être dans l’espérance.</span> <br/>
                                En EMDR il n’est pas rare de prononcer des phrases comme « je sais que c’est dur. Vous
                                faîtes un super boulot. Vous êtes capable de traverser tout cela ».</p>
                        </div>
                    </div>
                </div>

                    <span className="px-3 font-semibold xl:text-2xl text-bleu">Dire ce qui fait souffrir</span>
                <p className="pb-3 px-3 sm:text-lg 2xl:text-xl">
                    J’utilise régulièrement 2 métaphores pour rendre concret mon propos : <span
                    className="font-semibold text-vert">le soleil et le lac gelé</span> ou
                    alors <span className="font-semibold text-vert">le thérapeute-sherpa</span> :
                </p>
                <div className="px-3 py-1 rounded-xl mb-5 backdrop-blur-xl bg-white bg-opacity-50">
                    <div className="flex-col-reverse flex lg:flex-row items-center py-1">
                        <p className="lg:pr-5 text-base lg:text-lg 2xl:text-xl lg:pb-0 pb-3">
                            <span className="font-semibold text-vert">"Le soleil et le lac gelé" </span> : Le mal-être
                            psychologique s’apparente a un lac gelé. Tout a l’air mort, triste et figé à l’extérieur.
                            Mais
                            faîtes un trou dans la glace et vous pourrez constater que les poissons - eux – sont bien
                            vivants.
                            Le thérapeute est là pour être le soleil. Progressivement la neige fond et tout change alors
                            que
                            fondamentalement c’est toujours le même endroit…C’est d’ailleurs une phares que les patients
                            utilisent en fin de traitement : c’est bizarre rien n’a changé mais tout à changer. A moi
                            d’ajouter
                            : « et vous allez mieux » ? Et au patient de répondre dans un sourire : « oui je vais mieux
                            ! ».
                        </p>
                        <img src={soleil} className="lg:h-[180px] rounded-xl pb-3 lg:pb-0"
                             alt="soleil au-dessus d'un lac gelé avec un enfant qui joue"/>
                    </div>
                    <div className="flex-col flex lg:flex-row items-center py-1">
                        <img src={sherpa} className="lg:h-[180px] rounded-xl pb-3 lg:pb-0"
                             alt="sherpas qui portent des sacs en haute montagne"/>
                        <p className="lg:pl-5 sm:text-lg 2xl:text-xl">
                            <span className="font-semibold text-vert">"Le thérapeute-sherpa"</span> : résoudre ses
                            traumas
                            c’est
                            comme une expédition en haute-montagne. D’une part il faut y être préparé et d’autre part il
                            faut
                            être accompagné de quelqu’un qui connaît la montagne. Le sherpa ne fait pas à la place de
                            l’alpiniste. <br/>Simplement il a l’expérience et le recul nécessaire pour pouvoir guider
                            l’ascension. En EMDR c’est vous qui allez tenter l’exploit… et je serai là à vos côtés pour
                            vous
                            guider.
                        </p>
                    </div>
                </div>
                <p className="pb-3 px-3 sm:text-lg 2xl:text-xl">
                    <span className="font-semibold xl:text-2xl text-bleu">Augmenter leurs ressources</span> <br/>
                    Il est communément admis qu’à un psy « on vient dire ses problèmes ». On vient parler de ce qui ne
                    va pas. <br/>Je me rappelle avoir été très étonné lorsque en formation EMDR le formateur a commencé
                    par
                    me demander : <span className='italic'>« quelles étaient les ressources de mon patient »</span>.
                    Surpris, je tentai d’exposer la
                    problématique du patient, ses symptômes etc… Têtu le formateur enchaîna : <span className='italic'>« donc votre patient est
                    perturbé : qu’avez-vous mis en place pour le stabiliser émotionnellement ? »</span>.
                </p>
                <p className="pb-3 px-3 sm:text-lg 2xl:text-xl">
                    Ce fut une grande leçon clinique pour moi : si la thérapie c’est pouvoir enfin dire ce qui ne va
                    pas, c’est tout autant améliorer et agrandir ce qui fonctionne déjà…
                </p>
                <p className="bg-vertflashPale p-3 rounded-xl sm:text-lg 2xl:text-xl my-3">
                    <span className="font-semibold text-xl">Exemple</span> <br/>Accrochez-vous : un champion de
                    Tennis joue son premier match à Roland-Garros dans une semaine… Il possède un super coup droit mais
                    un mauvais revers. A votre avis, quel coup son entraineur va-t-il lui faire travailler pendant
                    sa semaine de préparation ? 90% des personnes répondent : son revers. Comprenons : travaillons ce
                    qui ne va pas. Et pourtant c’est bien le coup droit que le joueur doit travailler. <br/>En effet, en
                    une semaine le joueur ne va pas magiquement améliorer son coup faible. C’est un travail de longue
                    haleine à faire pendant la période foncière quand le joueur a du temps et ne joue pas en tournoi.
                    Pire le joueur peut totalement perdre confiance en lui, focaliser sur le fait que son revers est nul
                    etc…Alors que travailler son coup droit va lui faire prendre confiance en lui. <br/>D’ailleurs il
                    s’agira au niveau tactique pour le joueur de se retrouver dans des schémas de jeu où il a le plus de
                    coup droit possible à jouer…Parce que c’est là où il est le plus efficace (travail d’ouverture de
                    zone et de décalage coup droit). Bien entendu que le revers sera à travailler mais pas tout de
                    suite.
                </p>
                <p className="p-3 sm:text-lg 2xl:text-xl">
                    <span className="font-semibold xl:text-2xl text-bleu">EMDR et psychanalyse : complémentaire ou opposés</span><br/>
                    En tant que psychanalyste je peux m’y retrouver. L’EMDR c’est comme une grande maison partagée : il
                    y a un règlement intérieur que l’on se doit de suivre, après chacun est libre et choisit la chambre
                    qu’il préfère.
                </p>
                <p className="pb-3 px-3 sm:text-lg 2xl:text-xl">
                    J’ai accès à des associations libres d’une grande clarté. Pendant les phases de désensibilisations
                    il est demandé d’intervenir le moins possible, de ne pas influencer, de laisser faire.
                </p>
                <p className="pb-3 px-3 sm:text-lg 2xl:text-xl">
                    Cela rejoint une intuition clinique qui se vérifie : plus on est près du corps, au niveau des
                    affects et mieux ça marche…C’est inscrit dans l’ADN des êtres humains : nous avons besoin de voir
                    pour croire. Donc pour qu’une croyance positive s’installe il faut d’abord faire ressentir dans le
                    corps. <br/>Et ce n'est pas toujours facile…
                </p>
            </div>

            <div className="px-3 py-5 font-classic bg-[#F6DACB]">
                <p className="container mx-auto pb-3 lg:text-lg">
                    Vous trouverez sur ce site différentes informations et cas cliniques concernant l’approche de la
                    thérapie EMDR. La rédaction du contenu n’engage que son auteur.
                    L’objectif de ce site n’est certainement pas de constituer une boîte à outils pour que vous puissiez
                    pratiquer l’EMDR tout seul chez vous <NavLink to="/faq" className="font-semibold">(cf la FAQ - Peut-on pratiquer seul ?)</NavLink>. S’il existe un savoir sur la psychologie (il
                    existe bien des facs de psycho 😀) rien ne remplace l’expérience de la thérapie. Une thérapie c’est
                    la rencontre entre un praticien dûment formé <NavLink to="/faq" className="font-semibold">(cf la FAQ - Qui peut pratiquer ?)</NavLink> et un patient
                    qui a envie de guérir… et qui possède en lui les ressources pour guérir.
                </p>
                <p className="container mx-auto lg:text-lg">
                    Je m’appelle <span className="font-semibold text-bleu">Étienne Duménil</span> et je suis psychologue
                    clinicien/psychanalyste et thérapeute EMDR.
                    J’exerce à Paris 9ème (Madeleine/Saint-Lazare/Opéra) et à Pontoise dans le 95. Vous trouvez toutes
                    les informations nécessaires sur ma pratique sur mon autre site internet :
                    <br/> <a className="font-semibold pl-1 text-lg text-vert" href="https://www.psy95.paris"
                             rel="noopener noreferrer"
                             target="_blank">
                    www.psy95.paris
                </a>
                </p>
            </div>

        </div>
    );
};

export default Accueil;