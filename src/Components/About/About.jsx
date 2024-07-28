import React from 'react';
import 'animate.css/animate.min.css';

const aboutData = [
  {
    name: 'John Doe',
    title: 'Senior Lawyer',
    image: 'https://via.placeholder.com/150',
    description: 'John has over 20 years of experience in corporate law. He has represented numerous clients in high-profile cases.',
  },
  {
    name: 'Jane Smith',
    title: 'Associate Lawyer',
    image: 'https://via.placeholder.com/150',
    description: 'Jane specializes in family law and has helped many clients navigate complex legal issues with compassion and expertise.',
  },
  {
    name: 'Mike Johnson',
    title: 'Paralegal',
    image: 'https://via.placeholder.com/150',
    description: 'Mike assists the lawyers with research and documentation, ensuring every case is meticulously prepared.',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <div className="flex flex-wrap justify-center">
          {aboutData.map((person, index) => (
            <div key={index} className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img src={person.image} alt={person.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">{person.name}</h3>
                <p className="text-gray-600">{person.title}</p>
                <p className="text-gray-700 mt-4">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 animate__animated animate__fadeInLeft">
          <img src="https://via.placeholder.com/300" alt="Lawyer" className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4" />
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 text-left">
            <h3 className="text-3xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Senior Lawyer</p>
            <p className="text-gray-700 mt-4">
              John Doe is a highly experienced lawyer with over 20 years of experience in corporate law. He has successfully represented clients in numerous high-profile cases. John is known for his expertise, dedication, and professionalism. He is committed to providing the best legal services and ensuring that his clients achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
