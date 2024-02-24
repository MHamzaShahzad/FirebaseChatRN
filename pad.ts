[4, 0, 6, 7, 8, 5, 97, 9, 0];

// [4,5,6,7,8,97,9,0,0]

const input = array => {
  const sorted = [];
  array.map((item, index) => {
    sorted.push({index, value: `${item}`[0]});
  });
  console.log(sorted);
};
