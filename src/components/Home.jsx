import { useEffect, useState } from 'react';
import projectsData from './projectsData';


// project image on home page
const ProjectThumbnail = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project.id)}
      className=" rounded-md p-2 shadow-md cursor-pointer border-[2px] border-gray-300 border-dashed transition duration-200">
      <img src={project.mainImage} alt={project.title} className="w-full h-auto max-w-[900px] max-h-[700px] rounded-md" />
    </div>
  );
};

// Projects Show Case
const ProjectShowcase = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex ] = useState(0)

  const mediaItems = [
    ...(project.video ? [{ type: 'video', src: project.video }] : []),
    ...project.images.map(img => ({ type: 'image', src: img }))
  ]

  const imageClick = (e) => {
    const imageWidth = e.currentTarget.offsetWidth
    const clickX = e.nativeEvent.offsetX
    const zoneWidth = imageWidth / 4

    // Click on left of image 
    if(clickX < zoneWidth) {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : mediaItems.length - 1)
    }
    // Click on right of image
    else if (clickX > zoneWidth * 3) {
      setCurrentIndex(currentIndex < mediaItems.length - 1 ? currentIndex + 1 : 0)
    }
  }

  return (
    <div className="fixed top-0 left-0  w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-600 text-3xl p-2 rounded-full transition">
          &times; {/* Close button */}
        </button>
      <div className="bg-white p-8 rounded-md shadow-lg w-[80vw] h-[100vh] relative overflow-y-auto max-h-[90vh] border-t"> 
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <h3 className="mb-2 opacity-60">By {project.name}<span className="mx-2">·</span>{project.date}</h3>
        <div className='mb-6 cursor-pointer relative' onClick={imageClick}>
        
          {/* video */}
          {mediaItems.length > 0 && mediaItems[currentIndex].type === 'video' ? (
            <video controls className='w-full h-auto max-w-full rounded-md'><source src={mediaItems[currentIndex].src} type='video/mp4'/>
            Your broswer does not support the video tag.
            </video>
          ) : (
            <img 
              src={mediaItems[currentIndex]?.src} 
              alt={`${project.title} - Image ${currentIndex + 1}`} 
              className="w-full h-auto max-w-full rounded-md"
            />
          )}

          {/* image */}
          {mediaItems.length > 1 && (
            <div className='text-center text-gray-600'>
              {currentIndex + 1} / {mediaItems.length}
           </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [showcaseProject, setShowcaseProject] = useState(null); 

  const handleThumbnailClick = (projectId) => {
    setShowcaseProject(projectId);
  };

  const handleCloseShowcase = () => {
    setShowcaseProject(null);
  };

  const selectedProject = projectsData.find((project) => project.id === showcaseProject);

  return (
    <div className="container mt-24 mx-auto p-8 justify-center">
      

      {/*  Remove the grid classes and use a flex container for vertical layout. */}
      <div className="flex flex-col mb-20 gap-10 justify-center items-center">
        {projectsData.map((project) => (
          <ProjectThumbnail
            key={project.id}
            project={project}
            onClick={handleThumbnailClick}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectShowcase project={selectedProject} onClose={handleCloseShowcase} />
      )}
    </div>
  );
};

export default Home;