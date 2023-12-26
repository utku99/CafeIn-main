import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MenuCard from '../../components/MenuCard'
import axios from 'axios'
import { baseUrl } from '../../Constants'
import { useSelector } from 'react-redux'
import MyOrders from '../../components/MyOrders'
import Input from '../../components/Input'
import Header from '../../components/Header'

const UserOrders = () => {
    const { user } = useSelector((state: any) => state.user)
    const [myOrders, setMyOrders] = useState()
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const fetchUserOrders = () => {
            axios.post(`${baseUrl}/order/getuserorder`, {
                userId: user?.userId
            }).then((res: any) => {
                setMyOrders(res.data);
            })
        };

        fetchUserOrders();

        setClicked(false)

        const intervalId = setInterval(fetchUserOrders, 60000);

        return () => clearInterval(intervalId);
    }, [clicked]);


    return (
        <View>
            <Header />
            <FlatList
                contentContainerStyle={{ display: "flex", gap: 4 }}
                className=" mb-10"
                data={myOrders}
                renderItem={({ item }) =>
                    <View key={item?._id}>
                        <Input type='heading' label={item?.status} />
                        <MyOrders key={item?._id} item={item} setClicked={setClicked} />
                    </View>
                }
            />
        </View>
    )
}

export default UserOrders