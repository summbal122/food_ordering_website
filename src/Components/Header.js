import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import LOGO_IMAGE from "../../images/app_logo.png";
import { Link as ScrollLink } from "react-scroll";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useOutletContext } from "react-router";

const Header = ({ showMenu }) => {
  const { showCart, setShowCart } = useOutletContext();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
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
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="w-full bg-secondary">
      <div className="max-w-[800px] flex mx-auto justify-between items-center px-4 py-2">
        <div>
          <img className="w-16 sm:w-20" src={LOGO_IMAGE} alt="App Logo" />
        </div>

        <ul className="flex gap-3 sm:gap-6 text-xs sm:text-sm shadow-2xs">
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
          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/contact">Contact Us</RouterLink>
          </li>
        </ul>

        <div className="flex gap-3 sm:gap-6 items-center text-xs sm:text-sm cursor-pointer">
          <i onClick={() => setShowCart(!showCart)} className="fa-solid fa-cart-shopping text-sm sm:text-base">
            <span className="ml-1">- {cartItems.reduce((t, i) => t + i.quantity, 0)}</span>
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
