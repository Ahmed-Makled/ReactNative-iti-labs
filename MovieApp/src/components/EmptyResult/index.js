import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../common';
import styles from "./styles"


export const EmptyResult = ({ headText, Description }) => {
    return (
        <View style={styles.container}>
            <Icon name="history" size={60} color={COLORS.hitGrey} />
            <Text style={styles.title}>{headText}</Text>
            <Text style={styles.description}>{Description}</Text>
        </View>
    )
}