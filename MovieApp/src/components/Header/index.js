import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export const Header = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{text}</Text>
            <View style={styles.divider} />
        </View>


    );
};


