import * as React from 'react';
import { GamesQueryParams } from '@game-store-monorepo/data-access';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/Button';
import Section from 'src/components/Section';
import { ROUTES } from 'src/routes/routes';
import GameCarousel from 'src/components/common/GameCarousel';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 6,
    dates: '1990-01-01,2020-12-31',
    ordering: '-added',
  },
};

const BestGames: React.FC = () => {
  const { push } = useHistory();
  const onSeeAllButtonClick = () => {
    const queryString = new URLSearchParams({
      dates: '1990-01-01,2020-12-31',
      ordering: '-added',
    }).toString();
    push(`${ROUTES.GAMES}?${queryString}`);
  };

  return (
    <Section
      titleText="Best Of All Time"
      className="mb-6"
      rightElement={
        <Button variant="primary" size="extra-small" isLink onClick={onSeeAllButtonClick}>
          See all
        </Button>
      }
    >
      <GameCarousel queryParams={queryParams} isCompact itemClassName="w-2/3" />
    </Section>
  );
};

export default BestGames;
