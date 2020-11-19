import React, { Component } from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class SearchInput extends Component {
    render(){
        return (
            <View style={StyleSheet.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder="Search any city"
                    placeholderTextColor="white"
                    style={styles.textInput}
                    clearButtonMode="always"
                />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
    textInput: {
        flex: 1,
        color: 'white',
    },
});