export default class Me {
  readonly arrowedRoles: string[];
  readonly avatar: string;
  readonly email: string;
  readonly emailValified: boolean;
  readonly id: string;
  readonly name: string;

  constructor (
    arrowedRoles: string[],
    avatar: string,
    email: string,
    emailValified: boolean,
    id: string,
    name: string,
  ) {
    this.arrowedRoles = arrowedRoles;
    this.avatar = avatar;
    this.email = email;
    this.emailValified = emailValified;
    this.id = id;
    this.name = name;
  }
}