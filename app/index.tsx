import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  //   return <Redirect href="/home" />;

  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5 ">
        <Text className="text-2xl font-bold mb-4 font-work-black text-primary">
          ¡Hola Mundo!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
