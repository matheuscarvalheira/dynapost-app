import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import * as S from './styles';
import { RadioButtonProps } from './props';

export default function RadioButton({ options, checkbox, groupName, required}: RadioButtonProps) {
	const [selected, setSelected] = useState<string | string[]>(checkbox ? [] : '');

	const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target
        if (!checkbox) return setSelected(value)

		setSelected((prev) => {
			if (Array.isArray(prev)) {
				if (checked) {
					return [...prev, value];
				}
				return prev.filter((option) => option !== value);
			}
			return prev;
		});
	};
  
	const isChecked = (value: string) => {
        if (checkbox && Array.isArray(selected)) {
            return selected.includes(value);
        }
        return selected === value;
    };

  return (
    <View>
      {options?.length > 0 && options.map((option) => (
		<Pressable
		key={option.value}
		style={[styles.option, isChecked(option.value) ? styles.selected : styles.unselected]}
		onPress={() => handleOptionChange({ target: { value: option.value, checked: !isChecked(option.value) } } as React.ChangeEvent<HTMLInputElement>)}
		>
		<Text style={isChecked(option.value) ? styles.selectedText : styles.unselectedText }>{option.value}</Text>
        </Pressable>
	  ))}
    </View>
  );
}

	// <RadioButton
	// options={options}
	// groupName="exampleGroup"
	// required={true}
	// checkbox
	// />

	// const options = [
	// 	{ value: 'Javascript' },
	// 	{ value: 'AWS' },
	// 	{ value: 'Typescript' },
	//   ];
	
	//   const handleOptionChange = (value: string) => {
	// 	console.log('Selected option:', value);
	//   };