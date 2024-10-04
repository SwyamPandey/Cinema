import React from 'react'
// import Sidenav from './prtials/Sidenav'
import Sidenav from './prtials/Sidenav'
import TopNav from './prtials/TopNav'
import { useState,useEffect } from 'react';
import Loding from './prtials/Loding';
// import axios from 'axios';
import axios from "./../utils/axios";
import Header from './prtials/Header';
import Cards from './prtials/Cards';
import DropDown from './prtials/DropDown';



const Home = () => {
  const [headerData, setHeaderData] = useState([]);
  const [trending, setTrending] = useState([])
  const [category, setCategory] = useState('all')

  const popular = async () => {
      try {
          const { data } = await axios.get(`trending/${category}/day`);
          setTrending(data.results);
          
          const headerData =
              data.results[(Math.random() * data.results.length).toFixed()];
          setHeaderData(headerData);
      } catch (error) {
          console.log(error);
      }
  };

  useEffect(() => {        
      popular();
  }, [category]);

  return trending.length > 0 ? (
      <div className=" w-screen bg-[#222831] h-screen flex">
          <Sidenav />
          <div className="overflow-y-auto">
          <Header headerData = {headerData} />

          <div className="w-full flex justify-between items-center mt-5 px-5">
              <h2 className="text-2xl font-semibold text-white ">
                  Trending
              </h2>
              <DropDown options = {[ 'all', "tv", 'movie']} title = {"Category"} func = {(e) => setCategory(e.target.value)} />
          </div>

          <Cards data = { trending } />
          </div>
      </div>
  ) : <Loding />;
};

export default Home