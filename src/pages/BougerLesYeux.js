import React from 'react';
import EMDRYeux from "../assets/images/emdr.jpg"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const BougerLesYeux = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10 mb-10">
            <ScrollToTopOnMount />
            <div
                className="flex h-[300px] items-center font-classic overflow-hidden bg-orangePale relative -z-10">
                <div className="absolute flex top-0 bg-bleu w-full h-full bg-opacity-30 text-white">
                    <h1 className="w-1/2 text-4xl lg:text-5xl font-title font-semibold pl-20 pt-20">
                        Juste bouger les yeux ?
                    </h1>
                </div>
                <img
                    className="w-full min-w-[320px] h-full lg:h-auto object-cover"
                    src={EMDRYeux}
                    alt="visage en gros plan avec deux doigts levés devant nous"/>

            </div>


            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        EMDR : qu’est-ce que cela veut dire ?
                    </h3>
                    <p className="mb-5 w-3/4 mx-auto bg-vertflash text-white text-center p-3 rounded-xl sm:text-lg lg:text-xl 2xl:text-2xl">
                        <span className="italic font-semibold">E. M. D. R : Eye Movement Desensitization and Reprocessing</span>
                        <br/>
                        Désensibilisation et reprogrammation par mouvements oculaires.
                    </p>
                    <p className="pb-3 text-xl">
                        Je sais on avait dit que l’on
                        allait faire simple… Alors essayons ceci : <br/><span className="italic">"Bouger les yeux pour aller mieux ?" <br/>"EMDR : guérir à
                        vue
                        d’œil ?" </span><br/>
                        Bof… On va arrêter le marketing pour des choses plus sérieuses…
                    </p>
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        L’EMDR est-ce simplement bouger les yeux pour aller mieux
                        ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Alors oui en EMDR, le thérapeute invite le patient à bouger les yeux ! Mais
                        cette thérapie complète ne se résume pas à cela. Je me rappelle ici d’une patiente qui était
                        très pressée de commencer son traitement en EMDR.
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        <span className="text-vertflash font-bold">Séance #1</span> : Elle s’assoit et déclare : « alors
                        on bouge les yeux ? Une amie a suivi une
                        thérapie EMDR et elle dit que c’est magique le coup des yeux qui bougent ! » Je lui explique que
                        d’abord on va faire connaissance et que l’on déterminera ensemble si ses problématiques
                        actuelles gagneraient à être désensibilisées en EMDR.
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        <span className="text-vertflash font-bold">Séance #2</span> : « quand est-ce qu’on commence ? ».
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        <span className="text-vertflash font-bold">Séance #3</span> : la patiente revient à la charge :
                        « quand est-ce qu’on commence ? ». Je
                        précise ici que cette patiente était une polytraumatisée et qu’il fallait donc dans un premier
                        temps la sécuriser, augmenter ses ressources etc…
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        <span className="text-vertflash font-bold">Séance #4</span> : elle se campe : « bon aujourd’hui
                        vous me faites bouger les yeux… » Je répondis
                        alors avec humour : « mais chère madame, à partir du moment où nous nous sommes parlé au
                        téléphone nous avons commencé en EMDR ». Et je lui expliqua alors l’importance d’apprendre à
                        nous connaître pour qu’elle puisse, si elle le décidai, me faire confiance.
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Aborder les traumas c’est parler de ce qu’il y a de plus douloureux dans une vie. C’est comme
                        une ascension en montagne. On n’escalade pas l’Everest si on n’est pas bien préparé. Sinon c’est
                        d’une part l’échec assuré et d’autres parts c’est dangereux.
                        Il a fallu plusieurs séances pour que la patiente commence à « bouger les yeux ». Cette dame est
                        restée longtemps en thérapie avec moi. Et aujourd’hui elle va beaucoup mieux !
                    </p>
                    <figure className="sm:w-1/2 mx-auto my-8">
                        <blockquote>
                            <p className="sm:text-lg 2xl:text-xl bg-vert text-white">
                                Mais que les choses soient claires: la thérapie EMDR va bien au-delà des simples
                                mouvements oculaires. Elle inclut des procédures et des protocoles uniques à cette
                                thérapie. C’est une combinaison, une interaction de ces procédures et des stimulations
                                bilatérales qui assure le traitement. Le plus troublant, c’est qu’on en est réduit au
                                stade des conjectures pour expliquer ses mécanismes.
                            </p>
                        </blockquote>
                        <figcaption className="pt-1 text-sm">
                            <span className="font-semibold">Francine Shapiro, </span><cite>
                            « L’EMDR se met-elle le doigt dans l’œil ? » dans le Cercle Psy n°6
                        </cite>
                        </figcaption>
                    </figure>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Comment bouger les yeux de droite à gauche et de gauche à droite peut-il aider à surmonter son
                        anxiété, voire un traumatisme ?
                        sauf que l’EMDR fonctionne aussi sans les yeux ! Alors ?
                        Moi, ce n'est pas ce qui m’intéresse le plus…

                    </p>
                </div>
            </div>

        </div>
    );
};

export default BougerLesYeux;