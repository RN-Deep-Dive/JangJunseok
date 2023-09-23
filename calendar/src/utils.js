import dayjs from "dayjs";

export const getColumns = (now) => {
  const start = now.startOf("month"); // 1
  const end = now.endOf("month"); // 30
  let columns = [];

  // startOf("month")는 한국시간으로 9월 1일을 불러온다.
  // 한국시간으로 잘 가져오고 있지 않나? 그러면.

  // 30까지 다 채웠다.
  for (i = 0; i < now.endOf("month").get("date"); i++) {
    columns.push(dayjs(start).add(i, "days"));
  }

  for (i = 1; i <= start.get("day"); i++) {
    columns.unshift(start.subtract(i, "day"));
  }
  // end 또한 end의 요일을 구해서, 4이면 5,6을 채워야 함.
  for (i = 1; i <= 6 - end.get("day"); i++) {
    columns.push(end.add(i, "day"));
  }

  return columns;
};
