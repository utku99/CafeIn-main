import { View, Text, TouchableOpacity, ToastAndroid, Modal, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Edit from "../components/svg/Edit"
import Remove from "../components/svg/Remove"
import axios from 'axios'
import { baseUrl } from '../Constants'
import Input from './Input'
import MenuCard from './MenuCard'

const MyOrders = ({ item, setClicked }: any) => {
    const [orderModal, setOrderModal] = useState(false)
    const [orderModal2, setOrderModal2] = useState(false)
    const [changeOrder, setChangeOrder] = useState<any>(null)
    const [selectedOrder, setSelectedOrder] = useState<any>(null)
    const [selectedCompanyId, setSelectedCompanyId] = useState<any>(null)
    const [companyMenu, setCompanyMenu] = useState<any>()


    useEffect(() => {
        axios.post(`${baseUrl}/detail/get`, {
            "companyId": selectedCompanyId,
        }).then(res => {
            let temp = res.data?.menu[0].menu.filter((temp: any) => temp.id != selectedOrder?.id)
            setCompanyMenu(temp)
        })
    }, [selectedCompanyId])



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
                            item?.remainingTime > 25 && item?.status == "hazırlanıyor" && (
                                <TouchableOpacity onPress={() => { setOrderModal(true); setSelectedOrder(order); setSelectedCompanyId(item?.companyId) }}>
                                    <Edit />
                                </TouchableOpacity>
                            )}
                        {
                            item?.status == "tamamlandı" || item?.status == "iptal edildi" && (
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

            <Modal
                animationType="slide"
                transparent
                visible={orderModal}
                onRequestClose={() => setOrderModal(!orderModal)}
            >
                <View className="flex-1 items-center justify-center bg-black/[.5]">
                    <View className="bg-white p-5 w-[95vw] rounded-lg space-y-3">

                        <Text>Sipariş güncelleme durumunda şuanki siparişiniz iptal olacak ve yerine yeni siparişiniz geçecektir. İptal edilen bakiye bankanızın durumuna göre 1-3 iş günü içinde ödeme yapılan kartınıza yatırılacaktır.</Text>
                        <>
                            <FlatList
                                contentContainerStyle={{ display: "flex", gap: 4 }}
                                className=" my-5 border h-[40vh] bg-gray-400"
                                data={companyMenu}
                                renderItem={({ item }) => <MenuCard key={item?._id} item={item} edit={true} setChangeOrder={setChangeOrder} setOrderModal2={setOrderModal2} />}
                            />
                        </>
                        <Input type='button' label={"Geri"} onPress={() => setOrderModal(false)} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent
                visible={orderModal2}
                onRequestClose={() => setOrderModal2(!orderModal2)}
            >
                <TouchableWithoutFeedback onPress={() => setOrderModal2(false)}>
                    <View className="flex-1 justify-end bg-black/[.5]">
                        <TouchableWithoutFeedback>
                            <View className="rounded-t-xl bg-blue-400 p-4">
                                <Input type='input' label='Kart üzerindeki isim soyisim' />
                                <Input type='input' label='Kart numarası' />
                                <Input type='input' label='CVD' />
                                <Input type='button' label='Ödemeyi Tamala' onPress={() => {
                                    axios.post(`${baseUrl}/order/updateorder`, {
                                        "orderId": item?._id,
                                        "removedId": selectedOrder?.id,
                                        "neworder":
                                        {
                                            "id": changeOrder?.id,
                                            "title": changeOrder?.title,
                                            "content": changeOrder?.content,
                                            "price": changeOrder?.price,
                                        }
                                    }).then((res: any) => {
                                        setOrderModal(false)
                                        setOrderModal2(false)
                                        setClicked(true)
                                        ToastAndroid.show(res?.data?.msg, ToastAndroid.TOP)
                                    })
                                }} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

export default MyOrders