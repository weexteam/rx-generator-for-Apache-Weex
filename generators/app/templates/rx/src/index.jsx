'use strict';
import {createElement, Component} from '@ali/rx';
import { View, Text } from '@ali/rx-components';

class Demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to R(x)!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit src/index.jsx
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,
                </Text>
                <Text style={styles.instructions}>
                    Cmd+D or shake for dev menu
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

export default Demo;