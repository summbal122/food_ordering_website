import User from "./User";
const About = ()=>{
  return(
    <div> 
      {/* <User /> */}
<section class="bg-white text-gray-800 px-6 py-16 max-w-6xl mx-auto">
 
  <div class="mb-16 text-center">
    <h2 class="text-4xl font-bold mb-4">Our Story</h2>
    <p class="text-lg leading-relaxed max-w-3xl mx-auto">
      What started as a simple idea turned into a tasty mission — to connect people with their favorite restaurants in the easiest way possible.
      Inspired by apps like Foodpanda, our platform brings multiple restaurants to your fingertips, helping you discover and order meals effortlessly.
    </p>
    <p class="mt-4">
      Whether you're in the mood for spicy desi dishes, cheesy pizzas, or healthy salads, we’ve got something for every craving.
    </p>
  </div>

 
  <div class="mb-16">
    <h2 class="text-3xl font-semibold text-center mb-8">Partner Restaurants & Signature Chefs</h2>
    <div class="grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 class="font-bold text-xl">🍔 Grill Masterz</h3>
        <p class="text-gray-600">Chef Ali – Flame-grilled burgers & crispy fries</p>
      </div>
      <div>
        <h3 class="font-bold text-xl">🍛 Biryani House</h3>
        <p class="text-gray-600">Chef Sara – Authentic Hyderabadi biryani & karahi</p>
      </div>
      <div>
        <h3 class="font-bold text-xl">🥗 Fresh Bowl</h3>
        <p class="text-gray-600">Chef Lina – Clean eating with a twist</p>
      </div>
    </div>
  </div>

 
  <div class="mb-16">
    <h2 class="text-3xl font-semibold text-center mb-6">What Our Users Say</h2>
    <div class="flex space-x-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory">
      <div class="min-w-[250px] bg-gray-100 p-6 rounded-xl shadow text-center snap-start">
        <p class="italic">"Love the smooth interface. Found 3 great restaurants in one app!"</p>
        <p class="mt-3 font-semibold">— Ayesha R.</p>
        <p class="text-yellow-500">⭐⭐⭐⭐⭐</p>
      </div>
      <div class="min-w-[250px] bg-gray-100 p-6 rounded-xl shadow text-center snap-start">
        <p class="italic">"Mock order tracking is actually so cool. Impressed by the design!"</p>
        <p class="mt-3 font-semibold">— Bilal H.</p>
        <p class="text-yellow-500">⭐⭐⭐⭐☆</p>
      </div>
      <div class="min-w-[250px] bg-gray-100 p-6 rounded-xl shadow text-center snap-start">
        <p class="italic">"The UI is so responsive and clean — feels like a real app!"</p>
        <p class="mt-3 font-semibold">— Maria T.</p>
        <p class="text-yellow-500">⭐⭐⭐⭐⭐</p>
      </div>
      <div class="min-w-[250px] bg-gray-100 p-6 rounded-xl shadow text-center snap-start">
        <p class="italic">"Great job! Love how fast and simple it is to navigate."</p>
        <p class="mt-3 font-semibold">— Usman Q.</p>
        <p class="text-yellow-500">⭐⭐⭐⭐</p>
      </div>
    </div>
  </div>

  <div class="text-center">
    <h2 class="text-3xl font-semibold mb-4">Tech Behind the Magic</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700 max-w-md mx-auto text-left">
      <li>⚛️ <strong>React</strong> — Interactive UI with component-based structure</li>
      <li>🎨 <strong>Tailwind CSS</strong> — Clean, modern utility-first styling</li>
      <li>🔥 <strong>Firebase</strong> — Secure user authentication and database</li>
      <li>⚡ <strong>Parcel</strong> or <strong>Vite</strong> — Lightning-fast dev & build tools</li>
    </ul>
  </div>
</section>



    </div>
    
  )
}
export default About;