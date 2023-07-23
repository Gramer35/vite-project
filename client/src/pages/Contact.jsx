import React from "react";


const Contact = () => {

    return (
        <div className="hero min-h-fit">
            <div className="hero-content flex lg:flex-row-reverse">
                <img src="/contactImage.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white text-center">Contact Me</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                    </div>
                    <br />
                    <button className="btn btn-primary ">Send</button>
                </div>
            </div>
        </div>
    )

};

export default Contact;