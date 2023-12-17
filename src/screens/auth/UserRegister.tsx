import React, { useState } from 'react'
import { View, Text, ImageBackground, Alert, ToastAndroid } from 'react-native';
import Input from '../../components/Input';
import { useFormik } from 'formik';
import axios from 'axios';
import { baseUrl } from '../../Constants';

export default function UserRegister({ navigation }: any) {
    const [activeTab, setActiveTab] = useState(1)

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {

            values.name !== "" && (
                axios.post(`${baseUrl}/auth/${activeTab == 1 ? "userregister" : "companyregister"}`, {
                    "name": values.name,
                    "surname": values.surname,
                    "phone": values.phone,
                    "email": values.email,
                    "password": values.password,
                    "userroleid": activeTab.toString()
                }).then((res: any) => {
                    if (res.data.code === 100) {
                        navigation.navigate("login")
                    } else {
                        ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                    }
                })
            )
        }
    })


    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZWV8ZW58MHx8MHx8fDA%3D" }} className="w-full h-full justify-between">
            <Text className="text-5xl text-white self-center mt-6">Cafe In</Text>

            <View className="justify-center bg-transparent">
                <Input type='input' label='İsim' value={formik.values.name} onChangeText={formik.handleChange("name")} />
                <Input type='input' label='Soyisim' value={formik.values.surname} onChangeText={formik.handleChange("surname")} />
                <Input type='input' label='Telefon' keyboardType="numeric" value={formik.values.phone} onChangeText={formik.handleChange("phone")} />
                <Input type='input' label='E Posta' value={formik.values.email} onChangeText={formik.handleChange("email")} />
                <Input type='input' label='Şifre' value={formik.values.password} onChangeText={formik.handleChange("password")} />
                <View className="flex-row justify-center gap-6">
                    <Input type='button' theme={activeTab == 1 ? "solid" : "outlined"} label="Üye Ol" onPress={() => { setActiveTab(1), formik.handleReset }} />
                    <Input type='button' theme={activeTab == 2 ? "solid" : "outlined"} label="Kurum Üye Ol" onPress={() => { setActiveTab(2), formik.resetForm() }} />
                </View>
                <Input type='button' label="Üye Ol" onPress={formik.handleSubmit} />
            </View>

            <View className="flex-row items-center justify-center gap-4 mb-6">
                <Text className="text-white text-base">
                    Zaten Hesabın Var Mı ?
                </Text>
                <Input type='button' label='Giriş Yap' onPress={() => navigation.navigate("login")} />
            </View>



        </ImageBackground>
    )
}