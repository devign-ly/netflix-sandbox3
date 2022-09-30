import data from '../data.json';

export default function useContent(target) {
  const content = data[target] || [];
  return { [target]: content };
}
