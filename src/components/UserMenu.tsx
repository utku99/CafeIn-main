import { View, Text, TouchableWithoutFeedback, Modal } from 'react-native'
import React from 'react'
import { setUser } from '../redux/slices/user'
import { clearOrder } from '../redux/slices/order'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const UserMenu = ({ setVisible, visible }: any) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state: any) => state.user)
    const navigation = useNavigation()

    return (
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View className="mx-auto mt-10 space-y-4">
                {
                    user?.userroleId == 1 && (
                        <Text className="text-xl font-bold" onPress={() => navigation.navigate("userorders")}>Siparişlerim</Text>

                    )
                }
                <Text className="text-xl font-bold">Bildirimler</Text>
                <Text onPress={() => { dispatch(setUser(null)); dispatch(clearOrder([])) }} className="text-xl font-bold">Çıkış Yap</Text>
            </View>
        </Modal>
    )
}

export default UserMenu