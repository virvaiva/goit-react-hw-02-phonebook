import styled from 'styled-components';

export const ListUl = styled.ul`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;
export const ListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  list-style-position: inside;
  width: 450px;
  padding: 20px;
`;
export const BtnDelete = styled.button`
  margin-left: 18px;
  font-size: 18px;
  cursor: pointer;
`;
