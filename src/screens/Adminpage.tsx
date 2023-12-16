import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageUploader from '../components/ImageUploader'
import Input from '../components/Input'
import GetLocation from '../components/GetLocation'
import axios from 'axios'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

const Adminpage = () => {
    const [file, setFile] = useState<any>()
    const [fileMulti, setFileMulti] = useState<any>([])
    const [location, setLocation] = useState<{ latitude: string, longitude: string }>({})
    const { user } = useSelector((state: any) => state.user)


    const formik = useFormik({
        initialValues: {
            "description": "",
            "title": "",
            "address": "",
            "capacity": "",
        },
        onSubmit: (values) => {

            axios.post("http://192.168.1.102:3000/detail/new", {
                "companyId": user.companyId,
                "title": values.title,
                "logo": file.path,
                "description": values.description,
                "address": values.address,
                "latitude": location.latitude,
                "longitude": location.longitude,
                "capacity": values.capacity,
                "menu": fileMulti.map((item: any) => (item.path))
            }).then(res => {
                console.log(res.data);
            })


        }
    })


    return (
        <>
            <Header />
            <ScrollView className="px-3" contentContainerStyle={{ paddingBottom: 30 }}>

                <Input type='heading' label='Kafe İsmi' />
                <Input type='input' onChangeText={(e: any) => formik.setFieldValue("title", e)} />

                <Input type='heading' label='Logo' />
                <ImageUploader file={file} setFile={setFile} type='single' />

                <Input type='heading' label='Açıklama' />
                <Input type='textarea' onChangeText={(e: any) => formik.setFieldValue("description", e)} />

                <Input type='heading' label='Açık Adres' />
                <Input type='input' onChangeText={(e: any) => formik.setFieldValue("address", e)} />

                <Input type='heading' label='Lokasyon' />
                <View className="flex-row items-center justify-between mx-4">
                    <View>
                        <Text>Enlem: {location.latitude}</Text>
                        <Text>Boylam: {location.longitude}</Text>
                    </View>
                    <GetLocation setLocation={setLocation} />
                </View>


                <Input type='heading' label='Toplam Masa Sayısı' />
                <Input type='input' keyboardType={"number-pad"} onChangeText={(e: any) => formik.setFieldValue("capacity", e)} />

                <Input type='heading' label='Menü Resimleri' />
                <ImageUploader fileMulti={fileMulti} setFileMulti={setFileMulti} type='multi' />

                <Input type='button' label='Kaydet' onPress={formik.handleSubmit} />
            </ScrollView>

        </>


    )
}

export default Adminpage