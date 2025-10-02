import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let's discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <Link
          className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
          to="contact"
          smooth={true}
          duration={900}
        >
          Let's work Together
        </Link>
      </div>
    </div>
  );
};

export default WorkTogether;
