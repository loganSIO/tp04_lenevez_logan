export class User {

  constructor(
    public civility: string = '',
    public surname: string = '',
    public name: string = '',
    public email: string = '',
    public username: string = '',
    public password: string = '',
    public passwordConfirm: string = '',
    public address: string = '',
    public postalCode: string = '',
    public city: string = '',
    public country: string = '',
    public phone: string = ''
  ) { }

  reset() {
    this.civility = '';
    this.surname = '';
    this.name = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.passwordConfirm = '';
    this.address = '';
    this.postalCode = '';
    this.city = '';
    this.country = '';
    this.phone = '';
  }

}