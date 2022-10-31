const Navbar = () => {
  return (
    <div className="sticky  top-0 z-50">
      <div className="flex flex-row   justify-between py-4 px-4 w-full border-b-2 border-gray-300 bg-white">
        <a
          href="/"
          native="true"
          title="About me portfolio"
          className="text-3xl logo__3Ki4n font-good-vibes font-bold"
        >
          SL.
        </a>
        <div className="flex flex-row justify-evenly">
          <a
            title="SL"
            href="#intro"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            Intro
          </a>
          <a
            href="#about"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            About
          </a>
          <a
            href="#education"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            Education
          </a>
          <a
            href="#skills"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            Projects
          </a>
          <a
            href="#sovtech"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            Sovtech
          </a>
        </div>
        <div className="flex flex-row">
          <h6 className="text-colour text-3xl ml-3 mr-7 font-bold">
          <a
            href="#contacts"
            className="nav-link text-2xl mx-5 font-bold border-white"
          >
            Contacts
          </a>
            
          </h6> 
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
