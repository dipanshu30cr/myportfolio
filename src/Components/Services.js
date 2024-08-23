





// import React from 'react';

// function Services() {
//     const services = [
//         {
//             title: 'Android Development',
//             description: 'We offer cutting-edge Android development services to bring your ideas to life, ensuring high performance and user satisfaction.'
//         },
//         {
//             title: 'Web Development',
//             description: 'From responsive websites to complex web applications, we provide comprehensive web development services tailored to your needs.'
//         },
//         {
//             title: 'Backend Development',
//             description: 'Our backend development ensures robust, secure, and scalable solutions for all your data and application needs.'
//         },
//         {
//             title: 'Security Services',
//             description: 'Protect your data and systems with our top-notch security services, including risk management and threat analysis.'
//         },
//         {
//             title: 'Cloud Services',
//             description: 'Harness the power of the cloud with our services that offer flexibility, scalability, and efficiency.'
//         },
//         {
//             title: 'Technology Training',
//             description: 'Enhance your team’s skills with our expert-led technology training in the latest industry standards.'
//         }
//     ];

//     return (
//         <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
//             <section className="mt-12 md:mt-16">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">My Services</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {services.map((service, index) => (
//                         <div 
//                             key={index} 
//                             className="p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
//                             style={{ 
//                               background: 'linear-gradient(to bottom, white, #c2e9fb)' 
//                             }}
//                         >
//                             <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
//                             <p className="text-gray-600 text-sm sm:text-base">
//                                 {service.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Services;








import React from 'react';

function Services() {
    const services = [
        {
            title: 'Android Development',
            description: 'We offer cutting-edge Android development services to bring your ideas to life, ensuring high performance and user satisfaction.'
        },
        {
            title: 'Web Development',
            description: 'From responsive websites to complex web applications, we provide comprehensive web development services tailored to your needs.'
        },
        {
            title: 'Backend Development',
            description: 'Our backend development ensures robust, secure, and scalable solutions for all your data and application needs.'
        },
        {
            title: 'Security Services',
            description: 'Protect your data and systems with our top-notch security services, including risk management and threat analysis.'
        },
        {
            title: 'Cloud Services',
            description: 'Harness the power of the cloud with our services that offer flexibility, scalability, and efficiency.'
        },
        {
            title: 'Technology Training',
            description: 'Enhance your team’s skills with our expert-led technology training in the latest industry standards.'
        },
        {
            title: 'AI Services',
            description: 'We do AI based services such as security, assistant, voice, recognizer etc. '
        }
    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
            <section className="mt-12 md:mt-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center tracking-wide">My Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:bg-gradient-to-r from-blue-50 to-purple-50"
                            style={{ 
                                background: 'linear-gradient(to bottom, white, #e0f7fa)' 
                            }}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-red-500 pb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Services;
