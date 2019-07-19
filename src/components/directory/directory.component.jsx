import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { sectionsData } from './directory.data';

import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sectionsData
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} />
        ))}
      </div>
    );
  }
}

export default Directory;
