import React from 'react'
import "./Rightbar.css"
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Rightbar() {


  let [data, setData] = useState([]);
  let [poliData, setPoliData] = useState([]);

  useEffect(() => {

    

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'sports', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '338ccba132mshbf3b25d769906ccp10e56ejsn48743670e061',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setData(response.data.value)

    }).catch(function (error) {
      console.error(error);
    });

  }, [])


  useEffect(() => {

    

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'politics', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '338ccba132mshbf3b25d769906ccp10e56ejsn48743670e061',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPoliData(response.data.value)

    }).catch(function (error) {
      console.error(error);
    });

  }, [])

  return (
    <div className='rightBar'>

      <div className="rightBarbox">
        <h2 className='mb-3'>Sports</h2>

        <hr />

        <div className="rightSubBox">
          <ul>
            {
              data.map(eachpost => (
                <li key={eachpost?.name}><p>{eachpost?.name}</p></li>
              ))
            }

          </ul>
        </div>


        <h2 className='mb-3'>Politics</h2>

        <hr />

        <div className="rightSubBox">
          <ul>
            {
              poliData.map(eachpost => (
                <li key={eachpost?.name}><p>{eachpost?.name}</p></li>
              ))
            }

          </ul>
        </div>
        
      </div>

    </div>
  )
}
