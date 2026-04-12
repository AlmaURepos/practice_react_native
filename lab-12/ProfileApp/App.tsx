import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductListScreen } from "./src/screens/ProductListScreen";
import { ProductDetailScreen } from "./src/screens/ProductDetailScreen";
import { RootStackParamList } from "./src/types/navigation";
import { HomeScreen } from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "profile" }}
          />

          <Stack.Screen
            name="ProductList"
            component={ProductListScreen}
            options={({ route }) => ({ title: `Products` })}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={({ route }) => ({ title: route.params.product.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
