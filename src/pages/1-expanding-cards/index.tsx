import React, { useState } from 'react'
import Head from 'next/head'
import { Card, Title, Container } from '../../styles/pages/1-expandings-card/styles'

interface ExpadCardProps {
  imageURL: string
  onClick: () => unknown
  title: string
  action: boolean
}

const ExpadCard: React.FC<ExpadCardProps> = ({
  imageURL,
  onClick,
  title,
  action
}) => {
  return (
    <Card action={action} onClick={onClick} imageURL={imageURL}>
      <Title action={action}>{title}</Title>
    </Card>
  )
}

const ExpandingCards: React.FC = () => {
  const [action, setAction] = useState<number>(0)

  const items = [
    [
      'Explore The World',
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ],
    [
      'Wild Forest',
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ],
    [
      'Sunny Beach',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    ],
    [
      'City on Winter',
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
    ],
    [
      'Mountains - Clounds',
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ]
  ]
  return (
    <Container>
      <Head>
        <title>Expading Cards</title>
      </Head>
      {items.map(([title, imageURL], i) => (
        <ExpadCard
          onClick={() => setAction(i)}
          action={i === action}
          key={i}
          title={title}
          imageURL={imageURL}
        />
      ))}
    </Container>
  )
}

export default ExpandingCards
