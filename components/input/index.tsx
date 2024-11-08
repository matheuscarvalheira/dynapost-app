import { InputProps } from './props';
import * as S from './styles';

export default function Input({ label, ...props }: InputProps) {
  return (
    <S.Input
      placeholder={label}
      {...props}
    />
  );
}