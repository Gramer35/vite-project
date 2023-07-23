import React from "react";


const Resume = () => {

    return (
        <div className="text-white">

            <div className="text-3xl text-center my-16">

                Use this <a href="###" className="underline">link</a> to download my resume!

            </div>

            <div className="grid grid-cols-6 gap-4">
                <div className="box-content h-32 w-32 p-4 col-start-2 col-span-2">

                    <h1 className="text-3xl">Front-End Proficiencies</h1>
                    <ul className="list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS, DaisyUI</li>
                    </ul>
                    <br />

                </div>
                <div className="box-content h-32 w-32 p-4 col-start-4 col-span-2">
                    <h1 className="text-3xl">Back-End Proficiencies</h1>
                    <ul className="list-disc">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MYSQL, Sequelize and other things that I am not sure what to put here but it's a test</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>

                </div>
            </div>
        </div>
    )

};

export default Resume;