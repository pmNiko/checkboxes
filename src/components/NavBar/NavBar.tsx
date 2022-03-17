import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ListIcon from '@mui/icons-material/List'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ListIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Facturación
                    </Typography>
                    <div color="inherit">
                        <span style={{ marginRight: '1em' }}>Login</span>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
