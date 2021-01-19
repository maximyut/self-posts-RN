import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      bold: require("../assets/fonts/OpenSans-Bold.ttf"),
      reqular: require("../assets/fonts/OpenSans-Regular.ttf"),
    });
    await DB.init();
  } catch (e) {
    console.log("Error: ", e);
  }
}
