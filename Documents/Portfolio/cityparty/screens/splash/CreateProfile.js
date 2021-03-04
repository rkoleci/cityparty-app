import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback, TouchableHighlight, Image, Text, TextInput, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, MainBtn, Loading } from '../../common'
import { uploadPhoto, createProfile } from '../../core/actions/loginActions'
import colors from '../../colors'
import utils from '../../core/utils'

const Section = ({ label, children, last }) => {
    return (
        <View style={[style.section, { borderBottomColor: last ? '#EEEEEE' : '', borderBottomWidth: last ? 1 : 0 }]}>
            <Text style={style.sectionLabel}>{label}</Text>
            {children}
        </View>
    )
}

const CreateProfile = ({ route, navigation, uploadPhotoAction, createProfileAction }) => {
    const { token } = route.params;

    const [data, setData] = useState({ name: '', place: '', bio: '', image: '', imageUrl: '', sex: '', date: utils.dateToObject(new Date()) })
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false) 

    const creteProfile = useSelector(state => state.creteProfile)

    useEffect(() => {
        navigation.setOptions({ title: '', headerShown: true })
    }, [])

    const onProceed = () => {
        createProfileAction({ ...data, token: token })
    }

    const onDateChange = (date) => {
        setData({ ...data, ['date']: utils.dateToObject(date) })
        setShow(false)
    }

    const onPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setData({ ...data, image: result })
        }
    };

    useEffect(() => { 
        uploadPhotoAction({ token: token, image: data.image })
    }, [data.image])

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <View style={style.header}>
                    <Text style={style.largeLabel}>Create</Text>
                    <Text style={style.largeLabel}>Profile</Text>
                </View>

                <View style={{ paddingBottom: 20 }}>
                    <View style={{ width: '40%', }}>
                        <Avatar src={data.image.uri} empty styles={{
                            borderWidth: 3,
                            borderColor: '#EEEEEE',
                            borderRadius: 100,
                        }} />
                        <TouchableHighlight style={style.picker} onPress={() => onPickImage()}>
                            <Icon name="image" size={20} style={style.pickerIcon} />
                        </TouchableHighlight>
                    </View>
                </View>

                <Section label="NAME SURNAME">
                    <TextInput style={style.thickLabel} value={data.name} onChange={(e) => setData({ ...data, ['name']: e })} />
                </Section>

                <Section label="DOVE VIVI?">
                    <TextInput style={style.thinLabel} value={data.place} onChange={(e) => setData({ ...data, ['place']: e })} />
                </Section>

                <Section label="BIO">
                    <TextInput style={style.thinLabel} value={data['bio']} onChange={(e) => setData({ ...data, ['bio']: e })} placeholder="write a bio here" />
                </Section>

                <Section label="ETA">
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={style.dateText}>{data.date.day}</Text>
                            <Text style={style.dateText}>{data.date.month}</Text>
                            <Text style={style.dateText}>{data.date.year}</Text>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={(e, date) => onDateChange(date)}
                            />
                        )}
                    </TouchableOpacity>
                </Section>

                <Section label="SESSO" last>
                    <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => setData({ ...data, sex: 'M' })}><Image source={data.sex == 'M' ? require('../../assets/sex/m-icon_active.png') : require('../../assets/sex/m-icon_unactive.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => setData({ ...data, sex: 'F' })}><Image source={data.sex == 'F' ? require('../../assets/sex/f-icon_active.png') : require('../../assets/sex/f-icon_unactive.png')} /></TouchableOpacity>
                    </View>
                </Section>
            </View>

            <View style={{ paddingVertical: 40, width: '80%', justifyContent: 'center', alignSelf: 'center' }}>
                <Loading status="">
                    <MainBtn title="Proceed" type="red" thick onClick={() => onProceed()} />
                </Loading>
            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 0,
        backgroundColor: colors.WHITE
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: '#C4C4C4',
        borderRadius: 100
    },
    picker: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -5,
        right: 0,
        backgroundColor: '#E5E5E5',
    },
    pickerIcon: {
        color: colors.BLACK,
        padding: 10
    },
    largeLabel: {
        color: '#99AAB5',
        fontSize: 34,
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },
    header: {
        paddingBottom: 20
    },
    thickLabel: {
        color: colors.BLACK,
        fontSize: 22
    },
    thinLabel: {
        color: '#99AAB5',
        fontSize: 16,
    },
    section: {
        paddingBottom: 15,
        paddingTop: 15,
        paddingHorizontal: 5,
        borderTopColor: '#EEEEEE',
        borderTopWidth: 1
    },
    sectionLabel: {
        color: '#99AAB5',
        fontSize: 14,
        textTransform: 'uppercase',
        marginBottom: 15
    },
    dateText: {
        color: colors.BLACK,
        fontSize: 18,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        marginRight: 25,
        paddingBottom: 5,
        paddingHorizontal: 15
    }
})

export default connect(null, (dispatch) => {
    return {
        uploadPhotoAction: p => dispatch(uploadPhoto(p)),
        createProfileAction: p => dispatch(createProfile(p))
    }
})(CreateProfile)