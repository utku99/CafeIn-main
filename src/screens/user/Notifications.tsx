import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import NotificationComp from '../../components/NotificationComp'
import axios from 'axios'
import { baseUrl } from '../../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../../redux/slices/user'
import order from '../../redux/slices/order'

const Notifications = () => {
    const { user } = useSelector((state: any) => state.user)
    const [notify, setNotify] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOrders = () => {
            if (user?.userroleId == 1) {
                axios.post(`${baseUrl}/order/getuserorder`, {
                    userId: user?.userId
                }).then((res: any) => {
                    let temp = res.data.filter((item: any) => (item.status == "hazırlanıyor" && item?.remainingTime < 10) || item.status == "iptal edildi")
                    setNotify(temp);
                    dispatch(setNotification(temp.length))
                })
            } else {
                axios.post(`${baseUrl}/order/getall`, {
                    "companyId": user?.companyId,
                }).then(res => {
                    let temp = res.data.filter((item: any) => item.status == "güncellendi")
                    setNotify(temp);
                    dispatch(setNotification(temp.length))
                })
            }

        };

        fetchOrders();
        2
        const intervalId = setInterval(fetchOrders, 60000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <View>
            <Header />

            <FlatList
                contentContainerStyle={{ display: "flex", gap: 6, paddingVertical: 20 }}
                className=" mb-10"
                data={notify}
                renderItem={({ item }) => {
                    return (
                        <View key={item?._id}>
                            <NotificationComp key={item?._id} item={item} />
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default Notifications