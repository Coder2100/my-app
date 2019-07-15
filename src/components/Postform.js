import React, { Component } from 'react'

 class Postform extends Component {
     //create components state
     constructor(props){
         super(props);
         this.state = {
             title: '',
             body:''
         };
         //creating on chnage event for form fields
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     //creating on change function
     onChange(event){
         this.setState({[event.target.name]: event.target.value});
     }

     //creating on submit function
     onSubmit(event){
         //prevent button from auto submit
         event.preventDefault();

         //creating an object or state i.e data
        const post = {
            title:this.state.title,
            body:this.state.body
        };
     }

    /**
     fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body:JSON.stringify(post)
     })
     .this(res => res.json())
     .then(data => console.log(data));
     */
    render() {
        return (
          //creating form fields
         <div>
         <h1 onSubmit={this.onSubmit}>Add Form</h1>
         <form>
         <div>
         <label>Title: </label>
         <br/>
         <input type="text" name="title" onChange={this.onChange}/>
         {this.state.title}
         </div>
      
         <div>
         <br/>
         <label>Body: </label>
         <br/>
         <textarea type="text" name="body" onChange={this.onChange}/>
         {this.state.body}
         </div>
       
        <button type="submit">Submit</button>
         </form>
         </div>
       
        );
    }
}
export default Postform;
