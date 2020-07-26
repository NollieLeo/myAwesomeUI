import styled from 'styled-components';


const MasonryContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    column-count: ${(props: any) => props.columns || 'auto'};
    column-width: 40%;
    column-gap: 4%;
`;

const MasonryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 10px;
  background: #fff;
`;


export {
  MasonryContainer, MasonryItem,
}