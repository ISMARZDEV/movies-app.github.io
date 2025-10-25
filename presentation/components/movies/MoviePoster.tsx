import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}>
      <Image
        source={{ uri: poster }}
        className=" rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 200,
          height: smallPoster ? 130 : 260,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
