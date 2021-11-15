import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  

    contentContainer: {
        backgroundColor:COLORS.spaceCadet,
  
        padding:"2%",
        borderStartColor: COLORS.sun,
        borderStartWidth: 3,
        paddingBottom:"5%",
         marginBottom:"5%",

    },
    headTitle: {
        fontSize: 16,
        fontFamily: FONTS.bold,
        color: COLORS.white,


    },
    description: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.white,
        paddingVertical: 3,
    },

});
