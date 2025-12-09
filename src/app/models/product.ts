export default class Product {
  id!: number;
  code: string;
  name: string;
  price: number;
  quantity: number;
  image: string|undefined;

  constructor(
  code: string,
  name: string,
  price: number,
  quantity: number,
  image:string='/images/no-image.png'
  ){
    this.code=code;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.image=image
  }
}
