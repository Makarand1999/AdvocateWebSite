import React from 'react';
import 'animate.css/animate.min.css';
import AboutImg from"../../Assets/Images/AdvMane.jpg"
import ManrProfile from "../../Assets/Images/ManeProfile.jpg"
const aboutData = [
  {
    name: 'Sachin Yashwantrao Mane',
    title: 'Senior Lawyer',
    image:ManrProfile,
    description: 'Adv Mane has over 20 years of experience in corporate law. He has represented numerous clients in high-profile cases.',
  },
  {
    name: 'Jane Smith',
    title: 'Associate Lawyer',
    image: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png',
    description: 'Jane specializes in family law and has helped many clients navigate complex legal issues with compassion and expertise.',
  },
  {
    name: 'Mike Johnson',
    title: 'Paralegal',
    image: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png',
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
          <img src={AboutImg} alt="Lawyer" className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4" />
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 text-left">
            <h3 className="text-3xl font-semibold">Sachin Yashwantrao Mane
            </h3>
            <p className="text-gray-600">Senior Lawyer</p>
            <p className="text-gray-700 mt-4">
              Adv. Mane is a highly experienced lawyer with over 20 years of experience in corporate law. He has successfully represented clients in numerous high-profile cases. John is known for his expertise, dedication, and professionalism. He is committed to providing the best legal services and ensuring that his clients achieve their goals.
              Different legal jurisdictions have different requirements for determining who is recognized as a lawyer. As a result, the meaning of the term "lawyer" may vary from place to place.

Some jurisdictions have two types of lawyers: barristers and solicitors, while others fuse the two. A barrister (also known as an advocate or counselor in some jurisdictions) is a lawyer who typically specializes in arguing before courts, particularly in higher courts. A solicitor (or attorney) is a lawyer who is trained to prepare cases and give advice on legal subjects. Depending on jurisdiction, solicitors can also represent people in lower courts but do not ordinarily have rights of audience in higher courts. Both solicitors and barristers are trained in law. However, in jurisdictions where there is a split profession, only barristers are admitted as members of a bar association.

Additionally, England and Wales have many other classifications of lawyers, which include registered foreign lawyers, patent attorneys, trademark attorneys, licensed conveyancers, public notaries, commissioners for oaths, immigration advisers and chartered legal executives. Under the English Legal Services Act 2007, "lawyer" is not a protected title. In other jurisdictions, like the United States, there are strict restrictions on who may call themselves a lawyer, with paralegals and patent agents generally disallowed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
