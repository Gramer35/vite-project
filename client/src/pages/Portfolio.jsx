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
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
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
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
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
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/workDaySched.PNG" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Work Day Scheduler
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>

                </div>
            
        </div>
    )

};

export default Portfolio;