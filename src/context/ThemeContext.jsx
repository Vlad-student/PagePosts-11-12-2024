import { createContext, useState, useEffect } from "react";
import CONSTANTS from "../store/constants";
import { PropTypes } from 'prop-types';


const  {THEMES} = CONSTANTS;
export const ThemeContext = createContext();



export const ThemeProvider =({children}) => {

    
const [theme, setTheme] = useState(THEMES.LIGHT);
useEffect(() => {
    document.body.className = theme;
 }, [theme]);
 const toggleTheme = () =>{
    setTheme((prevTheme)=>(prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))
};
    return <ThemeContext.Provider value ={{theme, toggleTheme}}> {children} </ThemeContext.Provider>
};

ThemeProvider.propTypes = {
    children: PropTypes.any,

};
