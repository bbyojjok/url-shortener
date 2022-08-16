import styled from 'styled-components';

const DocsBlock = styled.div`
  --borderColor: #999;
  h2 {
    margin-top: 40px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    border-top: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);

    &:first-child {
      margin-top: 10px;
    }
  }
`;

const DocsSectionBlock = styled.div`
  --borderColor: #ddd;

  padding: 0 20px;
  margin-top: 25px;

  h3 {
    padding: 0 0 10px 0;
    font-size: 14px;
  }

  .table-box {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    table {
      width: 100%;
      font-size: 12px;
      line-height: 1.4;
      border-bottom: 1px solid var(--borderColor);

      th,
      td {
        padding: 10px;
        border-top: 1px solid var(--borderColor);
      }
      th {
        text-align: left;
        font-weight: 400;
        background-color: #f3f3f3;
      }
    }
  }
`;

const Docs = () => {
  const domainUrl = window.location.origin;
  const preCode = {
    data: `
    {
      "originalUrl": "https://example.com"
    }
    `,
    return: `
    [
      {
        "_id": "62baad2ae4a2b7b1309f640d",
        "originalUrl": "https://example.com",
        "urlCode": "Q50Ug2xish",
        "shortUrl": "${domainUrl}/Q50Ug2xish",
        "count": 0,
        "createdAt": "2022-07-22T02:12:16.808+00:00",
        "qrCode": svg tag
      }
    ]
    `,
  };

  return (
    <DocsBlock>
      <h2>List shorten url</h2>
      <DocsSectionBlock>
        <h3>HTTP GET</h3>
        <div className="table-box">
          <table>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="location">{domainUrl}</span>/api/url
                </td>
                <td>Used to list and search through out all the available shorten url</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSectionBlock>
      <DocsSectionBlock>
        <h3>Endpoint Parameters</h3>
        <div className="table-box">
          <table>
            <colgroup>
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Required</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sort_by</td>
                <td>X</td>
                <td>String(count)</td>
                <td>Null</td>
                <td>Sorts the results by choosen value</td>
              </tr>
              <tr>
                <td>limit</td>
                <td>X</td>
                <td>Integer</td>
                <td>20</td>
                <td>The limit of results per page that has been set</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSectionBlock>

      <h2>Create shorten url</h2>
      <DocsSectionBlock>
        <h3>HTTP POST</h3>
        <div className="table-box">
          <table>
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="location">{domainUrl}</span>/api/url
                </td>
                <td>Create shorten url</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSectionBlock>
      <DocsSectionBlock>
        <h3>Example</h3>
        <div className="table-box">
          <table>
            <colgroup>
              <col width="20%" />
              <col width="40%" />
              <col width="40%" />
            </colgroup>
            <thead>
              <tr>
                <th>Type</th>
                <th>Data</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Body
                  <br />
                  JSON(application/json)
                </td>
                <td>
                  <pre>{preCode.data}</pre>
                </td>
                <td>
                  <pre>{preCode.return}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSectionBlock>
    </DocsBlock>
  );
};

export default Docs;
