import image from "../images/me/mee.jpg";

const Intro = () => {
  return (
    <div className="flex -mb-64 px-24 py-5 bg-pico">
      <div className="flex-1">
        <img
          src={image}
          alt="hello"
          className=" shadow-black shadow-2xl h-1/2 my-16 rounded-xl"
        />
      </div>
      <div className="flex-1 font-bold my-16 text-black text-4xl font-yeseva-one leading-loose">
        <h2>Hi There, I'm</h2>
        <h3>Sesethu Luzipo</h3>
        <h4>Web Developer | App Developer | DevOps Developer</h4>
      </div>
    </div>
  );
};

export default Intro;
