import React, { Component } from 'react'

 class Posts extends Component {
     //create components state
     constructor(props){
         super(props);
         this.state = {
             posts: []
         }
     }
     //create life cycle
     componentWillMount(){
        // console.log("Hello world")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        //.then(data => console.log(data));
        .then(data => this.setState({posts: data}));

     }
    render() {
        //grabbing data for the return part
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
        return (
            //what you display goes here
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}
export default Posts;
