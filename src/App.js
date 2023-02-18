import './App.css';
import logo from './supertaste-final.png'

function App() {


  const openWebsite = (e)=>{

    let webClick = e.target.innerHTML

    if(webClick === "MUSIC"){
      console.log('zach')
      // open site for music
    }
    else if(webClick === "LIVE"){
      console.log('is')
      // open site for live
    }
    else if(webClick === "ABOUT"){
      console.log('a')
      // open site for about
    }
    else{
      console.log('bitch')
      // open site for merch
    }
  }
  
  return (
    <div className="App">
      <div className='item-box top'>
        <div className='item listen' onClick={openWebsite}>MUSIC</div>
        <div className='item live'onClick={openWebsite}>LIVE</div>
      </div>
      <div className='logo-box'>
        <img className='logo' src={logo} alt='supertaste'></img>
      </div>
      <div className='item-box bottom'>
        <div className='item about'onClick={openWebsite}>ABOUT</div>
        <div className='item merch'onClick={openWebsite}>MERCH</div>
      </div>
    </div>
  );
}

export default App;
