import React, { useContext } from 'react'
import "../styles.css"
import LanguageContext from '../context'


const Navbar = () => {
    
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language // desestructurando language


    return (
        // ESPACIO DE TRABAJO, utilizar los valores de text
        <div className="navbar">
            <p>{text.home}</p>
            <p>{`${text.current} ${language.id}`}</p>
            <button onClick={handleChangeLA}>{text.button}</button>
        </div>
    )
}

export default Navbar
