import dayjs from "dayjs";

export const getColumns = (now) => {
  const start = now.startOf("month"); // 1
  const end = now.endOf("month"); // 30
  let columns = [];
  console.log(start, end.get("day"));

  for (i = 1; i <= now.endOf("month").get("date"); i++) {
    columns.push(dayjs(start).add(i, "days"));
  }
  // 만약 5 (즉 토요일인경우) 인경우에는 0,1,2,3,4를 채워주어야 함.
  for (i = 0; i < start.get("day"); i++) {
    columns.unshift(start.subtract(i, "day"));
  }
  // end 또한 end의 요일을 구해서, 4이면 5,6을 채워야 함.
  for (i = 1; i <= 6 - end.get("day"); i++) {
    console.log("psuh");
    columns.push(end.add(i, "day"));
  }

  console.log(columns);

  return columns;
};
