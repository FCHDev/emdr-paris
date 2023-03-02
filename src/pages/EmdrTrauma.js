import React from 'react';
import imageTrauma from "../assets/images/fillemalheureusesursofa.jpg";

const EmdrTrauma = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10">
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageTrauma} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-30 ">
                    <h1 className="text-5xl font-title font-semibold pl-32 pt-20">
                        Comment guérir un traumatisme ?
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10">
                <div className="px-5 flex flex-col justify-center">
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        Pourquoi parler ne suffit pas à guérir d’un traumatisme ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Parler de ce qu’il y a de plus difficile en soi n’est pas suffisant pour se sentir mieux. D’une
                        part les patients ne trouvent pas toujours « les mots pour le dire ». La porte d’entrée vers un
                        trauma n’est pas forcément dicible. <br/>
                        Il peut s’agir d’une image, d’une émotion, d’une
                        sensation…De plus il s’agit de ne pas oublier la composante neurobiologique du trauma. D’autre
                        part raconter son trauma peut avoir pour fonction d’aggraver les choses : en parlant de
                        l’évènement traumatique la personne va être « activée » par tout un tas d’éléments
                        négatifs. <br/>
                        Comme replongé au présent dans l’horreur du passé. Heureusement avec l’EMDR comme nous l’avons
                        vu nous disposons d’un outil puissant capable de retraiter les informations.
                    </p>
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        Faut-il revivre son trauma pour guérir ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Il n’y a pas besoin de « revivre » l’événement traumatique. Nous partons du moment présent. Et
                        il n’est pas suffisant de lui donner du sens pour guérir (ex : les victimes de viol savent bien
                        consciemment qu’elles ne sont pas responsables et pourtant…). <br/>
                        Ce n’est pas une technique fatigante qui demande un effort ou une recherche. Il est cependant
                        nécessaire d’évoquer les images, les souvenirs du traumatisme, sans pour autant s’attarder
                        dessus.
                    </p>
                    <p className="pb-3 bg-vertflashPale p-3 rounded-xl text-lg font-semibold">
                        Après la séance, le souvenir ne sera pas complètement oublié ; il sera vécu différemment, avec
                        du détachement, comme lorsqu’on fait un mauvais rêve. <br/>
                        Quand on se réveille, on réalise malgré le malaise ressenti que « ce n’était qu’un cauchemar »
                        et le souvenir s’estompe laissant la vie
                        reprendre son cours.
                        Le souvenir de l’évènement ne surgit plus et ne vient plus « attaquer » les pensées.
                        Le corps peut alors commencer à se détendre.
                    </p>
                    <p className="py-3 sm:text-lg 2xl:text-xl">
                        Les gens n’ont pas envie d’aller dans leurs douleurs c’est normal. Bien leur montrer :
                    </p>
                    <ul className="pb-3 w-3/4 mx-auto sm:text-lg 2xl:text-xl">
                        <li>✓ Qu’ils ne sont pas seul : je suis là auprès d’eux</li>
                        <li>✓ Que nous sommes dans le présent aujourd’hui : le pire est passé</li>
                        <li>✓ Qu'on n'est pas "maso" : on parle du trauma parce que l’on cherche à guérir. Si l’EMDR
                            fait revivre les choses, surtout, il les retraite et après c’est fini.
                        </li>
                        <li>✓ Que l’EMDR n’est pas une thérapie violente mais une thérapie qui fait du bien.</li>
                    </ul>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Je me souviens avoir utiliser l’humour avec un patient qui ne « voulait pas y aller ». « J’ai
                        trop peur » me disait-elle. Je lui répondis : « chère madame, ça fait 10 ans que vous vivez avec
                        ça alors on va lui dire tchao bye-bye à votre trauma. C’est bien ce que vous voulez ? Guérir ? »
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        De plus, nous disposons de tous un tas d’outils pour ne pas affronter la scène traumatique de
                        façon globale, ce qui pourrait faire trop peur. Nous pouvons travailler sur des
                        micros-cibles. <br/>
                        Ca fait moins peur. <br/>
                        Pas de l’hypnose car pas de modification de l’état de conscience.
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Vous ne serez pas seul à revivre vos traumatismes. <span className="font-semibold">Je serai là et nous ferons alliance.</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EmdrTrauma;