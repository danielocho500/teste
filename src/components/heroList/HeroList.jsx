import React from 'react';
import { HeroCard } from './HeroCard';

export const HeroList = React.memo(({heroes}) => {
    return( 
    <div className='results__grid'>
        {
            heroes.map((hero) => (
                <HeroCard
                    key={hero.id}
                    {...hero}
                />
            ))
        }
    </div>
  );
});
