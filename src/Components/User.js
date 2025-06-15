import { useEffect, useState } from "react";
const User = () => {
  const [gitInfo , setGitInfo] = useState([]);
   useEffect (()=>{
    fetchData();
   },[])
   const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/summbal122");
    const json = await data.json();
    console.log(json);
    setGitInfo(json);
   }
   const {name, id, avatar_url
    } = gitInfo;
  return(
    <div className="user-card">
      <h2>name: {name}</h2>
      <h3>User Id: {id}</h3>
      <img src={avatar_url}></img>
    </div>
  )
}
export default User;