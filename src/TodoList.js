import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      //to be filled in a later step
    }, []);
  
    async function deleteTodo(todo) {
      //to be filled in a later step
    }
  
    async function setComplete(updateValue, todo) {
      //to be filled in a later step
    }
  
    const renderItem = ({ item }) => (
      <Pressable
        onLongPress={() => {
          deleteTodo(item);
        }}
        onPress={() => {
          setComplete(!item.isComplete, item);
        }}
        style={styles.todoContainer}
      >
        <Text>
          <Text style={styles.todoHeading}>{item.name}</Text>
          {`\n${item.description}`}
        </Text>
        <Text
          style={[styles.checkbox, item.isComplete && styles.completedCheckbox]}
        >
          {item.isComplete ? '✓' : ''}
        </Text>
      </Pressable>
    );
  
    return (
      <FlatList
        data={todos}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    );
  };

export default TodoList