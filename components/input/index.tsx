import { InputProps } from './props';
import * as S from './styles';

export default function Input({ ...props }: InputProps) {
  return (
    <S.Input
      {...props}
    />
  );
}