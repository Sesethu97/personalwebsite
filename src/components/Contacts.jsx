const Contacts = () => {
  return (
    <div class="flex px-24 py-24 bg-pico">
      <div class="flex justify-center">
        <div class="h-1/2 bg-pico mx-10 rounded-xl p-10">
          <h1 class="text-black text-4xl font-yeseva text-center font-bold  leading-loose">
            Contacts
          </h1>
          <p class="text-black text-l font-taviraj font-bold leading-loose">
            <span class="material-icons">call </span> +272626449
          </p>
          <p class="text-black text-l font-taviraj font-bold leading-loose">
            <span class="material-icons">mail</span>{" "}
            sluzipo021@student.wethinkcode.co.za
          </p>
          <p class="text-black text-l font-taviraj font-bold leading-loose">
            <span class="material-icons">add_location </span> CBD Johannesbur
            2000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
