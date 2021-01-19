import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { removePost, toggleBooked } from "../store/actions/post";

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam("postId");

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, []);

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
          onPress: () => {
            navigation.navigate("Main");
            dispatch(removePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    return null;
  }

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
  const toggleHandler = navigation.getParam("toggleHandler");
  const date = navigation.getParam("date");
  const iconName = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Пост #${postId} от ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
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
