import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonList = props => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    top={36}
    viewBox="0 0 280 500"
    backgroundColor="#ffffffcc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="16" rx="5" ry="5" width="280" height="500" />
  </ContentLoader>
);

export { SkeletonList };
