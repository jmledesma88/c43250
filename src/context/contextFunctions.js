import { createContext } from "react";

export const ContextFunction = createContext();

    // Pasar las iniciales a mayúsculas
    const TitleStringFunction = (string) => {
        string
        .split(" ")
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    }

export const ContextFunctionProvider = ({children}) => {
    // titleStringFunction()
    return (
        <ContextFunction.Provider value={{TitleStringFunction}}>{children}</ContextFunction.Provider>
    )
}

// donde lo quiera usar necesito import useContext y ademas el import del context
