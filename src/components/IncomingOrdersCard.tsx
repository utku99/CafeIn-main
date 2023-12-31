import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import Remove from "../components/svg/Remove"
import Tick from "../components/svg/Tick"
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
                            if (item?.status == "bekliyor") {
                                axios.post(`${baseUrl}/order/changeorderstate`, {
                                    orderId: item?._id,
                                    status: "hazırlanıyor"
                                }).then((res: any) => {
                                    setClicked(true)
                                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                                })
                            } else if (item?.status == "hazırlanıyor") {
                                axios.post(`${baseUrl}/order/changeorderstate`, {
                                    orderId: item?._id,
                                    status: "tamamlandı"
                                }).then((res: any) => {
                                    setClicked(true)
                                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                                })
                            }
                            else if (item?.status == "güncellendi") {
                                axios.post(`${baseUrl}/order/changeorderstate`, {
                                    orderId: item?._id,
                                    status: "hazırlanıyor"
                                }).then((res: any) => {
                                    setClicked(true)
                                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                                })
                            }
                        }}>
                            <Tick />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            if (item?.status == "tamamlandı" || item?.status == "iptal edildi") {
                                axios.post(`${baseUrl}/order/removeorder`, {
                                    orderId: item?._id,
                                }).then((res: any) => {
                                    setClicked(true)
                                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                                })
                            }
                            else if (item?.status == "bekliyor" || item?.status == "güncellendi") {
                                axios.post(`${baseUrl}/order/changeorderstate`, {
                                    orderId: item?._id,
                                    status: "iptal edildi"
                                }).then((res: any) => {
                                    setClicked(true)
                                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                                })
                            }
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