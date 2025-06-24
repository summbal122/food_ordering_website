
const Footer = () => {
  return (
     
      <footer className="bg-black flex flex-col items-center text-gray-400 text-[5px] md:text-[8px] lg:text-sm 2xl:text-2xl">
  <div className="w-11/12 md:w-3/4 grid grid-cols-4 md:grid-cols-4  md:space-y-0 p-4 md:p-10 2xl:p-20  place-items-center">
    <div >
      <ul className="space-y-1 md:space-y-3 ">
        <li className='hover:font-semibold'><a href="#">FAQ</a></li>
        <li className='hover:font-semibold'><a href="#">Help Center</a></li>
        <li className='hover:font-semibold'><a href="#">Terms of Use</a></li>
        <li className='hover:font-semibold'><a href="#">Privacy</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-1 md:space-y-3">
        <li className='hover:font-semibold'><a href="#">About</a></li>
        <li className='hover:font-semibold'><a href="#">Careers</a></li>
        <li className='hover:font-semibold'><a href="#">Press</a></li>
        <li className='hover:font-semibold'><a href="#">Investors</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-1 md:space-y-3">
        <li className='hover:font-semibold'><a href="#">Contact Us</a></li>
        <li className='hover:font-semibold'><a href="#">Affiliate</a></li>
        <li className='hover:font-semibold'><a href="#">Cookies</a></li>
        <li className='hover:font-semibold'><a href="#">Stories</a></li>
      </ul>
    </div>
    <div>
      <ul className="space-y-1 md:space-y-3">
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
