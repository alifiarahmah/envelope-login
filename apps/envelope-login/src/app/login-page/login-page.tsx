import { RiShareBoxFill } from 'react-icons/ri';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import FormGroup from '../form-group/form-group';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  return (
    <ThemeProvider theme={theme}>
      <Stack flexDirection={{sx: "column", lg: "row-reverse"}} sx={{
        margin: -1,
        height: "100vh"
      }}>

        {/* Login */}
        <Box
          width={{xs: "inherit", lg: "50%"}}
          p={10}
          sx={{
            backgroundColor: "primary.light",
          }}
        >
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box my={5}>
              <Typography variant="h3" fontWeight="bold" color="primary">
                Welcome Back
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="primary.dark">
                Sign in to continue
              </Typography>
            </Box>
            <FormGroup />
          </Box>
        </Box>

        {/* Sidebar */}
        <Box
          width={{xs: "inherit", lg: "50%"}}
          px={10}
          py={{xs: 5, lg: 3}}
          sx={{
            backgroundColor: '#2763A4',
            color: '#F6F9FB'
          }}
        >
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Envelope
            </Typography>
            <Box
              height="90%"
              display="flex"
              flexDirection="column"
              px={5}
              justifyContent="center"
              textAlign="center"
            >
              <Typography variant="h3" fontWeight="bold">
                Introducing our <br/>2020 report
              </Typography>
              <Typography variant="body1" my={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididun.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<RiShareBoxFill/>}
                size="large"
                sx={{
                  width: {sx: "100%", lg: "auto"},
                  alignSelf: "center",
                  color: "primary.light",
                  borderColor: "primary.light",
                  px: 10,
                  py: 2,
                  textTransform: "capitalize"
                }}
              >
                View Report
              </Button>
            </Box>
        </Box>

      </Stack>
    </ThemeProvider>
  );
}

export default LoginPage;
