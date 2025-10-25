import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1  justify-center items-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
      {/* <Text >{JSON.stringify(nowPlayingQuery.data, null, 2)}</Text> */}

      <MainSlideshow movies={ nowPlayingQuery.data ?? [] } />
    </View>
  );
};

export default HomeScreen;
