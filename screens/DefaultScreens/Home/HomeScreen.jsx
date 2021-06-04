import React from 'react';
import Axios from '../../../utils/Axios';
import CarouselComponent from './components/CarouselComponent';
import Title from '../../../widgets/Title';
import BookCardTempelete from '../../../templetes/BookCardTempelete';
import useFetchApi from '../../../customHooks/useFetchApiHooks';
import Loading from '../../../components/LoadingComponent';
import {
  FETCH_ERROR,
  FETCHING,
} from '../../../store/constant/fetchReducerConstant';
import ErrorComponent from '../../../components/ErrorComponent';

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
  if (status === FETCHING || status === 'idle') {
    return <Loading />;
  }
  if (status === FETCH_ERROR) {
    return <ErrorComponent retryHandler={fetchDataHandler} />;
  }
  return (
    <>
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
    </>
  );
};

export default HomeScreen;
