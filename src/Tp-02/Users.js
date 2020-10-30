import React from 'react';

class Users extends React.Component {
    constructor() {
        super();
        this.state = { users: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({ users: json })
            })
    }
    render() {
        return (
            <>
                {this.state.users.map((user) => {
                    return (

                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="card" style={{ width: '30rem', backgroundColor: "lightblue", marginLeft:600 }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{user.username}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Nombre: {user.name}</h6>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Email: {user.email}</li>
                                        <li className="list-group-item">{user.address.street}</li>
                                        <li className="list-group-item">{user.address.suite}</li>
                                        <li className="list-group-item">{user.address.city}</li>
                                        <li className="list-group-item">{user.address.zipcode}</li>
                                        <li className="list-group-item">{user.phone}</li>
                                        <li className="list-group-item">{user.website}</li>
                                        <li className="list-group-item">{user.company.name}</li>
                                        <li className="list-group-item">{user.company.catchPhrase}</li>
                                        <li className="list-group-item">{user.company.bs}</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    )
                })}
            </>
        );
    }
}

export default Users;