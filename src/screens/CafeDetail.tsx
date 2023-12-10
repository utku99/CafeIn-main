import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import Map from '../components/Map'

const CafeDetail = () => {
    return (
        <ScrollView className="bg-gray-200 h-full">
            <Image className="w-full h-[250px]" resizeMode='cover' source={{ uri: "https://images.unsplash.com/photo-1527025047-354c31c26312?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D" }} />
            <Input type='heading' label='Açıklama' />
            <Text className="mx-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni soluta consequuntur facilis similique, odio quo vel sequi dolorum blanditiis quasi voluptatum nesciunt reprehenderit eius asperiores magnam excepturi eveniet hic nemo commodi officiis eligendi id atque. Sint ipsa labore dolores, atque explicabo, dignissimos consequuntur alias assumenda laboriosam, reiciendis commodi. Dolores nulla, harum odit alias, reiciendis excepturi placeat quasi sapiente architecto velit cumque. Beatae necessitatibus porro architecto, veritatis quaerat iusto quos nam accusantium! Atque architecto ab fugiat ratione harum modi repellat quasi, illo praesentium reprehenderit aut debitis dolor, quia sequi recusandae vero velit sed nisi laborum maxime officiis est! Aut, officia.</Text>

            <View className="flex-row items-center">
                <Input type='heading' label='Boş Masa Sayısı' />
                <Text>:</Text>
                <Text className="mx-2 text-lg text-red-400">6</Text>
            </View>

            <Input type='heading' label='Konum' />
            <Map />
        </ScrollView >
    )
}

export default CafeDetail