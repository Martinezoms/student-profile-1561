export async function getData() {
  let response = await fetch('https://api.hatchways.io/assessment/students');
  let data = await response.json();
  return data;
}

export const average = (arr) => {
  return arr.reduce((a, b) => Number(a) + Number(b), 0) / arr.length;
};
