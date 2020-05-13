import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log("Navigation: ", navigation);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Pachamami</Text>
      <Button
        title="Product"
        onPress={() => navigation.navigate("Product")}></Button>
      <Button
        title="Shop Categories"
        onPress={() => navigation.navigate("Category")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
/*React Native Notes:
    string param aligns with name from App.js ("Home") for this page
    navigation.navigate("NameOfScreen") used to move between pages
    Parts of screens: components, in own folder and no nav associated with them
*/
