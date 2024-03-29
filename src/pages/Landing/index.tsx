import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native'

import api from '../../services/api'

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import landingImg from '../../../assets/images/landing.png';
import studyIcon from '../../../assets/images/icons/study.png';
import giveClassesIcon from '../../../assets/images/icons/give-classes.png';
import heartIcon from '../../../assets/images/icons/heart.png';

import styles from './styles';

function Landing(){
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() =>{
        api.get('connections').then(response => {
            const {total} = response.data

            setTotalConnections(total)
        })
    }, [])

    // const { navigate } = useNavigation();

    function handleNavigateToGiveClasses(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigate('Study')
    }

    function handleNavigateToPlayground(){
        navigate('Playground')
    }

    return(
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg}/>
            
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                    
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToGiveClasses} 
                    style={[styles.button, styles.buttonSecondary]}
                >

                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>
                        Dar aulas
                    </Text>

                </RectButton>
            </View>

            {/* <RectButton 
                onPress={handleNavigateToPlayground} 
                style={[styles.buttonPlayground, styles.buttonSecondary]}
            >

                <Text style={styles.buttonText}>
                    Playground
                </Text>

            </RectButton> */}

            <Text style={styles.totalConnections}>
                Total de { totalConnections } conexões já realizadas {' '}
                <Image source={heartIcon}/>    
            </Text>
        </View>

    )
};

export default Landing;