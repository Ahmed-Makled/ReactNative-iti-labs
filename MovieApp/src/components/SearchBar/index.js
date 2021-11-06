import React from 'react';
import { TextInput, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../common';
import style from './style';

export const SearchBar = ({ value, onChange, onPress }) => {
    return (
        <View style={style.container}>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={style.inputContainer}
                placeholder={'Enter Movie Name'}
                placeholderTextColor={COLORS.sun}
            />
            <Pressable onPress={onPress} style={style.iconContainer}>
                <Icon name="magnifying-glass" size={30} color={COLORS.sun} />
            </Pressable>
        </View>
    );
};


