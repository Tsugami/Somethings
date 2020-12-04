import styled from 'styled-components'

interface ExpandProps {
  action: boolean
}

interface CardStyleProps extends ExpandProps {
  imageURL: string
}

export const Card = styled.div<CardStyleProps>`
  background-image: url(${props => props.imageURL});
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  flex: ${props => (props.action ? 5 : 0.5)};
  margin: 10px;
  cursor: pointer;
  transition: flex 0.7s ease-in;
`

export const Title = styled.h3<ExpandProps>`
  font-size: 24px;
  bottom: 20px;
  left: 20px;
  color: #fff;
  margin: 0;
  opacity: ${props => (props.action ? 1 : 0)};
  transition: ${props =>
    props.action ? 'opacity 0.3s ease-in 0.4s;' : 'none'};
`

export const Container = styled.div`
  align-items: center;
  font-family: 'Muli', sans-serif;
  display: flex;
  justify-content: center;
  margin: 50px;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 100vw;
    ${Card}:nth-of-type(4),
    ${Card}:nth-of-type(5) {
      display: none;
    }
  }
`
