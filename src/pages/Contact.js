import React, {useRef, useState} from 'react';
// import emailjs from "@emailjs/browser";
import smartphone from "../assets/svg/smartphone.svg";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Contact = () => {
// CONST ET STATES
    const formRef = useRef();
    const [toSend, setToSend] = useState({
        from_name: '',
        surname: '',
        message: '',
        reply_to: '',
        project_type: '',
    });
    const [modal, setModal] = useState(false);

    // console.log(test())

    // COMPORTEMENT
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_c0c7gpk', 'template_klxompj', formRef.current, '-vwAE-R5zUAJMrCjR')
    //         .then((result) => {
    //             console.log(result.text);
    //             console.log("mail envoyé !")
    //             alert("Votre message a bien été envoyé ")
    //         }, (error) => {
    //             console.log(error.text);
    //             console.log("mail PAS envoyé !")
    //             alert("🙈 Oups !Il y a eu un problème d'envoi, veuillez réessayer")
    //         });
    //     setToSend({
    //         from_name: '',
    //         surname: '',
    //         message: '',
    //         reply_to: '',
    //         project_type: ''
    //     })
    //     setModal(true)
    // };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return (
        <div
            className="min-h-[80vh] flex flex-col justify-center items-center mx-auto mt-[10vh] sm:mb-[4vh] md:pt-5 animate-appear">
            <ScrollToTopOnMount/>
            <section className="container rounded-xl md:px-16">
                <div className="py-8 px-4 mx-auto max-w-screen-md">
                    <h3 className="text-center pt-10 pb-5 text-3xl text-bleu font-title font-semibold">
                        Contact
                    </h3>
                    {/*TEXTE INTRO CONTACT*/}
                    <p className="font-light text-center text-gray-500 font-classic sm:text-lg mb-8 lg:mb-16">
                        La prise de RDV par email vous permet, si vous le souhaitez, d’exposer le contexte de votre
                        demande de consultation. Merci de bien indiquer vos coordonnées téléphoniques à la fin de votre
                        email. En effet, il est important pour moi de pouvoir échanger de vive voix avec vous afin de
                        fixer un premier RDV. <br/> <br/>
                        C’est pourquoi je vous invite à me joindre prioritairement <span className="font-semibold">par téléphone.</span>
                        <br/>
                        Je ne réponds pas au téléphone pendant mes consultations. <br/>
                        Laissez moi un message vocal et je vous rappelerai au plus vite.
                    </p>

                    {/*BOUTON TELEPHONE*/}
                    <a href="tel:[+33]643655138">
                        <button
                            className="flex items-center justify-center mx-auto bg-orange text-white font-classic font-bold px-5 py-2 rounded-2xl transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300 mt-5 mb-8 lg:mb-16 ">
                            <img src={smartphone} alt="telephone icon"/>
                            <span className="ml-2 md:block hidden">06 43 65 51 38</span>
                        </button>
                    </a>

                    {/*FORMULAIRE*/}
                    <form action="#" ref={formRef} className="space-y-8">
                        {/*NOM*/}
                        <div>
                            <label htmlFor="name"
                                   className="block mb-2 text-base font-bold font-classic text-gray-900">
                                Nom
                            </label>
                            <input type="text" id="name"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-classic"
                                   placeholder="Ex. : Dupond"
                                   name='from_name'
                                   onChange={handleChange}
                                   value={toSend.from_name}/>
                        </div>

                        {/*PRENOM*/}
                        <div>
                            <label htmlFor="surname"
                                   className="block mb-2 text-base font-bold font-classic text-gray-900">
                                Prénom
                            </label>
                            <input type="text" id="surname"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-classic"
                                   placeholder="Ex. : Jean"
                                   name='from_name'
                                   onChange={handleChange}
                                   value={toSend.from_name}/>
                        </div>

                        {/*EMAIL*/}
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-base font-bold font-classic text-gray-900">
                                Email*
                            </label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 font-bodyFont2 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-classic"
                                   placeholder="jean.dupond@gmail.com" required
                                   name="reply_to"
                                   onChange={handleChange}
                                   value={toSend.reply_to}/>
                        </div>

                        {/*TÉL*/}
                        <div>
                            <label htmlFor="phone"
                                   className="block mb-2 text-base font-bold font-classic text-gray-900">
                                Téléphone
                            </label>
                            <input type="tel" id="phone"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-classic"
                                   placeholder="Ex. : 06 12 34 56 78"/>
                        </div>

                        {/*MESSAGE*/}
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-base font-bold font-classic text-gray-900">
                                Message
                            </label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 font-classic"
                                      placeholder="Votre message"
                                      name="message"
                                      required
                                      onChange={handleChange}
                                      value={toSend.message}></textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-vert sm:w-fit hover:bg-clair focus:ring-4 focus:outline-none focus:ring-primary-300 font-classic"
                            // onClick={(e) => sendEmail(e)}
                        >
                            Envoyer
                        </button>
                        <div className="text-xs font-classic">
                            * Champs obligatoires
                        </div>
                    </form>
                </div>
            </section>

            {/*BLOCS CONTACT*/}
            {/*<div className="flex w-5/6 justify-evenly items-center my-10 px-16 h-[200px] font-semibold">*/}
            {/*    <div*/}
            {/*        className="flex flex-col h-full w-1/2 rounded-xl bg-vert text-white justify-center items-center mx-2 font-classic">*/}
            {/*        <img className="h-[70px] w-auto" src={smartphone} alt="enveloppe"/>*/}
            {/*        <div className="py-3">PAR TELEPHONE</div>*/}
            {/*        <a className="py-2 px-4 bg-white bg-opacity-10 rounded-3xl"*/}
            {/*           href="tel:[+33]633544582">06 33 54 45 82</a>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className="flex flex-col h-full w-1/2 rounded-xl bg-vert text-white justify-center items-center mx-2 font-classic">*/}
            {/*        <img className="h-[70px] w-auto" src={mail} alt="enveloppe"/>*/}
            {/*        <div className="py-3">PAR MAIL</div>*/}
            {/*        <a className="py-2 px-4 bg-white bg-opacity-10 rounded-3xl"*/}
            {/*           href="mailto:etiennedumenil@gmail.com">etiennedumenil@gmail.com</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*Modal*/}
            <div
                className={`${modal ? "absolute" : "hidden"} w-full h-screen bg-white bg-opacity-90 flex flex-col justify-center items-center`}>
                <div
                    className="w-[300px] h-[150px] bg-bleu-vert rounded-2xl shadow-lg flex flex-col justify-center items-center relative">
                    <span className="text-jaune font-semibold pb-1 font-classic">Message envoyé</span>
                    <span className="text-white mb-5 font-classic">Je reviens très rapidement vers vous !</span>
                    <span className="absolute top-1 right-3 text-white text-2xl cursor-pointer"
                          onClick={() => setModal(false)}>X</span>
                    <button className="w-1/3 bg-orange rounded-2xl py-1 font-classic"
                            onClick={() => setModal(false)}>OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;