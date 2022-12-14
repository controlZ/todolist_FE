import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem text="Todo 1" done={true} />
            <TodoItem text="Todo 2" done={false} />
            <TodoItem text="Todo 3" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;