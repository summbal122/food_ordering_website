import React from 'react';


const Footer = () => {
  return (
     
      <footer className="bg-black  text-gray-400 text-sm w-full ">
  <div className="w-3/4 flex justify-between mx-auto py-15">
    <div >
      <ul className="space-y-3 ">
        <li className='hover:font-semibold'><a href="#">FAQ</a></li>
        <li className='hover:font-semibold'><a href="#">Help Center</a></li>
        <li className='hover:font-semibold'><a href="#">Terms of Use</a></li>
        <li className='hover:font-semibold'><a href="#">Privacy</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-3">
        <li className='hover:font-semibold'><a href="#">About</a></li>
        <li className='hover:font-semibold'><a href="#">Careers</a></li>
        <li className='hover:font-semibold'><a href="#">Press</a></li>
        <li className='hover:font-semibold'><a href="#">Investors</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-3">
        <li className='hover:font-semibold'><a href="#">Contact Us</a></li>
        <li className='hover:font-semibold'><a href="#">Affiliate</a></li>
        <li className='hover:font-semibold'><a href="#">Cookies</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-3">
        <li className='hover:font-semibold'><a href="#">Facebook</a></li>
        <li className='hover:font-semibold'><a href="#">Twitter</a></li>
        <li className='hover:font-semibold'><a href="#">Instagram</a></li>
        <li className='hover:font-semibold'><a href="#">YouTube</a></li>
      </ul>
    </div>
  </div>
  <p className="text-center text-gray-500 p-4">© 2025 Practice Project. All rights reserved.</p>
</footer>
  )
}

export default Footer
