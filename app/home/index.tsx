import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieHorizontalList from "../../presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading || popularQuery.isLoading) {
    return (
      <View className="flex-1  justify-center items-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#2C2E3B", "#1E1E2A", "#0C1422"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/images/caribbean-cinemas-logo.png")}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View className="flex-row justify-between items-center mb-1 px-4">
            <View>
              <Text className="text-3xl text-white font-bold ">
                Hello <Text className="font-normal">Ismael</Text>
              </Text>
              <Text className="text-xl text-gray-400 font-normal">
                Book your favorite movie
              </Text>
            </View>

            <LinearGradient
              colors={["#2C2E3B", "#0D0F16", "#0D0F16"]}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#2C2E3B",
              }}
            >
              <Text className="text-white font-bold text-3xl">IM</Text>
            </LinearGradient>
          </View>

          {/* <Text className="text-3xl text-white font-bold px-3">Movies App</Text> */}

          <MainSlideshow movies={nowPlayingQuery.data ?? []} />
          <MovieHorizontalList
            className="mb-5"
            movies={popularQuery.data ?? []}
            title="Popular"
          />
          <MovieHorizontalList
            className="mb-5"
            movies={topRatedQuery.data?.pages.flat() ?? []}
            title="Best rated"
            loadNextPage={ topRatedQuery.fetchNextPage }
          />
          <MovieHorizontalList
            movies={upcomingQuery.data ?? []}
            title="Coming soon"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
