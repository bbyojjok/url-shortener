import styled from 'styled-components';
import { SmoothAnimation } from '../../style/common';

const StatResultBoxBlock = styled.div`
  margin-top: 20px;
  padding: 30px 0;
  ${SmoothAnimation}

  table {
    table-layout: fixed;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;

    tbody {
      th {
        text-align: right;
        padding: 15px 10px;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid #ddd;
        border-left: 0;
        border-right: 0;
        background-color: #f3f3f3;
        word-break: break-all;
      }

      td {
        padding: 15px 10px;
        font-size: 13px;
        border: 1px solid #ddd;
        border-left: 0;
        border-right: 0;
        word-break: break-all;
      }
    }
  }
`;

type StatResultBoxProps = {
  createdAt: Date;
  count: string;
  shortUrl: string;
  originalUrl: string;
};

const StatResultBox = ({ createdAt, count, shortUrl, originalUrl }: StatResultBoxProps) => {
  return (
    <StatResultBoxBlock>
      <table>
        <colgroup>
          <col width="30%" />
          <col width="70%" />
        </colgroup>
        <tbody>
          <tr>
            <th>createdAt</th>
            <td>{new Date(createdAt).toLocaleString()}</td>
          </tr>
          <tr>
            <th>count</th>
            <td>{count}</td>
          </tr>
          <tr>
            <th>shortUrl</th>
            <td>
              <a href={shortUrl} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
            </td>
          </tr>
          <tr>
            <th>originalUrl</th>
            <td>
              <a href={originalUrl} target="_blank" rel="noreferrer">
                {originalUrl}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </StatResultBoxBlock>
  );
};

export default StatResultBox;
