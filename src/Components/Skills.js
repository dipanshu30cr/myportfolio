
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact, faJs, faHtml5, faCss3Alt, faBootstrap, faAndroid } from '@fortawesome/free-brands-svg-icons';
import techs from '../Assets/Technologies2.webp';

function Skills() {
    const technologies = [
        { name: 'SSMS', icon: faDatabase },
        { name: 'MySQL', icon: faDatabase },
        { name: 'PostgreSQL', icon: faDatabase },
        { name: 'Java', icon: faJava },
        { name: 'C#', icon: faCode },
        { name: 'HTML', icon: faHtml5 },
        { name: 'Thymeleaf', icon: faCode },
        { name: 'Android Studio', icon: faAndroid },
        { name: 'CSS', icon: faCss3Alt },
        { name: 'Bootstrap', icon: faBootstrap },
        { name: 'Tailwind CSS', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJs },
        { name: 'React JS', icon: faReact },
        { name: 'Kafka', icon: faServer },
        { name: 'OpenFeign', icon: faCode },
        { name: 'Axios', icon: faCode },
        { name: 'Api Gateway', icon: faServer },
        { name: '.NET', icon: faCode },
        { name: 'Spring Boot', icon: faCode },
        { name: 'Web Forms', icon: faCode },
        { name: 'MVC', icon: faCode },
        { name: 'Microservice', icon: faServer },
        { name: 'Monolithic', icon: faServer },
        { name: 'Postman (JSON)', icon: faCode },
        { name: 'JARVIS', icon: faCode },
        { name: 'Python', icon: faCode },
        { name: 'Django', icon: faCode },
    ];

    return (
        <div className="p-4 sm:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">My Expertise</h2>
            <section>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
                    <div className="w-full sm:w-2/3 text-center flex flex-col justify-center items-center">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {technologies.map((tech, index) => (
                                <button
                                    key={index}
                                    className="flex items-center bg-white border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 text-sm md:text-base font-medium shadow-md transition-transform transform hover:bg-gray-100 hover:border-gray-500 hover:text-gray-900 hover:scale-105"
                                    style={{ 
                                        background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)' 
                                    }}
                                >
                                    <FontAwesomeIcon icon={tech.icon} className="mr-2 text-lg md:text-xl" />
                                    {tech.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start h-1/3">
                        <img 
                            src={techs} 
                            alt="Technologies" 
                            className="w-64 h-64 md:w-80 md:h-80 max-w-full rounded-full border-4 border-red-500 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105" 
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;
