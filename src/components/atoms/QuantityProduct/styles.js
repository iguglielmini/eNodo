import { StyleSheet } from "react-native";
import { SPACE_24 } from "@assets/style/wrapper";
import { TitleXSmall } from "@assets/style/typography";
import { TEXTPINK, BGGREY, BLACK } from "@assets/style/colors";

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
    width: 30,
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
    paddingLeft: SPACE_24,
  },
  btnText: {
    color: BLACK,
    ...TitleXSmall,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: BLACK,
  },
  iconContainer: {
    top: 3,
  },
  pickerSelectStyles: {
    color: BLACK,
  },
});
