import React from "react";

const Form = props => (
            
            <form onSubmit={props.getWeather}>
               <input type="text" name="city" placeholder="City"/>
               <p> <input type="text" name="country" placeholder="Country"/> </p>
               
               <p> <button>Get Weather </button> </p>
            </form>
            
        );
  

export default Form;