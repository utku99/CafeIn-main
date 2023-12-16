import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import GoDetail from "../components/svg/GoDetail"
import { useNavigation } from '@react-navigation/native'

const Restaurant = ({ item }: any) => {
    const navigation = useNavigation()


    return (
        <View className="w-[90%]  h-[85px]  bg-white rounded-lg self-center p-2 flex-row items-center space-x-3 relative">

            <Image className="h-full aspect-square rounded-lg" source={{ uri: item?.logo }} />

            <TouchableOpacity onPress={() => navigation.navigate("cafemenu", { menu: item?.menu })} className="h-full flex-1 justify-between ">
                <Text className="text-black text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item?.title}</Text>
                <Text className="text-black text-sm">{item?.address}</Text>
                <Text className="text-black text-xs">25-35dk / 0.7km</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("detail", { item })}>
                <GoDetail />
            </TouchableOpacity>

            <View className="absolute right-0 -top-2 flex-row justify-center space-x-2 rounded-md bg-green-500 px-3 items-center ">
                <Text className="text-white ">{item?.rank}</Text>
                <Text className="text-yellow-300 text-lg -mt-1">★</Text>
            </View>

        </View>
    )
}

export default Restaurant