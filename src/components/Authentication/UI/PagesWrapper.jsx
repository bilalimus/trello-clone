import styled from "styled-components";

const PagesWrapper = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default PagesWrapper;

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`