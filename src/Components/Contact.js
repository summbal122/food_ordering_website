import IMG from "../../images/contact.png";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary min-h-screen w-full">
<div className="w-full grid md:grid-cols-2 gap-2 place-items-center text-dark-background py-16 px-4 bg-[#fefefe]">
  {/* Contact Info */}
  <div className="grid px-6 md:px-10 lg:px-20 w-full gap-3 md:gap-6 2xl:gap-16 ">
    <div className="space-y-4">
      <h2 className="text-center mb-8 md:mb-10 md:text-start text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold text-black">
        Contact Us
      </h2>
      <p className="text-xs lg:text-lg 2xl:text-3xl text-black">
        Team will get back to you within 24 hours
      </p>
      <p className="text-xs lg:text-lg 2xl:text-2xl text-gray-700">
        <strong className="text-dark-background">Service Hours:</strong> Mon–Sun | 9:00 AM – 11:00 PM
      </p>
    </div>

    <div className="space-y-4 md:space-y-8 2xl:space-y-10 mt-4">
      <div className="flex items-center gap-4 2xl:gap-8 hover:bg-gray-100 transition rounded-md">
        <i className="fa-solid fa-phone text-sm sm:text-base 2xl:text-3xl text-dark-background"></i>
        <p className="text-xs md:text-md lg:text-lg 2xl:text-2xl text-gray-800">+1 (555) 123-4567</p>
      </div>
      <div className="flex items-center gap-4 2xl:gap-8 hover:bg-gray-100 transition rounded-md ">
        <i className="fa-solid fa-envelope text-sm sm:text-base 2xl:text-3xl text-dark-background"></i>
        <p className="text-xs md:text-md lg:text-lg 2xl:text-2xl text-gray-800">example@example.com</p>
      </div>
      <div className="flex items-center gap-4 2xl:gap-8 hover:bg-gray-100 transition rounded-md ">
        <i className="fa-solid fa-location-dot text-sm sm:text-base 2xl:text-3xl text-dark-background"></i>
        <p className="text-xs md:text-md lg:text-lg 2xl:text-2xl text-gray-800">
          123 Example Street, Springfield, IL 62704, USA
        </p>
      </div>
    </div>

    <div className="flex gap-4 lg:gap-8 2xl:gap-12 pt-6">
      <i className="fa-brands fa-facebook text-base lg:text-2xl 2xl:text-4xl text-dark-background hover:text-secondary cursor-pointer"></i>
      <i className="fa-brands fa-square-instagram text-base lg:text-2xl 2xl:text-4xl text-dark-background hover:text-secondary cursor-pointer"></i>
      <i className="fa-brands fa-square-twitter text-base lg:text-2xl 2xl:text-4xl text-dark-background hover:text-secondary cursor-pointer"></i>
    </div>
  </div>

  {/* Contact Form */}
  <div className="bg-white w-full max-w-2xl shadow-lg rounded-2xl p-6 lg:p-10 2xl:p-16">
    <form className="flex flex-col gap-6 2xl:gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs md:text-sm lg:text-lg 2xl:text-2xl font-medium text-gray-900">
            First name
          </label>
          <input
            type="text"
            name="first-name"
            className="mt-2 w-full rounded-md border border-gray-300 p-2 lg:p-3 text-sm 2xl:text-2xl text-gray-900 focus:outline-secondary"
            required
          />
        </div>

        <div>
          <label className="block text-xs md:text-sm lg:text-lg 2xl:text-2xl font-medium text-gray-900">
            Last name
          </label>
          <input
            type="text"
            name="last-name"
            className="mt-2 w-full rounded-md border border-gray-300 p-2 lg:p-3 text-sm 2xl:text-2xl text-gray-900 focus:outline-secondary"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs md:text-sm lg:text-lg 2xl:text-2xl font-medium text-gray-900">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="mt-2 w-full rounded-md border border-gray-300 p-2 lg:p-3 text-sm 2xl:text-2xl text-gray-900 focus:outline-secondary"
          required
        />
      </div>

      <div>
        <label htmlFor="about" className="block text-xs md:text-sm lg:text-lg 2xl:text-2xl font-medium text-gray-900">
          Message
        </label>
        <textarea
          name="about"
          id="about"
          rows="4"
          className="mt-2 w-full rounded-md border border-gray-300 p-2 lg:p-3 text-sm 2xl:text-2xl text-gray-900 placeholder:text-gray-400 focus:outline-secondary"
          required
        ></textarea>
      </div>

      <button className="bg-black text-white rounded-lg py-2 px-6 2xl:py-4 2xl:px-12 text-sm md:text-md 2xl:text-2xl self-start hover:opacity-80 transition ">
        Submit
      </button>
    </form>
  </div>
</div>


      {/* Customer Testimonial */}
      <div className="bg-white shadow-md rounded-md p-4 mt-8 w-11/12 md:w-10/12">
        <p className="italic text-gray-600 text-sm lg:text-lg 2xl:text-3xl">
          "Amazing service! My food arrived hot and fresh. Highly recommend!"
        </p>
        <p className="text-xs lg:text-base 2xl:text-2xl mt-2 text-right font-semibold">
          – Sarah, Lahore
        </p>
      </div>

      <div className="mt-10 w-11/12 md:w-10/12 h-[200px] lg:h-[400px] 2xl:h-[600px] rounded-md overflow-hidden">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999428291742!2d2.292292615674318!3d48.858373079287846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fef3c2c9f2d%3A0x9e31c3427d0f8973!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1627391574263!5m2!1sen!2sfr"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
