import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router"; // ✅ use react-router-dom
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
        console.log("Signed out");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="w-full bg-secondary">
      <div className="max-w-[800px] flex mx-auto justify-between items-center">
        <div>
          <img className="w-24" src={LOGO_IMAGE} alt="App Logo" />
        </div>

        <ul className="flex gap-6 text-sm">
          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/">Home</RouterLink>
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

          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/about">About</RouterLink>
          </li>

          <li className="cursor-pointer hover:font-semibold">
            <RouterLink to="/contact">Contact Us</RouterLink>
          </li>
        </ul>

        <div className="flex gap-6 items-center text-sm cursor-pointer">
          <i
           onClick={() => setShowCart(!showCart)}
           className="fa-solid fa-cart-shopping">
            <span> - {cartItems.length}</span>
          </i>

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="hover:font-semibold text-red-500"
              >
                Logout
              </button>
              <span className="text-sm">{user.displayName}</span>
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
