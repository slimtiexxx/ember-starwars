export enum NameSpaces {
  People = 'people',
  Starship = 'starship',
}

const validIDs: Record<NameSpaces, number[]> = {
  [NameSpaces.People]: [2, 3, 5, 9, 10, 11, 12, 13, 15, 18, 21, 22],
  [NameSpaces.Starship]: [2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22],
};

export const getRandomID = (namespace: NameSpaces): number => {
  const ids = validIDs[namespace];

  return ids[Math.floor(Math.random() * ids.length)] || 0;
};

export const generateRandomNamespace = (): NameSpaces => {
  return Math.random() > 0.5 ? NameSpaces.Starship : NameSpaces.People;
};
