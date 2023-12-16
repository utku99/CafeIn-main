import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import Header from '../components/Header'

const CafeMenu = ({ route }: any) => {
    const { menu } = route.params

    console.log(menu);

    return (
        <View>
            <Header />

            <View className="self-center">
                <Input type='heading' label='Menü' />
            </View>

            <FlatList
                className="h-[90%]"
                contentContainerStyle={{ display: 'flex', flexDirection: "column", gap: 10, paddingBottom: 100 }}
                data={menu}
                renderItem={({ item }) =>
                    <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: item }} />
                }
            />


        </View>


    )
}

export default CafeMenu