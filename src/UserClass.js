import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
render(){
  const {name,location} = this.props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Contact: sunbalijaz13@gmail.com</h3>
      <h4>Address1: {location}</h4>
    </div>
  );
}
}
export default UserClass;