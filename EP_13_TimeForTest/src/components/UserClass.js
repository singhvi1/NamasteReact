import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
    }

    
  render() {
    const {name, location}=this.props;
    return (
      <div className="user-card">
        <h2>Name :{name}</h2>
        <h3>location : {location}</h3>
        <h4>contact : @Viaksh</h4>
      </div>
    );
  }
}

export default UserClass;
