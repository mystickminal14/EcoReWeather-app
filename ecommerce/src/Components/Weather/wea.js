import React, {useState,useEffect, createContext, useContext } from "react";

import axios from 'axios'
export const AppContext = createContext();

export function AppProvider({ children }) {
    const [searchData,newSearch]=useState('')
    const[getCart,setCard]=useState([])
    const[getCartIndex,setCardIndex]=useState()
    const [weatherdata,newWeather]=useState([])
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=8f3cca8952adec446b886f89471d989a&units=metric`
    async function searchDataFun(){
        try{
       const response= await axios.get(url)
       newWeather(response.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        if(searchData){
            searchDataFun()
        }
    },[searchData])

  return (
    <AppContext.Provider value={{newSearch,url,weatherdata,setCard,setCardIndex,getCart,getCartIndex}}>
      {children}
    </AppContext.Provider>
  );
}