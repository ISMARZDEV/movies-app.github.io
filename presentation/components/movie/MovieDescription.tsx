import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row justify-between gap-1">
        <View className="flex flex-row gap-2 mb-1">
        </View>
      </View>
      <Text className="font-bold text-2xl mt-4 text-white">Synopsis</Text>
      <Text className="font-normal mt-2 mb-8 text-gray-400">
        {movie.description ? movie.description : "Sin descripcion"}
      </Text>

      {/* <View className="flex flex-row gap-4 ">
        {movie.budget !== 0 && (
          <View>
            <Text className="text-white text-center text-1xl">Budget</Text>
            <Text className="font-bold text-center text-gray-400 text-1xl">
              {Formatter.currency(movie.budget)}
            </Text>
          </View>
        )}
      </View> */}
    </View>
  );
};

export default MovieDescription;
