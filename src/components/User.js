import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Mamaste React");
        },1000);

        return () => {
            clearInterval(timer);
        }
    },[]);
    
    return ( 
            <div className="user-card">
                <h1>{count}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: Hyderabad</h3>
                <h4>Contact: 9177949801</h4>
            </div>
        )
}

export default User;