import React from 'react';

class Albums extends React.Component {
    constructor() {
        super();
        this.state = { albums: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({ albums: json })
            })
    }
    render() {
        return (
            <>
                {this.state.albums.map((album) => {
                    return (
                        <ul className="list-group" style={{width:"30rem", marginLeft:600}}>
                            <li className="list-group-item" style={{backgroundColor:"lightblue"}}>{album.title}</li>
                        </ul>
                    )
                })}
            </>
        );
    }
}

export default Albums;