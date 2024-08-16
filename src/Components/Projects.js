// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// const projects = [
//     { title: 'Project One', description: 'Description of Project One', github: 'https://github.com/username/project-one' },
//     { title: 'Project Two', description: 'Description of Project Two', github: 'https://github.com/username/project-two' },
//     { title: 'Project Three', description: 'Description of Project Three', github: 'https://github.com/username/project-three' },
//     { title: 'Project Four', description: 'Description of Project Four', github: 'https://github.com/username/project-four' },
//     { title: 'Project Five', description: 'Description of Project Five', github: 'https://github.com/username/project-five' },
//     { title: 'Project Six', description: 'Description of Project Six', github: 'https://github.com/username/project-six' },
//     { title: 'Project Seven', description: 'Description of Project Seven', github: 'https://github.com/username/project-seven' },
//     { title: 'Project Eight', description: 'Description of Project Eight', github: 'https://github.com/username/project-eight' },
//     { title: 'Project Nine', description: 'Description of Project Nine', github: 'https://github.com/username/project-nine' },
//     { title: 'Project Ten', description: 'Description of Project Ten', github: 'https://github.com/username/project-ten' },
// ];

// function Projects() {
//     return (
//         <div 
        
//           className="p-8 bg-gradient-to-r from-blue-100 to-purple-100">
//             <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//                 {projects.map((project, index) => (
//                     <div key={index} className=" p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
//                     style={{ 
//                         background: 'linear-gradient(to bottom, white, #c2e9fb)' 
//                     }}
//                     >
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
//                         <p className="text-gray-600 mb-4">{project.description}</p>
//                         <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-red-500 hover:text-blue-500">
//                             <FontAwesomeIcon icon={faGithub} className="mr-2" />
//                             View Source Code
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Projects;





import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
    { title: 'Pet Shop Springboot', github: 'https://github.com/dipanshu30cr/PetSpringboot/tree/main' },
    { title: 'Microservices Springboot', github: 'https://github.com/dipanshu30cr/Microservice_Project' },
    { title: 'Inventory Springboot', github: 'https://github.com/dipanshu30cr/inventory_u3' },
    { title: 'Tip Calculator', github: 'https://github.com/dipanshu30cr/Tip' },
    { title: 'Pet Shop- .NET', github: 'https://github.com/dipanshu30cr/Pet_Shop_Admin_Use' },
    { title: 'Student Management System', github: 'https://github.com/dipanshu30cr/student-management-mvc' },
     { title: 'Authentication -Form', github: 'https://github.com/dipanshu30cr/Login-Form' },
    // { title: 'Project Eight', github: 'https://github.com/username/project-eight' },
    // { title: 'Project Nine', github: 'https://github.com/username/project-nine' },
    // { title: 'Project Ten', github: 'https://github.com/username/project-ten' },
];

function Projects() {
    return (
        <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-100 to-purple-100">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 text-center"
                        style={{
                            background: 'linear-gradient(to bottom, white, #c2e9fb)',
                            width: '150px', // Make the width smaller to resemble a button
                        }}
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center font-semibold text-red-500 hover:text-blue-500 text-sm"
                        >
                            <FontAwesomeIcon icon={faGithub} className="mr-1" />
                            Source Code
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
