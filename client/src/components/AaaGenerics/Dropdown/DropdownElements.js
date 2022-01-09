import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  position: relative;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

export const DropDownListContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index:1000;
`;

export const DropDownList = styled.div`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 5px;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.div`
  list-style: none;
  margin: 0.8em;
  cursor: pointer;
  border: thin solid black;
`;