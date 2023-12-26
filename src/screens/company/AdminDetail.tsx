import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageUploader from '../../components/ImageUploader'
import Input from '../../components/Input'
import GetLocation from '../../components/GetLocation'
import axios from 'axios'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import { baseUrl } from '../../Constants'
import Map from '../../components/Map'
import MenuCard from '../../components/MenuCard'

const AdminDetail = () => {
    const [file, setFile] = useState<any>()
    const [fileMulti, setFileMulti] = useState<any>([])
    const [location, setLocation] = useState<any>()
    const { user } = useSelector((state: any) => state.user)

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [price, setPrice] = useState()
    const [menu, setMenu] = useState([])

    const formik = useFormik({
        initialValues: {
            description: "",
            title: "",
            address: "",
            capacity: "",
        },
        onSubmit: (values) => {


            axios.post(`${baseUrl}/detail/new`, {
                "companyId": user.companyId,
                "title": values.title,
                "logo": file.path,
                "description": values.description,
                "address": values.address,
                "latitude": location.latitude,
                "longitude": location.longitude,
                "capacity": values.capacity,
                "menu": [{ "companyId": user?.companyId, "menu": menu }]
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
                        <Text>Enlem: {location?.latitude}</Text>
                        <Text>Boylam: {location?.longitude}</Text>
                    </View>
                    <GetLocation setLocation={setLocation} />
                </View>
                <Map latitude={location?.latitude} longitude={location?.longitude} />

                <Input type='heading' label='Toplam Masa Sayısı' />
                <Input type='input' keyboardType={"number-pad"} onChangeText={(e: any) => formik.setFieldValue("capacity", e)} />

                {/* <Input type='heading' label='Menü Resimleri' />
                <ImageUploader fileMulti={fileMulti} setFileMulti={setFileMulti} type='multi' /> */}

                <View className="border border-gray-300 mb-10 border-dashed">
                    <Input type='heading' label='Menü listeleri' />
                    <Input type='input' onChangeText={(e: any) => setTitle(e)} placeholder='Menü İsmi' />
                    <Input type='input' onChangeText={(e: any) => setContent(e)} placeholder='Menü İçeriği' />
                    <Input type='input' onChangeText={(e: any) => setPrice(e)} placeholder='Fiyat' />
                    <View className="justify-end flex-row mr-4">
                        <Input type='button'
                            label='Listeye Ekle'
                            onPress={() => {
                                setMenu((prev) => [...prev, { id: (menu.length + 1).toString(), title, content, price }])
                            }}
                        />
                    </View>

                    <FlatList
                        contentContainerStyle={{ display: "flex", gap: 4 }}
                        data={menu}
                        renderItem={({ item }) => <MenuCard item={item} showadd={false} />}
                    />
                </View>

                <Input type='button' label='Kaydet' onPress={formik.handleSubmit} />
            </ScrollView>

        </>


    )
}

export default AdminDetail