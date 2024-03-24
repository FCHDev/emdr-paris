import React from 'react';
import imageEfficace from "../assets/images/borddefalaise.jpeg";
import accessSVG from "../assets/svg/access.svg";
import stimulateSVG from "../assets/svg/energy-drink.svg";
import linkSVG from "../assets/svg/link.svg";
import { Card } from 'antd';
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
const { Meta } = Card;

const EmdrEfficace = () => {
    return (
        <div className="flex flex-col justify-center mx-auto pt-[125px] pb-10 mb-10">
            <ScrollToTopOnMount />
            <div className="w-full mx-auto h-[300px] overflow-y-hidden relative -z-10">
                <img className="absolute -top-[200px] w-full object-cover" src={imageEfficace} alt="accueil"/>
                <div className="absolute top-0 bg-bleu w-full h-full text-white bg-opacity-30 ">
                    <h1 className="text-4xl lg:text-5xl font-title font-semibold pl-32 pt-20">
                        Pourquoi l’EMDR est-il efficace ?
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex font-classic animate-appear mt-10 xl:mb-10">
                <div className="px-5 flex flex-col justify-center">
                    <h3 className=" py-5 pb-5 text-3xl text-bleu font-title font-semibold">
                        Comment fonctionne l’EMDR ?
                    </h3>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        L’originalité du protocole EMDR est de faire simple avec ce qui est compliqué (un
                        traumatisme). <br/>
                        <span className="font-semibold underline">3 grandes actions</span> vont être mises en place :
                    </p>

                    <div className="flex w-3/4 mx-auto justify-evenly my-10 flex-wrap">
                        <Card
                            hoverable
                            style={{
                                width: 260,
                                fontFamily: 'Montserrat',
                                marginBottom: '10px',
                            }}
                            cover={<img alt="example" src={accessSVG} className={"h-[180px] w-auto py-3 bg-orange"}/>}
                        >
                            <Meta title="Accéder" description="...au présent à un souvenir (c’est toujours au présent que l’on souffre du passé). C'est « le désir de changement du patient »." className={"text-base"} />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 260,
                                fontFamily: 'Montserrat',
                                marginBottom: '10px',
                            }}
                            cover={<img alt="example" src={stimulateSVG} className={"h-[180px] w-auto py-3 bg-vert"}/>}
                        >
                            <Meta title="Stimuler" description="...le système de traitement de l’information
                            dans le cerveau." className={"text-base"} />
                        </Card>
                        <Card
                            hoverable
                            style={{
                                width: 260,
                                fontFamily: 'Montserrat',
                                marginBottom: '10px',
                            }}
                            cover={<img alt="example" src={linkSVG} className={"h-[180px] w-auto py-3 bg-vertflash"}/>}
                        >
                            <Meta title="Faire se lier" description="...avec d’autres informations adaptées une
                            expérience isolée que l’on va retraiter." className={"text-base"}/>
                        </Card>
                    </div>


                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Notre porte d’entrée sera alors ce que souhaite travailler de patient (cible/situation
                        initiale). <br/>
                        <span className="font-semibold underline">3 temps du traitement</span> qui doivent tous être abordés :
                    </p>
                    <div className="pb-3 flex items-center sm:text-lg 2xl:text-xl">
                        <div
                            className="bg-vert text-white font-semibold rounded-full flex justify-center items-center min-w-[30px] h-[30px] mr-2">1
                        </div>
                        <div>
                            Au <span className="font-semibold">présent</span> : élaboration de la problématique actuelle
                            et de ses déclencheurs.
                        </div>
                    </div>
                    <div className="pb-3 flex items-center sm:text-lg 2xl:text-xl">
                        <div
                            className="bg-vert text-white font-semibold rounded-full flex justify-center items-center min-w-[30px] h-[30px] mr-2">2
                        </div>
                        <div>
                            Puis nous allons dans le <span className="font-semibold">passé</span> : identification
                            du <span className="font-semibold underline">souvenir-source</span> c’est-à-dire
                            l’expérience la plus ancienne qui a créer les fondations de la
                            problématique actuelle : <span className="italic">«
                            quand avez-vous vécu cela pour la première fois ? »</span>.
                        </div>
                    </div>
                    <div className="pb-3 flex items-center sm:text-lg 2xl:text-xl">
                        <div
                            className="bg-vert text-white font-semibold rounded-full flex justify-center items-center min-w-[30px] h-[30px] mr-2">3
                        </div>
                        <div>
                            Et enfin nous allons dans le <span className="font-semibold">futur</span> avec l’élaboration
                            des scénarii du futur (à chaque déclencheur du présent correspondra un scénario du futur
                            espéré).
                        </div>
                    </div>
                    <p className="pb-3 sm:text-lg 2xl:text-xl">
                        Nous voyons ici à quel point la thérapie EMDR apporte un souci particulier à retraiter
                        l’ensemble de l’expérience traumatique. L’idée est que les résultats puissent être complets et
                        surtout durables dans le temps.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EmdrEfficace;