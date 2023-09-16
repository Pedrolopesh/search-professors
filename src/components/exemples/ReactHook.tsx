import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

const ReactHook: React.FC = () => {
    const [clickedState, setClicked] = useState(0);

    const handleClick = () => {
        setClicked(clickedState+1);
    };
    
    console.log('rendering ReactHook ...');

    return (
        <View style={styles.container}>
            <Text>React Hook exemple</Text>
            <Text>count: { `${clickedState}` }</Text>

            <RectButton onPress={ () => handleClick() } style={styles.okButton}>
                <Text style={styles.okButtonText}>Click me!</Text>
            </RectButton>
        </View>
    );
}

export default ReactHook;