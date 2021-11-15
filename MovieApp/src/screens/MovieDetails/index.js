import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getMovieById } from '../../services/getMovieDetails';
import { View, Text, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../common';
import styles from './styles';
import { MovieDetails as MovieDetail, MovieSummary ,MovieRating} from '../../components/';


export default function MovieDetails() {
    const [data, setData] = useState([]);
    const route = useRoute();
    useEffect(() => {
        handlerRequest()
    }, [data]);

    //handler Request  Function
    const handlerRequest = async () => {
        const response = await getMovieById(route.params.id); // send request to api to get data
        setData(response)
    }


    return (

        <View>
        <ScrollView >
            <MovieDetail data={data} />
             <MovieRating data={data} />
            <MovieSummary  headTitle={"Summary"}text={data.Plot} />
            <MovieSummary  headTitle={"Director"}text={data.Director} />
            <MovieSummary  headTitle={"Actors"}text={data.Actors} />

        </ScrollView>
        </View>
       
        



    );
};


