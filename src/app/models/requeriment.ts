import { Product } from './product';
import { TypeRequeriment } from "./type-requeriment";

export class Requeriment {
  id: string = '';
  type_requeriment: TypeRequeriment = new TypeRequeriment;
  name: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';
  product: Product = new Product;
  description: string = '';
  plate: string = '';
  authorizate_data: string = '';
}
