const Education = () => {
  return (
    <div className="px-24 py-20 bg-neutral-800" id="education">
      <div className="text-center">
        <h1 className="text-4xl text-pico mb-12 font-yeseva font-bold leading-loose">
          Education
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="h-1/2 bg-black mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 className="text-pico text-2xl font-taviraj font-bold  leading-loose">
            WeThinkCode_
          </h1>
          <p className="text-pico text-l font-taviraj font-bold">
            Currently studing for Certificate in Software Engineering.
            WeThinkCode_ Graduation year : 2023
          </p>
        </div>
        <div className="text-pico h-1/2 bg-black mx-10 rounded-xl shadow-black shadow-2xl p-10">
          <h1 className="text-pico text-2xl font-taviraj font-bold">
            Cape Peninsula University of Technology
          </h1>
          <p className="text-pico text-l font-taviraj font-bold">
            Diploma in Marine Science. CPUT Graduation year : 2018 BTech in
            Oceanography. CPUT Graduation year : 2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
