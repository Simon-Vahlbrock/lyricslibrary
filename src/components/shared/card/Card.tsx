import React, {FC} from 'react';
import './card.scss';

interface CardProps {
    children:  React.ReactNode
}

const Card: FC<CardProps> = ({children}) => (
    <div className="card">
        {children}
    </div>
);

Card.displayName = 'Card';

export default Card
