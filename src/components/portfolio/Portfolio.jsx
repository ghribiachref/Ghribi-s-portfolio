import Projects from "./Projects";
import project1 from "../../assets/images/portfolio-images/SG.png";
import project1a from "../../assets/images/portfolio-images/SG-jenkins.png";
import project1b from "../../assets/images/portfolio-images/SG-prometheus.png";
import project1c from "../../assets/images/portfolio-images/SG-grafana.png";
import project1d from "../../assets/images/portfolio-images/SG-docker.png";
import project1e from "../../assets/images/portfolio-images/SG-alert.png";
import project1f from "../../assets/images/portfolio-images/SG-sonar.png";
import project1g from "../../assets/images/portfolio-images/SG-metrics.png";

import CC from "../../assets/images/portfolio-images/CC.jpg";
import CC1 from "../../assets/images/portfolio-images/CC1.jpg";
import CC2 from "../../assets/images/portfolio-images/CC2.jpg";

import WW from "../../assets/images/portfolio-images/WW.png";
import WW1 from "../../assets/images/portfolio-images/WW1.png";
import WW2 from "../../assets/images/portfolio-images/WW2.png";
import WW3 from "../../assets/images/portfolio-images/WW3.png";

const projectData = [
  {
    id: 1,
    image: project1,
    category: "FULL-STACK DEVELOPMENT",
    title: "Real-time Production Monitoring Portal",
    description:  "Developed and deployed an enterprise-grade real-time production monitoring portal for industrial operations. The platform enables factories to track production performance, identify downtime causes, and optimize efficiency. It integrates interactive dashboards, live KPIs (OEE, TRG, availability, quality rate), automated alerts, and monthly reporting. Built with a microservices-oriented backend, a responsive frontend, and CI/CD pipelines to ensure scalability, maintainability, and continuous delivery.",
     technologies: [
    "Spring Boot",
    "Angular 17", 
    "CI/CD",  
    "Spring Security (JWT)", 
    "MySQL", 
    "Micrometer", 
    "Prometheus", 
    "Grafana", 
    "Docker",  
    "Jenkins",  
    "Agile Scrum"
  ],
    features: [
    "📊 Real-time monitoring of production lines with live KPIs (OEE, TRG, downtime, defect rate, operator activity)",
    "📈 Interactive dashboards with advanced filtering and data visualization",
    "🔔 Automatic alerts and notifications for downtime or threshold breaches",
    "🗂️ Monthly reporting & PDF export for management",
    "⚡ WebSocket integration for live updates without refresh",
    "🛡️ Secure authentication and authorization with JWT",
    "🗃️ Database optimization for high-volume production data",
    "⚙️ CI/CD pipeline with Jenkins for automated builds and deployments",
    "🐳 Containerized environment using Docker",
    "📌 Collaboration and task management following Agile Scrum methodology"
  ],
    additionalImages: [project1a, project1b, project1c, project1d, project1e, project1f, project1g],
    video: "https://vimeo.com/1123994536?share=copy",
    link: "#project1-details"
  },
  {
  id: 2,
  image: CC1, 
  category: "FULL-STACK DEVELOPMENT",
  title: "CocoEsprit – Student Housing & Carpooling Platform",
  description: 
    "Designed and developed a web application for ESPRIT students to simplify housing and carpooling services. The platform allows students to search for housing offers, propose/accept carpooling rides, and manage bookings. The goal was to foster student collaboration and provide cost-effective solutions for transportation and accommodation. Built with a secure Spring Boot backend and a responsive Angular frontend, the system ensures efficient data management and a smooth user experience.",
  
  technologies: [
    "Spring Boot",
    "Spring Security (JWT)",
    "Angular",
    "MySQL",
    "Agile Scrum"
  ],

  features: [
    "🏠 Housing module with listing, search, and filtering",
    "🚗 Carpooling service with ride creation, booking, and management",
    "👥 User authentication and authorization with JWT",
    "🔍 Advanced search and filtering by location, price, and availability",
    "📱 Responsive UI with Angular",
    "🗃️ Relational database integration with MySQL",
    "📌 Agile Scrum methodology with iterative delivery"
  ],

  additionalImages: [CC, CC1, CC2],

   video: "https://vimeo.com/1123994467?share=copy",
  link: "#project2-details"
},
{
  id: 3,
  image: WW,
  category: "FULL-STACK DEVELOPMENT",
  title: "WoodWorld – E-commerce Platform",
  description: 
    "Developed a full-featured e-commerce platform specialized in wooden products, built with Spring Boot (backend) and Angular (frontend). The system supports user management, product catalog, order processing, and complaint handling. Secure authentication and authorization were implemented using Spring Security with JWT. The project provided a scalable and user-friendly solution for managing online sales, ensuring both security and efficiency in the customer experience.",
  
  technologies: [
    "Spring Boot",
    "Spring Security (JWT)",
    "Angular",
    "MySQL",

  ],

  features: [
    "👤 User account creation, authentication, and profile management",
    "🛒 Product catalog with CRUD operations and category management",
    "📦 Order management ",
    "📨 Complaint and response management system",
    "🛡️ Secure authentication and authorization with JWT",
    "📱 Responsive user interface built with Angular",
    "🗃️ Database integration and optimization with MySQL"
  ],

  additionalImages: [WW1, WW2, WW3],

  video: null,

  link: "#project3-details"
},


];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">My Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in full-stack development, 
            DevOps, and creating user-centric applications with modern technologies.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <a
          href="#contact"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Portfolio;