import './App.css';
import Home from './views/Home';
import Start from './views/Start';
import Submitted from './views/Submitted';

function App() {

  const goToHome = () => {
    document.getElementById("start-view").style.opacity = 0;
    document.getElementById("home-view").style.zIndex = 11;
    document.getElementById("home-view").style.opacity = 1;
    document.getElementById("home-view").style.filter = 'unset';
  }

  const goToSubmitted = () => {
    document.getElementById("home-view").style.filter = 'blur(10px)';    
    document.getElementById("submitted-view").style.zIndex = 15;
    document.getElementById("submitted-view").style.opacity = 1;
  }

  const backToHome = () => {
    window.location.reload();
    document.getElementById("submitted-view").style.opacity = 0;
    document.getElementById("submitted-view").style.zIndex = 0; 
    document.getElementById("home-view").opacity = 0;
    document.getElementById("home-view").style.zIndex = 1;
    document.getElementById("start-view").style.opacity = 1;
  }

  return (
    <div className="App">
      <div className="start-view" id="start-view">
        <Start goToHome={goToHome}/> 
      </div>
      <div className="home-view" id="home-view" >
        <Home goToSubmitted={goToSubmitted}/>
      </div>
      <div className="submitted-view" id="submitted-view" >
        <Submitted backToHome={backToHome}/>
      </div>
    </div>
  );
}

export default App;
