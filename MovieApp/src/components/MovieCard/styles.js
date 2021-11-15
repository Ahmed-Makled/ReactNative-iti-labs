import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.spaceCadet,
        flexDirection: 'row',
        height: 160,
        marginTop: 80,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 10,
    },
    leftContainer: {
        width: '40%',
        height: '100%',
    },
    contentContainer: {
        marginLeft: 14,
        marginTop: 24,

    },
    movieNameText: {
        fontSize: 16,
        fontFamily: FONTS.bold,
        color: COLORS.white,


    },
    releaseDateText: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.white,
        marginTop: 14,
    },
    rightContainer: {
        flexShrink: 1

    },
    image: {
        position: 'absolute',
        width: 100,
        height: 170,
        bottom: 40,
        marginStart: 12,
        borderRadius: 10,
    },
});
