import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { memo } from "react";
import dayjs from "dayjs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { getColumns } from "./utils";

const Column = memo(
  ({ text, isDisabled, isSunday, isToday, isSelected, onPress }) => {
    return (
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          padding: 5,
          opacity: isDisabled ? 0.3 : 1,
          backgroundColor: isSelected
            ? "red"
            : isToday
            ? "black"
            : "transparent",
          borderRadius: 50,
        }}
      >
        <Pressable
          onPress={onPress}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: isToday ? "white" : isSunday ? "red" : "black",
            }}
          >
            {text}
          </Text>
        </Pressable>
      </View>
    );
  }
);

const ArrowButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 20, paddingVertical: 15 }}
    >
      <SimpleLineIcons name={iconName} size={15} color="#404040" />
    </TouchableOpacity>
  );
};

const Calendar = ({
  currentDay,
  setCurrentDay,
  onPressDate,
  onPressLeftButton,
  onPressRightButton,
}) => {
  const RenderCalendarItem = ({ item: utcItem }) => {
    const item = dayjs(utcItem).subtract(9, "hour");
    // 그러니까 기준은 UTC로 하는데, get("date")하면 그걸 한국시간으로 바꾸어준다.
    const dateText = dayjs(item).get("date");
    return (
      <Column
        text={dateText}
        isSelected={item.isSame(currentDay, "day")}
        isDisabled={item.month() !== currentDay.month()}
        isSunday={item.get("day") == 0}
        isToday={item.isSame(dayjs(), "day")}
        onPress={() => {
          setCurrentDay(item);
        }}
      ></Column>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowButton iconName="arrow-left" onPress={onPressLeftButton} />
          <Pressable onPress={onPressDate}>
            <Text>{currentDay.format("YYYY.MM.DD")}</Text>
          </Pressable>
          <ArrowButton iconName="arrow-right" onPress={onPressRightButton} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <Column text={day} key={day}></Column>
          ))}
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={getColumns(currentDay)}
        renderItem={RenderCalendarItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={(date) => `date-${date.date()}`}
      ></FlatList>
    </>
  );
};

export default memo(Calendar);
