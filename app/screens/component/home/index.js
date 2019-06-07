import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Constant from '../../../helper/themeHelper';

export default class Home extends Component {
    render() {
        const {textTitle,container} = style;
        return (
            <View style={container}>
                <Text style={textTitle}>
                    Welcome to demo app
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: Constant.color.blackColor
    },
    textTitle:{
        fontSize:Constant.fontSize.xlarge,
        fontFamily:Constant.font.linateBold,
        color:Constant.color.white,
        textAlign: 'center'
    }
});