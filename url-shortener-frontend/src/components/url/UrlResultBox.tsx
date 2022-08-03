import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../Button';
import { SmoothAnimation } from '../../style/common';

const UrlResultBoxBlock = styled.div`
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

type UrlResultBoxProps = {
  shortUrl?: any;
  copyShortUrl?: any;
  onCopy?: () => void;
};

const UrlResultBox = ({ shortUrl, copyShortUrl, onCopy }: UrlResultBoxProps) => {
  return (
    <UrlResultBoxBlock>
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
    </UrlResultBoxBlock>
  );
};

export default UrlResultBox;
