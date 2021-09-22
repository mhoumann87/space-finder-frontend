import { Space } from '../model/Space';

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];

    result.push({
      spaceId: 'NY345',
      name: 'Happy Garden',
      location: 'NYC Midtown',
    });
    result.push({
      spaceId: 'LD031',
      name: 'Back Side',
      location: 'London',
    });

    result.push({
      spaceId: 'CP869',
      name: 'Meat Packing',
      location: 'Vesterbro',
    });

    result.push({
      spaceId: 'BL225',
      name: 'Beer Garden',
      location: 'Alexander Platz',
    });

    result.push({
      spaceId: 'WI212',
      name: 'Vienna Cafe',
      location: 'Midtown',
    });

    return result;
  }
}
