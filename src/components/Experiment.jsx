import { useState } from "react"
import React from "react"
import RevealOnScroll from "../animations/RevealOnScroll"

const Experiment = () => {
    const [activeTab, setActiveTab] = useState('work')
    const experimentData = {
        work: [
            {
                id: 1,
                title: "Hệ thống E-commerce",
                description: "Xây dựng platform thương mại điện tử với tính năng thanh toán đa phương thức và quản lý kho hàng thông minh",
                technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis"]
            },
            {
                id: 2,
                title: "Ứng dụng Quản lý Task",
                description: "Ứng dụng quản lý công việc với real-time collaboration, deadline tracking và báo cáo hiệu suất",
                technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"]
            },
            {
                id: 3,
                title: "AI Content Generator",
                description: "Công cụ tạo content tự động sử dụng GPT API với tính năng tối ưu hóa SEO và phân tích hiệu suất",
                technologies: ["Next.js", "Python", "OpenAI API", "PostgreSQL"]
            }
        ],
        education: [
            {
                id: 1,
                title: "Hệ thống Quản lý Thư viện",
                description: "Dự án học thuật xây dựng hệ thống quản lý thư viện số với module mượn/trả sách và thống kê",
                technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"]
            },
            {
                id: 2,
                title: "Game Tower Defense",
                description: "Game chiến thuật phòng thủ với AI enemy và hệ thống upgrade tower đa dạng",
                technologies: ["C#", "Unity", "Blender"]
            },
            {
                id: 3,
                title: "Mobile Weather App",
                description: "Ứng dụng thời tiết di động với dự báo theo giờ, cảnh báo thời tiết và widget home screen",
                technologies: ["React Native", "OpenWeather API", "Redux"]
            }
        ]
    }

    const currentData = experimentData[activeTab]

    return (
        <RevealOnScroll>
            <div id="Experience" className="w-full mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            My Experience
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Khám phá các dự án và kinh nghiệm thực tế mà tôi đã tích lũy
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Tab buttons */}
                        <div className="flex justify-center space-x-4 mb-8">
                            <button
                                onClick={() => setActiveTab('work')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === 'work' 
                                    ? 'bg-black text-white shadow-md' 
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Work Experience
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === 'education' 
                                    ? 'bg-black text-white shadow-md' 
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Education Projects
                            </button>
                        </div>

                        {/* Content */}
                        <div className="min-h-96">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {currentData.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
                                    >
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {item.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                        
                                        {/* Technologies */}
                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                                Công nghệ sử dụng:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((tech, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Empty state */}
                            {currentData.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">
                                        No {activeTab} experiments found.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    )
}

export default Experiment