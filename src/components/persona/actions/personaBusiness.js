import { usePersona } from "../context/usePersona"
import { personaAction } from "./personaAction"



export const PersonaBusiness = () => {

    const {dispatch} = usePersona()
    const {setCount} = personaAction()

    const handleSetCount = (value) => dispatch(setCount(value))

    return {handleSetCount}


}
