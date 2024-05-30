import styled from 'styled-components';

const StyledSharedUiForm = styled.div`
  color: pink;
`;

export function SharedUiForm() {
  return (
    <StyledSharedUiForm>
      <h1>Welcome to SharedUiForm!</h1>
    </StyledSharedUiForm>
  );
}

export default SharedUiForm;
