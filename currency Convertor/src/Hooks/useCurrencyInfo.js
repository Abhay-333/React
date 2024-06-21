import { React, useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    const promise1 = new Promise((resolve, rejected) => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    
    useEffect(()=>{
        fetch(`${url}`).then((response)=>{
            const data=response.json()
            return data
        }).then((data)=>{
            setData(data[currency])
            console.log(data[currency])
        })
    },[currency])
    
  })

  return data
}

export default useCurrencyInfo;
