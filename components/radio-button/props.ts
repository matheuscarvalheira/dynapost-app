export interface Option {
  value: string;
}

export interface RadioButtonProps {
  options: Option[]
  groupName?: string
  required?: boolean
  checkbox?: boolean
}