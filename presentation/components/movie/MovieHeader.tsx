import StarFill from "@/assets/icons/StarFill";
import { Formatter } from "@/config/helpers/formater";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { Image, Text, useWindowDimensions, View } from "react-native";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
  movie: CompleteMovie;
}

const MovieHeader = ({ poster, originalTitle, title, movie }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.85)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.15)",
          "transparent",
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          height: screenHeight * 0.4,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      />

      <View
        style={{ height: screenHeight * 0.7 }} // 70% de la pantalla
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[50] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        {/* <Text className=" font-normal text-secondary">{originalTitle}</Text> */}
        <Text className="font-normal text-3xl text-white mb-1">{title}</Text>

        <Text className="text-gray-200 mb-4">{movie.genres.join(" | ")}</Text>
        <View className="flex flex-row justify-between mb-1">
          <View className="flex flex-row gap-1">
            <StarFill fill="#ffc800" />
            <Text className="text-white font-bold">
              {movie.rating.toFixed(1)}
            </Text>
            <Text className="font-bold color-tertiary">rating</Text>
            <Text className="text-white text-1xl">
              {new Date(movie.releaseDate).toLocaleDateString()}
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="text-white font-bold">Duration:</Text>
            <Text className="text-white font-normal">
              {Formatter.minutesToHours(movie.duration)}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
