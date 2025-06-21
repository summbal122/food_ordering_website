import IMG from "../../images/contact.png";

const Contact = () => {
  return (
    <div className="grid bg-secondary sm:p-8 min-h-screen border-5 border-pink-800 p-6 ">
      <div className="border-4 grid items-center mx-auto text-dark-background">
        <div className="flex items-center gap-2">
          <img src={IMG} className="w-20 sm:w-28" />
          <h2 className="text-2xl sm:text-4xl font-semibold">Contact Us</h2>
        </div>
      </div>

      <div className="border-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-4  text-dark-background">
        <div className="grid w-full border-5 border-purple-600 place-content-center gap-10 2xl:gap-28">
          <p className="text-sm sm:text-md 2xl:text-3xl text-black">
            Team will get back to you within 24 hours
          </p>

          <div className="leading-12 space-y-2">
            <div className="flex items-center gap-3 hover:border hover:border-dark-background hover:text-dark-secondary cursor-pointer rounded-md p-2">
              <i className="fa-solid fa-phone text-sm sm:text-base 2xl:text-3xl"></i>
              <p className="text-sm sm:text-base 2xl:text-3xl">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3 hover:border hover:border-dark-background hover:text-dark-secondary cursor-pointer rounded-md p-2">
              <i className="fa-solid fa-envelope text-sm sm:text-base 2xl:text-3xl"></i>
              <p className="text-sm sm:text-base 2xl:text-3xl">example@example.com</p>
            </div>
            <div className="flex items-center gap-3 hover:border hover:border-dark-background hover:text-dark-secondary cursor-pointer rounded-md p-2">
              <i className="fa-solid fa-location-dot text-sm sm:text-base 2xl:text-3xl"></i>
              <p className="text-sm sm:text-base 2xl:text-3xl">
                123 Example Street, Springfield, IL 62704, USA
              </p>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-10 p-2">
            <i className="fa-brands fa-facebook text-xl sm:text-2xl 2xl:text-4xl cursor-pointer hover:opacity-85"></i>
            <i className="fa-brands fa-square-instagram text-xl sm:text-2xl 2xl:text-4xl cursor-pointer hover:opacity-85"></i>
            <i className="fa-brands fa-square-twitter text-xl sm:text-2xl 2xl:text-4xl cursor-pointer hover:opacity-85"></i>
          </div>
        </div>

        <div className="bg-white py-6 px-4 sm:py-8 sm:px-6 rounded-md w-full border-8 border-amber-600">
          <form className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 w-full">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-secondary"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-secondary"
                  required
                />
              </div>

              <div className="sm:col-span-full">
                <label className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-secondary"
                  required
                />
              </div>

              <div className="sm:col-span-full">
                <label htmlFor="about" className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  name="about"
                  id="about"
                  rows="3"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-secondary"
                  required
                ></textarea>
              </div>
            </div>

            <button className="px-6 sm:px-8 py-3 rounded-md text-sm text-white bg-black w-fit self-center cursor-pointer hover:opacity-80">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
