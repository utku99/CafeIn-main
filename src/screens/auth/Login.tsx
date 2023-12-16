import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native';
import Input from '../../components/Input';
import { useFormik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/user';



export default function Login({ navigation }: any) {
    const dispatch = useDispatch()
    const [tab, setTab] = useState(1)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            axios.post(`http://192.168.1.102:3000/auth/${tab === 1 ? "userlogin" : "companylogin"}`, {
                "email": values.email,
                "password": values.password,
            }).then(res => {
                dispatch(setUser(res.data))
            })
        }
    })


    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZWV8ZW58MHx8MHx8fDA%3D" }} className="w-full h-full">
            <View className="justify-center bg-transparent flex-1">
                <Text className="text-5xl text-white self-center mb-10">Cafe In</Text>
                <Input type='input' label='E Posta' value={formik.values.email} onChangeText={formik.handleChange("email")} />
                <Input type='input' label='Şifre' value={formik.values.password} onChangeText={formik.handleChange("password")} />
                <View className="flex-row gap-4 self-center">
                    <Input type='button' label="User Giriş Yap" theme={tab === 1 ? "solid" : "outlined"} onPress={() => setTab(1)} />
                    <Input type='button' label="Kafe Giriş Yap" theme={tab === 1 ? "outlined" : "solid"} onPress={() => setTab(2)} />
                </View>
                <Input type='button' label="Gir" onPress={formik.handleSubmit} />
            </View>

            <View className="flex-row items-center justify-center gap-4 mb-6">
                <Text className="text-white text-base">
                    Hesabın Yok Mu ?
                </Text>
                <Input type='button' label='Üye Ol' onPress={() => navigation.navigate("register")} />
            </View>



        </ImageBackground>
    )
}