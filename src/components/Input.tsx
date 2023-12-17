import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'

type props = {
    type: "input" | "button" | "heading" | "textarea" | "rating"
    value?: any
    label?: string
    setValue?: any
    onChangeText?: any
    placeholder?: string
    keyboardType?: any
    title?: any
    onPress?: any
    style?: any
    theme?: "solid" | "outlined"
}

export default function Input({ type, value, setValue, label, onChangeText, placeholder, keyboardType, title, onPress, style, theme = "solid" }: props) {
    return (
        <>
            {type === "input" && (
                <View className="w-[90%] h-9 self-center mb-10">
                    {
                        label && (
                            <Text className="text-lg text-white">{label}</Text>
                        )
                    }
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        className="bg-white rounded-lg"

                    />
                </View>
            )}

            {type === "textarea" && (
                <View className="w-[90%] self-center mb-10 ">
                    {
                        label && (
                            <Text className="text-lg text-white">{label}</Text>
                        )
                    }
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        className="bg-white rounded-lg min-h-[150px]"
                        multiline
                        textAlignVertical='top'
                    />
                </View>
            )}

            {type === "button" && (
                <TouchableOpacity
                    onPress={onPress}
                    style={style}
                    className={`${theme === "solid" ? "bg-orange-400" : "bg-white "} px-4 h-9 rounded-lg  items-center justify-center self-center my-2`}>
                    <Text className={`${theme === "solid" ? "text-white" : "text-black"} text-base `}>{label}</Text>
                </TouchableOpacity>
            )}

            {type === "heading" && (
                <Text className="text-lg text-gray-700 m-2">{label}</Text>
            )}

            {type === "rating" && (
                <Rating
                    tintColor='#e5e7eb'
                    startingValue={value}
                    onFinishRating={onPress}
                />
            )}
        </>
    )
}