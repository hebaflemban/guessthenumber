import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState("")
  const [goal, setGoal] = useState(0);
  const [guessedNum, setGuessedNum] = useState(0);
  const [attemps, setAttemps] = useState(0);
  
  const check = () =>  {
    setAttemps(attemps+1)
    if (attemps<5){
      if (guessedNum===goal){
        console.log("WOW you got it ")
        setMsg ('WOW you\'re a wizard')
      }else if (guessedNum > goal+10){
        console.log("too high")
        setMsg('too high')
      }else if (guessedNum < goal-10){
        console.log("too low")
        setMsg('too low')
      } else if (goal+10 > guessedNum && guessedNum > goal-10){
        console.log("almost got it")
        setMsg('too close')
      }
  }else {
    setMsg("Stupid people are dangerous. Any last words?")
  }
  }
  
  useEffect(()=>{
    setGoal(Math.floor((Math.random() * 100) + 1));
  },[])

  const reset=()=>{
    setGoal(null)
    setAttemps(0)

  }
  const handleClick = () => {
    check()
  };

  const handleChange = event => {
    setGuessedNum(Number(event.target.value));
    console.log(goal, guessedNum)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.betterthanpants.com/media/catalog/product/m/a/may-the-odds-be-ever-in-your-favor--the-hunger-games-shirt-preview.png"} className=" App-logo" alt="logo" />
        <p>
        </p>
        <div>
          <input type="text" height="100px" onChange={handleChange} />  
        </div>
        <div>
          <button className = "my-2" onClick={handleClick} >
            <img src="https://i.pinimg.com/originals/14/c2/6d/14c26dfd6634d4504e6dc362e588c231.png" height="100px"></img>
            
          </button>
        </div>
            <div id="example-fade-text">
              {msg}
            </div>
            <div id="example-fade-text">
              <p>Remainin attempts: {5-attemps}</p>
            </div>
            
        

      </header>
 
 
    </div>
  );
}

export default App;
