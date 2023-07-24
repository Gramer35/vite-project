import React from "react";


const Portfolio = () => {

    return (
        <div className="text-white">

            <h1 className="text-7xl text-center my-16">Projects</h1>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-10 justify-items-center">

                {/* Code Quiz */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-40" src="/codeQuiz.PNG" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Code Quiz
                        </h2>
                        <p>Quiz that utilizes local storage to store scores of the quiz based on time. Able to store the score along with the initials and be able to access it via the high scores tab.</p>
                        <div className="card-actions justify-end">
                            <a href='https://gramer35.github.io/Code-Quiz/' className="badge badge-outline">GitHub Pages</a>
                            <a href='https://github.com/Gramer35/Code-Quiz' className="badge badge-outline">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Weather API */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/weatherAPI.PNG" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Weather API
                        </h2>
                        <p>Weather app that utilizes API from OpenWeatherMap. The app accesses a 5 day forecast and the current day information. Will also store the searched cities and allows for a search of those same cities</p>
                        <div className="card-actions justify-end">
                            <a href='https://gramer35.github.io/Weather-Forecast/' className="badge badge-outline">GitHub Pages</a>
                            <a href='https://github.com/Gramer35/Weather-Forecast' className="badge badge-outline">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Password Generator */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-40" src="/passwordGen.PNG" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Password Generator
                        </h2>
                        <p>Randomly generated password. Series of questions are asked to determine how and what will be included in the password.</p>
                        <div className="card-actions justify-end">
                            <a href='https://gramer35.github.io/password-generator/' className="badge badge-outline">GitHub Pages</a>
                            <a href='https://github.com/Gramer35/password-generator' className="badge badge-outline">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/workDaySched.PNG" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Work Day Scheduler
                        </h2>
                        <p>Day planner that shows hourly timeblocks for the standard work day. Current hour is marked red, past hours are grey and future is green. A user can save tasks that persist through a refresh.</p>
                        <div className="card-actions justify-end">
                        <a href='https://gramer35.github.io/work-day-scheduler//' className="badge badge-outline">GitHub Pages</a>
                            <a href='https://github.com/Gramer35/work-day-scheduler' className="badge badge-outline">GitHub Repo</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

};

export default Portfolio;