import MeRepository from '../interface/repository/MeRepository';
import Me from '../domain/Me';

export default class MeRepositoryImpl implements MeRepository {
  setMe(me: any): Me {
    return new Me(
      me['https://hasura.io/jwt/claims']['x-hasura-allowed-role'],
      me.picture,
      me.email,
      me.email_verified,
      me['https://hasura.io/jwt/claims']['x-hasura-user-id'],
      me.nickname,
    )
  }

}