import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import LOGO_IMAGE from "../../images/app_logo.png";
import { Link as ScrollLink } from "react-scroll";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useOutletContext } from "react-router";

const Header = ({ showMenu, showAbout }) => {
  const navigate = useNavigate();
  const { showCart, setShowCart } = useOutletContext();
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="w-full bg-secondary">
      <div className="max-w-[300] md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1400px] px-2 py-1 flex mx-auto justify-between items-center md:px-4 md:py-2">
        <div>
          <img className="w-10 md:w-20 2xl:w-44" src={LOGO_IMAGE} alt="App Logo" />
        </div>

        <ul className="flex gap-3 sm:gap-6 text-[10px] md:text-sm 2xl:text-4xl shadow-2xs">
          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/">Home</RouterLink>
          </li>
          {showMenu && (
            <li className="cursor-pointer hover:font-semibold">
              <ScrollLink to="menu" smooth={true} duration={600}>
                Menu
              </ScrollLink>
            </li>
          )}
          {showAbout && ( <li className="cursor-pointer hover:font-semibold">
            <ScrollLink to="about" smooth={true} duration={600}>
                About
              </ScrollLink>
          </li>)
          }
         
          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>

        <div className="flex gap-2 md:gap-6 lg:gap-8 items-center text-[10px] md:text-sm 2xl:text-4xl cursor-pointer">
          <i onClick={() => setShowCart(!showCart)} className="fa-solid fa-cart-shopping text-[9px]  md:text-sm 2xl:text-4xl ">
            <span
            data-testid = "cart"
             className="text-[8px] md:text-[12px] 2xl:text-3xl">- {cartItems.reduce((t, i) => t + i.quantity, 0)}</span>
          </i>
          {user ? (
            <>
              <button onClick={handleLogout} className="hover:font-semibold text-red-500">
                Logout
              </button>
              <span className="hidden sm:inline">{user.displayName}</span>
            </>
          ) : (
            <RouterLink to="/login" className="hover:font-semibold">
              Login
            </RouterLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
