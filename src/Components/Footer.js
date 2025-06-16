import React from 'react';


const Footer = () => {
  return (
     
      <footer className="bg-black  text-gray-400 text-sm w-full ">
  <div className="w-3/4 flex justify-between mx-auto py-15">
    <div >
      <ul className="space-y-3">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-3">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Investors</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-3">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Affiliate</a></li>
        <li><a href="#">Cookies</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-3">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">YouTube</a></li>
      </ul>
    </div>
  </div>
  <p className="text-center text-gray-500 p-4">© 2025 Practice Project. All rights reserved.</p>
</footer>
  )
}

export default Footer
