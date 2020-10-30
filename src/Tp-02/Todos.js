import React from 'react';

class Todos extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({ todos: json })
            })
    }
    render() {
        return (
            <>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item" style={{ backgroundColor: "#C2FF8F", marginLeft:200 }}>Hecho</li>
                    <li className="list-group-item" style={{ backgroundColor: "#FF6A6A"}}>Sin Hacer</li>
                </ul>
                {this.state.todos.map((todo) => {
                    if (todo.completed === true) {
                        return (
                            <ul className="list-group">
                                <li style={{ marginLeft: 600, marginRight: 800, backgroundColor: "#C2FF8F" }} className="list-group-item list-group-item-primary">{todo.title}</li>
                            </ul>
                        )
                    } else {
                        return (
                            <ul className="list-group">
                                <li style={{ marginLeft: 600, marginRight: 800, backgroundColor: "#FF6A6A" }} className="list-group-item list-group-item-primary">{todo.title}</li>
                            </ul>
                        )
                    }



                })}
            </>
        );
    }
}

export default Todos;