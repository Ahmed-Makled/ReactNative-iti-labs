import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getMovieById } from '../../services/getMovieDetails';
import { MovieCard } from '../../components/';

export default function MovieDetails() {
    const [movie, setMovie] = useState({});
    const route = useRoute();

    useEffect(() => {
        handlerRequest()

    }, [movie]);


    //handler Request  Function
    const handlerRequest = async id => {
        const response = await getMovieById(route.params.id); // send request to api to get data

        setMovie(response)
        console.log('response-----------------', response)




    }


    return (
        <View>
            {/* <MovieCard movie={movie} onPress={() => { }} /> */}
        </View>
    );
};


