import React from 'react';
import axios from 'axios'

function Chore(props) {
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Choose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chores: ['dishes', 'trash']
        };
    }

    sendAlert(chore) {
        axios.get('http://localhost:8080/' + chore)
            .then(function(response) {
        if(response.status == 200) {
                alert(response.data)
        } else {
                alert("Something went wrong")
        }})
    }

    render() {
        const chores = this.state.chores.slice();
        const choresList = chores.map((chore, index) => {
            const desc = "I did the " + chore;
            return (
                <li key={chore}>
                    <button onClick={() => this.sendAlert(chore)}>{desc}</button>
                </li>
            );
        });
        return (
            <div>
                <h1>Choose your Chore</h1>
                <ol>{choresList}</ol>
            </div>
        );
    }

}

export default Choose;