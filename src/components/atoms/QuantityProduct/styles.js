import { StyleSheet, Platform } from "react-native";
import { TitleXSmall } from "@assets/style/typography";
import { SPACE_24, SPACE_16 } from "@assets/style/wrapper";
import { TEXTPINK, BGGREY, BLACK, BORDERGREY } from "@assets/style/colors";

export default StyleSheet.create({
  containerAddProduct: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: SPACE_24,
    borderBottomColor: BGGREY,
    justifyContent: "space-between",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  viewContainer: {
    width: 40,
  },
  label: {
    textAlign: "left",
  },
  item: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  quantyPrice: {
    color: TEXTPINK,
    ...TitleXSmall,
    paddingLeft: Platform.OS === "ios" ? 15 : SPACE_24,
  },
  quantyLastPrice: {
    ...TitleXSmall,
    color: BORDERGREY,
    paddingLeft: SPACE_16,
    textDecorationLine: "line-through",
  },
  btnText: {
    color: BLACK,
    ...TitleXSmall,
    textDecorationColor: BLACK,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  iconContainer: {
    left: 25,
    top: Platform.OS === "ios" ? 3 : 20,
  },
  pickerSelectStyles: {
    color: BLACK,
  },
});
