import React, { useEffect } from 'react'
import UserRegister from './screens/auth/UserRegister'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import Home from './screens/user/Home';
import CafeDetail from './screens/user/CafeDetail';
import CafeMenu from './screens/user/CafeMenu';
import { useDispatch, useSelector } from 'react-redux';
import CompanyOrders from './screens/company/CompanyOrders';
import AdminDetail from './screens/company/AdminDetail';
import AdminHome from './screens/company/AdminHome';
import UserOrders from './screens/user/UserOrders';
import OtherOrders from './screens/company/OtherOrders';
import Notifications from './screens/user/Notifications';
import axios from 'axios';
import { baseUrl } from './Constants';
import { setNotification } from './redux/slices/user';

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
    const { user, notification } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserOrders = () => {
            axios.post(`${baseUrl}/order/getuserorder`, {
                userId: user?.userId
            }).then((res: any) => {
                let temp = res.data.filter((item: any) => (item.status == "hazırlanıyor" && item?.remainingTime < 10) || item.status == "iptal edildi")
                dispatch(setNotification(temp.length))
            })
        };

        fetchUserOrders();

        const intervalId = setInterval(fetchUserOrders, 60000);

        return () => clearInterval(intervalId);
    }, [user, notification]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='detail' component={CafeDetail} />
            <Stack.Screen name='cafemenu' component={CafeMenu} />
            <Stack.Screen name='userorders' component={UserOrders} />
            <Stack.Screen name='notifications' component={Notifications} />
        </Stack.Navigator>
    )
}

const CompanyStack = () => {
    const { user, notification } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserOrders = () => {
            axios.post(`${baseUrl}/order/getall`, {
                "companyId": user?.companyId,
            }).then(res => {
                let temp = res.data.filter((item: any) => item.status == "güncellendi")
                dispatch(setNotification(temp.length))
            })
        };

        fetchUserOrders();

        const intervalId = setInterval(fetchUserOrders, 60000);

        return () => clearInterval(intervalId);
    }, [user, notification]);


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='adminhome' component={AdminHome} />
            <Stack.Screen name='admin' component={AdminDetail} />
            <Stack.Screen name='orders' component={CompanyOrders} />
            <Stack.Screen name='otherorders' component={OtherOrders} />
            <Stack.Screen name='notifications' component={Notifications} />
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