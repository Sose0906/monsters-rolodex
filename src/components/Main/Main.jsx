import React from 'react';
import './_Main.css';
import CardList from "../CardList/CardList";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {monsters: []}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({monsters: result}))
    }

    render() {

        return (
            <div className='Main'>
                <h1>Monsters Rolodex</h1>
                <CardList monsters={this.state.monsters}/>
            </div>

        )

    }
}


export default Main
