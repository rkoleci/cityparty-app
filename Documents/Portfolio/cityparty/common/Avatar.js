import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Avatar = ({ src, size, empty, styles }) => {
    
    const calcSize = () => {
        if (size == 'extra-small') {
            return { width: 25, height: 25 }
        }
        if (size == 'small') {
            return { width: 45, height: 45 }
        }
        if (size == 'medium') {
            return { width: 60, height: 60 }
        }
        return { width: 110, height: 110 }
    }

    return (
        <Image
            style={[styles.imageView, calcSize(), { backgroundColor: empty ? '#C4C4C4': '' }, styles]}
            source={{ uri: src }}
            resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
        />
    )
}

const styles = StyleSheet.create({
    imageView: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 75
    }
})

export default Avatar