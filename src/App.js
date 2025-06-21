import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Login from "./Components/Login";

const AppLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState();



  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="min-h-screen">
            <Outlet context={{ showCart, setShowCart }} />
          {showCart && <Cart />}
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
        path: "/Contact",
        element: (
          <>
            <Header showMenu={false} />
            <Contact />
          </>
        ),
      },
      {
        path:"/restaurant/:resId",
        element: (
          <>
            <Header showMenu={true} />
            <RestaurantMenu />
          </>
        ),
      },
      { path: "/about",
        element:  <>
            <Header showMenu={false} />
            <About />
          </>
      },
      {
        path: "/login",
        element: <Login/>

      },
      {
        path: "/Footer",
        element: (
          <>
            <Header showMenu={true} />
            <Footer />
          </>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

