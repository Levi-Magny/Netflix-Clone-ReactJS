import { createContext } from "react";
import { validarEmail } from "../model/formulario";

export const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {

    return (
        <GeneralContext.Provider value={{validarEmail}}>
            {children}
        </GeneralContext.Provider>
    );
}