import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialApp.
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50% " : "93%"}
        p="1rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          varient="h5"
          textAlign="center"
          sx={{ mb: "1.5rem" }}
        >
          WelCome to FriendsBook, Where Friendship Comes to Life!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
