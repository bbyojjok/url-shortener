import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { createUrl, unloadUrl } from '../modules/url';
import { RootState } from '../modules/url';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SmoothAnimation = css`
  animation-name: smooth;
  animation-duration: 0.2s;
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
`;

const InputBlock = styled.div`
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;
  transition: all 0.2s;

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

  &.error {
    border: 1px solid #ce2c2c;
  }
`;

const ErrorMessage = styled.div`
  color: #ce2c2c;
  font-size: 12px;
  padding: 5px 10px 15px;
  ${SmoothAnimation}
`;

const ButtonBoxBlock = styled(Button)`
  margin-top: 15px;
`;

const CreatedUrlBlock = styled.div`
  padding: 30px 0;
  text-align: center;
  ${SmoothAnimation}

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
  const [error, setError] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState<string>('');
  const [copyShortUrl, setCopyShortUrl] = useState<{ value: string; copied: boolean }>({
    value: '',
    copied: false,
  });
  const dispatch = useDispatch();
  const { shortUrl, shortUrlError } = useSelector(({ url }: RootState) => ({
    shortUrl: url.shortUrl,
    shortUrlError: url.shortUrlError,
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onShorten();
    }
  };

  const onShorten = () => {
    if (urlInput === '') {
      setError('Error: Paste link or url to input');
      return;
    }

    setCopyShortUrl((state) => ({
      ...state,
      copied: false,
    }));
    dispatch(createUrl(urlInput));
  };

  const onCopy = () => {
    setCopyShortUrl(() => ({
      value: shortUrl.shortUrl,
      copied: true,
    }));
  };

  // 페이지 떠날때 shortUrl 값 초기화
  useEffect(() => {
    return () => {
      dispatch(unloadUrl());
    };
  }, [dispatch]);

  // shortUrl이 있을 경우 error값에 null 대입
  useEffect(() => {
    if (shortUrl) {
      setError(null);
    }
  }, [shortUrl]);

  // shortUrlError 처리
  useEffect(() => {
    console.log('# shortUrlError:', shortUrlError);
    if (shortUrlError?.response.status === 400) {
      setError('Error: Invalid url');
    }
  }, [shortUrlError]);

  return (
    <>
      <InputBlock className={`${error && 'error'}`}>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={urlInput}
          placeholder="Paste link or url to input"
          autoComplete="off"
        />
      </InputBlock>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonBoxBlock fullWidth onClick={onShorten}>
        Shorten
      </ButtonBoxBlock>
      {shortUrl && (
        <CreatedUrlBlock>
          <a
            className={`short-url ${copyShortUrl.copied && 'copied'}`}
            href={shortUrl.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{shortUrl.shortUrl}</span>
          </a>
          <CopyToClipboard text={shortUrl.shortUrl} onCopy={onCopy}>
            <Button>Copy</Button>
          </CopyToClipboard>
          <div className="qr-code-box" dangerouslySetInnerHTML={{ __html: shortUrl.qrCode }}></div>
        </CreatedUrlBlock>
      )}
    </>
  );
};

export default ShortUrlContainer;
