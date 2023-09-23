import useTodoList from "./src/hooks/use-todo-list";
import useCalander from "./src/hooks/use-calander";
import TodoInput from "./src/TodoInput";
import Calendar from "./src/Calendar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  const now = dayjs();

  const {
    currentDay,
    isDatePickerVisible,
    setCurrentDay,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    substract1Month,
    add1Month,
  } = useCalander(now);

  const {
    todoInput,
    showingList,
    isLoading,
    setTodoInput,
    addTodo,
    deleteTodo,
    toggleTodo,
  } = useTodoList({ currentDay });

  const onLongPressText = (id) => {
    Alert.alert("정말 삭제하시겠어요?", "돌이킬수없다구요", [
      {
        text: "취소",
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteTodo(id) },
    ]);
  };

  const renderTodoItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.todoItem}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onLongPress={() => onLongPressText(item.id)}
          hitSlop={{ top: 20, bottom: 20 }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => toggleTodo(item.id)}
          hitSlop={{
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          }}
        >
          <MaterialCommunityIcons
            name={
              item.done ? "checkbox-marked-outline" : "checkbox-blank-outline"
            }
            size={24}
            color="black"
          />
        </Pressable>
      </View>
    );
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {isLoading ? (
            <Text>loading...</Text>
          ) : (
            <>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={showingList}
                renderItem={renderTodoItem}
                ref={(ref) => {
                  this.flatListRef = ref;
                }}
                ListHeaderComponent={
                  <Calendar
                    currentDay={currentDay}
                    setCurrentDay={setCurrentDay}
                    onPressDate={showDatePicker}
                    onPressLeftButton={substract1Month}
                    onPressRightButton={add1Month}
                  ></Calendar>
                }
              ></FlatList>
              {TodoInput({
                addTodo,
                setTodoInput,
                todoInput,
                todoItemStyle: styles.todoItem,
              })}
            </>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  todoItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
