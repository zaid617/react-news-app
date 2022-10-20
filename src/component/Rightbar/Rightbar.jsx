import React from 'react'
import "./Rightbar.css"
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Rightbar() {


  let [data, setData] = useState([]);

  useEffect(() => {

    let Sport = "sport"

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: { q: Sport , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
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

  return (
    <div className='rightBar'>

      <div className="rightBarbox">
        <h2 className='mb-3'>Sports</h2>

        <hr />

        <div className="rightSubBox">
          <ul>
            {
              data.map(eachpost => (
                <li>{eachpost.name}</li>
              ))
            }
          </ul>
        </div>
      </div>

    </div>
  )
}
