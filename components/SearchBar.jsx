import { View, Text, Pressable } from "react-native";
import React from "react";
import { icons } from "../constants";
import SearchInput from "./SearchInput";

const SearchBar = ({ containerStyle, openFilter, setOpenFilter }) => {
  const FilterIcon = icons.filterIcon;

  return (
    <View
      className={`flex-row items-center w-full px-4 py-3 ${containerStyle}`}
    >
      <SearchInput
        containerStyle={"w-full flex-1 rounded-[99px] h-[50px] px-4"}
        placeHolder="Rechercher des petites annonces"
      />
      {/* <Pressable
        onPress={() => setOpenFilter(true)}
        className="items-center ml-2"
      >
        <View className="bg-primary-100 items-center justify-center h-8 w-8 rounded-full">
          <FilterIcon />
        </View>
        <Text className="font-pmedium text-xs mt-0.5">Filtrer</Text>
      </Pressable> */}
    </View>
  );
};

export default SearchBar;
