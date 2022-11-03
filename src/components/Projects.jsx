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
            <p>Progress: Done </p>
            <p>Info: It makes use of the DJango Framework, the user is able to log in and post images that they want. It is more of an online album blog, no one can comment on any post though.</p>
          </p>
          <p>
            <a href="https://github.com/Sesethu97/Blogging" className= "text-sm italic" > <span class="material-icons">
ads_click
</span> </a>
          </p>
        </div>
        <div className="text-black h-1/2 bg-pico mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 className="text-black text-2xl font-taviraj font-bold">YearBook</h1>
          <p className="text-black text-l font-taviraj font-bold leading-loose">
            <p>Progress: At the initital stages</p>
            <p>Info: I am going to continue with Django.The main is to produce a website where the user can edit their profile's background
            and hopefully be able to vote for the certain categories such as  "most likely to succeed" 
            </p>
          </p>
          <p>
            <a href="https://github.com/Sesethu97/photoalbum" className= "text-sm italic" > <span class="material-icons">
ads_click
</span> </a>
          </p>
        </div>
        ~
      </div>
    </div>
  );
};

export default Projects;
