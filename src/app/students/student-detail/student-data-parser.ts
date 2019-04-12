export interface GraphValues {
  name: string;
  value: number;
}

export interface GraphData {
  name: string;
  series: GraphValues[];
}

export const extractStudentData = (data: string): GraphData[] => {
  const graphData: GraphData = {
    name: 'Score',
    series: [],
  };

  const parser = new DOMParser();
  const dataElement = parser.parseFromString(data, 'text/html');
  const [, ...scores] = Array.from(dataElement.querySelectorAll('#marks *'));
  const exams = Array.from(dataElement.querySelectorAll('#exams *'));

  scores.forEach(({ textContent }, index) => {
    graphData.series.push({
      name: exams[index].textContent,
      value: parseFloat(textContent),
    });
  });

  return [graphData];
};
