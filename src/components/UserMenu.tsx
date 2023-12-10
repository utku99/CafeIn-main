import { View, Text, TouchableWithoutFeedback, Modal } from 'react-native'
import React from 'react'

const UserMenu = ({ setVisible, visible }: any) => {
    return (
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View className="mx-auto mt-10 space-y-4">
                <Text className="text-xl font-bold">Profilim</Text>
                <Text className="text-xl font-bold">Bildirimler</Text>
            </View>
        </Modal>
    )
}

export default UserMenu