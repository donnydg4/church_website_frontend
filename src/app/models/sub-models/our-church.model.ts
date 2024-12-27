import {About} from "./about.model";
import {History} from "./history.model";

export interface OurChurchModel {
  coverPhoto: string;
  title: string;
  history: History;
  about: About;
}
