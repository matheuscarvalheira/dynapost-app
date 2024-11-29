import { theme } from '@/styles/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	padding: 16,
},
input: {
  width: '100%',
},
button: {
  flex: 1,
  padding: 10,
  marginHorizontal: 5,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 10,
  marginBottom: 5
},
orText: {
  marginTop: 10,
  color: theme.colors.blackRaisin
},
createAccountText: {
  marginTop: 10,
  fontSize: 15,
  color: theme.colors.violetsAreBlue,
  textDecorationLine: 'underline'
}
});

export default styles;