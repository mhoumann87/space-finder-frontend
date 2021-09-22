import { Component } from 'react';
import space from '../../assets/space.jpg';

import './SpaceComponent.css';

interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoURL?: string;
  reserveSpace: (spaceId: string) => void;
}

export class SpaceComponent extends Component<SpaceComponentProps> {
  render() {
    return (
      <div className='space__card'>
        {this.props.photoURL ? (
          <img
            src={this.props.photoURL}
            alt={this.props.name}
            className='space__card__img'
          />
        ) : (
          <img src={space} alt='Generic Space' className='space__card__img' />
        )}
        <div className='space__card--content'>
          <h3 className='space__card--title'>{this.props.name}</h3>
          <p className='space__card--id'>{this.props.spaceId}</p>
          <p className='space__card--location'>{this.props.location}</p>
          <button
            onClick={() => this.props.reserveSpace(this.props.spaceId)}
            className=' btn reserve-btn'>
            Reserve Now
          </button>
        </div>
      </div>
    );
  }
}
