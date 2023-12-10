import React from 'react'
import Login from './screens/auth/Login'
import UserRegister from './screens/auth/UserRegister'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='UserRegister' component={UserRegister} />
        </Stack.Navigator>
    )
}

const Route = () => {
    return (
        <AuthStack />
    )
}

export default Route