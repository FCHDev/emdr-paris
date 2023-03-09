import React from 'react';
import imageClinique from "../assets/images/ruralfindete.jpeg";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Faq = () => {

    const FaqItems = [
        {
            "title": "Peut-on pratiquer l'EMDR tout seul ?",
            "content": ["Taper EMDR sur « YouTube » et il vous sera alors proposé plusieurs vidéos pour faire de l’EMDR tout seul. Cela n’est pas sérieux. S’il est possible de vous auto-apaiser avec des stimulations bilatérales alternées (technique que vous enseignera votre praticien EMDR), l’EMDR est une psychothérapie donc, autant que l’outil, c’est le lien de confiance à l’autre qui soigne. De toute façon le cerveau n’est pas bête et comporte ce que je nomme un « fusible de coupe-circuit ». Si les perturbations sont trop fortes votre cerveau choisira le beau moment pour que cela sorte. Et il y a fort à parié que, plus que seul chez vous devant Youtube, il choisisse le lien pour ça : le cabinet du thérapeute EMDR."]
        },
        {
            "title": "Combien de temps dure une thérapie EMDR ?",
            "content": ["De quelques séances pour les traumas simples (plus on est près de l’évènement traumatique plus ça peut partir vite d’où l’importance de consulter le plus rapidement possible). A des années pour des traumas complexes (ne repose pas sur un élément particulier). Ce n’est pas une thérapie magique. Ex : trouble de l’attachement le patient n’a pas un souvenir précis desévènements anciens. Travail sur la restauration de l’enfant intérieur.Mais on obtient en plusieurs années ce que l’on n’obtiendra pas dans une thérapie plus classique uniquement basé sur la parole."]
        },
        {
            "title": "Qui peut pratiquer/Qui a le droit de pratiquer l’EMDR ?",
            "content": ["Professionnel diplômé. Plus que l’outil c’est la personne qui mène la thérapie qui compte. Une personne en qui on peut avoir confiance. Car la confiance est l’inverse de la peur. Inscription sur les annuaires EMDR France (des médecins, des psychologues DE ou des psychothérapeute ARS = pas des « coach de vie /RH ) qui laisse tomber le patient quand ça les dépassent.", "Un thérapeute disponible : quand on active le cerveau il va continuer à travailler en dehors des séances. Ainsi il n’est pas rare que tel patient sorte du cabinet avec un scanner corporel OK et qui, deux jours après, nous téléphone en disant que tel ou tel chose est ressortie il ne sait pas comment ni pourquoi ? Il faut alors être disponible pour lui.", "Accepter un patient e thérapie est un véritable engagement, à la fois pour le patient mais aussi pour le thérapeute. Les traumatismes c’est comme les panneaux dans les gares : attention un train peut en cacher un autre. En cela un patient ne vient jamais pour les vraies raisons. Parce que c’est inconscient. Les effets se font sentir mais le patient n’a pas la vision globale des choses."]
        },
    ]

    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10 mb-32">
            <ScrollToTopOnMount />
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageClinique} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-40 ">
                    <h1 className="text-5xl font-title font-semibold pl-32 pt-20">
                        F.A.Q.
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">
                    {FaqItems.map((item, index) => (
                        <div key={index}>
                            <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                                {item.title}
                            </h3>
                            {item.content.map((content, index) => (
                                <p className="pb-3 sm:text-lg 2xl:text-xl" key={index}>
                                    {content}
                                </p>
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Faq;