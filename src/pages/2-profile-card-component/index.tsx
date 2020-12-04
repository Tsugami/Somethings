import React from 'react'
import Head from 'next/head'
import {
  Container,
  Card as CardStyle,
  CardBottom,
  CardBody,
  CardAvatar,
  Title,
  Span,
  SocialCount
} from '../../styles/pages/2-profile-card-component/styles'

import FavIcon from './assets/favicon-32x32.png'
import ImageVictor from './assets/image-victor.jpg'

interface CardProps {
  avatar: string
  username: string
  location: string
  id: number
  followers: string
  likes: string
  photos: string
}

const Card: React.FC<CardProps> = ({
  avatar,
  username,
  location,
  id,
  followers,
  likes,
  photos
}) => {
  return (
    <CardStyle>
      <CardBody>
        <CardAvatar src={avatar} />
        <Title>
          {username} <Span>{id}</Span>
        </Title>
        <Span>{location}</Span>
      </CardBody>
      <CardBottom>
        <SocialCount>
          <Title>{followers}</Title>
          <Span>Followers</Span>
        </SocialCount>
        <SocialCount>
          <Title>{likes}</Title>
          <Span>Likes</Span>
        </SocialCount>
        <SocialCount>
          <Title>{photos}</Title>
          <Span>Photos</Span>
        </SocialCount>
      </CardBottom>
    </CardStyle>
  )
}

const ProfileCardComponent: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Frontend Mentor | Profile card component</title>
        <link rel="icon" type="image/png" sizes="32x32" href={FavIcon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Card
        avatar={ImageVictor}
        username="Victor Crest"
        id={26}
        followers="80K"
        likes="803K"
        photos="1.4K"
        location="London"
      />
    </Container>
  )
}

export default ProfileCardComponent
