import { View, Text, ScrollView, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import Map from '../../components/Map'
import Header from '../../components/Header'
import axios from 'axios'
import { baseUrl } from '../../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { setClicked } from '../../redux/slices/user'

const CafeDetail = ({ route }: any) => {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const { item } = route.params;
    const { user } = useSelector((state: any) => state.user)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.post(`${baseUrl}/detail/emptycount`, {
            "companyId": item?.companyId
        }).then(res => {
            setCount(res.data)
        })
    }, [])


    return (
        <>
            <Header />
            <ScrollView className="bg-gray-200 h-full" contentContainerStyle={{ paddingBottom: 30 }}>

                <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: item?.logo }} />
                <Input type='heading' label='Açıklama' />
                <Text className="mx-2 text-black">{item?.description}</Text>

                <View className="flex-row items-center">
                    <Input type='heading' label='Boş Masa Sayısı' />
                    <Text>:</Text>
                    <Text className="mx-2 text-lg text-red-400">{count}</Text>
                </View>

                <Input type='heading' label='Konum' />
                <Map latitude={Number(item?.latitude)} longitude={Number(item?.longitude)} />

                <Input type='heading' label='Cafeye Puan Ver' />
                <Input type='rating' value={rating} onPress={(e: any) => {
                    axios.post(`${baseUrl}/company/rate`, {
                        "companyId": item?.companyId,
                        "userId": user?.userId,
                        "rating": e
                    }).then((res: any) => {
                        dispatch(setClicked(true))
                        ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                    })
                }} />

                <View className="border border-gray-400 border-dashed mt-4">
                    <Input type='heading' label='Yorum Yaz' />
                    <Input type='textarea' onChangeText={(e: any) => setComment(e)} />
                    <Input type='button' label='Yorumu Gönder' onPress={() => {
                        axios.post(`${baseUrl}/comment/new`, {
                            "companyId": item?.companyId,
                            "userName": user?.name + " " + user?.surname,
                            "companyName": item?.title,
                            "comment": comment
                        }).then((res: any) => {
                            setComment("")
                            ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                        })
                    }} />
                </View>


            </ScrollView >
        </>

    )
}

export default CafeDetail