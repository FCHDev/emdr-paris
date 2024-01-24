import React from 'react';
import imageClinique from "../assets/images/ruralfindete.jpeg";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const EmdrClinique = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10 mb-32">
            <ScrollToTopOnMount />
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageClinique} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-40 ">
                    <h1 className="text-5xl font-title font-semibold pl-32 pt-20">
                        Est-ce que l'EMDR est fait pour moi ?
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        EMDR : Pour quelles indications cliniques ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        C’est vous qui activer le processus de guérison. Vous en gardez le contrôle exclusif. Rien ne se
                        fait « à votre insu ». <br/>
                        D’ailleurs, nous déciderons ensemble d’un « signal stop » qui vous
                        permettra de suspendre à tout moment ce qui en train de se passer (si vous sortez de votre
                        fenêtre de tolérance).
                    </p>
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        EMDR : Effets secondaires et contre-indications
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Il n’y en pas à proprement parler. Il existe tout une série de protocoles qui s’adapte à la
                        situation clinique du patient. Le tout est que le thérapeute soit bien formé à ce type
                        d’intervention. En cela, en cas de traumas complexes, de troubles graves de la personnalité avec
                        risques dissociatifs, on orientera le patient chez un thérapeute EMDR chevronné. <br/><br/>
                        <span className="font-semibold">Un point d’attention tout de même :</span> <br/>
                        Les personnes qui ont eu un trama neurologique (attention aux crises d’épilepsie) <br/>
                        Les femmes enceintes, au début on évite (principe de précaution)
                    </p>
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        Est-ce que l’EMDR fonctionne sur tout le monde ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Méthode profondément respectueuse de l’être humain, de son intimité et de son originalité.
                        Méthode complète qui allie la parole au corps. Tout est fait dans le dispositif EMDR pour que le
                        patient puisse « sortir de sa tête » et « aller dans son corps » en ressentant ses
                        affects. <br/><br/>
                        <span
                            className="italic">« Guérir les traumatismes à vue d’œil…mais pas en un clin d’œil 😉 ! »</span>
                    </p>
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        Quels sont les bienfaits de l'EMDR ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Pouvoir se dire que l’on peut guérir, que l’on n’a pas à souffrir indéfiniment du passé
                        (d’ailleurs les dernières avancées en neuroscience insistent sur la plasticité formidable du
                        cerveau avec la création de nouvelles synapses, ce qui vient contredire toutes velléités de faire
                        du passé une trace indélébile à jamais).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmdrClinique;