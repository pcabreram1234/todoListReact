import React, {Component} from 'react';

export default class Post extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    this.setState({posts: data});
    console.log(data);
  }

  render() {
    return (
      <div className="container row">
        <div className="text-center">
          <h1 className="display-4 m-auto">Posts</h1>
        </div>
        {this.state.posts.map((post) => {
          return (
            <div className="col-md-4 my-1">
              <div key={post.id} className="card">
                <h1 className="card-header">{post.title}</h1>
                <p className="card-body">{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
