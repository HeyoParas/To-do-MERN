import React, { createContext, useState, useEffect } from 'react';
import { getMockData } from '../utils/mockData';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  console.log("hello idhr hu",data);
  const [refetch, setRefetch] = useState(true); 


  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data from server...');
      try {
        const response = await axios.get('http://localhost:5000/api/tasks'); 
        setData(response.data);
        console.log("authcontext ne server se nikaka data",response.data);
      } catch (error) {
        console.error('Error fetching data from server:', error);
      }
    };

    if (refetch) {
      fetchData();
      setRefetch(false);  
    }
  }, [refetch]);


  return (
    <AuthContext.Provider value={{data,setRefetch}}>
      {children}
    </AuthContext.Provider>        
  );
};
