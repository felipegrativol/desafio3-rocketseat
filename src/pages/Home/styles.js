import { StyleSheet, Dimensions } from "react-native";
import { metrics, colors } from "~/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  container: {
    //...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  containerModal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkTransparent
    // width: metrics.screenWidth,
    // height: metrics.screenHeight - 100,
    //width: wp("100.0%"),
    //height: hp("17%")

    // marginLeft: metrics.screenWidth / 2
    //marginVertical: metrics.screenHeight / 4,
    // padding: metrics.basePadding
  },
  ModalInsideView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    height: hp("30%"),
    width: wp("87.0%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    elevation: 5,
    shadowColor: colors.black,
    padding: metrics.basePadding
    // marginHorizontal: metrics.screenWidth / 4
  },
  box: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  boxButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: metrics.screenWidth - 100
  },
  btnCancelar: {
    borderColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    // padding: metrics.basePadding - 2,
    paddingHorizontal: metrics.basePadding,
    alignItems: "center",
    justifyContent: "center",
    height: metrics.screenHeight / 17,
    width: metrics.screenWidth - 280,
    backgroundColor: colors.light,
    margin: metrics.baseMargin
  },
  btnSalvar: {
    borderColor: colors.green,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    //padding: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
    alignItems: "center",
    justifyContent: "center",
    height: metrics.screenHeight / 17,
    width: metrics.screenWidth - 280,
    backgroundColor: colors.success,
    margin: metrics.baseMargin
  },
  title: {
    flex: 0,
    fontWeight: "bold",
    fontSize: 22,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: metrics.baseMargin
  },
  fontButton: {
    fontWeight: "bold",
    fontSize: 19,
    color: colors.white
  },
  inputText: {
    height: metrics.screenHeight / 14,
    width: metrics.screenWidth - 120,
    borderColor: colors.light,
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    margin: metrics.baseMargin,
    fontSize: 16
  }
});

export default styles;
