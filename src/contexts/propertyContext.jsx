"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [domain, setDomain] = useState(null);      // ✅ domain STATE
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPropertiesByDomain = async (domainValue) => {
    console.log("api call")
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://deal-acres-backend.onrender.com/api/listed-properties/getPropertiesByDomain/${domainValue}`
      );

      setProperties(res.data.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // jab domain change ho → API call
  useEffect(() => {
    if (domain) {
      getPropertiesByDomain(domain);
    }
  }, [domain]);

  // **************************************************************************
  const [data, setData] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);
  const [domain2,setDomain2] = useState(null);
  const decodeSlugWithHyphen = (str) =>
  decodeURIComponent(str).trim().replace(/-/g, " ");

  // ✅ locality as STATE
  const [locality, setLocality] = useState(null);

  // ✅ API call uses locality state
  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://deal-acres-backend.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain2}/${decodeSlugWithHyphen(locality)}`,
        // {
        //   params: {
        //     domain:domain2,
        //     locality, // 👈 from state
        //   },
        // }
      );

       console.log("domain =>",domain2)
       console.log("locality =>",locality)
      console.log("data =>",response?.data?.data)
      setData(response?.data?.data);
    } catch (err) {
      setError2("Data fetch nahi ho paaya");
      console.log("error =>",err.message)
    } finally {
      setLoading2(false);
    }
  };

useEffect(()=>{

  fetchProperties();

},[domain2,locality])



  // **************************************************************************
  return (
    <PropertyContext.Provider
      value={{
        domain,
        setDomain,        
        properties,
        loading,
        error,
        refetch: () => getPropertiesByDomain(domain),
        data,loading2,error2,setDomain2,setLocality
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
