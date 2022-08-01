import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatFindBox from '../components/stat/StatFindBox';
import StatResultBox from '../components/stat/StatResultBox';
import { findUrl, unloadFind } from '../modules/stat';
import { RootState } from '../modules/stat';

const StatContainer = () => {
  const [error, setError] = useState<string | null>(null);
  const [findInput, setFindInput] = useState<string>('');
  const dispatch = useDispatch();
  const { stat, statError } = useSelector(({ stat }: RootState) => ({
    stat: stat.stat,
    statError: stat.statError,
  }));

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

  // statError 처리
  useEffect(() => {
    if (statError?.response.status === 404) {
      setError('Error: Invalid shortCode');
    }
  }, [statError]);

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
