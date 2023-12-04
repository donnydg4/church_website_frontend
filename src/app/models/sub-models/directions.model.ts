import {AddressModel} from "./address.model";

export interface DirectionsModel {
  title: string;
  imageUrl: string;
  address: AddressModel;
}
