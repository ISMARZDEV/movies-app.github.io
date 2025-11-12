import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import MovieDescription from "../../presentation/components/movie/MovieDescription";
import ArrowBackRoute from "@/assets/icons/ArrowBackRoute";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#2C2E3B", "#1E1E2A", "#0C1422"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Botón para regresar */}
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 50,
          left: 20,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <ArrowBackRoute height={34} width={34} />
          </View>
        </Pressable>
      </View>
      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="pb-10">
          <MovieHeader
            poster={movieQuery.data.poster}
            originalTitle={movieQuery.data.originalTitle}
            title={movieQuery.data.title}
            movie={movieQuery.data}
          />
          <MovieDescription movie={movieQuery.data} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
