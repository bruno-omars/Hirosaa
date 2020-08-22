import Me from '../../domain/Me';

export default interface MeRepository {
  setMe(me: any): Me;
}