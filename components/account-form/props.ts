export interface SignUpFormProps {
  onSubmit: (values: { name: string; email: string; password: string }) => void;
}