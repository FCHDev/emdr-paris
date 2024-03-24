import React from 'react';
import imageTrauma from "../assets/images/fillemalheureusesursofa.jpg";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const EmdrTrauma = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10">
            <ScrollToTopOnMount />
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageTrauma} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-30 ">
                    <h1 className="text-4xl lg:text-5xl font-title font-semibold lg:pl-32 pl-10 pt-20">
                        Faut-il revivre son trauma pour s’en débarrasser ?
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
                        Peut-on faire de l’EMDR si on a oublié ce qui s’est passé ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Il n’y a pas besoin de « revivre » l’événement traumatique. Nous partons du moment présent. Et
                        il n’est pas suffisant de lui donner du sens pour guérir (ex : les victimes de viol savent bien
                        consciemment qu’elles ne sont pas responsables et pourtant…). <br/>
                        Ce n’est pas une technique fatigante qui demande un effort ou une recherche. Il est cependant
                        nécessaire d’évoquer les images, les souvenirs du traumatisme, sans pour autant s’attarder
                        dessus.
                    </p>
                    <p className="pb-3 bg-vertflashPale p-3 rounded-xl sm:text-lg 2xl:text-2xl">
                        Après la séance, le souvenir ne sera pas complètement oublié ; il sera vécu différemment, avec
                        du détachement, comme lorsqu’on fait un mauvais rêve. <br/>
                        Quand on se réveille, on réalise malgré le malaise ressenti que « ce n’était qu’un cauchemar »
                        et le souvenir s’estompe laissant la vie
                        reprendre son cours.
                        Le souvenir de l’évènement ne surgit plus et ne vient plus « attaquer » les pensées.
                        Le corps peut alors commencer à se détendre.
                    </p>
                    <p className="pt-5 pb-3 sm:text-lg 2xl:text-xl">
                        Personne n'a envie d'aller dans ses douleurs, c’est normal. Les patients doivent bien comprendre que :
                    </p>
                    <div className="flex pb-3 w-full mx-auto sm:text-lg 2xl:text-xl text-center flex-col lg:flex-row">
                        <div className="my-2 lg:my-0 h-[100px] bg-vertflash lg:w-1/4 flex flex-col justify-center items-center rounded-xl text-white mr-1 px-2">
                            <p className="font-semibold text-lg">Ils ne sont pas seuls</p>
                            <p className="italic text-base">Je suis là auprès d’eux</p>
                        </div>
                        <div className="my-2 lg:my-0 h-[100px] bg-vert lg:w-1/4 flex flex-col justify-center items-center rounded-xl text-white mr-1 px-2">
                            <p className="font-semibold text-lg">Nous sommes dans le présent</p>
                            <p className="italic text-base">Le pire est passé</p>
                        </div>
                        <div className="my-2 lg:my-0 h-[100px] bg-vertflash lg:w-1/4 flex flex-col justify-center items-center rounded-xl text-white mr-1 px-2">
                            <p className="font-semibold text-lg">On n'est pas "maso"</p>
                            <p className="italic text-base">Si l’EMDR
                                fait revivre les choses, surtout, il les retraite et après c’est fini.</p>
                        </div>
                        <div className="my-2 lg:my-0 h-[100px] bg-vert lg:w-1/4 flex flex-col justify-center items-center rounded-xl text-white px-2">
                            <p className="font-semibold text-lg">L’EMDR n’est pas une thérapie violente</p>
                            <p className="italic text-base">...mais une thérapie qui fait du bien.</p>
                        </div>
                    </div>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Je me souviens avoir utiliser l’humour avec une patiente qui ne « voulait pas y aller ». « J’ai
                        trop peur » me disait-elle. Je lui répondis : « chère madame, ça fait 10 ans que vous vivez avec
                        ça alors on va lui dire tchao bye-bye à votre trauma. C’est bien ce que vous voulez ? Guérir ? »
                    </p>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        De plus, nous disposons de tous un tas d’outils pour ne pas affronter la scène traumatique de
                        façon globale, ce qui pourrait faire trop peur. Nous pouvons travailler sur des
                        micros-cibles. <br/>
                        Ca fait moins peur.
                    </p>
                    <p className="pb-3 bg-vert text-white text-center p-3 rounded-xl sm:text-lg lg:text-xl 2xl:text-2xl">
                        Vous ne serez pas seul à revivre vos traumatismes. <br/> <span className="font-semibold">Je serai là et nous ferons alliance.</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EmdrTrauma;