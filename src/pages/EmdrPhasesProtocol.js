import React from 'react';
import imageDecouvert from "../assets/images/emdrtableau.jpg"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const EmdrPhasesProtocol = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10">
            <ScrollToTopOnMount />
            <div className="w-full mx-auto h-[300px] lg:h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute lg:-top-[200px] w-full object-cover" src={imageDecouvert} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-75">
                    <h1 className="text-4xl lg:text-5xl font-title font-semibold lg:pl-32 pl-10 pt-20">
                        Les 8 phases du protocole
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">

                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Quand on pense EMDR on pense psycho-trauma. D’ailleurs l’OMS préconise en priorité l’EMDR pour
                        le traitement des états de stress post-traumatisme. On pense aussi aux troubles anxieux ainsi
                        qu’à ceux de l’attachement. <br/>
                        Mais les indications de l’EMDR sont beaucoup plus larges dans la mesure où ce traitement
                        original est une psychothérapie à part entière. <br/><br/>
                        Ce qui m’amène à préciser les 8 phases de la thérapie EMDR (issues du protocole standard).
                    </p>

                    {/*PHASE 1*/}
                    <div className="protocol group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1495653797063-114787b77b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 1</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Anamèse du patient</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-white text-base sm:text-lg 2xl:text-xl">
                                        Cette première phase est commune à toutes les formes de thérapie. On fait
                                        connaissance, on sonde la possibilité d’un transfert positif c’est-à-dire s’il
                                        peut y avoir une confiance réciproque entre le thérapeute et son patient.
                                        C’est essentiel pour toutes les formes de thérapeutique mais particulièrement en
                                        EMDR où il s’agira d’aborder les psycho-traumas.
                                        Puis le thérapeute EMDR expliquera brièvement en quoi consiste l’EMDR. Il
                                        s’assurera que c’est une bonne indication pour la personne qui se présente au
                                        cabinet.
                                        Un aspect de cette évaluation concerne la capacité de la personne à faire face
                                        aux souvenirs de l'événement traumatisant qui seront ravivés pendant la
                                        thérapie. Le thérapeute préparera alors avec le patient un plan de traitement
                                        avec les différents plans de ciblages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 2*/}
                    <div className="protocol group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="relaxation"
                            src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 2</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Préparation et relaxation</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-white sm:text-lg 2xl:text-xl">
                                        Le thérapeute EMDR apprendra à son patient quelques techniques d’auto-régulation émotionnelles
                                        (stabiliser un « lieu sûr » et établir un « contenant »). Ces deux exercices sont
                                        complémentaires. Avec le lieu sûr on s’assurera que le patient puisse « redescendre en pression
                                        » après l’évocation de ses traumatismes. L’idée ici est de garder le patient dans une « fenêtre
                                        de tolérance » acceptable en l’ancrant dans le présent à un endroit sécurisant pour lui. Il est
                                        en effet très important de s’assurer que le patient soit capable de contrôler ses émotions
                                        succédant à une expérience désagréable. <br/>
                                        Avec l’exercice du contenant nous cherchons à cibler la capacité du patient à pouvoir « ne pas
                                        penser tout le temps » aux choses désagréables. Mettre un stop aux pensés du cerveau en quelque
                                        sorte. Nous créons alors ce que j’appelle « une salle d’attente » pour les sensations et
                                        émotions négatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 3*/}
                    <div className="group relative block bg-black mb-5 lg:h-[400px] transition-all lg:hover:h-[700px]">
                        <img
                            alt="cible de fléchettes"
                            src="https://images.unsplash.com/photo-1596008194705-2091cd6764d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2839&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-30"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 3</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Évaluation de la cible</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <div className="text-white">
                                        <p className="pb-3 sm:text-lg 2xl:text-xl">
                                            Nous entrons avec la phase trois dans le « cœur du réacteur » EMDR (procédure EMDR standard en
                                            onze points de la phase 3 à la phase 8). <br/>
                                            La <span className="underline font-semibold">cible</span> est le souvenir que l’on va retraiter
                                            en EMDR. Stockée au niveau du corps, cette
                                            expérience incarne un réseau de mémoire. Elle est le point de départ à partir desquelles
                                            les <span className="underline font-semibold">canaux associatifs</span> émergent spontanément.
                                        </p>
                                        <p className="pb-3 sm:text-lg 2xl:text-xl">
                                            Pour chaque situation anxiogène dans le présent, en lien avec un événement traumatisant, le
                                            patient est invité à lier ensemble :
                                        </p>
                                        <ul className="w-3/4 mx-auto sm:text-lg 2xl:text-xl">
                                            <li>✓ une <span className="underline font-semibold">image</span> qui représente le mieux
                                                l'événement ou la situation
                                            </li>
                                            <li>✓ une idée négative associée à l'événement qui résonne comme « encore vraie » maintenant
                                                dans le présent (« <span className="underline font-semibold">cognition négative</span> »)
                                            </li>
                                            <li>✓ et une « <span className="underline font-semibold">cognition positive</span> » (ce que le
                                                patient préfèrerai penser de lui-même au
                                                présent)
                                            </li>
                                        </ul>
                                        <p className="py-3 sm:text-lg 2xl:text-xl">
                                            Puis le patient évalue au niveau « de ses tripes » la validité de l'idée positive sur une
                                            échelle numérique. C’est la <span className="underline font-semibold">VOC</span> – Validity Of
                                            Cognition sur une échelle de 1 à 7. Il se sera
                                            ensuite inviter à décrire les <span
                                            className="underline font-semibold">émotions</span> ressenties au présent lorsqu’il se centre
                                            sur l’image et
                                            la <span className="underline font-semibold">congnition négative</span>.
                                        </p>
                                        <p className="pb-3 sm:text-lg 2xl:text-xl">
                                            <span className="underline font-semibold">La procédure standard en onze points</span> se
                                            poursuit. Le patient est maintenant convié à associer
                                            l'image anxiogène et l'idée négative. Il évalue l'ampleur de sa détresse sur une échelle
                                            numérique (de 0 - tout va bien à 10 - détresse intense). C’est l’échelle du <span
                                            className="underline font-semibold">SUD</span> – Subjectif Unit
                                            of Distress.
                                        </p>
                                        <p className="pb-3 sm:text-lg 2xl:text-xl">
                                            Enfin on va dans le corps : la détresse émotionnelle se traduit par un malaise physique qu'il
                                            est invité à localiser sur son corps. C’est le <span className="underline font-semibold">siège de la sensation corporelle</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 4*/}
                    <div className="group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="relaxation"
                            src="https://images.unsplash.com/photo-1467015806515-b6effeb01f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 4</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Désensibilisation</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="pb-3 text-white sm:text-lg 2xl:text-xl">
                                        Le patient se fixe sur l'image traumatisante, l'idée négative et le ressenti corporel. Le
                                        thérapeute lui demande de suivre en même temps avec les yeux ses doigts (ou d’autres
                                        stimulations bilatérales alternées). <br/>
                                        Le patient est encouragé à suivre « en laissant se faire »
                                        les associations mentales qui se font naturellement pendant cet exercice. Sans perdre de vue
                                        l’évènement cible, cette phase du traitement continue jusqu'à ce que le patient n’éprouve plus
                                        de perturbations. En cas de blocage, le thérapeute a dans sa boîte à outils des éléments afin de
                                        réaliser des « tissages cognitifs » pertinents.
                                    </p>
                                    <p className="text-white sm:text-lg 2xl:text-xl">
                                        Mais gardez présent à l’esprit que le thérapeute
                                        n’interprétera pas vos associations mais « laissera se faire ». Cette phase se poursuit tant que
                                        le patient continue à ressentir des perturbations sur l’échelle du SUD quand on le reconfronte
                                        avec la cible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 5*/}
                    <div className="group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="canapé en cuir marron"
                            src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 5</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Installation</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-white sm:text-lg 2xl:text-xl">
                                        Cette phase 5 vise à associer l'idée positive souhaitée par le patient à ce qu'il reste du
                                        souvenir de l'événement traumatisant. Cette étape se poursuit tant que la cognition positive
                                        n’est pas parfaitement installée.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 6*/}
                    <div className="group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="marche sur un tronc d'arbre"
                            src="https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 6</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Bilan corporel (body-scan)</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-white sm:text-lg 2xl:text-xl">
                                        Le patient garde à l'esprit l'événement traumatisant et l'idée positive à laquelle il a été
                                        associé durant la phase 5 et passe en revue ses sensations corporelles. Le but de cette phase
                                        est de repérer des « tensions » ou des « sensations négatives » qui subsisteraient et d'aider à
                                        les dissiper.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 7*/}
                    <div className="group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="drapeau à damier agité"
                            src="https://images.unsplash.com/photo-1590007530236-b51ff30f5d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 7</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Clôture</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-white sm:text-lg 2xl:text-xl">
                                        À la fin d'une séance, il est de la responsabilité du thérapeute de prendre le temps afin de
                                        s’assurer que son patient se trouve dans un état émotionnel stable, et ce qu’il s’agisse d’une
                                        séance complète ou incomplète. Il n’oublie pas de mentionner que le travail continue entre les
                                        séances et déclare se tenir disponible pour son patient entre les deux séances. <br/>
                                        Il propose au
                                        patient de tenir un « journal de bord » et rappelle à son patient qu’il possède désormais un «
                                        lieu sûr » et un « contenant » opérationnels.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PHASE 8*/}
                    <div className="group relative block bg-black mb-5 lg:h-[400px]">
                        <img
                            alt="personne qui écrit sur un bloc-note"
                            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-vertflash mb-2">
                                <span className="bg-gray-500 py-1 px-2 rounded">Phase 8</span>
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Réévaluation</p>

                            <div className="lg:mt-10">
                                <div
                                    className="lg:translate-y-8 transform lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-white sm:text-lg 2xl:text-xl">
                                        Au début de la séance suivante le thérapeute vérifie chez son patient la stabilité des effets
                                        thérapeutiques (plus de perturbations en lien avec l’évènement-cible). Il ajuste le plan de
                                        traitement le cas échéant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EmdrPhasesProtocol;