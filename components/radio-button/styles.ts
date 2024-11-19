import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  option: {
    width: width * 0.9,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
  },
  unselected: {
    color: 'black',
    margin: 5,
  },
  selected: {
    borderColor: '#996DFF',
    color: '#996DFF',
    margin: 6,
    padding: 10,
  },
  selectedText: {
    color: '#996DFF',
  },
  unselectedText: {
    color: 'black',
  },
});
export default styles;