import { View } from "react-native";
import React, { useState } from "react";
import { icons } from "../../../constants";
import data from "../../../data/details.json";
import SelectFields from "./SelectFields";
import ModalFields from "./ModalFields";
import CheckboxFields from "./CheckboxFields";
import CheckFields from "./CheckFields";
import CarsFields from "./CarsFields";
import ImmoFields from "./ImmoFields";

const Fields = ({ category_id, fields, setFields, params, setParams }) => {
  const handleFieldsValue = (field_id, selectedValue) => {
    setFields((prevFields) => {
      const existingFieldIndex = prevFields.findIndex(
        (f) => f.field_id === field_id
      );

      if (existingFieldIndex > -1) {
        // If the field exists, update its value
        const updatedFields = [...prevFields];
        updatedFields[existingFieldIndex] = { field_id, value: selectedValue };
        return updatedFields;
      }

      // If the field doesn't exist, add it
      return [...prevFields, { field_id, value: selectedValue }];
    });
    setParams((e) => ({
      ...e,
      [`cf[${field_id}]`]: selectedValue,
    }));
  };

  return (
    <View>
      {data
        .filter((field) => field.category_id.includes(category_id))
        .map((field, index) => (
          <View key={index}>
            {field.type === "modal" && (
              <ModalFields
                fieldsData={field.data}
                title={field.name}
                field_id={field.field_id}
                field_child_id={field.child_id}
                field_value={
                  fields.find((f) => f.field_id === field.field_id)?.value || ""
                }
                child_value={
                  fields.find((f) => f.field_id === field.child_id)?.value || ""
                }
                setFields={setFields}
                setParams={setParams}
                handleFieldsValue={handleFieldsValue}
              />
            )}
            {field.type === "select" && field.filter !== "multi-slider" && (
              <SelectFields
                data={field.data}
                title={field.name}
                params={
                  params[`cf[${field.field_id}]`]
                    ? params[`cf[${field.field_id}]`]
                    : []
                }
                field_id={field.field_id}
                setParams={setParams}
              />
            )}

            {field.type === "checkbox" && (
              <CheckboxFields
                data={field.data}
                title={field.name}
                params={
                  params[`cf[${field.field_id}]`]
                    ? params[`cf[${field.field_id}]`]
                    : []
                }
                field_id={field.field_id}
                setParams={setParams}
              />
            )}
            {field.filter === "multi-slider" && (
              <CarsFields
                title={field.name}
                field_id={field.field_id}
                setParams={setParams}
                minParams={
                  params[`cf[${field.field_id}]`]
                    ? params[`cf[${field.field_id}]`][0]
                    : ""
                }
                maxParams={
                  params[`cf[${field.field_id}]`]
                    ? params[`cf[${field.field_id}]`][1]
                    : ""
                }
              />
            )}

            {field.filter === "multi-slider-immo" && (
              <ImmoFields
                title={field.name}
                field_id={field.field_id}
                setParams={setParams}
                minParams={
                  params[`cf[${field.field_id}]`]
                    ? params[`cf[${field.field_id}]`][0]
                    : ""
                }
                maxParams={
                  params[`cf[${field.field_id}]`]
                    ? params[`cf[${field.field_id}]`][1]
                    : ""
                }
              />
            )}
          </View>
        ))}
      <View className="flex-row flex-wrap">
        {data
          .filter((field) => field.category_id.includes(category_id))
          .map(
            (field, index) =>
              field.type === "check" && (
                <CheckFields
                  key={index}
                  title={field.name}
                  params={
                    params[`cf[${field.field_id}]`]
                      ? params[`cf[${field.field_id}]`]
                      : false
                  }
                  field_id={field.field_id}
                  handleFieldsValue={handleFieldsValue}
                />
              )
          )}
      </View>
    </View>
  );
};

export default Fields;
