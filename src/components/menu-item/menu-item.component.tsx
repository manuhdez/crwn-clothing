import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './menu-item.styles.scss';
import { Section } from '../../types';

interface MenuItemProps extends Section, RouteComponentProps {}

const menuItem = ({
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match
}: MenuItemProps) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
);

export default withRouter(menuItem);
