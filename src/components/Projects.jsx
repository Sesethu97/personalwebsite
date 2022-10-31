const Projects = () => {
  return (
    <div class="px-24 py-20 bg-pico">
      <div class="text-center">
        <h1 class="text-4xl mb-12 font-yeseva font-bold leading-loose">
          Projects
        </h1>
      </div>
      <div class="flex justify-center">
        <div class="h-1/2 bg-black mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 class="text-pico text-2xl font-taviraj font-bold  leading-loose">
            Blog
          </h1>
          <p class="text-pico text-l font-taviraj font-bold leading-loose">
            Progress: Done
          </p>
          <p>
            <a href="https://github.com/Sesethu97/Blogging">click</a>
          </p>
        </div>
        <div class="text-pico h-1/2 bg-black mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 class="text-pico text-2xl font-taviraj font-bold">YearBook</h1>
          <p class="text-pico text-l font-taviraj font-bold leading-loose">
            Progress: At the initital stages
          </p>
          <p>
            <a href="https://github.com/Sesethu97/photoalbum">click</a>
          </p>
        </div>
        ~
      </div>
    </div>
  );
};

export default Projects;
