import React from 'react'
import UserRegister from './screens/auth/UserRegister'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import Home from './screens/Home';
import CafeDetail from './screens/CafeDetail';
import CafeMenu from './screens/CafeMenu';
import Adminpage from './screens/Adminpage';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='register' component={UserRegister} />
        </Stack.Navigator>
    )
}

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='detail' component={CafeDetail} />
            <Stack.Screen name='cafemenu' component={CafeMenu} />
        </Stack.Navigator>
    )
}

const CompanyStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='admin' component={Adminpage} />
        </Stack.Navigator>
    )
}




const Route = () => {
    const { user } = useSelector((state: any) => state.user)

    if (user) {
        if (user.userroleId == "1") {
            return <UserStack />
        } else {
            return <CompanyStack />
        }
    } else {
        return <AuthStack />
    }




}

export default Route