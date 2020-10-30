import React from 'react';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = { posts: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                return res.json()
            }).then((json) => {
                this.setState({ posts: json })
            })
    }
    render() {
        return (
            <>
                {this.state.posts.map((post) => {
                    return(
                    <div className="card" style={{ width: '40rem', backgroundColor:"#FFEDB4", marginLeft:500}}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                    )
                })}
            </>
        );
    }
}

export default Posts;