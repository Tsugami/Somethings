import styled from 'styled-components'

const DarkCyan = 'hsl(185, 75%, 39%)'
const DarkGray = 'hsl(0, 0%, 59%)'

const fontSize = '18px'
const fontFamily = 'Kumbh Sans'

export const Container = styled.main`
  background-color: ${DarkCyan};
  background-image: url('/2-profile-card-component/bg-pattern-top.svg'),
    url('/2-profile-card-component/bg-pattern-bottom.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: right 45vw bottom 45vh, left 45vw top 45vh;
  font-size: ${fontSize};
  font-family: ${fontFamily};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background-image: url('/2-profile-card-component/bg-pattern-card.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 10px;
  height: 360px;
  width: 320px;
  box-shadow: 0px 0px 29px -10px rgba(0, 0, 0, 0.86);
  display: grid;
  align-items: end;
`

export const CardBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

interface AvatarProps {
  src: string
}

export const CardAvatar = styled.img<AvatarProps>`
  border-radius: 50%;
  border: 4px #fff solid;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${fontSize};
  margin: 10px;
`

export const Span = styled.span`
  color: ${DarkGray};
  font-weight: 400;
`

export const SocialCount = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  justify-content: space-between;
`

export const CardBottom = styled.div`
  border-top: 1px lightgray solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
