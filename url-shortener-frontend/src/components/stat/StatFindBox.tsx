import styled from 'styled-components';
import Button from '../Button';
import InputBox from '../InputBox';

const StatFindBoxBlock = styled.div`
  text-align: center;

  span {
    font-size: 14px;
  }
`;

const ButtonBoxBlock = styled(Button)`
  margin-top: 15px;
`;

type StatFindBoxProps = {
  error?: string | null;
  findInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFind?: () => void;
};

const StatFindBox: React.FC<StatFindBoxProps> = ({
  error,
  findInput,
  onChange,
  onKeyDown,
  onFind,
}) => {
  return (
    <StatFindBoxBlock>
      <div>
        <span>{window.location.origin}</span>
        <InputBox
          error={error}
          value={findInput}
          placeholder="shortCode"
          inline
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <ButtonBoxBlock fullWidth onClick={onFind} maxWidth={400}>
        Find
      </ButtonBoxBlock>
    </StatFindBoxBlock>
  );
};

export default StatFindBox;
