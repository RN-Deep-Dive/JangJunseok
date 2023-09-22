import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
const TODO_LIST_KEY = "some-todo-list-key";

export default ({ currentDay }) => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const init = async () => {
    todoList_json = await AsyncStorage.getItem(TODO_LIST_KEY);
    if (todoList_json) {
      const savedTodoList = await JSON.parse(todoList_json);
      console.log(typeof savedTodoList[0].date);
      setTodoList(savedTodoList);
      setIsLoading(false);
    }
  };

  let showingList = todoList.filter((item) =>
    dayjs(item.date).isSame(currentDay, "date")
  );

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id != id));
  };

  const addTodo = () => {
    let newTodo = [
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoInput,
        done: false,
        date: currentDay,
      },
    ];
    setTodoList(newTodo);
    setTodoInput("");

    setTimeout(() => {
      if (showingList.length >= 1)
        this.flatListRef.scrollToIndex({ animated: true, index: 1 });
    }, 300);
  };

  return {
    todoList,
    showingList,
    isLoading,
    toggleTodo,
    addTodo,
    deleteTodo,
    todoInput,
    setTodoInput,
  };
};
