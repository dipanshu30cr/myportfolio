// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// function Contact() {
//     const [formData, setFormData] = useState({
//         email: '',
//         query: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.send(
//             'service_s7c4e8r',      // EmailJS service ID
//             'template_el3g7mn',     // EmailJS template ID
//             {
//                 to_name: 'Recipient Name',
//                 from_name: formData.email,
//                 message: formData.query
//             },
//             'af_cnCPLBsbFZ3FqP'        // EmailJS public key
//         ).then((result) => {
//             alert('Message sent successfully!');
//             setFormData({ email: '', query: '' });
//         }, (error) => {
//             alert('Failed to send message, please try again later.');
//             console.error('Error:', error.text);
//         });
//     };

//     return (
//         <div 
        
          
//           className="mt-10 flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Me</h2>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700">Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="query" className="block text-gray-700">Your Query:</label>
//                     <textarea
//                         name="query"
//                         value={formData.query}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 >
//                     Submit
//                 </button>
//             </form>
//             <div className="mt-8 flex space-x-6">
//                 <a href="https://www.instagram.com/dipanshu_30cr?igsh=M2pxdTAyOXkxc3dn" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-800 hover:text-purple-600" />
//                 </a>
//                 <a href="https://www.facebook.com/profile.php?id=100015708817180" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-800 hover:text-purple-600" />
//                 </a>
//                 <a href="https://www.linkedin.com/in/dipanshu-r-6201041b4/" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-800 hover:text-purple-600" />
//                 </a>
//                 <a href="https://github.com/dipanshu30cr" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-800 hover:text-purple-600" />
//                 </a>
//                 <a href="https://wa.me/9536628738" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-gray-800 hover:text-purple-600" />
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default Contact;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        query: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_s7c4e8r',      // EmailJS service ID
            'template_el3g7mn',     // EmailJS template ID
            {
                to_name: 'Recipient Name',
                from_name: formData.email,
                message: formData.query
            },
            'af_cnCPLBsbFZ3FqP'        // EmailJS public key
        ).then((result) => {
            alert('Message sent successfully!');
            setFormData({ email: '', query: '' });
        }, (error) => {
            alert('Failed to send message, please try again later.');
            console.error('Error:', error.text);
        });
    };

    return (
        <div className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-blue-100 to-purple-100">
            {/* Contact Form Section */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-md w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Contact Me</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm md:text-base">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="query" className="block text-gray-700 text-sm md:text-base">Your Query:</label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-medium text-sm md:text-base hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                        Submit
                    </button>
                </form>

                {/* Social Media Icons Section */}
                <div className="mt-8 flex flex-wrap justify-center space-x-6">
                    <a href="https://www.instagram.com/dipanshu_30cr?igsh=M2pxdTAyOXkxc3dn" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl text-gray-800 hover:text-purple-600" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100015708817180" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-xl md:text-2xl text-gray-800 hover:text-purple-600" />
                    </a>
                    <a href="https://www.linkedin.com/in/dipanshu-r-6201041b4/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl text-gray-800 hover:text-purple-600" />
                    </a>
                    <a href="https://github.com/dipanshu30cr" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl text-gray-800 hover:text-purple-600" />
                    </a>
                    <a href="https://wa.me/9536628738" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-xl md:text-2xl text-gray-800 hover:text-purple-600" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
