import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../Constants';

const NotificationComp = ({ item }: any) => {
    const [title, setTitle] = useState("")

    useEffect(() => {
        axios.post(`${baseUrl}/detail/companyname`, {
            "companyId": item?.companyId
        }).then((res: any) => {
            setTitle(res.data);
        })
    }, [])


    return (
        <View className="w-[95%] bg-white self-center rounded-md p-3">
            {
                item?.remainingTime < 10 && item?.status == "hazırlanıyor" && <Text className="text-red-400">{title} 'den yapmış oldunuz sipariş için 10 dk içinde cafeye gelmemeniz durumda siparişiniz iptal olacaktır.</Text>
            }
            {
                item?.status == "iptal edildi" && <Text className="text-red-400">{title} 'den yapmış oldunuz sipariş iptal edildi.</Text>
            }
            {
                item?.status == "güncellendi" && <Text className="text-red-400">Siparişi güncellendi : {item?.fullName}</Text>
            }
        </View>
    )
}

export default NotificationComp