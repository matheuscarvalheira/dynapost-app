import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
  },
  unselected: {
    color: 'black',
    margin: 5,
  },
  selected: {
    borderColor: '#996DFF',
    color: '#996DFF',
    margin: 5,
  },
  selectedText: {
    color: '#996DFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  unselectedText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default styles;