import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import Header from '../../components/Header'

const AdminHome = ({ navigation }: any) => {
    return (
        <>
            <Header />
            <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1519332978332-21b7d621d05e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkbWlufGVufDB8fDB8fHww" }} className="items-center justify-center flex-1">


                <Input type='button' label='Bilgilerim' onPress={() => navigation.navigate("admin")} />
                <Input type='button' label='Gelen Siparişler' onPress={() => navigation.navigate("orders")} />
                <Input type='button' label='Diğer Siparişler' onPress={() => navigation.navigate("otherorders")} />
            </ImageBackground>
        </>

    )
}

export default AdminHome