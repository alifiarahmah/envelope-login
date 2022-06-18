import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography
} from '@mui/material';
import TextHyperlink from '../text-hyperlink/text-hyperlink';
import TextInput from '../text-input/text-input';

/* eslint-disable-next-line */
export interface FormGroupProps {}

export function FormGroup(props: FormGroupProps) {
  return (
    <Card sx={{width: {sx: "100%", lg: "70%"}, p: 2}}>
      <CardContent>
        <Box mb={3}>
          <TextInput name="email" type="email" label="Email" color="secondary" />
          <TextInput name="password" type="password" label="Password" color="secondary" />
          <TextHyperlink href="#">Forgot password?</TextHyperlink>
        </Box>
        <Box
          display="flex"
          flexDirection={{sx: "column", lg: "row"}}
          alignItems="center"
          width="100%"
          justifyContent="space-between"
        >
          <Typography color="primary.dark" fontWeight="bold">
            New user?&nbsp;
            <TextHyperlink href="#">
              Create account
            </TextHyperlink>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none"
            }}
          >
            Log in
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FormGroup;
