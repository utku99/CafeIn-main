import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Constants'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Input from '../../components/Input'
import IncomingOrdersCard from '../../components/IncomingOrdersCard'
import Header from '../../components/Header'

const OtherOrders = () => {
    const { user } = useSelector((state: any) => state.user)
    const [orders, setOrders] = useState()
    const [clicked, setClicked] = useState(false)


    useEffect(() => {
        const fetchUserOrders = () => {
            axios.post(`${baseUrl}/order/getall`, {
                "companyId": user?.companyId,
            }).then(res => {
                setOrders(res.data);
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

            <View className="items-center ">
                <Input type='heading' label='Biten Siparişler' />
            </View>
            <FlatList
                contentContainerStyle={{ display: "flex", gap: 4, paddingBottom: 150 }}
                data={orders}
                renderItem={({ item }) => {
                    if (item.status == "tamamlandı" || item.status == "iptal edildi") {
                        return (
                            <View key={item?._id}>
                                <View className="flex-row">
                                    <Input type='heading' label={item?.userId} />
                                    <Input type='heading' label={item?.status} />
                                </View>
                                <IncomingOrdersCard item={item} setClicked={setClicked} />
                            </View>
                        );
                    } else {
                        return null;
                    }
                }}
            />

        </View>
    )
}

export default OtherOrders