import {About} from "./about.model";
import {History} from "./history.model";
import {Belief} from "./belief.model";

export interface OurChurchModel {
  coverPhoto: string;
  title: string;
  history: History;
  about: About;
  beliefs: Belief;
}
