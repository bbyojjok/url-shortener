import styled from 'styled-components';
import Button from '../Button';
import InputBox from '../InputBox';

const ButtonBoxBlock = styled(Button)`
  margin-top: 15px;
`;

type UrlCreateBoxProps = {
  error?: string | null;
  urlInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onShorten?: () => void;
};
const UrlCreateBox = ({ error, urlInput, onChange, onKeyDown, onShorten }: UrlCreateBoxProps) => {
  return (
    <>
      <InputBox
        error={error}
        value={urlInput}
        placeholder="Paste link or url to input"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <ButtonBoxBlock fullWidth onClick={onShorten}>
        Shorten
      </ButtonBoxBlock>
    </>
  );
};

export default UrlCreateBox;
