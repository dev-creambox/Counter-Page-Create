import {Stack, Typography} from "@mui/material";

type DisplayCounterProps = {
    count: number
}

export function DisplayCounter(
    props: DisplayCounterProps
) {

    return <>
        <Stack
            alignItems={"center"}
            padding={"40px"}
        >
            <Typography
                variant="h4"
                fontWeight={"bold"}
            >
                {props.count}
            </Typography>
        </Stack>
    </>
}