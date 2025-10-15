import { useState } from "react"
import React from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"
import RevealOnScroll from "../animations/RevealOnScroll"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, cardHover } from "../animations/animations"

const MyContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        timeline: '',
        projectType: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    // Scroll animation refs
    const headerRef = useRef(null)
    const contactInfoRef = useRef(null)
    const formRef = useRef(null)
    const statsRef = useRef(null)
    
    const headerControls = useAnimation()
    const contactInfoControls = useAnimation()
    const formControls = useAnimation()
    const statsControls = useAnimation()
    
    const headerInView = useInView(headerRef, { once: true, threshold: 0.3 })
    const contactInfoInView = useInView(contactInfoRef, { once: true, threshold: 0.3 })
    const formInView = useInView(formRef, { once: true, threshold: 0.3 })
    const statsInView = useInView(statsRef, { once: true, threshold: 0.3 })
    
    // Trigger animations when in view
    React.useEffect(() => {
        if (headerInView) headerControls.start("visible")
        if (contactInfoInView) contactInfoControls.start("visible")
        if (formInView) formControls.start("visible")
        if (statsInView) statsControls.start("visible")
    }, [headerInView, contactInfoInView, formInView, statsInView, headerControls, contactInfoControls, formControls, statsControls])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ 
            name: '', 
            email: '', 
            phone: '', 
            company: '', 
            budget: '', 
            timeline: '', 
            projectType: '', 
            message: '' 
        })
        
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    const contactInfo = [
        {
            icon: "📧",
            title: "Email Address",
            value: "Lhmp8686@gmail.com",
            description: "Gửi email cho tôi bất kỳ lúc nào",
            link: "mailto:Lhmp8686@gmail.com",
            color: "from-red-500 to-pink-500",
            bgColor: "bg-red-50"
        },
        {
            icon: "📱",
            title: "Phone Number",
            value: "0981 46 0071",
            description: "Gọi trực tiếp cho tôi",
            link: "tel:0981460071",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50"
        },
        {
            icon: "💬",
            title: "Social Media",
            value: "@minhphu",
            description: "Nhắn tin trên mạng xã hội",
            link: "#social",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50"
        },
        {
            icon: "📍",
            title: "Office Location",
            value: "Di An, Ho Chi Minh City",
            description: "Đến gặp trực tiếp",
            link: "#",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-purple-50"
        }
    ]

    const socialNetworks = [
        {
            name: "LinkedIn",
            icon: "💼",
            url: "https://linkedin.com/in/minhphu",
            username: "@minhphu",
            color: "hover:bg-blue-600 border-blue-200"
        },
        {
            name: "GitHub",
            icon: "🐙",
            url: "https://github.com/minhphu",
            username: "@minhphu",
            color: "hover:bg-gray-800 border-gray-200"
        },
        {
            name: "Facebook",
            icon: "📘",
            url: "https://facebook.com/minhphu",
            username: "@minhphu",
            color: "hover:bg-blue-500 border-blue-200"
        },
        {
            name: "Twitter",
            icon: "🐦",
            url: "https://twitter.com/minhphu",
            username: "@minhphu",
            color: "hover:bg-sky-500 border-sky-200"
        },
        {
            name: "Instagram",
            icon: "📷",
            url: "https://instagram.com/minhphu",
            username: "@minhphu",
            color: "hover:bg-pink-500 border-pink-200"
        },
        {
            name: "YouTube",
            icon: "📺",
            url: "https://youtube.com/minhphu",
            username: "@minhphu",
            color: "hover:bg-red-600 border-red-200"
        }
    ]

    const projectTypes = [
        "Web Development",
        "Mobile App",
        "UI/UX Design",
        "E-commerce",
        "API Development",
        "System Architecture",
        "Consulting",
        "Other"
    ]

    const budgets = [
        "Under $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000+"
    ]

    const timelines = [
        "Within 1 month",
        "1-3 months",
        "3-6 months",
        "6+ months",
        "Flexible"
    ]

    return (
        <RevealOnScroll>
            <div id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div 
                        ref={headerRef}
                        initial="hidden"
                        animate={headerControls}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ và cùng nhau biến ý tưởng thành hiện thực.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Contact Information */}
                        <motion.div
                            ref={contactInfoRef}
                            initial="hidden"
                            animate={contactInfoControls}
                            variants={fadeInLeft}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="mr-3 text-4xl">👋</span>
                                    Let's Connect!
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    Tôi luôn sẵn sàng lắng nghe về dự án của bạn. Dù là một ý tưởng nhỏ 
                                    hay một hệ thống phức tạp, hãy cùng nhau thảo luận để tìm ra giải pháp tốt nhất.
                                </p>

                                {/* Contact Methods Grid */}
                                <div className="grid gap-4">
                                    {contactInfo.map((contact, index) => (
                                        <a
                                            key={index}
                                            href={contact.link}
                                            className={`${contact.bgColor} border border-gray-200 rounded-xl p-4 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-105`}
                                        >
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center text-white text-xl`}>
                                                {contact.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                                                <p className="text-gray-600">{contact.value}</p>
                                                <p className="text-sm text-gray-500">{contact.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Networks */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="mr-2">🌐</span>
                                    Follow My Journey
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {socialNetworks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`border rounded-lg p-3 text-center transition-all duration-300 transform hover:scale-105 hover:text-white ${social.color}`}
                                        >
                                            <div className="text-2xl mb-1">{social.icon}</div>
                                            <div className="text-xs font-medium">{social.name}</div>
                                            <div className="text-xs text-gray-500 mt-1">{social.username}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            ref={formRef}
                            initial="hidden"
                            animate={formControls}
                            variants={fadeInRight}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="mr-3 text-4xl">💼</span>
                                Project Inquiry
                            </h2>

                            {isSubmitted && (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                                    <span className="text-xl mr-3">🎉</span>
                                    <div>
                                        <div className="font-semibold">Thank you for your message!</div>
                                        <div className="text-sm">I'll get back to you within 24 hours.</div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                            placeholder="+84 123 456 789"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Project Type *
                                        </label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Select type</option>
                                            {projectTypes.map((type, index) => (
                                                <option key={index} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Select budget</option>
                                            {budgets.map((budget, index) => (
                                                <option key={index} value={budget}>{budget}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Timeline
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Select timeline</option>
                                            {timelines.map((timeline, index) => (
                                                <option key={index} value={timeline}>{timeline}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project, goals, requirements, and any specific features you need..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                                        isSubmitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                            Sending Message...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <span className="mr-3 text-xl">🚀</span>
                                            Send Project Inquiry
                                        </div>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    
                </div>
            </div>
        </RevealOnScroll>
    )
}

export default MyContact