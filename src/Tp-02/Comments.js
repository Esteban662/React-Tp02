import React from 'react';

class Comments extends React.Component {
    constructor() {
        super();
        this.state = { comments: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({ comments: json })
            })
    }
    render() {
        return (
            <>
                {this.state.comments.map((comment) => {
                    return (
                        <div className="card" style={{ width: '50rem', backgroundColor:"#D6FFB4", marginLeft:500 }}>
                            <div className="card-body">
                                <h5 className="card-title">{comment.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
                                <p className="card-text">{comment.body}</p>
                            </div>
                        </div>

                    )
                })}
            </>
        );
    }
}

export default Comments;