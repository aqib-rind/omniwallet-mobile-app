import React from 'react';
import { Image, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { vh } from 'react-native-css-vh-vw';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

interface ImagePickerProps {
  onFileSelected: (fileName: string) => void;
  selectedFileName: string | null;
  text: string;
  props?: any;
}
interface MultiImagePickerProps {
  onFileSelected: (fileName: string) => void;
  selectedFileName: string | null;
  text: string;
}

const ImagePicker = ({ onFileSelected, selectedFileName, text,props }: ImagePickerProps) => {
  const selectDoc = async () => {
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        presentationStyle: 'formSheet',
      });

      if (result.length > 0) {
        const uriParts = result[0].uri.split('/');
        const fileName = uriParts[uriParts.length - 1];
        onFileSelected(fileName); // Call the callback function with the selected file name
        console.log(result);
      } else {
        console.log('Document picking cancelled');
      }
    } catch (err) {
      console.log('Error while picking the document:', err);
    }
  };

  return (
      <TouchableOpacity style={styles.picker} onPress={selectDoc}>
          <Text style={[selectedFileName ? styles.pickerText : {color:'#afafaf'}]}>{text}</Text>
          <Image source={require('../assets/camera.png')}  style={styles.Icon}/>
      </TouchableOpacity>
  );
}
export default ImagePicker;
const MultiImagePicker = ({ onFileSelected, selectedFileName, text }: MultiImagePickerProps) =>{
  const selectDoc = async () => {
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
        presentationStyle: 'formSheet',
      });

      if (result.length > 0) {
        const uriParts = result[0].uri.split('/');
        const fileName = uriParts[uriParts.length - 1];
        onFileSelected(fileName); // Call the callback function with the selected file name
        console.log(result);
      } else {
        console.log('Document picking cancelled');
      }
    } catch (err) {
      console.log('Error while picking the document:', err);
    }
  };

  return (
      <TouchableOpacity style={styles.picker} onPress={selectDoc}>
          <Text style={[selectedFileName ? styles.pickerSelectText:styles.pickerText]}>{selectedFileName ? 'Uploaded':text}</Text>
          <Image source={require('../assets/camera.png')}  style={[selectedFileName ? {tintColor:'transparent'}:styles.Icon]}/>
      </TouchableOpacity>
  );
}
export {MultiImagePicker};


const styles = StyleSheet.create({
  picker: {
    width: '100%',
    height: vh(6),
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    elevation: 5,
  },
  pickerText: {
    color: '#afafaf',
    fontFamily: 'Poppins-Regular',
    fontSize: vh(2),
  },
  pickerSelectText: {
    color: '#353535',
    fontFamily: 'Poppins-Regular',
    fontSize: vh(2),
  },
  pickerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 'auto',
  },
  Icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#afafaf',
  },
});
