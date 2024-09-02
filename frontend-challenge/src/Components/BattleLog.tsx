import { Box, Typography, Stack, CircularProgress, Avatar, Divider, Modal } from '@mui/material';
import { useEffect, useState } from 'react'
import { getBattles } from '../Services/API'
import { Battle } from '../interfaces'


const getLatestBattles = async () => {
    return await getBattles()
}


export const BattleLog = ({ handleClose }: { handleClose: () => void }) => {
    const [battles, setBattles] = useState<Battle[] | null>(null)

    useEffect(() => {
        getLatestBattles().then(data => setBattles(data))
    }, [])

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 6,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Battle log
                </Typography>
                <Typography id="modal-modal-description" sx={{ my: 2 }}>
                    Check the last 10 battle results:
                </Typography>
                <Stack direction={"column"} gap={2} maxHeight={"60dvh"}  sx={{
                    overflowY: "scroll",
                }}>
                    {!battles ? <CircularProgress /> : battles.map((battle) => <>
                        <Stack direction={"row"} gap={2} justifyContent={"space-between"} alignItems={"center"}
                            key={battle.id}
                        >
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <Avatar src={battle.winner.imageUrl} />
                                VS
                                <Avatar src={battle.loser.imageUrl} />
                            </Stack>

                            <Typography>
                                {battle.winner.name} won.
                            </Typography>

                            <Typography>
                                {new Intl.DateTimeFormat("en-US").format(new Date(battle.date))}
                            </Typography>
                        </Stack>
                        <Divider sx={{ width: "100%" }} />
                    </>
                    )}
                </Stack>
            </Box>
        </Modal>
    )
}
