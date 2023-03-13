import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../service/service";
import { toast } from 'react-toastify';

const initialState = {
  todos: [],
  error: null,
};

export const createToDo = createAsyncThunk(
  "toDos/create",
  async ({ id, label, checked }) => {
    const res = await service.create({ id, label ,checked})
    return res.data;
  }
);

export const readToDos = createAsyncThunk(
  "toDos/readAll",
  async () => {
    const res = await service.readAll();
    return res.data;
  }
);

export const updateToDo = createAsyncThunk(
  "toDos/update",
  async ({ id, data }) => {
    const res = await service.update(id, data);
    return res.data;
  }
);

export const deleteToDo = createAsyncThunk(
  "toDos/delete",
  async ({ id }) => {
    await service.remove(id)
    return { id };
  }
);

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  extraReducers: {
    [createToDo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
      state.error = null;
      // toast.success('Task created successfully!');
    },
    [readToDos.fulfilled]: (state, action) => {
      state.todos = [...action.payload]
      state.error = null;
      // toast.success('Task readed successfully!'); 
    },
    [updateToDo.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const todoToUpdate = state.todos.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.checked = !todoToUpdate.checked;
        state.error = null;
        // toast.success('Task updated successfully!');
      }
    },
    [deleteToDo.fulfilled]: (state, action) => {
      let index = state.todos.findIndex(({ id }) => id === action.payload.id);
      state.todos.splice(index, 1);
      state.error = null;
      // toast.success('Task deleted successfully!');
    },
    [createToDo.rejected]: (state) => {
      state.error = "Failed to create";
      toast.error('Failed to create task!');
    },
    [readToDos.rejected]: (state) => {
      state.error = "Failed to read";
      toast.error('Failed to read task!');
    },
    [updateToDo.rejected]: (state) => {
      state.error = "Failed to update";
      toast.error('Failed to update task!');
    },
    [deleteToDo.rejected]: (state) => {
      state.error = "Failed to delete";
      toast.error('Failed to delete task!');
    },
  },
});

const { reducer } = toDoSlice;
export default reducer;