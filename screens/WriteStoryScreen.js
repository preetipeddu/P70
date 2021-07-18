import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
 render(){
    return(
        <View>
            <Header 
                backgroundColor = {'#E6E6FA'}
                centerComponent = {{
                    text: 'Write a Story',
                    style: {fontSize: 20, color: '#fff'}
                }}
            />

            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
        )
    }
}
