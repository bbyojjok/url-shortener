import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UrlCreateBox from '../components/url/UrlCreateBox';
import UrlResultBox from '../components/url/UrlResultBox';
import { createUrl, unloadUrl } from '../modules/url';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ShortUrlContainer = () => {
  const [error, setError] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState<string>('');
  const [copyShortUrl, setCopyShortUrl] = useState<{ value: string; copied: boolean }>({
    value: '',
    copied: false,
  });
  const dispatch = useDispatch();
  const { shortUrl, shortUrlError, loading } = useSelector(
    ({ url, loading }: { url: any; loading: any }) => ({
      shortUrl: url.shortUrl,
      shortUrlError: url.shortUrlError,
      loading: loading['url/CREATE_URL'],
    }),
  );

  const onShorten = useCallback(() => {
    if (urlInput === '') {
      setError('Error: Paste link or url to input');
      return;
    }

    setCopyShortUrl((state) => ({
      ...state,
      copied: false,
    }));
    dispatch(createUrl(urlInput));
  }, [dispatch, urlInput]);

  const onCopy = useCallback(() => {
    setCopyShortUrl(() => ({
      value: shortUrl.shortUrl,
      copied: true,
    }));
  }, [shortUrl]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onShorten();
      }
    },
    [onShorten],
  );

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
    if (shortUrlError?.response.status === 400) {
      setError('Error: Invalid url');
    }
  }, [shortUrlError]);

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
      <UrlCreateBox
        error={error}
        urlInput={urlInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onShorten={onShorten}
      />
      {shortUrl && <UrlResultBox shortUrl={shortUrl} copyShortUrl={copyShortUrl} onCopy={onCopy} />}
    </>
  );
};

export default ShortUrlContainer;
