import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.spaceCadet,
        flexDirection: 'row',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:"5%",

    
        
    },

    contentContainer: {
        paddingStart: '5%',

    },
    movieNameText: {
        fontSize: 16,
        fontFamily: FONTS.bold,
        color: COLORS.white,


    },
    secondText: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.white,
        paddingVertical: 3,
    },
    image: {

        width: "40%",
        height: 200,
    
        borderRadius: 10,
        borderColor: COLORS.sun,
        borderWidth: 2
    },
});
