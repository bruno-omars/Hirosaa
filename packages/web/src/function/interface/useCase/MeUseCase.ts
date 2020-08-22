import Me from '../../domain/Me';

export default interface MeUseCase {
  setMe(me: any): Me;
}