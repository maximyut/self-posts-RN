import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const CreateScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}></Text>
    </View>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать пост",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontFamily: 'bold',
    
  }
})
