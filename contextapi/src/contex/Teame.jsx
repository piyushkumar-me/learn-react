import React, { createContext, useState } from 'react'



  export const TheameContext = createContext()


function Teame(props) {

const [theme, settheme] = useState('light')

    return (
        <div>

         <TheameContext.Provider value={[theme,settheme]} >
            {props.children}
         </TheameContext.Provider>
        </div>
    )
}

export default Teame