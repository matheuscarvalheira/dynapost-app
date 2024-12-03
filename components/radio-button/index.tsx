import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { RadioButtonProps } from './props';

export default function RadioButton({
  options,
  checkbox = false,
  value,
  setFieldValue,
  name,
}: RadioButtonProps) {

  const isChecked = (optionValue: string) => {
    // For checkboxes, value should be an array
    if (checkbox && Array.isArray(value)) {
      return value.includes(optionValue); // Returns true if the option is selected
    }
    // For radio buttons (single selection)
    return value === optionValue;
  };

  const handleOptionChange = (optionValue: string) => {
    if (!checkbox) {
      setFieldValue(name, optionValue); // Set single value for radio button
    } else if (Array.isArray(value)) {
      const newValue = value.includes(optionValue)
        ? value.filter((item) => item !== optionValue) // Unselect if already selected
        : [...value, optionValue]; // Add if not selected
      setFieldValue(name, newValue); // Update multi-select array
    }
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {options?.length > 0 &&
        options.map((option) => (
          <Pressable
            key={option.value}
            style={[
              styles.option,
              isChecked(option.value) ? styles.selected : styles.unselected,
            ]}
            onPress={() => handleOptionChange(option.value)}
          >
            <Text
              style={
                isChecked(option.value)
                  ? styles.selectedText
                  : styles.unselectedText
              }
            >
              {option.value} {/* Use label if available */}
            </Text>
          </Pressable>
        ))}
    </View>
  );
}
