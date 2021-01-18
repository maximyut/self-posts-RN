import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import { Post } from "../components/Post";
import { DATA } from "../data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const BookedScreen = ({ navigation }) => {
  const openpostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="black" barStyle="default" />
      <FlatList
        data={DATA.filter(post => post.booked)}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openpostHandler} />}
      />
    </View>
  );
};

BookedScreen.navigationOptions = {
  headerTitle: "Избранное",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => console.log("press photo")}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log("press photo")}
      />
    </HeaderButtons>
  ),
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    padding: 10,
  },
});
