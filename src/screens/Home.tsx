import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Restaurant from '../components/Restaurant'
import Input from '../components/Input'


const Home = () => {
    return (
        <View className="bg-white h-full">
            <Header />

            <View className="h-1/3">
                <Text>sdsfssads</Text>
            </View>

            <Input type='heading' label='Yakındaki Kafeler' />
            <ScrollView className="bg-gray-200 rounded-t-2xl -z-1" contentContainerStyle={{ gap: 15, paddingVertical: 20 }}>
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </ScrollView>

        </View>
    )
}

export default Home