import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import {
  AdaptiveLayout,
  FeatureCard,
  ResponsiveImage,
  StatsRow
} from "../components/AdaptiveLayout";
import { ResponsiveContainer, ResponsiveHeader } from "../components/ResponsiveHeader";

type ProductDetailScreenProps = {
  route: RouteProp<RootStackParamList, "ProductDetail">;
  navigation: NativeStackNavigationProp<RootStackParamList, "ProductDetail">;
};

export function ProductDetailScreen({ route, navigation }: ProductDetailScreenProps) {
  const { product } = route.params;

  return (
    <>
      <ResponsiveHeader
        title={product.name}
        leftAction={{ icon: "←", onPress: () => navigation.goBack() }}
      />
      <ResponsiveContainer>
        <AdaptiveLayout
          content={
            <>
              <ResponsiveImage source={{ uri: product.image }} />
              <FeatureCard
                icon="🛍️"
                title={product.name}
                description={product.description}
                variant="primary"
              />
              <StatsRow
                stats={[
                  { label: "Price", value: `$${product.price.toFixed(2)}` },
                  { label: "Category", value: product.category },
                  { label: "Platform", value: Platform.OS === "ios" ? "iOS" : "Android" }
                ]}
              />
              <FeatureCard
                icon="ℹ️"
                title="Platform Info"
                description={`Version: ${String(Platform.Version)}`}
                variant="secondary"
              />
            </>
          }
          footer={
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          }
        />
      </ResponsiveContainer>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#0066cc",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#0066cc",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8
      },
      android: {
        elevation: 4
      }
    })
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});