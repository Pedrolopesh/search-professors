import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

interface State {
    clicked: boolean;
}

class ReactClass extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            clicked: false
        };
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        
        console.log('rendering React class ...');

        return (
            <View style={styles.container}>
                <Text>React Class exemple</Text>
                <Text>clicked: {this.state.clicked ? 'true' : 'false'} </Text>
                <RectButton onPress={() => this.handleClick()} style={styles.okButton}>
                    <Text style={styles.okButtonText}>Click me!</Text>
                </RectButton>
            </View>
        );
    }
}

export default ReactClass;