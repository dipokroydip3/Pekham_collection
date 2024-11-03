import { createContext, useEffect, useState } from 'react';


export const PekhamContext = createContext(null)

const AuthProvider = ({children}) => {

      const [allData, setAllData] = useState([])
      console.log(allData);
      

      useEffect( () =>{
            fetch('Products.json')
            .then(res => res.json())
            .then(data => setAllData(data))
            
      })
      
      const pekhamInfo = {
            allData
      }
      return(
                  <PekhamContext.Provider value ={pekhamInfo}>
                        {children}
                  </PekhamContext.Provider>
      );

};

export default AuthProvider;