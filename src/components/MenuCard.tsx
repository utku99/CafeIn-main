import { View, Text, Pressable, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Add from "../components/svg/Add"
import Edit from "../components/svg/Edit"
import Change from "../components/svg/Change"
import Remove from "../components/svg/Remove"
import { useDispatch, useSelector } from 'react-redux'
import { addOrder, removeOrder, } from '../redux/slices/order'



const MenuCard = ({ setChangeOrder, setOrderModal2, showadd, item, edit = false, remove = false, onPress }: { setChangeOrder?: any, setOrderModal2?: any, showadd?: boolean, item?: any, edit?: boolean, remove?: boolean, onPress?: any }) => {
    const { order } = useSelector((state: any) => state.order)
    const dispatch = useDispatch()


    return (
        <View className="flex-row justify-between bg-white p-2 w-full">
            <View className="space-y-2 w-3/4">
                <Text className="font-bold">{item?.title}</Text>
                <Text className="text-gray-400"> {item?.content}</Text>
                <Text className="text-green-400">{item?.price} TL</Text>
            </View>
            {
                showadd && (
                    <>
                        {
                            order.some((temp: any) => temp.id == item.id) ?
                                <TouchableOpacity onPress={() => dispatch(removeOrder(item.id))}>
                                    <Remove />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => dispatch(addOrder(item))}>
                                    <Add />
                                </TouchableOpacity>
                        }
                    </>

                )
            }
            {
                remove && (
                    <TouchableOpacity onPress={onPress}>
                        <Remove />
                    </TouchableOpacity>
                )
            }
            {
                edit && (
                    <TouchableOpacity onPress={() => { setChangeOrder(item); setOrderModal2(true) }}>
                        <Change />
                    </TouchableOpacity>
                )
            }

        </View>
    )
}

export default MenuCard