export default function solution(content) {
  // BEGIN
  const data = content.split('\n');
  const items = data.slice(2, data.length).map((item) => {
    return item.split('|').slice(1, -1).map(value => value.trim());
  }).map((item) => ({
    name: item[0],
    place: item[1],
    type: item[2],
    lifetime: item[3],
    dangerous: item[4],
  }));

  // step 1
  console.log(items);

  // step 2
  const sortedNames = items.map(({ name }) => name[0].toUpperCase() + name.slice(1, name.length)).sort();

  console.log(sortedNames)

  // step 3
  const safePlants = items.filter(({ dangerous }) => dangerous === 'Нет')
  const dangerousPlants = items.length - safePlants.length;

  console.log(`Безопасные растения: ${(safePlants.length / items.length) * 100}%`);
  console.log(`Опасные растения: ${(dangerousPlants / items.length) * 100}%`);

  // step 4
  const lifetimes = items.map(({ lifetime }) => {
    
  })
  // END
}