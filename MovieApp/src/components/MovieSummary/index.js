import React from 'react';
import { View, Text, } from 'react-native';
import styles from './styles';


const MovieSummary = ({ headTitle,text }) => {
    return (


            <View style={styles.contentContainer}>
                <Text style={styles.headTitle}>
                    {headTitle}
                </Text>
                <Text style={styles.description}> {text}</Text>

            </View>


     
    );
};

export { MovieSummary };
