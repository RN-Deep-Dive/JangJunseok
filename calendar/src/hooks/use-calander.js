import { useState } from "react";
import dayjs from "dayjs";
export default (now) => {
  const [currentDay, setCurrentDay] = useState(now);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setCurrentDay(dayjs(date));
    hideDatePicker();
  };

  const substract1Month = () => {
    setCurrentDay(currentDay.subtract(1, "month"));
  };

  const add1Month = () => {
    setCurrentDay(currentDay.add(1, "month"));
  };

  return {
    isDatePickerVisible,
    currentDay,
    setCurrentDay,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    substract1Month,
    add1Month,
  };
};
