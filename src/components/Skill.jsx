import { useState } from "react"
import React from "react"

const MySkill = () => {
    const [activeCategory, setActiveCategory] = useState('frontend')
    const [hoveredSkill, setHoveredSkill] = useState(null)
    
    const skillsData = {
        frontend: [
            { name: "React.js", level: 90, icon: "⚛️", color: "from-blue-400 to-blue-600", years: 3 },
            { name: "JavaScript", level: 95, icon: "🟨", color: "from-yellow-400 to-yellow-600", years: 4 },
            { name: "HTML/CSS", level: 98, icon: "🎨", color: "from-orange-400 to-orange-600", years: 5 },
            { name: "Tailwind CSS", level: 88, icon: "💨", color: "from-teal-400 to-teal-600", years: 2 }
        ],
        backend: [
            { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-green-700", years: 3 },
            { name: "Express.js", level: 80, icon: "🚂", color: "from-gray-500 to-gray-700", years: 3 },
            { name: "MongoDB", level: 78, icon: "🍃", color: "from-green-400 to-green-600", years: 2 }
        ],
        mobile: [
            { name: "React Native", level: 82, icon: "📱", color: "from-purple-400 to-purple-600", years: 2 },
            { name: "Flutter", level: 65, icon: "🎯", color: "from-blue-400 to-cyan-500", years: 1 }
        ],
        tools: [
            { name: "Git/GitHub", level: 90, icon: "📚", color: "from-gray-600 to-gray-800", years: 4 },
            { name: "Docker", level: 70, icon: "🐳", color: "from-blue-500 to-blue-700", years: 1 },
            { name: "VS Code", level: 95, icon: "💻", color: "from-blue-400 to-blue-600", years: 5 }
        ]
    }

    const currentSkills = skillsData[activeCategory]

    const SkillCard = ({ skill, index }) => (
        <div 
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
        >
            {/* Subtle overlay on hover (neutral to match Header) */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-6">
                {/* Icon and Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gray-900 text-white flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {skill.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-all duration-300">
                                {skill.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {skill.years} năm kinh nghiệm
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                            {skill.level}%
                        </div>
                    </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                        className="absolute inset-y-0 left-0 bg-black rounded-full shadow-md transition-all duration-1000 ease-out"
                        style={{ 
                            width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                            transition: hoveredSkill === skill.name ? 'width 1s ease-out' : 'width 0.5s ease-in'
                        }}
                    >
                        <div className="absolute inset-0 bg-white/10"></div>
                    </div>
                </div>
                
                {/* Skill Level Description */}
                <div className="mt-3 text-xs text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.level >= 90 ? '⭐ Expert' : skill.level >= 80 ? '🔥 Advanced' : skill.level >= 70 ? '💪 Proficient' : '📚 Intermediate'}
                </div>
            </div>
        </div>
    )

    return (
         <div id="skill" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                 <div className="text-center mb-16" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
                     <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 mb-4">
                        My Skills
                    </h1>
                     <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Tổng hợp các kỹ năng và công nghệ mà tôi đã tích lũy qua nhiều dự án thực tế
                    </p>
                    
                    {/* Decorative Line */}
                     <div className="flex items-center justify-center gap-2 mt-8">
                         <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                         <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded"></div>
                    </div>
                </div>

                {/* Category Tabs */}
                 <div 
                     className="flex flex-wrap justify-center gap-3 mb-16"
                    style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
                >
                     {[
                         { key: 'frontend', label: 'Frontend', icon: '💻' },
                         { key: 'backend', label: 'Backend', icon: '⚙️' },
                         { key: 'mobile', label: 'Mobile', icon: '📱' },
                         { key: 'tools', label: 'Dev Tools', icon: '🛠️' }
                     ].map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                             className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                                 activeCategory === category.key 
                                 ? 'bg-black text-white shadow-lg' 
                                 : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                             }`}
                        >
                             <span className="text-xl">{category.icon}</span>
                             {category.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    {currentSkills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* Bottom Section */}
                 <div className="grid lg:grid-cols-2 gap-8" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                    {/* Programming Languages */}
                     <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                             <span className="mr-3 text-3xl">🌐</span>
                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                                Programming Languages
                            </span>
                        </h3>
                        <div className="space-y-5">
                            {[
                                 { name: "JavaScript/TypeScript", level: 90 },
                                 { name: "Python", level: 75 },
                                 { name: "Java", level: 60 },
                                 { name: "SQL", level: 80 },
                                 { name: "HTML/CSS", level: 95 }
                            ].map((lang) => (
                                <div key={lang.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                            {lang.name}
                                        </span>
                                        <span className="text-sm font-bold text-gray-500">
                                            {lang.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                         <div className="h-full bg-black rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg" style={{ width: `${lang.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                     <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                             <span className="mr-3 text-3xl">💼</span>
                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                                Soft Skills
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { skill: "Problem Solving", icon: "🧩" },
                                { skill: "Team Leadership", icon: "👥" },
                                { skill: "Agile Methodology", icon: "🚀" },
                                { skill: "Communication", icon: "💬" },
                                { skill: "Project Management", icon: "📊" },
                                { skill: "Creative Thinking", icon: "💡" },
                                { skill: "Time Management", icon: "⏰" },
                                { skill: "Mentoring", icon: "🎓" }
                            ].map((item) => (
                                 <div 
                                     key={item.skill}
                                     className="group relative bg-gray-50 px-4 py-4 rounded-xl text-center font-medium transition-all duration-300 cursor-pointer border border-gray-200 hover:bg-gray-100 hover:shadow-lg overflow-hidden"
                                 >
                                    <div className="relative z-10">
                                        <div className="text-2xl mb-1 transform group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                         <div className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                                            {item.skill}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkill