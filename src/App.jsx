import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const[firstname,setfirstname]=useState("")
  // const[lastname,setlastname]=useState("")
  // function firstnamehandler(event){
  //   // console.log(event.target.value);
  //   setfirstname(event.target.value)
  //   console.log(firstname)
  // }
  // function lastnamehandler(event){
  //   // console.log(event.target.value)
  //   setlastname(event.target.value)
  //   console.log(lastname)
  // }
const[formData,seformData]=useState({firstname:"",lastname:"",email:"",comments:"",checkbox1:true,mode:"",favcar:""})
function changehandler(event){
  const {name,value,checked,type}=event.target 
  seformData(prevFormData=>{
    return{
      ...prevFormData,
      [name]:type==="checkbox"?checked:value
    }
  })
  
}
function submithandler(event){
  event.preventDefault()
  console.log("printing the data of the form...")
  console.log(formData)
}

  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" name="firstname" id="" placeholder='firstname' onChange={changehandler} value={formData.firstname} />
        <input type="text" name="lastname" id="" placeholder='lastname' onChange={changehandler} value={formData.lastname}/>
        <input type="text" name='email' placeholder='enter email'  onChange={changehandler} value={formData.email }/>
        <br />
        <br />
        <textarea name="comments" id="" value={formData.comments} onChange={changehandler}></textarea>
        <br />
        <input type="checkbox" name="checkbox1" id="checkbox1" onChange={changehandler} checked={formData.checkbox1}/>
        <label htmlFor="checkbox1">am i visible</label>

        <br />

        <fieldset>
          <legend>Mode</legend>
          <label htmlFor="online-mode">Online mode:</label>
        <input type="radio" name="mode" id="online-mode" onChange={changehandler} value="online-mode" checked={formData.mode==="online-mode"} />
        <label htmlFor="offline-mode">offline mode:</label>
        <input type="radio" name="mode" id="offline-mode" onChange={changehandler} value="offline-mode" checked={formData.mode==="offline-mode"} />
        </fieldset>
        <label htmlFor="cars">tell me your fav car:</label>
          <select name="favcar" id="cars" value={formData.favcar} onChange={changehandler}>
            <option value="scarpio">scarpio</option>
            <option value="fartuner">fartuner</option>
            <option value="Tharr">thar</option>
            <option value="legender">legender</option>
            <option value="defender">defender</option>

          </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
