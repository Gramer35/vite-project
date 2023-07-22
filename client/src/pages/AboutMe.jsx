import React from "react";


const AboutMe = () => {

    return (
        <div className="hero min-h-fit">
            <div className="hero-content lg:flex-row">
                <img src="/antelopeCanyon.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white text-center">About Chris</h1>
                    <br />
                    <p className="py-2 text-white">Living life in the desert of Arizona with my wife, Holly,  and our pup, Finn. Born in California and raised in Michigan. Graduated Grand Valley State University in 2017 and in 2021 moved cross country to the desert!</p>
                    <p className='py-2 text-white'>Avid sports fan, especially Detroit. Can catch me during football season watching Michigan Football on Saturday and the Lions and Ravens on Sunday.</p>
                    <p className='py-2 text-white'>Currently working on my baseball bucket list to visit all ballparks! As of right now we have been to 9/30, which include: Detroit, Chicago Cubs, Chicago White Sox, Milwaukee Brewers, Kansas City Royals, St. Louis Cardinals, Texas Rangers, Arizona Diamondbacks, and the Los Angeles Angels</p>
                    <p className='py-2 text-white'>I am currently working as a Solutions Underwriter for Rocket Mortgage while also finishing up a Coding Bootcamp with Arizona State University. Once I finish, I would like to continue working on minor projects and grow as a Software Engineer/Developer while searching for my next career.</p>
                </div>
            </div>
        </div>
    )

};

export default AboutMe;