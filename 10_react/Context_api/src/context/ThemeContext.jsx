import React from 'react'
import { createContext } from 'react'
export const PostDataContext = createContext();
const ThemeContext = (props) => {
  return (
    <div>
      <PostDataContext.Provider value='Danish'>
         {props.children}
      </PostDataContext.Provider>
    </div>
  )
}

export default ThemeContext