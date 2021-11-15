import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MovieRating = ({ data }) => {
    return (

        <View style={styles.container} >
            {/* ---------wrarper contnet------------- */}
            <View style={styles.contentContainer}>
                {/* ---------Head1------------- */}
                <View>
                    <Text style={styles.ratingHeader}>{'IMDB'}</Text>
                    <Text style={styles.ratingText}>{`${data.imdbRating}/10`}</Text>
                </View>

                {/* ---------Head2------------- */}

                <View>
                    <Text style={styles.ratingHeader}>{"Rotten Tomatoes"}</Text>
                    <Text style={styles.ratingText}>{`${data.Metascore}%`}</Text>
                </View>
                {/* ---------Head3------------- */}

                <View>
                    <Text style={styles.ratingHeader}>{"Metacritic"}</Text>
                    <Text style={styles.ratingText}>{`${data.Metascore}/100`}</Text>
                </View>
            </View>

        </View>
    )
}

export { MovieRating };
