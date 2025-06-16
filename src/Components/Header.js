import { useState, useContext } from "react";
import { Link as RouterLink } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LOGO_IMAGE from "../../images/app_logo.png";
import { Link as ScrollLink }  from "react-scroll";

const Header = ({showMenu}) => {
  const [btnName, setBtnName] = useState("login");
  const { loggedInUser } = useContext(UserContext);
  
  // const[loggedInUser] = useContext(UserContext);
  const cartLength = useSelector((store) => store.cart.items);

  return(
    <div className="w-full bg-secondary">
          <div className="max-w-[800px] flex mx-auto justify-between items-center">
      
      <div className=""> 
        <img className="w-24" src={LOGO_IMAGE} />
        </div>
        
         
            <ul className="flex gap-6 text-sm "> 
                <li className="cursor-pointer hover:font-semibold" >
                  <RouterLink to="/"> Home</RouterLink>
                 </li>
               {showMenu && (
              <li className="cursor-pointer hover:font-semibold"> 
                <ScrollLink
                  to="menu"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer"
                >
                  Menu
                </ScrollLink>
              </li>
            )}
                <li
                className="cursor-pointer hover:font-semibold">
                <RouterLink to="/about"> About</RouterLink></li>
                <li className="cursor-pointer hover:font-semibold"> 
                <RouterLink  to="/Contact">Contact us</RouterLink > 
                </li>
                 </ul>

                <div className="flex gap-6 items-center text-sm cursor-pointer ">
                  <i className="fa-solid fa-cart-shopping ">
                    <ScrollLink to="/Cart">- {cartLength.length} </ScrollLink> 
                   </i>
      
                <button  className="cursor-pointer hover:font-semibold"
                 onClick={ ()=>{ 
                    btnName === "login"
                    ? setBtnName("Logout")
                    : setBtnName ('Login')   
                }
                }>{btnName}
                </button>
                <a data-testid="headerInput" className="">{loggedInUser}</a>
                </div>
                
    </div>
    </div>
  )

};
export default Header;