import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Restaurant from '../components/Restaurant'
import Input from '../components/Input'
import { useSelector } from 'react-redux'
import QrScanner from '../components/QrScanner'
import axios from 'axios'


const Home = () => {
    const { user } = useSelector((state: any) => state.user)
    const [visible, setVisible] = useState(false)
    const [companies, setCompanies] = useState<any>([])

    useEffect(() => {
        axios.post("http://192.168.1.102:3000/detail/getall").then(res => {
            setCompanies(res.data)
        })
    }, [])

    return (
        <View className="bg-white h-full">
            <Header />

            <View className="h-[25%] justify-center ">
                {
                    visible ? <QrScanner visible={visible} setVisible={setVisible} /> : <Input type='button' label='QR Okuyucuyu Aç' onPress={() => setVisible(true)} />
                }
            </View>

            <Input type='heading' label='Yakındaki Kafeler' />
            <FlatList
                className="bg-gray-200 rounded-t-2xl "
                contentContainerStyle={{ gap: 15, paddingVertical: 20 }}
                data={companies}
                renderItem={({ item }) => <Restaurant item={item} />}
                keyExtractor={(item) => item.companyId}
            />

        </View>
    )
}

export default Home