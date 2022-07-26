import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { findUrl, unloadFind } from '../modules/stat';
import { RootState } from '../modules/stat';

const StatContainerBlock = styled.div``;

const StatContainer = () => {
  const [findInput, setFindInput] = useState<string>('');
  const dispatch = useDispatch();
  const stat = useSelector((state: RootState) => state.stat.stat);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindInput(e.target.value);
  };

  const onFind = () => {
    dispatch(findUrl(findInput));
  };

  useEffect(() => {
    return () => {
      dispatch(unloadFind());
    };
  }, [dispatch]);

  return (
    <StatContainerBlock>
      <span>http://localhost:4000/</span>
      <input value={findInput} onChange={onChange} />
      <Button onClick={onFind}>Find</Button>

      <div>
        [TODO] 스탯 페이지는 단축url로 생성된 코드값을 넣으면 생성일, 조회수, origianl url, short
        url 등등 정보 가져오기
      </div>
      {stat && (
        <ul>
          <li>count: {stat.count}</li>
          <li>createdAt: {stat.createdAt}</li>
          <li>originalUrl: {stat.originalUrl}</li>
          <li>shortUrl: {stat.shortUrl}</li>
          <li>urlCode: {stat.urlCode}</li>
        </ul>
      )}
    </StatContainerBlock>
  );
};

export default StatContainer;
