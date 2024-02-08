import styled from 'styled-components'

interface ButtonProps {
    variant?: string
}

export const Button : ButtonProps = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  background-color: #0267ff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #67a4ff;
  }
  &:active {
    background-color: #0252cc;
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: ${({variant}) => (variant === 'plain' ? '1px solid #a6a6ab' : 'none')};
  color: #333441;
  &:hover {
    background-color: #e9e9ea;
  }
  &:active {
    background-color: #a6a6ab;
  }
`

export const ErrorButton = styled(Button)<ButtonProps>`
  background-color: #ff0000;
  &:hover {
    background-color: #ff6666;
  }
  &:active {
    background-color: #cc0000;
  }
`
