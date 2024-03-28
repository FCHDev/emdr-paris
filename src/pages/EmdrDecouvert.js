import React from 'react';
import imageDecouvert from "../assets/images/emdrtableau.jpg"
import francineShapiro from "../assets/images/francine.jpg"
import cerclePsy from "../assets/images/cerclePsy.jpg"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const EmdrDecouvert = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10  xl:mb-[20vh]">
            <ScrollToTopOnMount />

            <div className="flex h-[300px] items-center font-classic overflow-hidden bg-orangePale relative -z-10">
                <div className="absolute flex top-0 bg-bleu w-full h-full bg-opacity-75 text-white">
                    <h1 className="w-3/4 text-4xl lg:text-5xl font-title font-semibold pl-10 pt-20">
                        Comment l’EMDR a-t-il été découvert ?
                    </h1>
                </div>
                <img
                    className="w-full min-w-[320px] h-full lg:h-auto object-cover"
                    src={imageDecouvert}
                    alt="femme à lunettes"/>
            </div>

            {/*<div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">*/}
            {/*    <img className="absolute -top-[200px] w-full object-cover" src={imageDecouvert} alt="accueil"/>*/}
            {/*    <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-70">*/}
            {/*        <h1 className="text-4xl lg:text-5xl font-title font-semibold lg:pl-32 pl-10 pt-20">*/}
            {/*            Comment l’EMDR a-t-il été découvert ?*/}
            {/*        </h1>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="container mx-auto flex flex-wrap justify-center lg:justify-start lg:items-start font-classic animate-appear mt-10">
                <img className="max-h-[150px] lg:max-h-[200px] w-auto rounded-full lg:mt-5 lg:mr-5" src={francineShapiro}
                     alt="Francine Shapiro, emdr"/>
                <div className="px-5 flex flex-col justify-center">
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        Bref historique de la thérapie EMDR
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        <a className="underline" href="https://www.emdr-france.org/lemdr-cest-quoi/la-therapie-emdr/"
                           rel="noopener noreferrer" target="_blank">
                            https://www.emdr-france.org/lemdr-cest-quoi/la-therapie-emdr/
                        </a>
                    </p>

                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        L’EMDR a un nom et visage : celui d’une américaine nommée <a className="underline"
                                                                                     href="https://fr.wikipedia.org/wiki/Francine_Shapiro"
                                                                                     rel="noopener noreferrer"
                                                                                     target="_blank">
                        Francine Shapiro
                    </a>. C’est cette
                        psychologue qui, en 1987, a inventé « par hasard dans un parc » ce qui constituera plus tard la
                        thérapie EMDR. Elle fit l’expérience que des mouvements oculaires rapides permettaient à des
                        pensées et affects désagréables de devenir mieux supportables (notons qu’elle était à cette
                        époque en rémition de cancer).
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Pugnace, elle se lança dans une thèse pour confirmer ses intuitions. Puis de la théorie à la
                        pratique elle expérimenta ses avancées sur des anciens soldats du Vietnam souffrant de
                        traumatismes de guerre (ce qui montre bien que l’on peut soigner des traumatismes des années
                        après).
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Aujourd’hui, plus de <span className="font-semibold">2 millions de patients</span> à travers le
                        monde ont suivis un traitement en
                        EMDR. <br/>
                        La thérapie EMDR est la forme de thérapie qui a fait l’objet du plus grand nombre de recherches
                        scientifiques internationales ces dernières années.</p>
                    <p className="font-semibold pb-3 sm:text-lg 2xl:text-xl">
                        Elle est reconnue dans le traitement du
                        trouble de stress post traumatique par l’OMS (2013), l’INSERM (2004 et 2015) et la Haute
                        Autorité de la Santé (2007).
                    </p>
                    <a className="underline w-full flex flex-col items-center my-10"
                       href="https://www.scienceshumaines.com/comment-j-ai-decouvert-l-emdr-entretien-avec-francine-shapiro_fr_33648.html"
                       rel="noopener noreferrer" target="_blank">
                        <img className="h-[400px]" src={cerclePsy} alt="couverture Cercle Psy de décembre 2014"/>
                        <p className="pb-3 sm:text-lg 2xl:text-xl pt-5">
                            Sciences Humaines : Comment j'ai découvert l'EMDR, entretien avec Francine Shapiro
                        </p>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default EmdrDecouvert;