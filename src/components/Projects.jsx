const Projects = () => {
  return (
    <div className="px-24 py-20 bg-black" id="projects">
      <div className="text-center">
        <h1 className="text-4xl text-pico mb-12 font-yeseva font-bold leading-loose">
          Projects
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="h-1/2 bg-pico mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 className="text-black text-2xl font-taviraj font-bold  leading-loose">
            Blog
          </h1>
          <p className="text-black text-l font-taviraj font-bold leading-loose">
            Progress: Done
          </p>
          <p>
            <a href="https://github.com/Sesethu97/Blogging" className= "text-sm italic" >click here </a>
          </p>
        </div>
        <div className="text-black h-1/2 bg-pico mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 className="text-black text-2xl font-taviraj font-bold">YearBook</h1>
          <p className="text-black text-l font-taviraj font-bold leading-loose">
            Progress: At the initital stages
          </p>
          <p>
            <a href="https://github.com/Sesethu97/photoalbum" className= "text-sm italic" >click here </a>
          </p>
        </div>
        ~
      </div>
    </div>
  );
};

export default Projects;
