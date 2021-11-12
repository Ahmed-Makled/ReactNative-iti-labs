import React from 'react';
import { FlatList, Text } from 'react-native';
import { MovieCard } from '../MovieCard';
import { dummy_data } from "../../common/dummy"
import styles from './styles';

export const MovieList = ({ data, onPress, containerStyle }) => {


    const renderItem = ({ item }) => (
        <MovieCard data={item} onPress={() => onPress(item)} />
    );
    return (

        <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={[styles.contentContainer, containerStyle]}
            showsVerticalScrollIndicator={false}
        />
    );
};


