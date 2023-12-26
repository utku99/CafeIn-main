import { View, Text } from 'react-native'
import React from 'react'

const Commentcomp = ({ item }: any) => {


    return (
        <View className="flex-row justify-between bg-white p-4 mb-2 w-[93%] self-center rounded-lg">
            <View className="space-y-2 w-3/4">
                <Text className="font-bold">{item?.userName} </Text>
                <Text className="text-gray-400">{item?.comment}</Text>
            </View>

        </View>
    )
}

export default Commentcomp