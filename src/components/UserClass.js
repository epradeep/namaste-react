import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name:"Test",
                location: "test",
                avatar_url: "http://dummy-photo.com"
            }
        }
        //console.log(this.props.name + "child constructor");
    }

    async componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Mamaste React");
        },1000)
        //console.log(this.props.name + "child component Did Mount");
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.state.count !== this.prevState.count){
            //
        }
        //console.log("compoenet Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log("compoenet will unmount");
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        //console.log(this.props.name + "child render");
        return ( 
        <div className="user-card">
            <img src={avatar_url}  />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: 9177949801</h4>
        </div>
        )
    }
}

export default UserClass;