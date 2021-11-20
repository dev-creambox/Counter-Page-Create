import {ChangeEvent, useState} from "react";
import {Divider, IconButton, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import {AddRounded} from "@mui/icons-material";

const todosMock = [
    "공부하기",
    "샤워하기",
    "커피먹기",
]

const TodoListPage = () => {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState(todosMock)

    const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handleAddIconClick = () => {
        const newList = [...todoList, todo]
        setTodoList(newList)
    }

    // todo list 렌더링
    const renderTodoList =
        todoList.map(it => {
            return (
                <Stack key={it}>
                    <Typography
                        variant={"subtitle1"}
                        p={"1rem"}
                        sx={{opacity: 0.7}}
                    >
                        {it}
                    </Typography>
                    <Divider/>
                </Stack>
            )
        })

    return <>
        <Stack p={"2rem"} height={"100%"}>
            <Stack
                aria-label={"할 일 입력 섹션"}
                mb={"4rem"}
            >
                <TextField
                    variant={"outlined"}
                    placeholder={"할 일"}
                    helperText={"할 일을 입력해주세요"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position={"end"}>
                                <IconButton onClick={handleAddIconClick}>
                                    <AddRounded/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    value={todo}
                    onChange={handleTodoChange}
                />
            </Stack>

            <Stack aria-label={"리스트 섹션"}>
                {renderTodoList}
            </Stack>

        </Stack>
    </>
}

export default TodoListPage