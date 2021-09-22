import { Component } from 'react';

import { Space } from '../../model/Space';
import { DataService } from '../../services/DataService';
import { SpaceComponent } from './SpaceComponent';

interface SpacesState {
  spaces: Space[];
}

interface SpacesProps {
  dataService: DataService;
}

export class Spaces extends Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);

    this.state = {
      spaces: [],
    };

    this.reserveSpace = this.reserveSpace.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();

    this.setState({
      spaces,
    });
  }

  private async reserveSpace(spaceId: string) {}

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
  }

  render() {
    return (
      <div>
        <h2>Our Spaces</h2>
        {this.renderSpaces()}
      </div>
    );
  }
}
