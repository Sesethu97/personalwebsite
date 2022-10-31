const Contacts = () => {
  return (
    <div className="flex px-24 py-24 bg-black" id="contacts">
      <div className="flex justify-center">
        <div className="h-1/2 bg-black mx-10 rounded-xl p-10">
          <h1 className="text-pico text-4xl font-yeseva text-center justify-content-center q font-bold  leading-loose">
            Contacts
          </h1>
          <p className="text-pico text-l font-taviraj font-bold leading-loose">
            <span className="material-icons">call </span> +272626449
          </p>
          <p className="text-pico text-l font-taviraj font-bold leading-loose">
            <span className="material-icons">mail</span>{" "}
            sluzipo021@student.wethinkcode.co.za
          </p>
          <p className="text-pico text-l font-taviraj font-bold leading-loose">
            <span className="material-icons">add_location </span> CBD Johannesbur
            2000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
