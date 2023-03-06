import React from 'react';
import imageDico from "../assets/images/laccheserys.jpeg";

const Dico = () => {

    const DicoItems = [
        {
            "title": "Cognition négative",
            "content": [
                "Une cognition est une pensée que nous avons sur nous-même et qui organise notre perception du monde. Les cognitions ont donc des effets réels sur nos actions, nos comportements et nos pensées. Pour le dire autrement une cognition négative c’est du passé encore vrai aujourd’hui.",
                "Tous traumas entraînent une cognition négative. Par exemple un enfant abandonné sera comme pour ainsi dire programmé à se dire qu’il n’est pas digne d’amour.",
                "Cette cognition négative a cinq critères : ",
                "1. Elle est autoréférencée (elle définit en tant que personne. Elle est formulée en « je ».",
                "2. Elle touche à l'affect.",
                "3. Elle est active toute la vie.",
                "4. Elle est irrationnelle.",
                "5. Elle se généralise au reste des comportements.",
                "Qui je deviens si je ne suis plus victime ? Je ne me connais plus.",
                "Avec l’instauration de la VOC (Validity of cognition) L’EMDR insiste sur un éléments clinique fondamental. Il ne suffit pas de savoir ce que l’on voudrait être encore faut il y croire ! La VOC c’est le ressenti « dans les tripes » : sur une échelle de 1 (« tout à fait faux ») à 7 (« Tout à fait vrai ») le patient chiffre à combien il ressent comme vrai maintenant sa cognition positive (en lien avec l’évènement-cible).",
            ]
        },
        {
            "title": "Trauma simple vs Trauma complexe",
            "content": [
                "Le « miracle » de l’EMDR se produit la plupart du temps sur les traumas simples."
            ]
        },
    ]

    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10 mb-60">
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageDico} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-40 ">
                    <h1 className="text-5xl font-title font-semibold pl-32 pt-20">
                        Dico EMDR
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">
                    {DicoItems.map((item, index) => (
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

export default Dico;