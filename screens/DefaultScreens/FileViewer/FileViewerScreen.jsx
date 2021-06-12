import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import PDFViewer from 'rn-pdf-reader-js';
import FileLoadingComponent from './component/FileLoadingComponent';
import useFetchApi from '../../../customHooks/useFetchApiHooks';
import Axios from '../../../utils/Axios';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
const FileViewerScreen = ({ navigation, route }) => {
  const { name, id } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);
  const getFile = () => {
    return Axios.get(`/books/file/${id}`);
  };
  const {
    state: { data, status },
    fetchDataHandler,
  } = useFetchApi(getFile());

  const source = {
    uri: status === 'FETCHED' ? data[0].file : '',
  };
  return (
    <FetchApiTemplete status={status} retryHandler={fetchDataHandler}>
      <PDFViewer
        source={source}
        style={styles.container}
        withScroll={true}
        noLoader={false}
        maximumPinchZoomScale={2}
        withPinchZoom={true}
        webviewProps={{
          startInLoadingState: true,
          containerStyle: { flex: 1 },
          renderLoading: () => {
            return <FileLoadingComponent />;
          },
        }}
      />
    </FetchApiTemplete>
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
