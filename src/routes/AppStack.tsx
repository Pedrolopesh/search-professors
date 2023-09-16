import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import StudyTabs from './StudyTabs';
import GiveClasses from '../pages/GiveClasses';
import Playground from '../pages/Playground';


// Navegação em pilha automáticamente cria o cabeçalho
const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
                <Screen name="Playground" component={Playground} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;