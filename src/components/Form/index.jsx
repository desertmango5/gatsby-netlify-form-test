import React from 'react'; 
import './index.module.css'; 

const Form = () => (
  <div>
    <form name="contact" netlify>
      <p>
        <label>Name: </label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Email: </label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>Message: </label>
        <textarea name="message" cols="30" rows="10" />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  </div>
);

export default Form;
