import imageA from "../images/techs/flutter.png";
import imageB from "../images/techs/dj.png";
import imageC from "../images/techs/java.png";
import imageD from "../images/techs/fl.png";
import imageE from "../images/techs/js.png";
import imageF from "../images/techs/pyth.png";
import imageG from "../images/techs/tail.png";

const Tech = () => {
  return (
    <div className="px-24 py-20 bg-black" id="tech">
      <div className="text-center">
        <h1 className="text-4xl bg-black text-pico font-yeseva font-bold leading-loose">
          Tech I Use
        </h1>
      </div>
      <div className="flex flex-wrap justify-center pt-2">
        <div>
          <p>
            <img
              src={imageA}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
        <div>
          <p>
            <img
              src={imageB}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
        <div>
          <p>
            <img
              src={imageC}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
        <div>
          <p>
            <img
              src={imageD}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
        <div>
          <p>
            <img
              src={imageE}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
        <div>
          <p>
            <img
              src={imageF}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
        <div>
          <p>
            <img
              src={imageG}
              alt="hello"
              className="rounded-full flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl sm:w-52"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
