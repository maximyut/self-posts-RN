import * as Font from 'expo-font';

export async function bootstrap() {
    await Font.loadAsync({
      bold: require("../assets/fonts/OpenSans-Bold.ttf"),
      reqular: require("../assets/fonts/OpenSans-Regular.ttf"),
    }); 
}