import react, { useState } from "react";

export const AuthContext = react.createContext();

export const AuthProvider = ({children}) => {
    const [event, SetEvent] = useState(false)
    const [description, setDescription] = useState(false)
    const [click, setClick] = useState()
    const [casamento, setCasamento] = useState([])
    const [confraternizacao, setConfraternizacao] = useState([])
    const [formatura, setFormatura] = useState([])

    
    function addCasamento(param){
        setCasamento([...casamento, param])
    }

    function addConfraternizacao(param){
        setConfraternizacao([...confraternizacao, param])

    }

    function addFormatura(param){
        setFormatura([...formatura, param])
    }

    function SelectEvents(param){
        SetEvent(param)
    }

    return(
        <AuthContext.Provider value={{description, setDescription,SelectEvents, event, addCasamento, setClick, click, addConfraternizacao, addFormatura, casamento, confraternizacao, formatura, setCasamento, setFormatura, setConfraternizacao}}>
            {children}
        </AuthContext.Provider>
    )
}