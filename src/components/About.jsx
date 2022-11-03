import image from "../images/me/me.jpg";
import ".."

const About = () => {
  return (
    <div className="flex px-24 py-24 bg-black" id="about">
      <div className="h-1/2 bg-pico rounded-xl shadow-pink-400 shadow-2xl p-10 mt-20">
        <h1 className="font-bold text-4xl font-yeseva-one leading-loose">
          About me 
        </h1>
        <p className="font-bold text-base mb-4 font-taviraj text-black">
          I am Sesethu Luzipo a last year WeThinkCode_ student that was born and
          raised in a small town called called eQonce in the Eastern Cape. That
          is aspring to become an aspring to be a Fullstack Developer one day.
        </p>
        <p className="font-bold text-base mb-4 font-taviraj text-black">
          From an Oceanography background to studying lines of code that produce
          projects that are mindblowing was been a rollercoaster that I am quite
          greatful for.
        </p>
        <p className="font-bold text-base mb-4 font-taviraj text-black">
          The pressure of slowing learning to debug code and to build creative
          products has enhanced my creative mind and problem solving skills.
        </p>
        <p className="font-bold text-base mb-4 font-taviraj text-black">
          Teachnology has become the cornerstone of the world and the pressure
          to join has increased. Hence, the career change and also my desire to
          combine my interests of the biology and tech world. I cant wait to
          enter a new chapter in my life by entering the work environment with
          the goals of refining my skills.
        </p>
      </div>
      <div>
        <img
          src={image}
          alt="my profile"
          className=" shadow-pink-400 shadow-2xl  rounded-xl transform scale-75 transition duration-500 hover:scale-90 rotate-6"
        />
      </div>
    </div>
  );
};

export default About;
