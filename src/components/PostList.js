import React from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="black" barStyle="default" />
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
