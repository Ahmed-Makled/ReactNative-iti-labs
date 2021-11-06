import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SearchBar } from '../../components';
import { getAllMoviesSearch } from '../../services';

import style from './style';

export default function Search() {
    const [movieName, setMovieName] = useState('');
    const [MoviesList, setMoviesList] = useState([]);

    useEffect(() => {
        searchMoviesList();


    }, []);
    useEffect(() => {


    }, [movieName]);

    const searchMoviesList = async () => {
        console.log("please wait")
        console.log(movieName)
        const res = await getAllMoviesSearch(movieName);
        res && setMoviesList(res)


    };
    return (
        <View style={style.container}>
            <SearchBar
                value={movieName}
                onChange={movieName => setMovieName(movieName)}
                onPress={() => { searchMoviesList() }}
            />
        </View>
    );
}
