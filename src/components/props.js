import React from "react";
function Hello(props /* or {name,club,childrne}*/) {
    //  ####################
    // jsx
    // #####################
    // return <h1> hello world</h1> 
    // return React.createElement('div',
    // {className:'divi'},
    // React.createElement('h3',
    // null,
    // React.createElement('code',
    // null,
    // 'hello jsx'
    // )
    // ),
    // React.createElement('h1',
    // null,
    // 'h in div')
    // )

    // #####################
    // functional props 
    // #####################

    // we can also distructure the props by 
    // const {name , club,children}=props
    return (
        <div>
            <h3>hello , I am {props.name} ,
             I am a {this.propsclub} fan
        </h3>
        {this.props.children}
        </div>
        
    )

}
export default Hello