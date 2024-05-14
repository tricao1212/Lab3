import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    margin : 5
  },
  addContainer : {
    flex : 1,
    margin : 10,
  },

  block: {
    margin: 15,
    backgroundColor: '#DBDBDB',
    flexDirection: 'row',
  },
  img: {
    alignItems: 'center',
    width: '30%',
    paddingTop: 5,
  },
  content: {
    paddingBottom: 5,
    width: '70%',
    paddingRight: 5
  },
  tiny: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  discount: {
    color: 'green',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#21A2F5',
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  submitButton: {
    width : '100%',
    height: 50,
    backgroundColor: '#21A2F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  inputField : {
    backgroundColor: '#DBDBDB',
    width : 'auto',
  },
  card : {
    marginBottom: 10,
    marginTop : 10
  }
});
