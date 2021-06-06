import React from 'react';
import Axios from '../../../utils/Axios';
import CarouselComponent from './components/CarouselComponent';
import Title from '../../../widgets/Title';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
import useFetchApi from '../../../customHooks/useFetchApiHooks';

import { FETCHING } from '../../../store/constant/fetchReducerConstant';

import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
const HomeScreen = () => {
  const getCarousel = () => {
    return Axios.get('/carousels');
  };
  const getBooks = () => {
    return Axios.get('/books/shows/');
  };
  const {
    state: { data, status },
    fetchDataHandler,
  } = useFetchApi(getCarousel(), getBooks());

  return (
    <FetchApiTemplete status={status} retryHandler={fetchDataHandler}>
      <CarouselComponent
        name={data[0] && data[0].name}
        subDetail={data[0] && data[0].subDetail}
        detail={data[0] && data[0].detail}
        price={data[0] && data[0].price}
        priceLabel={data[0] && data[0].priceLabel}
      />
      <Title name='Top Rated and New Arrivals Books' />
      <BookCardTempelete
        data={data[1]}
        refreshing={status === FETCHING}
        onRefresh={fetchDataHandler}
        emptyMessage={'No Book Data found'}
      />
    </FetchApiTemplete>
  );
};

export default HomeScreen;
