export default class Product {
  id: number;
  code: string;
  name: string;
  price: number;
  quantity: number;
  image: string;

  constructor(
  id: number,
  code: string,
  name: string,
  price: number,
  quantity: number,
  image:string = '../../assets/images/no-image.png' 
  ){
    this.id=id;
    this.code=code;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.image=image
  }
}
