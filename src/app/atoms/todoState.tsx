import { atom } from "recoil";

type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [
    {
      id: 1,
      title: 'testtodo',
      isCompleted: false,
    },
  ],
});

export type{ Todo}
export{ todoState}