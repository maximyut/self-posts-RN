import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useEffect } from "react";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((p) => p.id === postId);

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked });
  // }, []);

  const removeHandler = () => {
    Alert.alert(
      "Удаление",
      "Вы уверены, что хотите удалить?",
      [
        {
          text: "Отмена",
          style: "cansel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.img} />
      <View style={styles.textWrap}>
        <Text style={styles.text}> {post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.MAIN_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const booked = navigation.getParam("booked");
  const date = navigation.getParam("date");
  const iconName = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Пост #${postId} от ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName={iconName}
          onPress={() => console.log("press photo")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  img: {
    paddingVertical: 10,
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  text: {
    fontFamily: "reqular",
  },
});
