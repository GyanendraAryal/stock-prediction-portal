import React, { useState, useEffect } from "react";
import axios, { type AxiosResponse } from "axios";
import AxiosInstance from "../AxiosInstance";

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await AxiosInstance.get(
          "/protected-view/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );
        console.log("Dashboard loaded", response.data);
      } catch (error) {
        console.log("Error", error);
      }
      fetchData();
    };
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
