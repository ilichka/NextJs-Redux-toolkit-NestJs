import styled from 'styled-components';

export const TableWrapper = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #b7b7b7;
`;

export const TableHeader = styled.thead`
  background-color: #b7b7b7;
`;

export const StyledTbody = styled.tbody``;

export const StyledTR = styled.tr`
  border-bottom: 1px solid #b7b7b7;
`;

export const StyledTD = styled.td`
  padding: 10px;
`;

export const StyledTH = styled.th<{ sorting?: boolean }>`
  padding: 10px;
  cursor: ${({ sorting }) => (sorting ? 'pointer' : 'not-allowed')};
  text-align: start;
`;
