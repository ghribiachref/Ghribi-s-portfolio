import { faArrowRight, faCode, faLayerGroup, faXmark, faPlay, faExpand, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Projects = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [zoomMedia, setZoomMedia] = useState(null);
  const [mediaType, setMediaType] = useState(""); // "image" or "video"

  const openZoom = (media, type) => {
    setZoomMedia(media);
    setMediaType(type);
  };

  const closeZoom = () => {
    setZoomMedia(null);
    setMediaType("");
  };

  const playVideo = () => {
    setShowVideo(true);
  };

  // Function to extract Vimeo video ID from URL
  const getVimeoId = (url) => {
    const match = url.match(/(?:vimeo\.com\/)(\d+)/);
    return match ? match[1] : null;
  };

  // Function to open video in new tab
  const openVideoInNewTab = () => {
    if (data.video) {
      window.open(data.video, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Project Card - Simple View */}
      <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 hover:scale-[1.02]">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img 
            src={data?.image} 
            alt={`${data?.title} image`}
            className="w-full h-48 object-cover"
          />
          
          {/* Technology Tags */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {data.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="bg-white bg-opacity-90 text-xs px-2 py-1 rounded text-gray-700 font-medium"
              >
                {tech}
              </span>
            ))}
            {data.technologies.length > 3 && (
              <span className="bg-white bg-opacity-90 text-xs px-2 py-1 rounded text-gray-700 font-medium">
                +{data.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Video Indicator */}
          {data.video && (
            <div className="absolute top-2 right-2 bg-picto-primary text-white p-2 rounded-full">
              <FontAwesomeIcon icon={faPlay} size="sm" />
            </div>
          )}
        </div>

        {/* Project Details - Simple */}
        <div className="p-4 xs:p-6">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
            {data?.category}
          </p>
          
          <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-2">
            {data?.title}
          </p>
          
          <p className="text-gray-600 text-xs xxs:text-[14px] leading-relaxed mb-4 line-clamp-3">
            {data?.description}
          </p>

          {/* Action Button */}
          <button
            onClick={() => setShowModal(true)}
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 w-full border border-gray-300 rounded-lg py-3"
          >
            View Case Study
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} size="l" />
            </span>
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-6xl w-full max-h-[95vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                  {data?.category}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">{data?.title}</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Main Project Image/Video */}
              <div className="mb-8">
                <div className="relative group">
                  <img 
                    src={data?.image} 
                    alt={`${data?.title} main image`}
                    className="w-full h-80 object-cover rounded-lg cursor-pointer shadow-md"
                    onClick={() => openZoom(data.image, "image")}
                  />
                  <button
                    onClick={() => openZoom(data.image, "image")}
                    className="absolute top-3 right-3 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <FontAwesomeIcon icon={faExpand} className="text-gray-700" />
                  </button>
                  
                  {/* Video Play Button */}
                  {data.video && (
                    <button
                      onClick={playVideo}
                      className="absolute inset-0 m-auto bg-white bg-opacity-90 hover:bg-opacity-100 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faPlay} className="text-picto-primary text-xl ml-1" />
                    </button>
                  )}
                </div>
              </div>

              {/* Video Player Section */}
              {showVideo && data.video && (
                <div className="mb-8 bg-gray-100 rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-gray-800 text-xl font-semibold">Project Demo Video</h4>
                    <div className="flex gap-2">
                      <button
                        onClick={openVideoInNewTab}
                        className="flex items-center gap-2 text-picto-primary hover:text-picto-primary-dark text-sm font-semibold"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Open in New Tab
                      </button>
                      <button
                        onClick={() => setShowVideo(false)}
                        className="text-gray-500 hover:text-gray-700 text-lg ml-4"
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Vimeo Embed */}
                  {getVimeoId(data.video) ? (
                    <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                      <iframe
                        src={`https://player.vimeo.com/video/${getVimeoId(data.video)}`}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={`${data.title} Demo Video`}
                      ></iframe>
                    </div>
                  ) : (
                    // Fallback for non-Vimeo URLs (like Google Drive)
                    <div className="text-center p-8 bg-gray-200 rounded-lg">
                      <p className="text-gray-600 mb-4">Video hosted externally</p>
                      <button
                        onClick={openVideoInNewTab}
                        className="btn btn-primary py-2 px-6 text-center text-sm font-semibold"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                        Watch Video on {data.video.includes('vimeo') ? 'Vimeo' : 'External Platform'}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Additional Images Gallery */}
              {data.additionalImages && data.additionalImages.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Project Gallery</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.additionalImages.map((img, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={img}
                          alt={`${data.title} screenshot ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                          onClick={() => openZoom(img, "image")}
                        />
                        <button
                          onClick={() => openZoom(img, "image")}
                          className="absolute top-1 right-1 bg-white bg-opacity-80 hover:bg-opacity-100 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <FontAwesomeIcon icon={faExpand} size="xs" className="text-gray-700" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Description */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Project Overview</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data?.description}
                </p>
              </div>

              {/* Full Technologies List */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faCode} className="text-picto-primary text-xl" />
                  <h4 className="text-xl font-semibold text-gray-800">Technologies Used</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-picto-primary to-purple-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* All Key Features */}
              {data.features && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={faLayerGroup} className="text-picto-primary text-xl" />
                    <h4 className="text-xl font-semibold text-gray-800">Key Features</h4>
                  </div>
                  <ul className="space-y-3">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-picto-primary mr-3 mt-1 text-lg">•</span>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Video Link Section (if video exists but not showing player) */}
              {data.video && !showVideo && (
                <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800">Video Demo Available</h4>
                      <p className="text-blue-600 text-sm">Watch the project demonstration</p>
                    </div>
                    <button
                      onClick={playVideo}
                      className="btn btn-primary py-2 px-6 text-center text-sm font-semibold flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faPlay} />
                      Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Zoom Modal for Images */}
      {zoomMedia && mediaType === "image" && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4">
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={closeZoom}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img
              src={zoomMedia}
              alt="Zoomed view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;