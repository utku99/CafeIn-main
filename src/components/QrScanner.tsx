import { View, Text, Linking, TouchableOpacity, Modal, Pressable } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Back from "../components/svg/Back"

const QrScanner = ({ visible, setVisible }: any) => {

    const onSuccess = (e: any) => {
        // Handle the scanned QR code data
        console.log('QR Code Data:', e.data);
        // You can navigate to another screen or perform any other action here
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        //   );
    };

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