import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MovieScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text>{movieQuery.data?.title ?? "No tiene"}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
