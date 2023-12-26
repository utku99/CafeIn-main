import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import Edit from "../components/svg/Edit"
import Remove from "../components/svg/Remove"
import axios from 'axios'
import { baseUrl } from '../Constants'

const MyOrders = ({ item, setClicked }: any) => {


    return (
        <>
            {
                item?.orders?.map((order: any) => (
                    <View className="flex-row justify-between bg-white p-2 w-full mb-2">
                        <View className="space-y-2 w-3/4">
                            <Text className="font-bold">{order?.title}</Text>
                            <Text className="text-gray-400"> {order?.content}</Text>
                            <Text className="text-green-400">{order?.price} TL</Text>
                        </View>

                        {
                            item?.status == "hazırlanıyor" ? (
                                <TouchableOpacity >
                                    <Edit />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => {
                                    axios.post(`${baseUrl}/order/removeorder`, {
                                        orderId: item?._id
                                    }).then((res: any) => {
                                        setClicked(true)
                                        ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                                    })
                                }}>
                                    <Remove />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                ))
            }
        </>

    )
}

export default MyOrders