import {useContext,useState,createContext} from 'react'

const ToggleProvider = createContext()

const ToggleContextProvider = ({children})=>{
    const [toggle,setToggle] = useState(true)

    return(
        <ToggleProvider.Provider value={[toggle,setToggle]}>{children}</ToggleProvider.Provider>
    )

}

const useToogle = ()=> useContext(ToggleProvider)

export{
    useToogle,
    ToggleContextProvider
}