import image from "../images/me/mee.jpg";

const Intro = () => {
  return (
    <div className="flex -mb-64 px-24 py-5 bg-neutral-800 " id="intro">
      <div className="flex-1 ">
        <img
          src={image}
          alt="hello"
          className=" shadow-pico shadow-2xl h-1/2 my-16 rounded-xl"
        />
      </div>
      <div className="align-middle content-center">
        <div className="flex-1 font-bold  mt-20 my-16  font-yeseva-one leading-loose">
          <h2 className="text-4xl text-pico">Hi There, I'm</h2>
          <h3 className="text-5xl text-pink-600">Sesethu Luzipo</h3>

          <h4 className="text-zinc-500">Web Developer | App Developer | DevOps Developer</h4>
          <div className="lineA"></div>
          <div className="lineB"></div>
          <div className="lineC"></div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
