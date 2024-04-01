import {createContext} from "react";

export const ShopContext= createContext(null)
export const ShopContextProvider=(props)=>{
return <ShopContextProvider>{props.children}</ShopContextProvider>
}