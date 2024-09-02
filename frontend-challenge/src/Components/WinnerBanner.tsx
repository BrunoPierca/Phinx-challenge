import { Card, Typography } from '@mui/material'
import { Pokemon } from '../interfaces'

export const WinnerBanner = ({
    winner
}: { winner: Pokemon }) => {
    return (
        <Card sx={{
            width: "100%",
            border: "3px solid",
            borderColor: "#377538",
            p: 1,
            boxShadow: 12
        }}
        >
            <Typography variant="h5">{winner.name} wins!</Typography>
        </Card>)
}
