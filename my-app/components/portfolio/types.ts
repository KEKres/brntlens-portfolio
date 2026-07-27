export type MediaCard = {
  kind: "media";
  tone?: "deep" | "deeper";
  label: string;
  ratio: string;
  play?: boolean;
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
