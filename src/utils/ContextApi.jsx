import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = ({children}) => {
    const [imagesearch, setImageSearch] = useState(false);
    return(
        <Context.Provider value={{
            imagesearch,
            setImageSearch
        }}>
        {children}
        </Context.Provider>
)
};
