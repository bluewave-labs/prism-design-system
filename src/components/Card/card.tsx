'use client';
import { CardProps } from '../../types/card';
import { CardProvider, Card as UICard } from '../ui/card';

export const Card = (props: CardProps) => {
  return (
    <CardProvider>
      <UICard {...props} />
    </CardProvider>
  );
};

export default Card;
