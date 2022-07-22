import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { createUrl, unloadUrl } from '../modules/url';
import { RootState } from '../modules/url';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const InputBlock = styled.div`
  box-sizing: border-box;
  margin: 0 0 15px 0;
  border: 1px solid #333;
  border-radius: 4px;

  input {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #666;
    border: 0;
    border-radius: 4px;
  }
`;

const CreatedUrlBlock = styled.div`
  padding: 30px 0;
  text-align: center;
  animation-name: smooth;
  animation-duration: 0.3s;
  animation-iteration-count: 1;

  @keyframes smooth {
    0% {
      opacity: 0;
      transform: translateY(-5%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .short-url {
    display: inline-block;
    padding: 5px;
    margin-right: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #112d4e;
    -webkit-transition: color 1s;
    -moz-transition: color 1s;
    transition: color 1s;
    span {
      display: inline-block;
      padding: 2px;
      word-break: break-all;
    }
    &:after {
      content: '';
      display: block;
      margin-top: 2px;
      width: 0px;
      height: 1px;
      background-color: #006dc9;
    }

    &.copied:after {
      width: 100%;
      animation-name: drawline;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
    }

    @keyframes drawline {
      0% {
        width: 0px;
      }
      100% {
        width: 100%;
      }
    }
  }

  .qr-code-box {
    max-width: 240px;
    margin: 0 auto;

    svg {
      fill: #112d4e;
      path:nth-child(1) {
        fill: #f9f7f7;
      }
      path:nth-child(2) {
        stroke: #112d4e;
      }
    }
  }
`;

const ShortUrlContainer = () => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [copyShortUrl, setCopyShortUrl] = useState<{ value: string; copied: boolean }>({
    value: '',
    copied: false,
  });
  const dispatch = useDispatch();
  const url = useSelector((state: RootState) => state.url.shortUrl);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  };

  const onShorten = () => {
    setCopyShortUrl((state) => ({
      ...state,
      copied: false,
    }));
    dispatch(createUrl(urlInput));

    // TODO 예외처리
  };

  const onCopy = () => {
    setCopyShortUrl(() => ({
      value: url.shortUrl,
      copied: true,
    }));
  };

  useEffect(() => {
    return () => {
      console.log('컴포넌트 제거시 unloadUrl() 호출');
      dispatch(unloadUrl());
    };
  }, [dispatch]);

  useEffect(() => {
    console.log('copyShortUrl.copied:', copyShortUrl.copied);
  }, [copyShortUrl]);

  return (
    <>
      [TODO] 로딩처리, 유효성검사 및 에러안내, 인풋에 엔터 적용
      <InputBlock>
        <input
          type="text"
          onChange={onChange}
          value={urlInput}
          placeholder="Paste link or url to input"
          autoComplete="off"
        />
      </InputBlock>
      <Button fullWidth onClick={onShorten}>
        Shorten
      </Button>
      {url && (
        <CreatedUrlBlock>
          <a
            className={`short-url ${copyShortUrl.copied && 'copied'}`}
            href={url.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{url.shortUrl}</span>
          </a>
          <CopyToClipboard text={url.shortUrl} onCopy={onCopy}>
            <Button>Copy</Button>
          </CopyToClipboard>
          <div className="qr-code-box" dangerouslySetInnerHTML={{ __html: url.qrCode }}></div>
        </CreatedUrlBlock>
      )}
    </>
  );
};

export default ShortUrlContainer;
