import React from 'react';
import imageMethode from "../assets/images/foretverte.jpg";

const EmdrMethode = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10">
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageMethode} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-30 ">
                    <h1 className="text-5xl font-title font-semibold pl-32 pt-20">
                        C'est quoi la méthode EMDR ?
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        La méthode EMDR
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Si l’on devait résumer la méthode EMDR en un mot. Nous choisirions celui d’<span
                        className="font-semibold">INTÉGRATION</span>. <br/>
                        Ne plus parler de traumas, mais d’expériences de vie négatives non digérées.
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Quand un évènement survient, des informations s’encodent avec :
                    </p>
                    <ul className="pb-3 w-3/4 mx-auto sm:text-lg 2xl:text-xl">
                        <li>✓ Des perceptions (les 5 sens = images, sons, odeurs, toucher, goût)</li>
                        <li>✓ Des pensées</li>
                        <li>✓ Des émotions</li>
                        <li>✓ Des sensations physiques</li>
                        <li>✓ Des croyances</li>
                    </ul>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        La plupart du temps la personne aura tendance à se focaliser sur une seule dimension de
                        l’expérience alors que pour guérir il s’agit d’associer ensemble ces cinq dimensions de
                        l’expérience.
                    </p>
                    <p className="pb-3 bg-vertflashPale p-3 rounded-xl text-lg">
                        <span className="font-semibold">Cas clinique</span> <br/>Pierre est artisan plombier. Après une
                        grosse journée de boulot il a eu un accident de voiture où il a fait plusieurs tonneaux sur
                        l’autoroute… Il faisait nuit et ce qui le frappe en priorité dans cet évènement est la couleur
                        rouge de la voiture qu’il a percuté. Depuis il n’arrive plus à conduire et surtout il évite tout
                        ce qui est de couleur rouge…. <br/> <br/>
                        Trauma simple = va vite = le patient n’est pas touché dans son identité.
                    </p>
                    <p className="py-3 sm:text-lg 2xl:text-xl">
                        Ainsi quand on personne dit je souffre de ci, de ça, le thérapeute EMDR enfile ses lunettes
                        (modèle TAI, collection EMDR 😀) et comprendra les choses selon « l’approche EMDR » : vos
                        symptômes sont des manifestations de comment l’information est stockée. Et si vous continuez à
                        souffrir du passé c’est que ces informations sont précisément stockées de façon
                        dysfonctionnelles. Il y a rupture de liens. <br/>
                        Dans la pathologie les différentes composantes de
                        l’expériences fonctionnent de manières isolées et ne sont pas « intégrées ».
                    </p>
                    <p className="py-3 sm:text-lg 2xl:text-xl">
                        C’est un des postulats fondamentaux de la thérapie EMDR posé par son inventrice Francine Shapiro
                        : tout comme le corps a une capacité innée d’auto-guérison (cf coupure/cicatrisation), les
                        blessures psychiques ont vocation à être retraitées correctement par le cerveau (réseaux de
                        mémoire adaptatifs).
                    </p>
                    <p className="py-3 sm:text-lg 2xl:text-xl">
                        A la base de l’EMDR l’on retrouve un nom barbare : « <span className="underline">le traitement adaptatif de l’information</span> ».
                        Rassurez-vous c’est simple à comprendre : tout ce que le cerveau reçois il l’enregistre et il le
                        traite. Par exemple les « petits » traumas sont traités par le cerveau la nuit pendant la face
                        paradoxale du rêve (où le sujet qui dort bouge les yeux). Mais quand les perturbations sont trop
                        fortes cela peut ne pas suffire. C’est comme un tuyau de petit diamètre qui devrait distribuer
                        beaucoup d’eau. Il se produit alors comme une « stase » - de l’eau qui stagne, qui ne s’écoule
                        pas et qui va devenir impropre à la consommation. Le protocole EMDR et les SBA vont pour ainsi
                        dire permettre au diamètre du tuyau de s’agrandir pour traiter l’ensemble de la quantité. Cette
                        solution adaptative aura pour conséquence d’aboutir à un rééquilibrage du corps, des pensées et
                        des émotions.
                    </p>
                    <p className="pb-3 bg-vertflashPale p-3 rounded-xl text-lg">
                        <span className="font-semibold">Exemple</span> <br/>Lors de notre première rencontre, Jeanne
                        évoque le décès de sa sœur survenu il y a dix ans. Elle dit que c’est toujours dur mais que le
                        temps a fait son œuvre. <br/>
                        Aujourd’hui elle pense à elle avec le sourire et est capable de se
                        remémorer les bons moments passées avec sa sœur. Comme le dit <span className="underline">Jacques Rogue</span> : <span
                        className="italic">« On ne peut ni
                        changer, ni effacer le passé, mais on peut définitivement ne plus en souffrir. »</span> <br/>
                        Comprenons mieux : la thérapie EMDR ne changera pas les faits. Ce qui s’est produit s’est
                        produit et je
                        repense encore avec émotion à cette patiente, si courageuse qui, à la suite du décès de son mari
                        me demanda expressément de ne pas « lui enlever sa douleur » parce que sa douleur était la trace
                        vivante « de l’amour porté à cette homme ». <br/>
                        Elle précisa sa demande thérapeutique : « je veux ne plus être écroulé par la peine, je veux
                        rire et chanter à nouveau car l’amour ça rend joyeux ». <br/>
                        Merci jeanne pour cette leçon de vie !
                    </p>
                    <p className="py-3 sm:text-lg 2xl:text-xl">
                        Poursuivons : ce n’est pas le souvenir de l’événement qui change, mais son impact émotionnel. La
                        thérapie EMDR apporte une modification progressive des traces émotionnelles laissées par
                        certains évènements. Ainsi, notre regard, notre ressenti concernant ces événements changent et
                        par conséquent, la souffrance diminue. Bref on arrive à laisser le passé…dans le passé.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EmdrMethode;