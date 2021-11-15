import React from 'react';
import { View, Text, } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../common';
import styles from './styles';


const MovieDetails = ({ data }) => {
    return (
        <View style={styles.container} >
            <FastImage
                source={data.Poster !== 'N/A' ? { uri: data.Poster } : IMAGES.dummyImage}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.movieNameText}>
                    {data.Title}
                </Text>
                <Text style={styles.secondText}> {data.Released}</Text>
                <Text style={styles.secondText}> {data.Genre}</Text>
                <Text style={styles.secondText}> {data.Runtime}</Text>
            </View>


        </View>
    );
};

export { MovieDetails };
