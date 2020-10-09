import React, { useState } from 'react'
import './ContactForm.css'
//import { useForm } from "react-hook-form";

function ContactForm(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [explanation, setExplanation] = useState("")


  const handleSubmit = (event)=>{
    event.preventDefault();
    let data = [name, email, gender, explanation]

    //If any fields are empty, alert the user and do not proceed with submitting.
    if(data.includes("")){
      alert("All fields must not be empty.")
    } else {
      //POST to URL from instructions
      let url = "https://httpbin.org/delay/3"
      let request = new XMLHttpRequest();
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.send(data);

      //On success, set the form to empty state and display a success message.
      setName("");
      setEmail("");
      setGender("");
      setExplanation("");
      alert("Success!");
    }
  }


  return(
    <div class="background">
      <div class="centered">
        <form onSubmit={handleSubmit} >
          <h1>Contact Us</h1>
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}></input>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
          <div class="radios">
            <input type="radio" id="male" name="gender" value="male" onChange={e => setGender(e.target.value)}></input>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>
            <label for="female">Female</label>
          </div>
          <textarea rows="4" cols="50" placeholder="I am using this form because... " onChange={e => setExplanation(e.target.value)}></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>

  )

}

export default ContactForm;
