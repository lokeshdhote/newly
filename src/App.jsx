import React, { useState } from "react";

 
const App = () => {
  const [users,setusers] = useState([])
  const [username,setusername] = useState("")
  const [email,setemail] =  useState("")
  const [checkbox,setcheckbox] =  useState("")
  const [gender,setgender] =  useState("male")
  const [select,setselect] =  useState("")
 
  
  const submithandler = (e) =>{
  
    e.preventDefault()
    const newuser ={username,email,checkbox,gender,select}
    const copyuser = [...users]
    copyuser.push(newuser)
    setusers(copyuser)
  }
  let listData=  users.length > 0 ? (
    users.map((user,index) => (
   
     <div key={index}>
       <h1>{user.username}</h1>
       {user.select}
     </div>
   ))
 ):(
   <h1>no data</h1>
 );
    
  

console.log(select);
console.log(checkbox);
console.log(setgender);

  return (
    <  >
<form  className="flex items-center justify-center gap-10 mt-20" onSubmit={submithandler} >
  <input className="w-[17vw] h-[3vw] border boder-zinc-700 " onChange={(e) => setusername(e.target.value)}  type="text"  placeholder="username" value={username}  />
  <br />
  <input className="w-[17vw] h-[3vw] border boder-zinc-700 " onChange={(e) =>setemail(e.target.value)} type="email"  placeholder="email" value={email}/>
  <br />
  <input onChange={(e) =>setcheckbox(e.target.value)} type="checkbox" value={checkbox} />
  accept
  <br />
  <input onChange={(e) =>setgender(e.target.value)} type="radio" value="male"  checked={gender ==="male" ? true:false }  name="gender"  />
  male
  <br />
  <input  onChange={(e) =>setgender(e.target.value)} type="radio" value="female" checked={gender ==="female" ? true:false } name="gender" />
  female
  <br />
  
  <select  onChange={(e) =>setselect(e.target.value)}   >
    <option value="delhi">delhi</option>
    <option value="mumbai">mumbai</option>
    <option value="goa">goa</option>
    <option value="bhopal">bhopal</option>




  </select>
  <br />
  <button className="w-[17vw] h-[3vw] border boder-zinc-700 " >submit</button>
</form>
{JSON.stringify(users)}
{listData}
 
    </>
  );
};

export default App;
