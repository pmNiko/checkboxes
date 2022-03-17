import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#1f1f1f',
            }}
        >
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Centro de ayuda</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contacto
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Soporte
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privado
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Cuenta</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        Develop by nikoDev &reg; {new Date().getFullYear()}
                        <span
                            style={{
                                marginLeft: '1rem',
                                fontWeight: 'bold',
                            }}
                        >
                            <a
                                href="https://github.com/pmNiko"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                Github Profile
                            </a>
                        </span>
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}
