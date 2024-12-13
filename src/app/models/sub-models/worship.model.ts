import {Audio} from "./audio.model";

export interface WorshipPageModel {
  videoUrl: string;
  worshipPageTitle: string;
  videoTitle: string;
  audioTitle: string;
  audioImg: string;
  audioFiles: Audio[];
  musicVideosImageUrls: string[];
}
