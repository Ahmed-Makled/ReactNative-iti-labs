import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100,

    },
    title: {
        fontSize: 18,
        color: COLORS.hitGrey,
        fontFamily: FONTS.bold,
        paddingVertical: 30,

    },
    description: {
        fontSize: 16,
        color: COLORS.hitGrey,
        fontFamily: FONTS.medium,
        textAlign: 'center'




    }
})