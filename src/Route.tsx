import React from 'react'
import UserRegister from './screens/auth/UserRegister'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import Home from './screens/user/Home';
import CafeDetail from './screens/user/CafeDetail';
import CafeMenu from './screens/user/CafeMenu';
import { useSelector } from 'react-redux';
import CompanyOrders from './screens/company/CompanyOrders';
import AdminDetail from './screens/company/AdminDetail';
import AdminHome from './screens/company/AdminHome';
import UserOrders from './screens/user/UserOrders';

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
            <Stack.Screen name='userorders' component={UserOrders} />
        </Stack.Navigator>
    )
}

const CompanyStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='adminhome' component={AdminHome} />
            <Stack.Screen name='admin' component={AdminDetail} />
            <Stack.Screen name='orders' component={CompanyOrders} />
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