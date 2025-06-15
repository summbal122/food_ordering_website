
import IMG from "../../images/contact.png";
const Contact = () => {
  return (
<div className="flex gap-14  bg-secondary p-8 flex-col">
  <div className="flex flex-col items-center gap-1 mx-auto  text-dark-background">
    <div className="flex items-center gap-2">
      <img src={IMG} className="w-28"/>
      <h2 className="text-4xl font-semibold  ">Contact Us</h2>  
        </div>
        </div>

  <div className="flex justify-center gap-28 mb-10 text-dark-background">
      <div className=" flex flex-col gap-8 justify-center">
        <p className=" text-md text-black">
          Team will get beck to you within 24 hours
        </p>
    <div className="leading-12">
    <div className="flex items-center gap-3 hover:border hover:border-dark-background hover:text-dark-secondary cursor-pointer rounded-md p-2"><i className="fa-solid fa-phone  lg:text-lg"></i> <p>+1 (555) 123-4567</p></div>
    <div className="flex items-center gap-3 hover:border hover:border-dark-background hover:text-dark-secondary cursor-pointer rounded-md p-2" ><i className="fa-solid fa-envelope text-lg"></i> <p>example@example.com</p> </div>
    <div className="flex items-center gap-3 hover:border hover:border-dark-background hover:text-dark-secondary cursor-pointer rounded-md p-2"><i className="fa-solid fa-location-dot text-lg"></i><p>123 Example Street, Springfield, IL 62704, USA</p></div>
  </div>

  <div className="flex gap-10 p-2">
    <i className="fa-brands fa-facebook text-2xl cursor-pointer hover:opacity-85"></i>
    <i className="fa-brands fa-square-instagram cursor-pointer text-2xl  hover:opacity-85"></i>
    <i className="fa-brands fa-square-twitter cursor-pointer text-2xl  hover:opacity-85"></i>
  </div>

  </div>

<div className="bg-white py-8 px-6 rounded-md"> 
   
   <form className="flex flex-col items-center gap-8 " > 
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
         
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-gray-900">First name</label>
            <input
              type="text"
              name="first-name"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-secondary" required
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-gray-900">Last name</label>
            <input
              type="text"
              name="last-name"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-secondary" required
            />
          </div>

          <div className="sm:col-span-full">
            <label className="block text-sm font-medium text-gray-900">Email address</label>
            <input
              type="email"
              name="email"
              className="mt-2 block w-full rounded-md border  border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-secondary" required
            />
          </div>
           <div class="col-span-full">
          <label for="about" class="block text-sm/6 font-medium text-gray-900">Message</label>
          <div class="mt-2">
            <textarea name="about" id="about" rows="3" class="block w-full rounded-md  px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6" required></textarea>
          </div>
        </div>



        </div>

        <div >
          <button className="px-8 py-3 rounded-md text-sm text-white bg-black w-fit self-center cursor-pointer hover:opacity-80">
            Submit
          </button>
        </div>
        
      </form>
      </div>
       
    </div>
</div>

    
  );
};

export default Contact;
