import { useState } from 'react';

function Form() {
  const [Name, setName] = useState('') 
  const [dropdown, setdropdown] = useState('') 
  const [password, setPassword] = useState('') 
  const [textarea, settextarea] = useState('') 

  return (
    <div className="main">
      <form>
       
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          
        />
       
        <input
          placeholder="dropdown"
          onChange={(e) => setdropdown(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="textarea"
          onChange={(e) => settextarea(e.target.value)}
        />
        <button type="submit" className='text'>Submit</button>
      </form>
    </div>


  )
}

export default Form;
 