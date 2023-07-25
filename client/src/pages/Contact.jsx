import React, { useState } from "react";


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!emailIsValid(email)) {
            setEmailError('Please enter a valie email address.')
        }

        if (message.trim() === '') {
            setMessageError('Please add a message.')
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    const emailIsValid = (email) => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    return (
        <div className="hero min-h-fit">
            <div className="hero-content flex lg:flex-row-reverse">
                <img src="/contactImage.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white text-center">Contact Me</h1>
                    <form onSubmit={handleFormSubmit}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className={`input input-bordered w-full max-w-xs ${emailError ? 'border-red-500' : ''}`} value={email} onChange={handleEmailChange} />
                            {emailError && <span className="text-red-500">{emailError}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Message</span>
                            </label>
                            <textarea className={`textarea textarea-bordered h-24 ${messageError ? 'border-red-500' : ''}`} placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
                            {messageError && <span className="text-red-500">{messageError}</span>}
                        </div>
                        <br />
                        <button className="btn btn-primary ">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default Contact;