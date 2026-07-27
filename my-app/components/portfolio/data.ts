import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: ["Tonle", "Candles"],
    meta: "Launch film · Social package · Hospitality",
    cards: [
      { kind: "media", label: "Hero film, 60s", ratio: "16:9", play: true },
      {
        kind: "media",
        tone: "deep",
        label: "Cutdown, paid social",
        ratio: "9:16",
      },
      { kind: "media", tone: "deeper", label: "BTS stills set", ratio: "4:5" },
      {
        kind: "detail",
        head: ["One shoot day,", "live by opening night."],
        desc: "A launch film for a new taproom — one hero edit plus six vertical cutdowns built for paid social, delivered before opening weekend.",
        stats: [
          { num: "1+6", k: "Deliverables" },
          { num: "48h", k: "Turnaround" },
          { num: "210K", k: "Views, 30 days" },
        ],
        link: "Watch the film",
      },
    ],
    caption: [
      "Launch film and social package for a new Melbourne taproom.",
      "Direction, shoot, edit, colour, cutdowns",
    ],
    year: "2025",
  },
  {
    name: ["Apex Motorsport", "Series"],
    meta: "Season coverage · Same-day edits · Event",
    cards: [
      {
        kind: "media",
        tone: "deep",
        label: "Season highlights, 90s",
        ratio: "16:9",
        play: true,
      },
      { kind: "media", tone: "deeper", label: "Round 2 recap", ratio: "9:16" },
      { kind: "media", label: "Sponsor cut", ratio: "16:9" },
      {
        kind: "detail",
        head: ["Recaps dropped while the crowd", "was still buzzing."],
        desc: "Trackside coverage across a three-round series — same-day recap reels plus a season highlight film for sponsors.",
        stats: [
          { num: "3", k: "Rounds covered" },
          { num: "Same day", k: "Recap reels" },
          { num: "+38%", k: "Follower lift" },
        ],
        link: "Watch the season film",
      },
    ],
    caption: [
      "Season-long trackside content partner for a state motorsport series.",
      "Event coverage, same-day edits, sponsor deliverables",
    ],
    year: "2024–25",
  },
  {
    name: ["Tonle", "Candles"],
    meta: "Branding · Website Mockup · Product Photography",
    cards: [
      {
        kind: "media",
        tone: "deeper",
        label: "Trainer spotlight",
        ratio: "9:16",
        play: true,
      },
      { kind: "media", label: "Class energy reel", ratio: "9:16" },
      { kind: "media", tone: "deep", label: "Member story", ratio: "16:9" },
      {
        kind: "detail",
        head: ["A rolling", "content engine."],
        desc: "Twelve pieces a month across trainer spotlights, class energy and member stories. Consistent output, zero content droughts.",
        stats: [
          { num: "12", k: "Pieces / month" },
          { num: "14 mo", k: "Retainer running" },
          { num: "60+", k: "Leads attributed" },
        ],
        link: "See the feed",
      },
    ],
    caption: [
      "Monthly content retainer for a Brunswick gym.",
      "UGC-style content, trainer spotlights, member stories",
    ],
    year: "2025–",
  },
  {
    name: ["Solstice Coffee", "Roasters"],
    meta: "Product film · Stills · Food & beverage",
    cards: [
      { kind: "media", label: "Product film, 45s", ratio: "16:9", play: true },
      {
        kind: "media",
        tone: "deeper",
        label: "Pour sequence, macro",
        ratio: "4:5",
      },
      {
        kind: "media",
        tone: "deep",
        label: "Stills set, 24 frames",
        ratio: "4:5",
      },
      {
        kind: "detail",
        head: ["Steam, crema,", "texture."],
        desc: "A tactile, macro-heavy product film for a limited seasonal release — paired with a stills set for packaging and web.",
        stats: [
          { num: "45s", k: "Hero film" },
          { num: "24", k: "Stills delivered" },
          { num: "9 days", k: "To sell-out" },
        ],
        link: "Watch the film",
      },
    ],
    caption: [
      "Seasonal release product film and stills for packaging and web.",
      "Product film, macro work, stills",
    ],
    year: "2025",
  },
  {
    name: ["Harbour Lane", "Property"],
    meta: "Walkthrough · Aerial · Property",
    cards: [
      {
        kind: "media",
        tone: "deep",
        label: "Walkthrough, 2 min",
        ratio: "16:9",
        play: true,
      },
      { kind: "media", label: "Aerial pass", ratio: "16:9" },
      { kind: "media", tone: "deeper", label: "Golden hour set", ratio: "4:5" },
      {
        kind: "detail",
        head: ["Graded overnight,", "inbox by Monday."],
        desc: "A cinematic walkthrough and aerial package for a flagship development launch — shot at golden hour, delivered in 48 hours.",
        stats: [
          { num: "1+3", k: "Hero + cuts" },
          { num: "48h", k: "Turnaround" },
          { num: "40+", k: "Enquiries, week 1" },
        ],
        link: "Watch the walkthrough",
      },
    ],
    caption: [
      "Flagship development launch film and aerials.",
      "Walkthrough, aerial, colour grade, agent cutdowns",
    ],
    year: "2026",
  },
];
