import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Input from '../components/Input'

const CafeMenu = () => {
    return (
        <View>
            <View className="self-center">
                <Input type='heading' label='Menü' />
            </View>
            <ScrollView className="h-[90%]" contentContainerStyle={{ display: 'flex', flexDirection: "column", gap: 10, paddingBottom: 100 }}>
                <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: "https://marketplace.canva.com/EADufaxbiZ4/1/0/1236w/canva-koyu-kahverengi-kupalar-kahve-d%C3%BCkkan%C4%B1-men%C3%BC-7dcYm4xingY.jpg" }} />
                <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: "https://marketplace.canva.com/EADufaxbiZ4/1/0/1236w/canva-koyu-kahverengi-kupalar-kahve-d%C3%BCkkan%C4%B1-men%C3%BC-7dcYm4xingY.jpg" }} />
                <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: "https://marketplace.canva.com/EADufaxbiZ4/1/0/1236w/canva-koyu-kahverengi-kupalar-kahve-d%C3%BCkkan%C4%B1-men%C3%BC-7dcYm4xingY.jpg" }} />
            </ScrollView>
        </View>


    )
}

export default CafeMenu