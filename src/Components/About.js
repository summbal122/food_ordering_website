import User from "./User";
const About = ()=>{
  return(
    <div> 
      {/* <User /> */}
      <section className="bg-white text-gray-800 py-16 px-6" id="about">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">About Us</h2>
    <p className="text-lg mb-4">
      It all started with a simple idea — to make ordering food feel just as comforting as home-cooked meals.
      Whether you're craving a cheesy pizza, spicy biryani, or a fresh salad, our app brings your favorite dishes right to your doorstep.
    </p>
    <p className="text-lg mb-4">
      Our mission is simple: great food, delivered fast. Built with love (and code), this app is a practice project aimed to recreate the real-world experience of a food ordering platform.
    </p>
    <p className="text-lg mb-8">
      Behind the scenes, our virtual staff (aka just me coding!) is always working to make sure your experience is smooth, satisfying, and fun. We may be small, but we serve with heart. ❤️
    </p>
    <div className="grid md:grid-cols-2 gap-6 text-left">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Why You'll Love It</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Easy-to-use interface for quick ordering</li>
          <li>Wide variety of dishes and cuisines</li>
          <li>Order tracking (mocked for practice)</li>
          <li>Secure login & user-friendly experience</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Tech Behind the Magic</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>React for building the interface</li>
          <li>Tailwind CSS for clean, modern design</li>
          <li>Firebase for authentication & data</li>
          <li>Parcel or Vite for fast development</li>
        </ul>
      </div>
    </div>
    <p className="text-base mt-8 italic text-gray-600">
      "Good food is happiness. We’re here to deliver that — one bite at a time."
    </p>
  </div>
</section>

    </div>
    
  )
}
export default About;