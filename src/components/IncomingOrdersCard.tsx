import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import Remove from "../components/svg/Remove"
import axios from 'axios'
import { baseUrl } from '../Constants'

const IncomingOrdersCard = ({ item, setClicked }: any) => {

    return (
        <View className="space-y-3">
            {
                item?.orders.map((order: any) => (
                    <View className="flex-row justify-between bg-white p-2 w-full">
                        <View className="space-y-2 w-3/4">
                            <Text className="font-bold">{order?.title}</Text>
                            <Text className="text-gray-400"> {order?.content}</Text>
                            <Text className="text-green-400">{order?.price} TL</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            axios.post(`${baseUrl}/order/completeorder`, {
                                orderId: item?._id
                            }).then((res: any) => {
                                setClicked(true)
                                ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                            })
                        }}>
                            <Remove />
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>

    )
}

export default IncomingOrdersCard