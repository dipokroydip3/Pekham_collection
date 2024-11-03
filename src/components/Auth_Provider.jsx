import React, { createContext } from 'react';


export const PekhamContext = createContext(null)

const Auth_Provider = ({children}) => {
      
            const pekhamInfo = {
                  
            }
            return(
                  <PekhamContext.Provider value ={pekhamInfo}>
                        {children}
                  </PekhamContext.Provider>
            );

};

export default Auth_Provider;