import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Map from '../components/Map'
import Header from '../components/Header'

const CafeDetail = ({ route }: any) => {
    const [rating, setRating] = useState(0)
    const { item } = route.params;

    console.log(item?.title);


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
                    <Text className="mx-2 text-lg text-red-400">6</Text>
                </View>

                <Input type='heading' label='Konum' />
                <Map latitude={Number(item?.latitude)} longitude={Number(item?.longitude)} />

                <Input type='heading' label='Cafeye Puan Ver' />
                <Input type='rating' value={rating} setValue={setRating} />


            </ScrollView >
        </>

    )
}

export default CafeDetail