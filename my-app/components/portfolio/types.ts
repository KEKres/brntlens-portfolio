export type MediaCard = {
  kind: "media";
  tone?: "deep" | "deeper";
  label: string;
  ratio: string;
  play?: boolean;
  src?: string;
  type?: "video" | "image";
  /** Still frame shown before a video loads; also what non-focal cards display. */
  poster?: string;
  /** How media fills the card: images default to "contain" (whole picture
   *  visible), videos to "cover" (fill the card, cropping if needed). */
  fit?: "contain" | "cover";
};

export type DetailCard = {
  kind: "detail";
  head: [string, string];
  desc: string;
  stats: { num: string; k: string }[];
  link: string;
};

export type Card = MediaCard | DetailCard;

export type Project = {
  name: [string, string];
  meta: string;
  cards: Card[];
  caption: [string, string];
  year: string;
};
