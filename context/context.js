import { useState, createContext } from "react";

export const DefaultContext = createContext();

export const ContextProvider = (props) => {
    const [value, setValue] = useState("Hello, World!");

    return (
        <DefaultContext.Provider value={{ value, setValue }}>
            {props.children}
        </DefaultContext.Provider>
    );
};

export default ContextProvider;
