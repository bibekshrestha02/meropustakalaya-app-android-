import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PDFViewer from 'rn-pdf-reader-js';
import { Url } from '../../utils/GlobalVariables';

const FileViewerScreen = ({ navigation, route }) => {
  return (
    <WebView
      source={{
        uri: `https://reactnativemaster.com/wp-content/uploads/2020/02/React-native-document-viewer-pdf-sample.pdf`,
      }}
      style={styles.container}
    />
  );
};

export default FileViewerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 200,
  },
});
