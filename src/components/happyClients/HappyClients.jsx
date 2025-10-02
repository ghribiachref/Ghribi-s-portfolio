import Marquee from "react-fast-marquee";

// Import de toutes les images selon vos noms de fichiers
import javaLogo from "../../assets/logos/java.jpeg";
import springBootLogo from "../../assets/logos/spring-boot.png";
import dotnetLogo from "../../assets/logos/dotnet.webp";
import angularLogo from "../../assets/logos/Angular.png";
import gitLogo from "../../assets/logos/git.jpg";
import dockerLogo from "../../assets/logos/dockerhub.png";
import jenkinsLogo from "../../assets/logos/jenkins.png";
import grafanaLogo from "../../assets/logos/grafana.png";
import sonarqubeLogo from "../../assets/logos/sonarqube.png";
import mockitoLogo from "../../assets/logos/mockito.jpg";
import junitLogo from "../../assets/logos/junit.png";
import mysqlLogo from "../../assets/logos/Mysql.png";
import prometheusLogo from "../../assets/logos/prometheus.png";
import swaggerLogo from "../../assets/logos/swagguer.png";

const skills = [
  { name: "Java", icon: javaLogo },
  { name: "Spring Boot", icon: springBootLogo },
  { name: ".NET", icon: dotnetLogo },
  { name: "MySQL", icon: mysqlLogo },
  { name: "Swagger", icon: swaggerLogo },
  { name: "Angular", icon: angularLogo },
  { name: "Jenkins", icon: jenkinsLogo },
  { name: "Git", icon: gitLogo },
  { name: "Docker", icon: dockerLogo },
  { name: "Prometheus", icon: prometheusLogo },
  { name: "Grafana", icon: grafanaLogo },
  { name: "SonarQube", icon: sonarqubeLogo },
  { name: "Mockito", icon: mockitoLogo },
  { name: "JUnit", icon: junitLogo },
  
  
  
 
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Technologies & Tools</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I work with a comprehensive stack of modern technologies and development tools.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={80} className="mt-8">
        <div className="flex items-center py-4">
          {/* Espace au début */}
          <div className="w-16 md:w-24 lg:w-32" />
          
          {skills?.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110 mx-4 md:mx-8"
              title={skill.name}
            >
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 object-contain transition-all duration-300"
              />
              
            </div>
          ))}
          
          
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;