export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}
