import Me from '../domain/Me';
import MeUseCase from '../interface/useCase/MeUseCase';
import MeRepository from '../interface/repository/MeRepository';

export default class MeUseCaseImpl implements MeUseCase {
  readonly meRepository: MeRepository;

  constructor (respository: MeRepository) {
    this.meRepository = respository;
  }

  setMe(me: any): Me {
    return this.meRepository.setMe(me);
  }
}