import styled from 'styled-components';

export const Posts = styled.section`
  margin-bottom: 50px;

  > article {
    border-bottom: var(--section_border);

    :last-child {
      border-bottom: none;
    }
  }
`;