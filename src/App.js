import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";

const AppLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState();
  const cartRef = useRef(null);

  // ✅ Click outside to close cart
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        showCart
      ) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCart]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="min-h-screen relative">
          <Outlet context={{ showCart, setShowCart }} />
          {showCart && (
            <div ref={cartRef}>
              <Cart />
            </div>
          )}
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header showMenu={true} />
            <Main />
            <Body />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Header showMenu={false} />
            <Contact />
          </>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <>
            <Header showMenu={true} />
            <RestaurantMenu />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <Header showMenu={false} />
            <About />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
