import React from 'react';
import imageAccueil from '../assets/images/randonneurcouple.jpeg';
import soleil from "../assets/images/soleillacgele.jpg";
import sherpa from "../assets/images/sherpa.jpg";

const Accueil = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10 animate-appear">
            <div className="w-full mx-auto relative -z-10">
                <img className="h-[300px] w-full object-cover" src={imageAccueil} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-20 backdrop-blur-sm">
                    <h1 className="text-5xl font-title font-semibold pl-32 pt-20">
                        Bienvenue sur EMDR Paris
                    </h1>
                </div>
            </div>

            <div className="container mx-auto mt-10 p-3 font-classic rounded-xl">
                <h2 className="text-3xl text-bleu font-title font-semibold pb-8 text-center">Pourquoi j’aime être
                    thérapeute EMDR ?</h2>
                <p className="pb-3 sm:text-lg 2xl:text-xl">
                    <span className="underline font-semibold">J’aime le postionnement EMDR</span> : pourquoi je suis
                    devenu thérapeute EMDR ? <br/>
                    Thérapie complète et efficace qui <span className="underline">aide vraiment les personnes</span>.
                    Même si le propre du trauma est que «
                    l’on tourne autour » il y avait pour moi une nécessité à me former à un outil qui puisse
                    véritablement aider les gens dans leurs quotidiens. Rester assis sur ma chaise en voyant les
                    personnes ne pas changer – ou pire s’enfoncer était devenu quelque chose de difficile pour moi…
                    Malgré mon scepticisme de départ – <span className='italic'>ce « truc » de bouger les yeux c’est bizarre quand même</span> –
                    je n’ai
                    pû que m’incliner devant la solidité des effets cliniques positifs pour les patients.
                </p>
                <p className="pb-3 sm:text-lg 2xl:text-xl">
                    Enfin s’appuyer sur le protocole a quelque chose de solide. Les avancées thérapeutiques sont pour
                    ainsi dire mesurables… C’est comme pour un pilote de rallye : s’il n’a pas d’abord confiance dans sa
                    voiture, il ne pourra pas être performant dans sa conduite…
                </p>
                <p className="pb-3 sm:text-lg 2xl:text-xl">
                    L’EMDR est la forme de thérapie qui, ses dernières années, a concentré le plus d’études et de
                    recherches. Faire partie de la « communauté EMDR » c’est d’une part ne pas être seule et d’autre
                    part avoir le sentiment de participer au sens de l’histoire…
                </p>
                <p className="pb-3 sm:text-lg 2xl:text-xl">
                    Être proche du patient (psychiquement et physiquement pendant les désensibilisations). Leur faire
                    confiance, être dans l’espérance : « croire en son patient » même si ce dernier ne croit pas encore
                    en lui... En EMDR il n’est pas rare de prononcer des phrases comme <span className='italic'>« je sais que c’est dur. Vous
                    faîtes un super boulot. Vous êtes capable de traverser tout cela »</span>.
                </p>
                <p className="pb-1 sm:text-lg 2xl:text-xl">
                    J’utilise régulièrement deux métaphores pour rendre concret mon propos : <span
                    className="font-semibold text-vert">le thérapeute-sherpa</span> ou
                    alors <span className="font-semibold text-vert">le soleil et le lac gelé</span> :
                </p>
                <div className="px-3 py-1 rounded-xl mt-3 mb-10 bg-whitePale">
                    <div className="flex items-center py-2 ">
                        <img src={sherpa} className="h-[230px] rounded-xl"
                             alt="sherpas qui portent des sacs en haute montagne"/>
                        <p className="px-5 sm:text-lg lg:text-xl 2xl:text-2xl">
                            <span className="font-semibold text-vert">"Le thérapeute-sherpa"</span> : résoudre ses traumas
                            c’est
                            comme une expédition en haute-montagne. D’une part il faut y être préparé et d’autre part il
                            faut
                            être accompagné de quelqu’un qui connaît la montagne. Le sherpa ne fait pas à la place de
                            l’alpiniste. <br/>Simplement il a l’expérience et le recul nécessaire pour pouvoir guider
                            l’ascension. En EMDR c’est vous qui allez tenter l’exploit… et je serai là à vos côtés pour vous
                            guider.
                        </p>
                    </div>
                    <div className="flex items-center py-2">
                        <p className="px-5 sm:text-lg lg:text-xl 2xl:text-2xl">
                            <span className="font-semibold text-vert">"Le soleil et le lac gelé" </span> : Le mal-être
                            psychologique s’apparente a un lac gelé. Tout a l’air mort, triste et figé à l’extérieur. Mais
                            faîtes un trou dans la glace et vous pourrez constater que les poissons - eux – sont bien
                            vivants.
                            Le thérapeute est là pour être le soleil. Progressivement la neige fond et tout change alors que
                            fondamentalement c’est toujours le même endroit…C’est d’ailleurs une phares que les patients
                            utilisent en fin de traitement : c’est bizarre rien n’a changé mais tout à changer. A moi
                            d’ajouter
                            : « et vous allez mieux » ? Et au patient de répondre dans un sourire : « oui je vais mieux ! ».
                        </p>
                        <img src={soleil} className="h-[230px] rounded-xl"
                             alt="soleil au-dessus d'un lac gelé avec un enfant qui joue"/>
                    </div>
                </div>
                <p className="pb-3 sm:text-lg 2xl:text-xl">
                    <span className="underline font-semibold text-bleu">Augmenter leurs ressources</span> <br/>
                    Il est communément admis qu’à un psy « on vient dire ses problèmes ». On vient parler de ce qui ne
                    va pas. <br/>Je me rappelle avoir été très étonné lorsque en formation EMDR le formateur a commencé
                    par
                    me demander : <span className='italic'>« quelles étaient les ressources de mon patient »</span>.
                    Surpris, je tentai d’exposer la
                    problématique du patient, ses symptômes etc… Têtu le formateur enchaîna : <span className='italic'>« donc votre patient est
                    perturbé : qu’avez-vous mis en place pour le stabiliser émotionnellement ? »</span>.
                </p>
                <p className="pb-3 sm:text-lg 2xl:text-xl">
                    Ce fut une grande leçon clinique pour moi : si la thérapie c’est pouvoir enfin dire ce qui ne va
                    pas, c’est tout autant améliorer et agrandir ce qui fonctionne déjà…
                </p>
                <p className="pb-3 bg-vertflashPale p-3 rounded-xl sm:text-lg lg:text-xl 2xl:text-2xl mt-3 mb-10">
                    <span className="font-semibold">Prenons un exemple</span> <br/>Accrochez-vous : un champion de
                    Tennis joue son premier match à Roland-Garros dans une semaine…Il possède un super coup droit mais
                    un mauvais revers. A votre avis, quel coup que son entraineur va-t-il lui faire travailler pendant
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
                <p className="py-3 text-lg">
                    En tant que psychanalyste je peux m’y retrouver. L’EMDR c’est comme une grande maison partagée : il
                    y a un règlement intérieur que l’on se doit de suivre, après chacun est libre et choisit la chambre
                    qu’il préfère.
                </p>
                <p className="pb-3 text-lg">
                    J’ai accès à des associations libres d’une grande clarté. Pendant les phases de désensibilisations
                    il est demandé d’intervenir le moins possible, de ne pas influencer, de laisser faire.
                </p>
                <p className="pb-3 text-lg">
                    Cela rejoint une intuition clinique qui se vérifie : plus on est près du corps, au niveau des
                    affects et mieux ça marche…C’est inscrit dans l’ADN des êtres humains : nous avons besoin de voir
                    pour croire. Donc pour qu’une croyance positive s’installe il faut d’abord faire ressentir dans le
                    corps. <br/>Et ce n'est pas toujours facile…
                </p>
            </div>

            <div className="mt-10 p-3 font-classic bg-orangePale rounded-xl">
                <h2 className="text-3xl text-bleu text-center font-title font-semibold pb-8">Avertissement</h2>
                <p className="container mx-auto pb-3 text-lg">Comme chaque domaine de connaissance l’approche EMDR a
                    développé un vocabulaire
                    propre. Mais
                    rassurez-vous pas de « novlangue » avec l’EMDR. Quelques termes techniques certes que nous
                    expliciterons via le petit pictogramme suivant.
                    Vous allez le découvrir : l’EMDR ce sont des outils simples... qui permettent de traiter des
                    phénomènes physiques et corporels complexes.
                </p>
                <p className="container mx-auto pb-3 text-lg">
                    Vous trouverez sur ce site différentes informations et cas cliniques concernant l’approche de la
                    thérapie EMDR. La rédaction du contenu n’engage que son auteur.
                    L’objectif de ce site n’est certainement pas de constituer une boîte à outils pour que vous puissiez
                    pratiquer l’EMDR tout seul chez vous (cf la section). S’il existe un savoir sur la psychologie (il
                    existe bien des facs de psycho 😀) rien ne remplace l’expérience de la thérapie. Une thérapie c’est
                    la rencontre entre un praticien dûment formé (cf section : qui peut pratiquer l’EMDR) et un patient
                    qui a envie de guérir… et qui possède en lui les ressources pour guérir.
                </p>
                <p className="container mx-auto text-lg">
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