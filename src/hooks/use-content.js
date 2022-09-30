import data from '../data/media.json';

export default function useContent(target) {
  const content = data[target] || [];
  return { [target]: content };
}
