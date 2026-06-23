"use client";

import { createContext, useContext, useEffect, useState,useRef} from "react";

import axios from "axios";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

  const [dailyLimit, setDailyLimit] = useState(10); // daily unlock limit

const [domain, setDomain] = useState(null);
const [properties, setProperties] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// ✅ Areas API Integration (Hindi messages update - all proper English)
const [areas, setAreas] = useState([]);
const fetchAreas = async () => {
  try {
    const res = await axios.get(
      "https://hisar-backend-ha4b.onrender.com/api/areas/getAllAreas"
    );
    if (res.data && res.data.success) {
      setAreas(res.data.data || []);
    }
  } catch (err) {
    console.error("Failed to fetch areas:", err);
  }
};
useEffect(() => {
  fetchAreas();
}, []);

const lastFetchedDomain = useRef(null); // 🔑 ADD THIS

const getPropertiesByDomain = async () => {
  // 🚫 already fetched → skip
  if (lastFetchedDomain.current === domain && properties.length > 0) {
    return;
  }

  lastFetchedDomain.current = domain; // 🔒 lock

  try {
    setLoading(true);
    setError(null);

    const res = await axios.get(
      `https://hisar-backend-ha4b.onrender.com/api/listed-properties/getPropertiesByDomain/${domain}`
    );

    setProperties(res.data.data || []);
  } catch (err) {
    lastFetchedDomain.current = null; // rollback
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
   if(domain) getPropertiesByDomain();
   }, [domain]);

  // **************************************************************************
  const [data, setData] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);
  const [domain2,setDomain2] = useState(null);
  const  [slug,setSlug] = useState(null);
  const decodeSlugWithHyphen = (str) =>
  decodeURIComponent(str).trim().replace(/-/g, " ");

  // ✅ locality as STATE
  const [locality, setLocality] = useState(null);

  // ✅ API call uses locality state
  const fetchProperties = async () => {
    try {
      setLoading2(true);
      setError(null);
      setData([]);

      const response = await axios.get(
        `https://hisar-backend-ha4b.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain2}/${decodeSlugWithHyphen(locality)}/${slug}`,
        // {
        //   params: {
        //     domain:domain2,
        //     locality, // 👈 from state
        //   },
        // }
      );

       // console.log("domain =>",domain2)
       // console.log("locality =>",locality)
      // console.log("data =>",response?.data)
      setData(response?.data);
    } catch (err) {
      setError2("Failed to fetch property details");
      // console.log("error =>",err.message)
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
        setLoading,dailyLimit,
        error,
        refetch: () => getPropertiesByDomain(domain),
        // data,loading2,error2,setDomain2,setLocality,locality,domain2,setSlug
        data,loading2,error2,setDomain2,setLocality,locality,domain2,setSlug,areas
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);