import { useState } from "react"
import React from "react"
import RevealOnScroll from "../animations/RevealOnScroll"
const Experiment = () => {
    const [activeTab , setActiveTab] = useState('work') 
    return (
        <RevealOnScroll>
            <div className = "w-full h-10 mt-20 text-center">
                <h1 className = "text-4xl font-bold ">My Experiment</h1>
                <div className = "bg-green-200 h-96 mt-15 max-w-5xl m-auto ">
                    <div>
                        <button>Experiment</button>
                        <button>Education</button>
                    </div>
                    <div className = "">

                    </div>
                    
                    
                </div>
            </div>
        </RevealOnScroll>
    )
}
export default Experiment