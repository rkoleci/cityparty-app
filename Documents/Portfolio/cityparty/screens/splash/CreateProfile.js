import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { ScrollView, StyleSheet, View, TouchableHighlight, Image, Text, TextInput, Platform, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, MainBtn, Loading, Select, Tag, Input } from '../../common'
import { uploadPhoto, createProfile } from '../../core/actions/loginActions'
import { getCities, getInterests } from '../../core/actions/city'
import colors from '../../colors'
import utils from '../../core/utils'
const profilePicture = "http://res.cloudinary.com/dtgih45wb/image/upload/v1614350577/profile_pictures/ovp1snyqlhrjlbyrq4nh.png"


const Section = ({ label, children, last }) => {
    return (
        <View style={[style.section, { borderBottomColor: last ? '#EEEEEE' : '', borderBottomWidth: last ? 1 : 0 }]}>
            <Text style={style.sectionLabel}>{label}</Text>
            {children}
        </View>
    )
}

const InterestsView = ({ list, onChange }) => {
    return (
        <View style={{}}>
            {utils.toGrid(list).filter(i => Array.isArray(i)).map(row => {
                return (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        {row.map((rowItem, pos) => {
                            return (
                                <View style={{ flex: 1, marginHorizontal: pos == 1 ? 10 : 0 }}>{rowItem != '' && <Tag text={rowItem} pressed={false} onChange={(pressed) => onChange(rowItem, pressed)} />}</View>
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

const CreateProfile = ({ route, navigation, uploadPhotoAction, createProfileAction, getCitiesList, getInterestsList }) => {
    const { token } = route.params ?? '';
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlkiLCJyb2xlIjoiVVNFUiIsImlkIjo1LCJpYXQiOjE2MTQ5NTg5OTcsImV4cCI6MTYxNzU1MDk5N30.psXnQrfh3cdOnPSNAwuvk2KrBl0QMPtojyJ1Vh_xiVI"
    const [data, setData] = useState({ name: '', bio: '', image: '', imageUrl: '', city: '', sex: '', profilePicture, interests: [], date: utils.dateToObject(new Date()) })
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState({ status: '', result: '' })

    const createProfile = useSelector(state => state.createProfile)
    const citiesList = useSelector(state => state.cities)
    const interests = useSelector(state => state.interests)

    console.log(createProfile)

    useEffect(() => {
        navigation.setOptions({ title: '', headerShown: true })
        askPhotosPermission()
        getCitiesList({ search: '', token: token })
        getInterestsList()
    }, [])


    useEffect(() => {
        if (data.image) {
            uploadPhotoAction({ token: token, image: data.image })
        }
    }, [data.image])

    useEffect(() => {
        setStatus({ status: '', result: '' })
      }, [data])

    useEffect(() => {
        const { creating, created, errored, error, data } = createProfile

        if (creating) {
            setStatus({ status: 'loading', result: '' })
            return
        }

        if (created && data && data.success == true && data.result && data.result == 'Profile created!') {
            navigation.navigate('Main', { screen: 'Profile' });
            setStatus({ status: 'result', result: data.result })
            return
        }

        if (created && data && data.success == false && data.result && data.result) {
            setStatus({ status: 'result', result: data.result })
            return
        }

        if (errored && error) {
            setStatus({ status: 'result', result: 'Something went wrong!' })
            return
        }

    }, [createProfile])

    const onProceed = () => {
        createProfileAction({
            firstName: data.name,
            lastName: data.name,
            bio: data.bio,
            birthday: utils.dateToString(data.date),
            cityId: 2,
            interests: data.interests.map((i) => i.id),
            socials: {
                instagram: "nuniTelo",
                twitter: "nunitelo",
                facebook: "NuniTelo",
                tiktok: "tik",
                linkedin: "Naun Telo"
            },
            profilePicture: data.profilePicture,
            token: token,
        })
    }

    const onPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        console.log(result)

        if (!result.cancelled) {
            setData({ ...data, image: result })
        }
    };

    const onInterestChanged = (interest, pressed) => {
        let oldInterests = data.interests

        if (interests.loaded && interests.data.result) {
            let interestObject = interests.data.result.filter(i => i.name == interest)[0];
            if (interestObject) {
                if (pressed) {
                    if (!oldInterests.includes(interestObject.name)) {
                        oldInterests = [...oldInterests, interestObject]
                    }
                } else {
                    oldInterests = oldInterests.filter(i => i.name != interest)
                }
            }
        }

        setData({ ...data, interests: oldInterests })

    }

    const askPhotosPermission = () => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }
    console.log(data)

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
                    <Input inputStyles={{ ...style.thickLabel, paddingHorizontal: 0, paddingBottom: 0, borderColor: colors.WHITE }} value={data['name']} onChange={(e) => setData({ ...data, ['name']: e })} />
                </Section>

                <Section label="DOVE VIVI?">
                    <Select items={citiesList.loaded && citiesList?.data?.result ? citiesList.data.result.map(city => {
                        return {
                            label: city.name,
                            value: city.id
                        }
                    }) : []}
                        onChange={(city) => setData({ ...data, city: city })}
                        placeholder=""
                        defaultValue=""
                    />
                </Section>

                <Section label="BIO">
                    <Input inputStyles={{ ...style.thinLabel, paddingHorizontal: 0, paddingBottom: 0, borderColor: colors.WHITE }} value={data['bio']} onChange={(e) => setData({ ...data, ['bio']: e })} />
                </Section>

                <Section label="INTERESTS">
                    {interests.loaded && interests?.data?.result && <InterestsView list={interests?.data?.result.map(i => i.name)} onChange={(interest, pressed) => onInterestChanged(interest, pressed)} />}
                </Section>

                <Section label="ETA">
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={style.dateText}>{data.date.day}</Text>
                            <Text style={style.dateText}>{data.date.month}</Text>
                            <Text style={style.dateText}>{data.date.year}</Text>
                        </View>
                        {show == true && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={(e, date) => {
                                    setShow(false)
                                    setData({ ...data, ['date']: utils.dateToObject(date) })
                                }}
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
                <Loading status={status.status} result={status.result}>
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
        createProfileAction: p => dispatch(createProfile(p)),
        getCitiesList: p => dispatch(getCities(p)),
        getInterestsList: () => dispatch(getInterests())
    }
})(CreateProfile)