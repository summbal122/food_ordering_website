import React, {lazy , Suspense, useEffect, useState} from "react";
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
// import Grocery from "./Components/Grocery";
// import grocery from lazy loading

//card.card.gridElements.infoWithStyle.restaurants.info.name

const Grocery = lazy(() => import("./Components/Main"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
//authentication code
    useEffect(() =>{
        const data = {
            name: "username"
        };
        setUserName(data.name);
    }, [])

    return( 
        <Provider store ={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
            <div className="min-h-screen">
        <Header  /> 
         <Outlet/>
         <Footer/>
         </div>
         </UserContext.Provider>
          </Provider>
        
        
   
    )};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
           {
            path: "/",
            element: (
                <>
                <Main />
                <Body />
                </>
            )
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            
            {
            path: "/Cart",
            element: <Cart />
         }, 
         {
            path: "/Footer",
            element: <Footer/>
         }

        ],
        errorElement: <Error/>

    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

