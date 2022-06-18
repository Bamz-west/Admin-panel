import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState(localStorage.getItem("colorMode") || "#000");

    const [currentMode, setCurrentMode] = useState(localStorage.getItem("themeMode") || "Light");

    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem("themeMode", e.target.value);

        // setThemeSettings(false);
    }
    
    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem("colorMode", color);

        // setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    };
    
    const handleClose = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: false });
    };
    
    return (
        <StateContext.Provider 
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings,
                handleClose
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);