import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DashboardMain from '../components/Dashboard/Dashboard';

const Dashboard = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/private/", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized to access this page, please login using the link below");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <>
    <span className="error-message">{error}</span>
    <div className="redirect-link"><a href="/login">Click here to Login</a></div>
    </>
    
  ) : (
    <>
    <DashboardNavbar></DashboardNavbar>
    <DashboardMain></DashboardMain>
    <div>{privateData}</div>
    </>
  );
};

export default Dashboard;
