import person from "../../assets/images/achrefghr.png";
import CV_FR from "../../assets/cv/Achref_Ghribi_CV.pdf";
import CV_EN from "../../assets/cv/Achref_Ghribi_Resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="Achref Ghribi"
            />
          </div>

          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Texte et boutons */}
        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am a Junior Software Engineer
          </h2>

          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p>
              I design and develop modern, scalable, and efficient web applications,
              specializing in creating stylish websites, web services, and online platforms.
            </p>
            <p className="mt-3">
              Skilled in <span className="bg-highlight px-1 rounded">Java, Spring Boot, Angular, .NET, DevOps</span>, 
              I am passionate about delivering high-quality solutions and continuously improving my skills.
            </p>
          </div>

          <div className="mt-8 flex max-md:justify-center gap-4">
            {/* My Projects Button */}
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary flex items-center gap-2 text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://github.com/ghribiachref"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFolderOpen} /> My Projects
            </a>

            {/* Download CV Dropdown */}
            <div className="relative group inline-block text-left">
              <button className="btn btn-primary flex items-center gap-2 xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 text-xs xxs:text-[14px] sm:text-[16px]">
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </button>

              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-max bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <a
                  href={CV_FR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary block text-left w-full px-6 py-3 text-xs xxs:text-[14px] sm:text-[16px] hover:bg-picto-primary hover:text-white rounded-none"
                >
                  CV Français
                </a>
                <a
                  href={CV_EN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary block text-left w-full px-6 py-3 text-xs xxs:text-[14px] sm:text-[16px] hover:bg-picto-primary hover:text-white rounded-none"
                >
                  CV English
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
