export interface Option {
  value: string;
}

export interface RadioButtonProps {
  options: Option[]
  groupName?: string
  checkbox?: boolean
  value?: string | string[],
  setFieldValue: (field: string, value: any) => void,
  name: string,
}