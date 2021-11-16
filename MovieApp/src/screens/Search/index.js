import React, {useState, useEffect, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  useNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import _ from 'lodash';
import {SearchBar, Header, EmptyResult, MovieList} from '../../components';
import {getAllMoviesSearch} from '../../services';
import {searchMovieAction} from '../../store/actions/searchMovie';
import {COLORS} from '../../common';
import styles from './styles';

export default function Search() {
  const [movieName, setMovieName] = useState(''); //value of input search
  const [data, setData] = useState([]); //store received data form request search in array
  const [loading, setLoading] = useState(false); //Loading data
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _searchMovies = useSelector(state => state.searchMovie.searchMovieList);
  console.log(data);
  useEffect(() => {
    setData([]);
  }, [movieName]); //OnChanges

  /**
   * Start Main Function
   *
   */

  //get data with handler multi request
  const _metadata = useCallback(_.debounce(handlerRequest, 1300), []);

  //handler text input search change (movieName)
  const handlerTextChange = async movieName => {
    setMovieName(movieName);
    await _metadata(movieName);
  };

  //handler on press search icon
  const handlerOnPressSearch = async () => {
    handlerRequest(movieName);
  };

  //handler on press card item
  const handlerOnPressMovieCard = movie => {
    dispatch(searchMovieAction(movie));
    navigation.navigate('Movie', {id: movie.imdbID});
  };
  /**
   *Start Helper Function
   *
   */

  //handler Request  Function
  async function handlerRequest(movieName) {
    // console.log('movieName---------------------------------------', _movieName)
    setLoading(true); //set loading true
    const response = await getAllMoviesSearch(movieName); // send request to api to get data
    setData(response); //set response in state data
    setLoading(false); //set loading false
  }

  return (
    <View style={styles.container}>
      {/* SearchBarComponent */}
      <SearchBar
        value={movieName}
        onChange={movieName => {
          handlerTextChange(movieName);
        }}
        onPress={() => {
          handlerOnPressSearch(movieName);
        }}
      />

      {/* HeaderComponent */}
      <Header
        text={!data && movieName !== '' ? 'Recent Searches' : 'Search Result'}
      />

      {/* ContentBody */}

      {!data ? (
        <EmptyResult
          headText="You Don`t Have Search History"
          Description={`When you search for data you will see \n the history of your search`}
        />
      ) : loading ? (
        <ActivityIndicator
          color={COLORS.sun}
          style={styles.activityIndicator}
        />
      ) : (
        <MovieList
          data={data && movieName !== '' ? data : _searchMovies}
          onPress={value => handlerOnPressMovieCard(value)}
        />
      )}
    </View>
  );
}
