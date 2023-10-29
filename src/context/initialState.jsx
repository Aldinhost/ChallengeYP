/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const InitialDataState = ({children}) => {

    const [data, setData] = useState({});

    useEffect(() =>{
        dataApp();
    },[])

    const dataApp = async () => {

        const dataBanks = localStorage.getItem('dataStored');

        if(!dataBanks){
            return false;
        }

        const dataObject = JSON.parse(dataBanks);
        
        setData(dataObject);

    }


  return (
    <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
  )
}

export default InitialDataState