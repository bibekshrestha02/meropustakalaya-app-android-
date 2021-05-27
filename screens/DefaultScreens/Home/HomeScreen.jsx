import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetFetchScreenTemplete from '../../../templetes/GetFetchScreenTemplete';
import Axios from '../../../utils/Axios';
import CarouselComponent from './components/CarouselComponent';
import Title from '../../../widgets/Title';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
const HomeScreen = () => {
  const getCarousel = () => {
    return Axios.get('/carousels');
  };
  const getBooks = () => {
    return Axios.get('/books/shows/');
  };
  return (
    <GetFetchScreenTemplete fetchURL={[getCarousel(), getBooks()]}>
      {(res1Data, res2Data) => {
        return (
          <>
            <CarouselComponent
              name={res1Data && res1Data.name}
              subDetail={res1Data && res1Data.subDetail}
              detail={res1Data && res1Data.detail}
              price={res1Data && res1Data.price}
              priceLabel={res1Data && res1Data.priceLabel}
            />
            <Title name='Top Rated and New Arrivals Books' />
            <BookCardTempelete data={res2Data && res2Data} />
          </>
        );
      }}
    </GetFetchScreenTemplete>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
