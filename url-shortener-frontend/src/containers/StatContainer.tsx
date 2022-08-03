import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatFindBox from '../components/stat/StatFindBox';
import StatResultBox from '../components/stat/StatResultBox';
import { findUrl, unloadFind } from '../modules/stat';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const StatContainer = () => {
  const [error, setError] = useState<string | null>(null);
  const [findInput, setFindInput] = useState<string>('');
  const dispatch = useDispatch();
  const { stat, statError, loading } = useSelector(
    ({ stat, loading }: { stat: any; loading: any }) => ({
      stat: stat.stat,
      statError: stat.statError,
      loading: loading['stat/FIND_URL'],
    }),
  );

  const onFind = useCallback(() => {
    if (findInput === '') {
      setError('Error: shortCode to input');
      return;
    }

    dispatch(findUrl(findInput));
  }, [findInput, dispatch]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFindInput(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onFind();
      }
    },
    [onFind],
  );

  // 페이지 떠날때 stat 값 초기화
  useEffect(() => {
    return () => {
      dispatch(unloadFind());
    };
  }, [dispatch]);

  // stat이 있을 경우 error값에 null 대입
  useEffect(() => {
    if (stat) {
      setError(null);
    }
  }, [stat]);

  // statError 처리
  useEffect(() => {
    if (statError?.response.status === 404) {
      setError('Error: Invalid shortCode');
    }
  }, [statError]);

  // 로딩처리
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    if (loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [loading]);

  return (
    <>
      <StatFindBox
        error={error}
        findInput={findInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFind={onFind}
      />
      {stat && (
        <StatResultBox
          createdAt={stat.createdAt}
          count={stat.count}
          shortUrl={stat.shortUrl}
          originalUrl={stat.originalUrl}
        />
      )}
    </>
  );
};

export default StatContainer;
