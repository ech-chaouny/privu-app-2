import { View, Text, TextInput } from "react-native";
import React from "react";
import icons from "../constants/icons";

const SearchInput = ({ containerStyle, placeHolder, value, handleChange }) => {
  const Search = icons.search;
  return (
    <View
      className={`flex-row items-center border border-white-100 ${containerStyle}
      focus:border-black-100`}
    >
      <Search />
      <TextInput
        className="flex-1 font-pmedium ml-2 text-black-100"
        placeholder={`${placeHolder}`}
        onChangeText={handleChange}
        value={value}
      />
    </View>
  );
};

export default SearchInput;
