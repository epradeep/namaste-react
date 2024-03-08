import User from "./User";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);
        //console.log("parent constructor");
    }

    componentDidMount(){
        //console.log('parent component Did Mount');
    }
    render() {
        //console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h2>{loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <User />
                {/* <UserClass name={"First"} location={"Hyd (class)"} /> */}
            </div>
         )
    }
}
// const About = () => {
//     return <div>
//         <h1>About</h1>
//         <UserClass name={"Pradeep Etika (class)"} location={"Hyd (class)"} />
//     </div>
// }

export default About;