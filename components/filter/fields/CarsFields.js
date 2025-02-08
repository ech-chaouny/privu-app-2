import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const CarsFields = ({ title, field_id, setParams, minParams, maxParams }) => {
  const maxVal =
    title == "Année - Modèle"
      ? 2026
      : title == "Kilométrage"
      ? 400000
      : title == "Puissance fiscale"
      ? 40
      : 16;
  const minVal = title == "Année - Modèle" ? 1980 : 0;
  const [minValue, setMinValue] = useState(minParams);
  const [maxValue, setMaxValue] = useState(maxParams);

  const handleSliderChange = (values) => {
    setMinValue(values[0]); // Update minValue
    setMaxValue(values[1]);
    updateParams(values[0], values[1]); // Update maxValue
  };
  const formatNumberWithCommas = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  const updateParams = (min, max) => {
    if (min === "" && max === "") {
      setParams((prevParams) => {
        const newParams = { ...prevParams };
        delete newParams[`cf[${field_id}]`]; // Remove cf[22] from params
        return newParams;
      });
      return;
    }
    setParams((prevParams) => ({
      ...prevParams,
      [`cf[${field_id}]`]: [min, max], // Update cf[22] with min and max
    }));
  };

  return (
    <View className="border-b border-[#eee] pt-6 pb-3 mx-5">
      <Text className="font-psemibold text-base">{title}</Text>
      <View className="flex-row items-center justify-between mt-3">
        <View className="flex-row items-center border border-[#a5a5a5] rounded-lg h-12 px-2 w-[45%]">
          <TextInput
            className="font-pregular text-[15px] h-full flex-1"
            placeholder={`${minVal}`}
            value={
              minValue === ""
                ? ""
                : title == "Année - Modèle"
                ? minValue.toString()
                : formatNumberWithCommas(minValue)
            }
            keyboardType="number-pad"
            onChangeText={(e) => {
              // Convert the input to a number or handle empty string
              const numericValue = e ? parseInt(e.replace(/,/g, ""), 10) : "";
              setMinValue(isNaN(numericValue) ? "" : numericValue);
            }}
            maxLength={
              title == "Année - Modèle"
                ? 4
                : title == "Puissance fiscale" || title == "Cylindrée / L"
                ? 2
                : undefined
            }
            onSubmitEditing={() => updateParams(minValue, maxValue)}
            onEndEditing={() => {
              updateParams(minValue, maxValue);
            }}
          />
          <Text className="font-pregular pr-1">
            {title == "Kilométrage"
              ? "km"
              : title == "Puissance fiscale"
              ? "CV"
              : title == "Cylindrée / L"
              ? "L"
              : ""}
          </Text>
        </View>
        <Text className="text-base font-pmedium px-2">à</Text>
        <View className="flex-row items-center border border-[#a5a5a5] rounded-lg h-12 px-2 w-[45%]">
          <TextInput
            className="font-pregular text-[15px] h-full flex-1"
            placeholder={`${
              title == "Kilométrage" ? formatNumberWithCommas(maxVal) : maxVal
            }`}
            value={
              maxValue === ""
                ? ""
                : title == "Année - Modèle"
                ? maxValue.toString()
                : formatNumberWithCommas(maxValue)
            }
            keyboardType="number-pad"
            onChangeText={(e) => {
              // Convert the input to a number or handle empty string
              const numericValue = e ? parseInt(e.replace(/,/g, ""), 10) : "";
              setMaxValue(isNaN(numericValue) ? "" : numericValue);
            }}
            maxLength={
              title == "Année - Modèle"
                ? 4
                : title == "Puissance fiscale" || title == "Cylindrée / L"
                ? 2
                : undefined
            }
            onSubmitEditing={() => updateParams(minValue, maxValue)}
            onEndEditing={() => {
              updateParams(minValue, maxValue);
            }}
          />
          <Text className="font-pregular pr-1">
            {title == "Kilométrage"
              ? "km"
              : title == "Puissance fiscale"
              ? "CV"
              : title == "Cylindrée / L"
              ? "L"
              : ""}
          </Text>
        </View>
      </View>
      <View className="mt-2 w-full justify-center items-center">
        <MultiSlider
          min={minVal}
          max={maxVal}
          values={[
            minValue == "" ? minVal : minValue,
            maxValue == "" ? maxVal : maxValue,
          ]}
          sliderLength={330}
          step={title == "Kilométrage" ? 5000 : 1}
          isMarkersSeparated={true}
          onValuesChange={handleSliderChange}
          selectedStyle={{
            backgroundColor: "#000",
            height: 4,
          }}
          unselectedStyle={{ height: 4, borderRadius: 99 }}
          customMarkerLeft={(e) => (
            <CustomSliderMarkerLeft currentValue={e.currentValue} />
          )}
          customMarkerRight={(e) => (
            <CustomSliderMarkerRight currentValue={e.currentValue} />
          )}
        />
      </View>
      {/* <View className="flex-row items-center justify-between mt-3">
        <View className="flex-row justify-between border w-full border-white-100 focus:border-primary-200 h-14 items-center rounded-md px-3">
          <View className="flex-row items-center gap-x-2 mb-0.5">
            <TextInput
              className={`flex-1 font-pmedium h-full`}
              placeholder={title}
              value={value ? value : field_id}
              onChangeText={(e) => {
                handleFieldsValue(field_id, e);
              }}
              placeholderTextColor="#9B9B9B"
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View> */}
    </View>
  );
};
const CustomSliderMarkerLeft = ({ currentValue }) => {
  return (
    <View className="h-5 w-5 bg-black rounded-full mt-0.5">
      {/* <Text style={styles.markerText}>{currentValue}</Text> */}
    </View>
  );
};

// Right Marker Component
const CustomSliderMarkerRight = ({ currentValue }) => {
  return (
    <View className="h-5 w-5 bg-black rounded-full mt-0.5">
      {/* <Text style={styles.markerText}>{currentValue}</Text> */}
    </View>
  );
};

export default CarsFields;
