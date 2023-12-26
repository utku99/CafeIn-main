import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HamburgerMenu from './svg/HamburgerMenu'
import Back from './svg/Back'
import UserMenu from './UserMenu'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()

    return (
        <View className="flex-row bg-white items-center justify-between px-3 py-2">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back />
            </TouchableOpacity>
            <Text className="text-2xl">Cafe In</Text>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <HamburgerMenu />
            </TouchableOpacity>

            {visible && <UserMenu setVisible={setVisible} visible={visible} />}
        </View >
    )
}

export default Header