import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.spaceCadet,
    marginBottom:"5%",
    paddingBottom:"5%"



  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    fontSize: 15,
    paddingTop: 15,
  },
  ratingHeader: {
    color: COLORS.sun,
    fontFamily: FONTS.bold,
    paddingStart: 20,
    textAlign:"center"

    
  },
  ratingText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    paddingStart: 20,
    paddingTop: 15,
    textAlign:"center"
  }
});