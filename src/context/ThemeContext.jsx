import { createContext, useReducer } from "react"

export const ThemeContext = createContext( )

const changeState =(state, action)=>{
  switch (action.type){
    case 'ChangeMode':
      return {...state, loading: action.payload}
      default:
        return state
  }
}
export function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(changeState, {loading: false,})

 

  return <ThemeContext.Provider value={{...state, dispatch}}>
    {children}
  </ThemeContext.Provider>
  
}

