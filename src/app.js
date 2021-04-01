import React from 'react';
import Info from './components/info';
import Input from './components/input';
import addComment from './components/addComment';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }

    }

    render() {
        return (
            <div className = "fixed-container">
                <Info />
                <Input />
                <addComment />
            </div>
        )
    }
}

export default App;