import { useState } from "react";
import { MyContext } from "./context"; 



const Container = ({children}) => {
    const [user, setUser] = useState(null); 
    return (
        <MyContext.Provider
          value={{
           user,
           setUser
          }}
        > 
       
          {children}
        </MyContext.Provider>
      );
}

export default Container