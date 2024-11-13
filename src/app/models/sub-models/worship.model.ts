import {Audio} from "./audio.model";

export interface WorshipModel {
  videoUrl: string;
  titleArr: string[];
  audioFile: Audio[];
  musicVideosUrls: string[];
}
