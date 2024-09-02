import { Button, Stack, Typography } from "@mui/material"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useState } from "react";
import { BattleLog } from "./BattleLog";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h3" >
                Battle of Pokemon
            </Typography>
            <Button variant="contained" sx={{ minWidth: 0, width: 40, height: 40 }}
                onClick={handleOpen}
            >
                <LeaderboardIcon />
            </Button>

            {open && <BattleLog handleClose={handleClose} />}
        </Stack>
    )
}
