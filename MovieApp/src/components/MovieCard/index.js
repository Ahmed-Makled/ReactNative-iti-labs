import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../common';
import styles from './styles';


const MovieCard = ({ data, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.leftContainer} />
            <View style={styles.rightContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.movieNameText}>
                        {data.Title}
                    </Text>
                    <Text style={styles.releaseDateText}>{`Released: ${data.Year}`}</Text>
                </View>
            </View>
            <FastImage
                source={data.Poster !== 'N/A' ? { uri: data.Poster } : IMAGES.dummyImage}
                style={styles.image}
            />
        </Pressable>
    );
};

export { MovieCard };
