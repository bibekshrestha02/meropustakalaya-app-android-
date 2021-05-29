import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PDFViewer from 'rn-pdf-reader-js';
import { useSelector } from 'react-redux';
import { Url } from '../../../utils/GlobalVariables';
import FileLoadingComponent from './component/FileLoadingComponent';
const FileViewerScreen = ({ navigation, route }) => {
  const { name, file } = route.params;
  const token = useSelector((state) => state.client.token);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);

  const filePath = Url + 'api/v1/' + file;
  const source = {
    uri: filePath,
    headers: {
      'x-auth-token': token,
    },
  };
  return (
    <PDFViewer
      source={source}
      style={styles.container}
      withScroll={true}
      noLoader={false}
      maximumPinchZoomScale={2}
      withPinchZoom={true}
      onError={(err) => {
        console.log('error occures');
      }}
      webviewProps={{
        startInLoadingState: true,
        containerStyle: { flex: 1 },
        renderLoading: () => {
          return <FileLoadingComponent />;
        },
      }}
    />
  );
};

export default FileViewerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
