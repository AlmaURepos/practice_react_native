import React, { useState, useCallback } from "react";
import {
  FlatList,
  Text,
  RefreshControl,
  StyleSheet
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductItem } from "../components/ProductItem";
import { products, Product } from "../data/products";
import { RootStackParamList } from "../types/navigation";
import { ResponsiveContainer, ResponsiveHeader } from "../components/ResponsiveHeader";
import { Card, GridLayout } from "../components/GridLayout";

type ProductListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "ProductList">;
};

export function ProductListScreen({ navigation }: ProductListScreenProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleProductPress = useCallback(
    (product: Product) => {
      navigation.navigate("ProductDetail", { product });
    },
    [navigation]
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshing(false);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductItem product={item} onPress={handleProductPress} />
    ),
    [handleProductPress]
  );

  const keyExtractor = useCallback((item: Product) => item.id, []);

  return (
    <>
      <ResponsiveHeader
        title="Product Catalog"
        leftAction={{ icon: "←", onPress: () => navigation.navigate("Home") }}
      />
      <ResponsiveContainer>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <>
              <Text style={styles.header}>Products ({products.length})</Text>
              <GridLayout columns={2} spacing={12}>
                <Card title="Categories" subtitle="Unique groups">
                  <Text style={styles.cardText}>
                    {new Set(products.map((item) => item.category)).size}
                  </Text>
                </Card>
                <Card title="Average Price" subtitle="Across all products">
                  <Text style={styles.cardText}>
                    $
                    {(
                      products.reduce((sum, item) => sum + item.price, 0) / products.length
                    ).toFixed(2)}
                  </Text>
                </Card>
              </GridLayout>
            </>
          }
        />
      </ResponsiveContainer>
    </>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 12
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 16,
    marginVertical: 12
  },
  cardText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0066cc"
  }
});