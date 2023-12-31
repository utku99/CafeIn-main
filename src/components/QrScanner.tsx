import { View, Text, Linking, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Back from "../components/svg/Back"
import axios from 'axios'
import { baseUrl } from '../Constants'
import { useNavigation } from '@react-navigation/native'

const QrScanner = ({ visible, setVisible }: any) => {
    const [company, setCompany] = useState()
    const navigation = useNavigation()

    const onSuccess = (e: any) => {
        console.log('QR Code Data:', e.data);
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
        setVisible(false)
        navigation.navigate("cafemenu", { menu: company?.menu })
    };


    useEffect(() => {
        axios.post(`${baseUrl}/detail/get`, {
            "companyId": "65882e2bb7072f0c42236be1",
        }).then((res: any) => {
            setCompany(res.data)
        })
    }, [])




    return (
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <Pressable className="absolute left-2 top-2" onPress={() => setVisible(false)}>
                <Back />
            </Pressable>
            <QRCodeScanner
                showMarker
                onRead={onSuccess}
                reactivate={true}
                permissionDialogMessage="We need permission to access your camera"
                reactivateTimeout={3000}
                topContent={
                    <Text>
                        Restoranın Menüsüne Git
                    </Text>
                }
            />
        </Modal>
    )
}

export default QrScanner