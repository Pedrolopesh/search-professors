import React, { useState } from 'react';
import { View, Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import ReactClass from '../../components/exemples/ReactClass'
import ReactHook from '../../components/exemples/ReactHook'

import styles from './style';

enum ComponentType {
    Hook = 'hook',
    Class = 'class',
}

const Playground = () => {
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleChangeComponent = () => {
        const selectedComponentResult = selectedComponent === 'class' ? 'hook' : 'class';
        setSelectedComponent(selectedComponentResult);
    }

    return(
        <View style={styles.container}>
            <RectButton onPress={() => handleChangeComponent()} style={styles.okButton}>
                <Text style={styles.okButtonText}>Current selection: {selectedComponent} </Text>
            </RectButton>

            {
                selectedComponent === ComponentType.Class ? 
                (
                    <>
                        <ReactClass />
                    </>
                ) : 
                (
                    <>
                        <ReactHook />
                    </>
                )

            }
        </View>

    )
};

export default Playground;