import {Stack} from "@mui/material";
import {TitleSection} from "../components/TitleSection";
import {DisplayCounter} from "../components/DisplayCounter";
import {ButtonSection} from "../components/ButtonSection";
import {useState} from "react";

const CounterPage = () => {
    // business logic ***
    // state ***

    const [count, setCount] = useState(0)

    const handleAddButtonClick = () => {
        setCount(count + 1)
    }

    const handleMinusButtonClick = () => {
        if (count <= 0) {
            return
        }

        setCount(count - 1)
    }

    // ui logic
    return <>
        <Stack id={"page"} height={"100%"}>
            <Stack height={"200px"}/>

            <TitleSection/>

            <DisplayCounter count={count}/>

            <ButtonSection
                addButtonClick={handleAddButtonClick}
                minusButtonClick={handleMinusButtonClick}
            />
        </Stack>
    </>
}

export default CounterPage
