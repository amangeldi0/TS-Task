// Implement the built-in Pick<T, K> generic without using it.
//
// Constructs a type by picking the set of properties K from T

// Example:

// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }
//
// type TodoPreview = MyPick<Todo, 'title' | 'completed'>
//
// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }

// In use:

interface Student {
    name: string;
    age: number;
    hasFail: boolean
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type StudentName = MyPick<Student, 'name'>

const NameOfStudent: StudentName = {
    name: 'Aman'
}
