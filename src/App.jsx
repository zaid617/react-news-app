import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Feed from './component/Feed/Feed';
import Navbar from './component/Navbar/Navbar';
import Rightbar from './component/Rightbar/Rightbar';
import Sidebar from './component/Sidebar/Sidebar';

function App() {

  let [data , setData] = useState([]);
  let [value , setValue] = useState("");
  let [stat ,setStat] = useState(false)

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'world', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
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

  const submitHandler =(e)=>{

      if (!stat) {
  
      e.preventDefault()

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: value , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '338ccba132mshbf3b25d769906ccp10e56ejsn48743670e061',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data.value)
    }).catch(function (error) {
      console.error(error);
    });

    return false;
  }

  else{
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: value , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '338ccba132mshbf3b25d769906ccp10e56ejsn48743670e061',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data.value)
    }).catch(function (error) {
      console.error(error);
      setStat(false)
    });
  }
}

  function clickHandler (val){

    setStat(true)
    setValue(val)
    submitHandler()

}

  return (
    <div className="App">
     <Navbar setData={setData} value={value} setValue={setValue} submitHandler={submitHandler}/>
     <div className="homeContainer">
       <Sidebar clickHandler={clickHandler}/>
       <Feed data={data}/>
       <Rightbar/>
     </div>
    </div>
  );
}

export default App;
