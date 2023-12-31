import React, { useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    PermissionsAndroid,
    Pressable,
    Modal,
    StyleSheet,
    Alert,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions'
import ImagePicker from 'react-native-image-crop-picker'
import Input from './Input'

interface ImagePickerComp {
    file?: any
    setFile?: any
    fileMulti?: any
    setFileMulti?: any
    type?: "multi" | "single"
}
const ImageUploader: React.FC<ImagePickerComp> = ({
    type,
    file,
    fileMulti,
    setFile,
    setFileMulti
}) => {
    const [photoModal, setPhotoModal] = useState(false)

    const requestCameraPermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA
                )
                if (granted === 'granted') {
                    console.log('kamera izni verildi')
                    return true
                } else {
                    console.log('kamera izni verilmedi')
                    return false
                }
            } else if (Platform.OS === 'ios') {
                const cameraStatus = await check(PERMISSIONS.ANDROID.CAMERA)
                if (cameraStatus === RESULTS.DENIED) {
                    const requestStatus = await request(PERMISSIONS.IOS.CAMERA)
                    if (requestStatus === RESULTS.GRANTED) {
                        console.log('Kamera izni verildi')
                        return true
                    } else {
                        console.log('Kamera izni verilmedi')
                        return false
                    }
                } else if (cameraStatus === RESULTS.GRANTED) {
                    console.log('Kamera izni zaten verilmiş')
                    return true
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const requestExternalWritePermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                )
                if (granted === 'granted') {
                    console.log('yazma izni verildi')
                    return true
                } else {
                    console.log('yazma izni verilmedi')
                    return false
                }
            } else if (Platform.OS === 'ios') {
                const photoLibraryAddStatus = await check(
                    PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY
                )
                if (photoLibraryAddStatus === RESULTS.DENIED) {
                    const requestStatus = await request(
                        PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY
                    )
                    if (requestStatus === RESULTS.GRANTED) {
                        console.log('Yazma izni verildi')
                        return true
                    } else {
                        console.log('Yazma izni verilmedi')
                        return false
                    }
                } else if (photoLibraryAddStatus === RESULTS.GRANTED) {
                    console.log('Yazma izni zaten verilmiş')
                    return true
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const requestExternalReadPermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
                )
                if (granted === 'granted') {
                    console.log('okuma izni verildi')
                    return true
                } else {
                    console.log('okuma izni verilmedi')
                    return false
                }
            } else if (Platform.OS === 'ios') {
                const photoLibraryStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY)
                if (photoLibraryStatus === RESULTS.DENIED) {
                    const requestStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
                    if (requestStatus === RESULTS.GRANTED) {
                        console.log('Okuma izni verildi')
                        return true
                    } else {
                        console.log('Okuma izni verilmedi')
                        return false
                    }
                } else if (photoLibraryStatus === RESULTS.GRANTED) {
                    console.log('Okuma izni zaten verilmiş')
                    return true
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const openCamera = async () => {
        const isCameraPermitted = await requestCameraPermission()
        const isWritePermitted = await requestExternalWritePermission()
        if (isCameraPermitted && isWritePermitted) {
            ImagePicker.openCamera({
                // width: 300,
                height: 250,
                cropping: false,
                includeBase64: true,
            })
                .then((image) => {
                    setFile(image)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Alert.alert(
                'İzin Gerekli',
                'Kamera iznini uygulama için vermeniz gerekmektedir. Ayarlara giderek izinleri veriniz.',
                [{ text: 'Tamam', style: 'default' }]
            )
        }
    }

    const openGallery = async () => {
        const isReadPermitted = await requestExternalReadPermission()
        if (isReadPermitted) {
            ImagePicker.openPicker({
                // width: 300,
                height: 250,
                includeBase64: true,
                cropping: false,
                mediaType: 'photo',
            })
                .then((image) => {
                    setFile(image)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Alert.alert(
                'İzin Gerekli',
                'Galeri iznini uygulama için vermeniz gerekmektedir. Ayarlara giderek izinleri veriniz.',
                [{ text: 'Tamam', style: 'default' }]
            )
        }
    }


    const openGalleryMulti = async () => {
        const isReadPermitted = await requestExternalReadPermission()
        if (isReadPermitted) {
            ImagePicker.openPicker({
                // width: 300,
                height: 250,
                includeBase64: true,
                cropping: false,
                mediaType: 'photo',
                multiple: true
            })
                .then((image) => {
                    setFileMulti(image)
                    console.log(image);
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Alert.alert(
                'İzin Gerekli',
                'Galeri iznini uygulama için vermeniz gerekmektedir. Ayarlara giderek izinleri veriniz.',
                [{ text: 'Tamam', style: 'default' }]
            )
        }
    }


    return (
        <>

            {type == "single" && (
                <>
                    <Pressable onPress={() => setPhotoModal(!photoModal)} className="h-[250px] w-[90%] self-center" >
                        <Image resizeMode='cover' className="w-full h-full" source={{ uri: (file?.path || file) ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsug8XTE5KVJEMECVvm8p43BZTdvZExoQ9Q&usqp=CAU" }} />
                    </Pressable >
                    {photoModal && (
                        <Modal
                            animationType="slide"
                            transparent
                            visible={photoModal}
                            onRequestClose={() => setPhotoModal(!photoModal)}
                        >
                            <TouchableWithoutFeedback onPress={() => setPhotoModal(false)}>
                                <View style={styles.modalbackground}>
                                    <TouchableWithoutFeedback>
                                        <View style={styles.modal}>
                                            <TouchableOpacity
                                                style={styles.modalbuttons}
                                                onPress={() => {
                                                    openCamera()
                                                    setPhotoModal(!photoModal)
                                                }}
                                            >
                                                <Text style={styles.text}>Kamerayı Aç</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.modalbuttons}
                                                onPress={() => {
                                                    openGallery()
                                                    setPhotoModal(!photoModal)
                                                }}
                                            >
                                                <Text style={styles.text}>Galeriyi Aç</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => setPhotoModal(!photoModal)}
                                                style={{ position: 'absolute', right: 30, top: 20 }}
                                            >
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    )}
                </>

            )}
            {type == "multi" && (
                <>
                    <Input type='button' label=' Resim Seç' onPress={() => setPhotoModal(!photoModal)} />
                    <FlatList
                        data={fileMulti}
                        horizontal
                        contentContainerStyle={{ gap: 10 }}
                        renderItem={({ item, index }) =>
                            <Image key={index} className="w-[250px] h-[250px]" source={{ uri: item?.path }} />
                        }
                    />

                    {photoModal && (
                        <Modal
                            animationType="slide"
                            transparent
                            visible={photoModal}
                            onRequestClose={() => setPhotoModal(!photoModal)}
                        >
                            <TouchableWithoutFeedback onPress={() => setPhotoModal(false)}>
                                <View style={styles.modalbackground}>
                                    <TouchableWithoutFeedback>
                                        <View style={styles.modal}>
                                            <TouchableOpacity
                                                style={styles.modalbuttons}
                                                onPress={() => {
                                                    openGalleryMulti()
                                                    setPhotoModal(!photoModal)
                                                }}
                                            >
                                                <Text style={styles.text}>Galeriyi Aç</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => setPhotoModal(!photoModal)}
                                                style={{ position: 'absolute', right: 30, top: 20 }}
                                            >
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    )}
                </>

            )}


        </>
    )
}

export default ImageUploader

const styles = StyleSheet.create({
    image: {
        width: 83,
        height: 63,
        borderRadius: 8,
        resizeMode: 'cover'
    },
    modalbackground: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modal: {
        paddingVertical: 70,
        paddingHorizontal: 40,
        backgroundColor: 'white',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalbuttons: {
        borderTopWidth: 1,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderLeftWidth: 1,
        borderColor: '#1B998B',
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 3,
        width: '45%'
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: "center"
    }
})