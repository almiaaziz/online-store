export default class Product {
  id!: number;
  code: string;
  name: string;
  price: number;
  quantity: number;
  image: string;

  constructor(
  code: string,
  name: string,
  price: number,
  quantity: number,
  image:string = '../../assets/images/no-image.png' 
  ){
    this.code=code;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.image=image
  }
}
