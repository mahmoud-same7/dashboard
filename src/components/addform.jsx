import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "./header";
import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";

const AddEmployee = ({onClose}) => {
    const theme = useTheme()
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
    },
    mode: "onTouched",
  });
  const { errors } = formState;
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      className="Add_employee"
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "95vh",
        background: "#eee",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <IconButton onClick={onClose} sx={{position:'absolute' , top:'10px' , right:'10px' ,background:theme.palette.darkred , color:'#fff',['&:hover']:{background:theme.palette.darkred , color:'#fff'}}}>
            <Close/>
        </IconButton>
      <Box className="form_box" sx={{ width: { xs: "280px", md: "400px" } }}>
        <Header textCenter="center" title="new employee" />
        <form
          action=""
          method="post"
          onSubmit={handleSubmit(onsubmit)}
          style={{ width: "100%" }}
        >
          <Stack spacing={2}>
            <TextField
              autoComplete="off"
              id="name"
              label="Full name"
              type="text"
              variant="filled"
              {...register("username", { required: "This Field Is Required!" })}
              error={!!errors.username}
              helperText={errors?.username?.message}
            />
            <TextField
              id="phone"
              label="phone"
              type="number"
              variant="filled"
              {...register("phone", { required: "This Field Is Required!" })}
              error={!!errors.phone}
              helperText={errors?.phone?.message}
            />
            <TextField
              id="ID Number"
              label="ID Number"
              type="number"
              variant="filled"
              {...register("idNumbe", { required: "This Field Is Required!" })}
              error={!!errors.idNumbe}
              helperText={errors?.idNumbe?.message}
            />
            <Button
              type="submit"
              sx={{
                textTransform: "capitalize",
                background: theme.palette.green,
                color: "#fff",
                ["&:hover"]: {
                  border: `1px solid ${theme.palette.green}`,
                  color: theme.palette.green,
                },
              }}
            >
              create
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
export default AddEmployee;
