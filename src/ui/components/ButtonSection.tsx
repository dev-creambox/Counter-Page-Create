import {Button, Stack} from "@mui/material";
import {AddRounded, RemoveRounded} from "@mui/icons-material";

type ButtonSectionProps = {
    addButtonClick: () => void,
    minusButtonClick: () => void
}

export function ButtonSection(
    props: ButtonSectionProps
) {
    return <>
        <Stack
            direction={"row"}
            justifyContent={"center"}
        >
            <Button
                variant={"outlined"}
                color={"primary"}
                onClick={props.minusButtonClick}
            >
                <RemoveRounded/>
            </Button>

            <Stack width={"16px"}/>

            <Button
                variant={"contained"}
                color={"primary"}
                sx={{opacity: 0.8}}
                onClick={props.addButtonClick}
            >
                <AddRounded/>
            </Button>

        </Stack>
    </>
}