import {Stack, Typography} from "@mui/material";


// style extension
// { styles }
/* style object
 {
    key:value,
    key:value,
    key:value,
    key:value,
    key:value
 }
 */

export function TitleSection() {
    return <Stack alignItems={"center"}>
        <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{opacity: 0.8}}
        >
            Counter
        </Typography>

        <Typography
            variant="caption"
            fontWeight={"bold"}
            sx={{opacity: 0.6}}
        >
            카운터를 입력해주세요
        </Typography>

    </Stack>
}