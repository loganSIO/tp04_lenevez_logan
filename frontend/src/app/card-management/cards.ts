export class Card {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public ccv: string,
    public expiration: string
  ) {}
}