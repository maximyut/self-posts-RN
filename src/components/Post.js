import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

export const Post = ({ post, onOpen, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onOpen(post)}
      onLongPress={() => onRemove(post)}
    >
      <View style={styles.post}>
        <ImageBackground style={styles.img} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toUTCString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "white",
    fontFamily: "regular",
  },
});
