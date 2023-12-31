import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ latitude = 0, longitude = 0 }: any) => {

    if (latitude && longitude) {
        return (
            <View className="w-full h-[300px] my-4">
                <MapView
                    className="w-full h-full"
                    provider={PROVIDER_GOOGLE}
                    // showsUserLocation
                    // followsUserLocation
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                    }}
                    region={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                    }}
                >
                    <Marker coordinate={{ latitude, longitude }} />

                </MapView>
            </View>
        )
    } else {
        return null
    }

}

export default Map