import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CardComponent from './Components/CardComponent';
import Title from '../../../widgets/Title';
import Axios from '../../../utils/Axios';
import PaymentModel from './Components/PaymentModel';
import LoadingComponent from '../../../components/LoadingComponent';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeAction } from '../../../store/actions/ClientAction';
import TimerModalComponent from '../../../components/TimerModalComponent';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import useFetchApiHooks from '../../../customHooks/useFetchApiHooks';

const MembershipScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState({});
  const [isModal, setModal] = useState(false);
  const [isPaymentProcess, setPaymentProcess] = useState(false);
  const [isMessageModal, setMessageModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const isLogin = useSelector((state) => state.client.isVerfied);
  const {
    state: { status, data },
    fetchDataHandler,
  } = useFetchApiHooks(fetchPackages());
  const modalHanlder = () => {
    setModal((e) => !e);
  };
  function fetchPackages() {
    return Axios.get('/packages');
  }
  const selectCardHandler = (item) => {
    setSelectedCard(item);
    setModal(true);
  };
  const paymentModalHandler = (isSuccess) => {
    setPaymentStatus(isSuccess ? 'success' : 'failed');
    setMessageModal(true);
    setTimeout(() => {
      setMessageModal(false);
    }, 1500);
  };
  const paymentHandler = async () => {
    setPaymentProcess(true);
    try {
      if (!isLogin) {
        setSelectedCard({});
        setModal(false);
        setPaymentProcess(false);
        navigation.navigate('login');
        return;
      }
      await dispatch(subscribeAction(selectedCard._id));
      setModal(false);
      paymentModalHandler(true);
    } catch (error) {
      console.log(error.response);
      setModal(false);
      paymentModalHandler(false);
    }
    setPaymentProcess(false);
  };
  return (
    <FetchApiTemplete status={status} retryHandler={fetchDataHandler}>
      <FlatList
        ListHeaderComponent={
          <Title
            name='Get unlimited access to everything'
            textStyle={styles.titleText}
          />
        }
        data={data[0]}
        renderItem={({ item }) => {
          return (
            <CardComponent
              item={item}
              isSelected={selectedCard._id === item._id}
              selectCardHandler={selectCardHandler}
            />
          );
        }}
        keyExtractor={(items) => items._id}
      />
      <TimerModalComponent
        isVisible={isMessageModal}
        isSuccess={paymentStatus === 'success'}
        message={
          paymentStatus === 'success'
            ? 'Your transaction was successfull'
            : 'Your transaction was failed. Try again!'
        }
      />
      <LoadingComponent
        isVisible={isPaymentProcess}
        message={'processing...'}
      />
      <PaymentModel
        isVisible={isModal}
        item={selectedCard}
        modalHandler={modalHanlder}
        paymentHandler={paymentHandler}
      />
    </FetchApiTemplete>
  );
};

export default MembershipScreen;
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: 'Gentium',
    textAlign: 'center',
  },
});
