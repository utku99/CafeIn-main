import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import GoDetail from "../components/svg/GoDetail"
import { useNavigation } from '@react-navigation/native'

const Restaurant = () => {
    const navigation = useNavigation()

    return (
        <View className="w-[90%]  h-[85px]  bg-white rounded-lg self-center p-2 flex-row items-center space-x-3 relative">
            <Image className="h-full aspect-square rounded-lg" source={{ uri: "https://images.unsplash.com/photo-1527025047-354c31c26312?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D" }} />
            <Pressable onPress={() => ""} className="h-full flex-1 justify-between ">
                <Text className="text-black text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">Hard Rock Cafe</Text>
                <Text className="text-black text-sm">Üsküdar/İstanbul</Text>
                <Text className="text-black text-xs">25-35dk / 0.7km</Text>
            </Pressable>
            <TouchableOpacity onPress={() => ""}>
                <GoDetail />
            </TouchableOpacity>

            <View className="absolute right-0 -top-2 flex-row justify-center space-x-2 rounded-md bg-green-500 px-3 items-center ">
                <Text className="text-white ">4.9</Text>
                <Text className="text-yellow-300 text-lg -mt-1">★</Text>
            </View>

        </View>
    )
}

export default Restaurant