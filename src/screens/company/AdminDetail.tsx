import { View, Text, ScrollView, FlatList, ToastAndroid } from 'react-native'
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
    const [location, setLocation] = useState<any>()
    const { user } = useSelector((state: any) => state.user)

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [price, setPrice] = useState()
    const [detail, setDetail] = useState<any>(null)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            description: detail?.description ?? "",
            title: detail?.title ?? "",
            address: detail?.address ?? "",
            capacity: detail?.capacity ?? "",
            latitude: location?.latitude ?? Number(detail?.latitude),
            longitude: location?.longitude ?? Number(detail?.longitude),
            logo: detail?.logo ?? null,
            menu: detail?.menu[0]?.menu ?? []
        },
        onSubmit: (values) => {

            if (detail) {
                axios.post(`${baseUrl}/detail/set`, {
                    "companyId": user.companyId,
                    "title": values.title,
                    "logo": values.logo,
                    "description": values.description,
                    "address": values.address,
                    "latitude": values.latitude,
                    "longitude": values.longitude,
                    "capacity": values.capacity,
                    "menu": [{ "companyId": user?.companyId, "menu": values.menu }]
                }).then(res => {
                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                    console.log(res.data);
                })
            } else {
                axios.post(`${baseUrl}/detail/new`, {
                    "companyId": user.companyId,
                    "title": values.title,
                    "logo": values.logo,
                    "description": values.description,
                    "address": values.address,
                    "latitude": values.latitude,
                    "longitude": values.longitude,
                    "capacity": values.capacity,
                    "menu": [{ "companyId": user?.companyId, "menu": values.menu }]
                }).then(res => {
                    ToastAndroid.show(res.data.msg, ToastAndroid.TOP)
                    console.log(res.data);
                })
            }
        }
    })


    useEffect(() => {
        axios.post(`${baseUrl}/detail/get`, {
            "companyId": user.companyId,
        }).then(res => {
            setDetail(res.data);
            formik.setFieldValue("menu", detail?.menu[0]?.menu)
        })
    }, [])


    return (
        <>
            <Header />
            <ScrollView className="px-3" contentContainerStyle={{ paddingBottom: 30 }}>

                <Input type='heading' label='Kafe İsmi' />
                <Input type='input' value={formik.values.title} onChangeText={(e: any) => formik.setFieldValue("title", e)} />

                <Input type='heading' label='Logo' />
                <ImageUploader file={formik.values.logo} setFile={(e: any) => formik.setFieldValue("logo", e.path)} type='single' />

                <Input type='heading' label='Açıklama' />
                <Input type='textarea' value={formik.values.description} onChangeText={(e: any) => formik.setFieldValue("description", e)} />

                <Input type='heading' label='Açık Adres' />
                <Input type='input' value={formik.values.address} onChangeText={(e: any) => formik.setFieldValue("address", e)} />

                <Input type='heading' label='Lokasyon' />
                <View className="flex-row items-center justify-between mx-4">
                    <View>
                        <Text>Enlem: {formik.values.latitude}</Text>
                        <Text>Boylam: {formik.values.longitude}</Text>
                    </View>
                    <GetLocation setLocation={setLocation} />
                </View>

                <Map latitude={formik.values.latitude} longitude={formik.values.longitude} />

                <Input type='heading' label='Toplam Masa Sayısı' />
                <Input type='input' keyboardType={"number-pad"} value={formik.values.capacity} onChangeText={(e: any) => formik.setFieldValue("capacity", e)} />

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
                                formik.setFieldValue("menu", [...formik.values.menu, { id: (formik.values.menu.length + 1).toString(), title, content, price }])
                            }}
                        />
                    </View>

                    <FlatList
                        contentContainerStyle={{ display: "flex", gap: 4 }}
                        data={formik.values.menu}
                        renderItem={({ item }) =>
                            <MenuCard key={item?._id} item={item} showadd={false} remove={detail ? true : false}
                                onPress={() => {
                                    let temp = formik.values.menu
                                    let temp2 = temp.filter((tmp: any) => tmp._id !== item._id)
                                    formik.setFieldValue("menu", temp2)
                                }} />}
                    />
                </View>

                <Input type='button' label='Kaydet' onPress={formik.handleSubmit} />
            </ScrollView>

        </>


    )
}

export default AdminDetail