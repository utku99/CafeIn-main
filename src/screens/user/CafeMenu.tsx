import { View, Text, Image, ScrollView, FlatList, ToastAndroid, Pressable, Modal, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import Header from '../../components/Header'
import MenuCard from '../../components/MenuCard'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../Constants'
import axios from 'axios'
import Commentcomp from '../../components/Commentcomp'
import { clearOrder } from '../../redux/slices/order'

const CafeMenu = ({ route }: any) => {
    const { menu } = route.params
    const { order } = useSelector((state: any) => state.order)
    const { user } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(1)
    const [companyComments, setCompanyComments] = useState([])
    const [orderModal, setOrderModal] = useState(false)

    const total = () => {
        let total = 0
        order.map((item: any) => {
            total += Number(item.price)
        })
        return total
    }


    useEffect(() => {
        axios.post(`${baseUrl}/comment/getall`, {
            "companyId": menu[0]?.companyId,
        }).then(res => {
            setCompanyComments(res.data)
        })
    }, [])


    return (
        <View>
            <Header />

            <View className="flex-row justify-center gap-4 mt-2 mb-5">
                <Pressable className="self-center" onPress={() => setActiveTab(1)}>
                    <Text className={`${activeTab == 1 ? "text-red-400" : "text-black"} text-bold text-xl`}>Menü</Text>
                </Pressable>
                <Pressable className="self-center" onPress={() => setActiveTab(2)}>
                    <Text className={`${activeTab == 2 ? "text-red-400" : "text-black"} text-bold text-xl`}>Yorumlar</Text>
                </Pressable>
            </View>


            {/* <FlatList
                // className="h-[90%]"
                contentContainerStyle={{ display: 'flex', flexDirection: "column", gap: 10, paddingBottom: 100 }}
                data={menu}
                renderItem={({ item }) =>
                    <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: item }} />
                }
            /> */}

            {activeTab == 1 ? (
                <>
                    <FlatList
                        contentContainerStyle={{ display: "flex", gap: 4 }}
                        className=" mb-10"
                        data={menu[0].menu}
                        renderItem={({ item }) => <MenuCard key={item?._id} item={item} showadd={true} />}
                    />

                    {
                        order?.length !== 0 && (
                            <View className="self-center mb-3">
                                <Text>
                                    Toplam :{total()}
                                </Text>
                            </View>
                        )
                    }

                    {
                        order.length !== 0 &&
                        <Input type='button' label='Siparişi Ver' onPress={() => { setOrderModal(true) }} />
                    }
                    <Modal
                        animationType="slide"
                        transparent
                        visible={orderModal}
                        onRequestClose={() => setOrderModal(!orderModal)}
                    >
                        <TouchableWithoutFeedback onPress={() => setOrderModal(false)}>
                            <View className="flex-1 justify-end bg-black/[.5]">
                                <TouchableWithoutFeedback>
                                    <View className="rounded-t-xl bg-blue-400 p-4">
                                        <Input type='input' label='Kart üzerindeki isim soyisim' />
                                        <Input type='input' label='Kart numarası' />
                                        <Input type='input' label='CVD' />
                                        <Input type='button' label='Ödemeyi Tamala' onPress={() => {
                                            axios.post(`${baseUrl}/order/new`, {
                                                "userId": user?.userId,
                                                "fullName": user?.name + " " + user?.surname,
                                                "companyId": menu[0]?.companyId,
                                                "orders": order.map((item: any) => ({
                                                    id: item.id,
                                                    title: item.title,
                                                    content: item.content,
                                                    price: item.price,
                                                }))
                                            }).then((res: any) => {
                                                setOrderModal(false)
                                                dispatch(clearOrder([]))
                                                ToastAndroid.show(res?.data?.msg, ToastAndroid.TOP)
                                            })
                                        }} />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </>
            ) : (
                <FlatList
                    contentContainerStyle={{ display: "flex", gap: 4 }}
                    className=" mb-10"
                    data={companyComments}
                    renderItem={({ item }) => <Commentcomp item={item} />}
                />
            )
            }



        </View>


    )
}

export default CafeMenu

