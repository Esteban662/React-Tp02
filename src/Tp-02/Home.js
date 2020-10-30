import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
        this.state={home:[]};
    }
    render() {
        return (
            <h1 style={{paddingLeft:800, backgroundColor:"lightblue", fontSize:100}}>Home</h1>
        );
    }
}

export default Home;