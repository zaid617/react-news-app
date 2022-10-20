import './App.css';
import Feed from './component/Feed/Feed';
import Navbar from './component/Navbar/Navbar';
import Rightbar from './component/Rightbar/Rightbar';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="homeContainer">
       <Sidebar/>
       <Feed/>
       <Rightbar/>
     </div>
    </div>
  );
}

export default App;
