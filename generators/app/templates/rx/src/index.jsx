'use strict';
import {createElement, Component} from 'weex-rx';
import { View, Text } from 'weex-rx-components';

class Demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Rx!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit src/index.jsx
                </Text>
            </View>
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
        fontSize: '20rem',
        textAlign: 'center',
        margin: '10rem',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: '5rem',
    },
};

export default Demo;
