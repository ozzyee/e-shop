import { createContext, useContext, useState, useEffect } from "react";

const ContentContext = createContext({});

export const useShoppingListContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }) => {
   const [list, setList] = useState([]);
   const [_item, setItem] = useState(null);

   const addItem = (item) => {
      setItem(item);

      if (list?.length == undefined || list?.length <= 0) {
         localStorage.setItem("shopping", JSON.stringify([item]) || "[]");
      } else if (list?.length > 0) {
         localStorage.setItem(
            "shopping",
            JSON.stringify([...list, item]) || "[]"
         );
      }
   };

   const deleteItem = (id) => {
      const remainingArr = list.filter((item) => item.id != id);
      console.log(remainingArr);
      localStorage.setItem("shopping", JSON.stringify(remainingArr) || "[]");
      setList(remainingArr);
   };

   useEffect(() => {
      getLocalStorage();
   }, [_item]);

   const getLocalStorage = () => {
      const localShoppingList = JSON.parse(localStorage?.getItem("shopping"));
      setList(localShoppingList);
   };

   return (
      <ContentContext.Provider
         value={{
            addItem,
            deleteItem,
         }}
      >
         {children}
      </ContentContext.Provider>
   );
};
