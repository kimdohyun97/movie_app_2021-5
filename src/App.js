import {Component} from "react"

class App extends Component {
    state = {
        count: 0,
    }
    render() {
        return (
            <div>
            <h1>The number is: {this.state.count} </h1>
            <button>Add</button>
            <button>Minus</button>
            </div>
        )
    }
}

export default App