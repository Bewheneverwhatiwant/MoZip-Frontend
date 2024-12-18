"use client"
import styled from 'styled-components';

const AddButtonContainer = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fff;
`;

const PlusIcon = styled.span`
  font-size: 48px;
  color: #363636;
`;

export default function AddClubButton() {
  return (
    <AddButtonContainer onClick={() => alert("동아리를 추가합니다.")}>
      <PlusIcon>+</PlusIcon>
    </AddButtonContainer>
  );
}