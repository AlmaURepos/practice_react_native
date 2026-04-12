import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileCard } from "../components/ProfileCard";
import { ContactSection } from "../components/ContactSection";
import { RootStackParamList } from "../types/navigation";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        name="John Doe"
        role="React Native Developer"
        bio="I build mobile applications using Expo, React Native, TypeScript, and modern UI patterns."
        avatar="https://via.placeholder.com/100"
      />

      <ContactSection />

      <TouchableOpacity
        style={styles.catalogButton}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={styles.catalogButtonText}>Open Product Catalog</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  catalogButton: {
    backgroundColor: "#0066cc",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    alignItems: "center"
  },
  catalogButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});