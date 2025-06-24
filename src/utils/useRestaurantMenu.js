import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constant";
import { setMenu } from "../utils/restaurantsMenuSlice";

const useRestaurantMenu = (resId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    dispatch(setMenu(json.data)); 
  };
};

export default useRestaurantMenu;
