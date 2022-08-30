export const filteredAnime = (params: any) => [
  { key: `https://api.jikan.moe/v4/anime${params}`, tag: "filtered" },
];

export const allAnime = [
  { key: "https://api.jikan.moe/v4/seasons/now?limit=5", tag: "now" },
  {
    key: "https://api.jikan.moe/v4/seasons/upcoming?limit=5",
    tag: "upcoming",
  },
];

export const animeDetails = (id: any) => [
  { key: `https://api.jikan.moe/v4/anime/${id}/full`, tag: "details" },
  { key: `https://api.jikan.moe/v4/anime/${id}/characters`, tag: "characters" }
];
