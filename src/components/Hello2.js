import React from "react";
 
// function Hello2(props){
//     return(
//         <h1>Hello {props.name}</h1>
//     )

// }
function Hello2({name, age}) {
    return(
        <div>
        <h1>Hello {name}</h1>
        <p>I am {age} years old</p>
        </div>
    )
}
export default Hello2;