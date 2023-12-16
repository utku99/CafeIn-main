import { View, Text, Pressable, PermissionsAndroid } from 'react-native'
import React from 'react'
import Geolocation from 'react-native-geolocation-service';
import Input from './Input';

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


const GetLocation = ({ setLocation }: any) => {

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


    return (
        <View className="">
            <Input type='button' label='Konumu Al' onPress={getLocation} />
            {/* <Pressable onPress={getLocation}>
                <Text>tıkla</Text>
            </Pressable> */}
        </View>
    )
}

export default GetLocation