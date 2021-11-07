import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator, FlatList, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import { SearchBar, Header, EmptyResult, MovieList } from '../../components';
import { getAllMoviesSearch } from '../../services';
import styles from './styles';
import dummy from "../../common/dummy"


export default function Search() {
    const [movieName, setMovieName] = useState('');//value of input search
    const [Movies, setMovies] = useState([]);//store received data form request search in array
    const [loading, setLoading] = useState(false); //Loading data  



    useEffect(() => {


    }, []);   //OnInit

    useEffect(() => { setMovies([]) }, [movieName]);   //OnChanges 

    /**
     * Start Main Function 
     * 
     */
    //get Movies with handler multi request

    const _getMovies = useCallback(_.debounce(handlerRequest, 1300), []);

    //handler text input search change (movieName)
    const handlerTextChange = async _movieName => {
        setMovieName(_movieName);
        await _getMovies(_movieName);
    };

    const handlerOnPressSearch = async () => { handlerRequest(movieName) };    //handler on press search icon


    /** 
    *Start Helper Function 
    *
    */

    //handler Request  Function
    async function handlerRequest(_movieName) {
        // console.log('movieName---------------------------------------', _movieName)
        setLoading(true);//set loading true
        const response = await getAllMoviesSearch(_movieName); // send request to api to get data
        setMovies(response)//set response in state movies
        setLoading(true); //set loading false
        // console.log('Movies---------------------------------------', Movies)

    }


    return (
        <View style={styles.container}>

            {/* SearchBarComponent */}
            <SearchBar
                value={'avatar'}
            />

            {/* HeaderComponent */}
            <Header text={!!Movies ? 'Recent Searches' : 'Search Result'} />

            {/* ContentBody */}

            <ScrollView>
                {
                    Movies ? (Movies.map((item) => { <Text>{item.title}</Text> })) : ('')

                }
            </ScrollView>

            {/* {
                !Movies ?
                    (
                        <View>
                            <EmptyResult
                                headText="You Don`t Have Search History"
                                Description={`When you search for movies you will see \n the history of your search`}
                            />
                        </View>
                    ) :
                    (
                        <View>
                            <MovieList
                                data={Movies}
                                onPress={() => { }}
                            />

                        </View>
                    )

            } */}

        </View>
    );
}
