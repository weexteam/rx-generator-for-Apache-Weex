'use strict';
import {createElement, Component, render} from 'weex-rx';

class App extends Component {
    render() {
        return (
            <div style={styles.container}>
                <text style={styles.welcome}>
                    Welcome to Weex!
                </text>
                <text style={styles.instructions}>
                    To get started, edit src/index.jsx
                </text>
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};

render(<App />);
