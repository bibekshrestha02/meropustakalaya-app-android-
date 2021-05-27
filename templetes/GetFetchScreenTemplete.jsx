import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';
const GetFetchScreenTemplete = ({ children, fetchURL }) => {
  const [isLoading, setLoading] = useState(true);

  const [res1Data, setRes1Data] = useState();
  const [res2Data, setRes2Data] = useState();

  const [errStatus, setErrorStatus] = useState(null);
  const fetchApi = async () => {
    try {
      setLoading(true);
      setErrorStatus(null);
      await Axios.all(fetchURL).then(
        Axios.spread(function (acct, perm) {
          setRes1Data(acct && acct.data.data);
          setRes2Data(perm && perm.data.data);
        })
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorStatus(500);
      console.log(error.response);
    }
  };
  useEffect(() => {
    if (fetchURL.length < 1) {
      setLoading(false);
      return;
    }
    fetchApi();
  }, []);
  let body;

  if (isLoading) {
    body = <LoadingComponent isVisible={isLoading} />;
  } else if (!isLoading && errStatus) {
    body = <ErrorComponent status={errStatus} retryHandler={fetchApi} />;
  } else {
    body = children(res1Data, res2Data, setRes1Data, setRes2Data);
  }
  return body;
};

export default GetFetchScreenTemplete;
