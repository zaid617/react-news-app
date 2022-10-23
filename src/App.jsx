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

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'world', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '124bff5b2emsh5d7ca3744b99eb0p15e6a2jsn3d428e1ce4e0',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setData(response.data.value)
      document.getElementById("root").style.display = "flex";
      document.getElementById("loader").style.display = "none";
      
    }).catch(function (error) {
      console.error(error);
      document.getElementById("loader").style.display = "none";
      document.querySelector('.cont_principal').className= "cont_principal cont_error_active"; 
    });

  }, [])

  const submitHandler =(e)=>{
  
      e.preventDefault()

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: value , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '124bff5b2emsh5d7ca3744b99eb0p15e6a2jsn3d428e1ce4e0',
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


  function clickHandler (val){

    setValue(val)

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: value , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '124bff5b2emsh5d7ca3744b99eb0p15e6a2jsn3d428e1ce4e0',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data.value)
    }).catch(function (error) {
      console.error(error);
    });
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
