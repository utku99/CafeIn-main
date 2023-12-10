import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import Input from '../../components/Input';
import { useFormik } from 'formik';



export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);

        }
    })

    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZWV8ZW58MHx8MHx8fDA%3D" }} className="w-full h-full">
            <View className="justify-center bg-transparent flex-1">
                <Text className="text-5xl text-white self-center mb-10">Cafe In</Text>
                <Input type='input' label='E Posta' keyboardType="email-address" value={formik.values.email} onChangeText={formik.handleChange("email")} />
                <Input type='input' label='Şifre' keyboardType="visible-password" value={formik.values.password} onChangeText={formik.handleChange("password")} />
                <Input type='button' label="Giriş Yap" onPress={formik.handleSubmit} />
            </View>

            <View className="flex-row items-center justify-center gap-4 mb-6">
                <Text className="text-white text-base">
                    Hesabın Yok Mu ?
                </Text>
                <Input type='button' label='Üye Ol' />
            </View>



        </ImageBackground>
    )
}