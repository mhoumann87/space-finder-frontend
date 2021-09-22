import { Component } from 'react';

import { Space } from '../../model/Space';
import { DataService } from '../../services/DataService';
import { SpaceComponent } from './SpaceComponent';
import { ConfirmModal } from './ConfirmModal';

import './Spaces.css';

interface SpacesState {
  spaces: Space[];
  showModal: boolean;
  modalContent: string;
}

interface SpacesProps {
  dataService: DataService;
}

export class Spaces extends Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);

    this.state = {
      spaces: [],
      showModal: false,
      modalContent: '',
    };

    this.reserveSpace = this.reserveSpace.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();

    this.setState({
      spaces,
    });
  }

  private async reserveSpace(spaceId: string) {
    const reservationResult = await this.props.dataService.reserveSpace(
      spaceId
    );

    if (reservationResult) {
      this.setState({
        showModal: true,
        modalContent: `You reserved the space with id ${spaceId}, and you got the reservation with reservation number ${reservationResult}`,
      });
    } else {
      this.setState({
        showModal: true,
        modalContent: `The space with id number ${spaceId} is not available right now`,
      });
    }
  }

  private renderSpaces() {
    const rows: any[] = [];

    for (const space of this.state.spaces) {
      rows.push(
        <SpaceComponent
          location={space.location}
          spaceId={space.spaceId}
          name={space.name}
          reserveSpace={this.reserveSpace}
        />
      );
    }
    return rows;
  }

  private closeModal() {
    this.setState({
      showModal: false,
      modalContent: '',
    });
  }

  render() {
    return (
      <div className='spaces'>
        <h2>Our Spaces</h2>
        <div className='spaces__grid'>{this.renderSpaces()}</div>
        <ConfirmModal
          close={this.closeModal}
          content={this.state.modalContent}
          show={this.state.showModal}
        />
      </div>
    );
  }
}
