import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ({ todoInput, setTodoInput, addTodo, todoItemStyle }) => {
  return (
    <View style={todoItemStyle}>
      <TextInput
        style={{
          flex: 1,
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          paddingBottom: 1,
        }}
        hitSlop={{
          top: 10,

          bottom: 10,
        }}
        value={todoInput}
        onChangeText={setTodoInput}
        onSubmitEditing={addTodo}
      ></TextInput>
      <Ionicons onPress={addTodo} name="add-outline" size={24} color="black" />
    </View>
  );
};
