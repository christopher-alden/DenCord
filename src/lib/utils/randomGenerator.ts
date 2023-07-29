export function getRandomGenerator(names: string[]): string {
  if (names.length === 0) {
    return 'DefaultString101';
  }

  const randomIdx: number = Math.floor(Math.random() * names.length);
  return names[randomIdx];
}
