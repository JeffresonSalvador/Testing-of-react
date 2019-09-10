import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);



        this.createTasks = this.createTasks.bind(this);
       
    }

    createTasks(item) {

         return (
         <li  
            key={item.key}>{item.text}
            <button className="close"onClick={() =>
               this.delete(item.key)}>X</button>
            </li>
          
         )
     }

        delete(key){
         console.log("Key is:" + key);
         this.props.delete(key);
       }

    render () {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="listahan">

                {listItems}
                
            </ul>
        );
    }
}

export default List;