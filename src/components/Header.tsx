import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HamburgerMenu from './svg/HamburgerMenu'
import Back from './svg/Back'
import UserMenu from './UserMenu'

const Header = () => {
    const [visible, setVisible] = useState(false)
    return (
        <View className="flex-row bg-white items-center justify-between px-3 py-2">
            <Back />
            <Text className="text-2xl">Cafe In</Text>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <HamburgerMenu />
            </TouchableOpacity>

            {visible && <UserMenu setVisible={setVisible} visible={visible} />}
        </View >
    )
}

export default Header