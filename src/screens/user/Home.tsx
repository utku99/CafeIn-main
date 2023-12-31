import { View, Text, ScrollView, FlatList, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Restaurant from '../../components/Restaurant'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
import QrScanner from '../../components/QrScanner'
import axios from 'axios'
import { baseUrl } from '../../Constants'
import Geolocation from 'react-native-geolocation-service';


const Home = () => {
    const { user, clicked } = useSelector((state: any) => state.user)
    const [visible, setVisible] = useState(false)
    const [companies, setCompanies] = useState<any>([])
    const [location, setLocation] = useState<any>(null)


    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === 'granted') {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    };


    useEffect(() => {
        axios.post(`${baseUrl}/detail/getall`).then(res => {
            setCompanies(res.data)
        })

        const getLocation = () => {
            const result = requestLocationPermission()
            result.then(res => {
                if (res) {
                    Geolocation.getCurrentPosition(
                        (position) => {
                            setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
                        },
                        (error) => {
                            console.log(error.code, error.message);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    );
                }
            })
        }
        getLocation()
    }, [clicked])


    function haversine(lat1: number, lon1: number, lat2: number, lon2: Number) {
        const R = 6371; // Earth radius in kilometers

        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance;
    }

    function listRestaurants(myLat: number, myLon: number, restaurants: any) {
        const restaurantsWithDistance = [];

        for (const restaurant of restaurants) {
            const lat = Number(restaurant.latitude);
            const lon = Number(restaurant.longitude);

            const distance = haversine(myLat, myLon, lat, lon);

            if (distance <= 3.0) { // 3 km radius
                const restaurantWithDistance = { ...restaurant, distance: distance.toFixed(2) };
                restaurantsWithDistance.push(restaurantWithDistance);
            }
        }

        return restaurantsWithDistance;
    }

    const nearbyRestaurants = listRestaurants(Number(location?.latitude), Number(location?.longitude), companies);


    return (
        <View className="bg-white h-full">
            <Header />

            <View className="h-[25%] justify-center ">
                {
                    visible ? <QrScanner visible={visible} setVisible={setVisible} /> : <Input type='button' label='QR Okuyucuyu Aç' onPress={() => setVisible(true)} />
                }
            </View>

            <Input type='heading' label='Yakındaki Kafeler' />

            {
                nearbyRestaurants.length === 0 ? <View><Text className="self-center">Yakınınızda Cafe Bulunmamaktadır</Text></View>
                    :
                    <FlatList
                        className="bg-gray-200 rounded-t-2xl "
                        contentContainerStyle={{ gap: 15, paddingVertical: 20 }}
                        data={nearbyRestaurants}
                        renderItem={({ item, index }) => <Restaurant key={index} item={item} />}
                        keyExtractor={(item) => item.companyId}
                    />
            }


        </View>
    )
}

export default Home