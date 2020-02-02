import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';
import { StoreState } from '../../redux/rootReducer';
import { Section } from '../../types';

interface DirectoryProps extends DirectoryState {}

interface DirectoryState {
  sections: Section[];
}

const Directory = ({ sections }: DirectoryProps) => (
  <div className="directory-menu">
    {sections.map(
      (section: Section): JSX.Element => (
        <MenuItem key={section.id} {...section} />
      )
    )}
  </div>
);

const mapStateToProps = (state: StoreState): DirectoryState => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
