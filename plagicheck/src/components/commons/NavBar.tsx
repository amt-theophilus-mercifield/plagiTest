import { InputAdornment } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { Stack, TextField } from "@mui/material";
import profile from "./../asset/profile.png";

export const NavBar = () => {
  return (
    <div className="flex justify-between h-[88px] border-b border-gray-300 py-[19px] px-[41px] ">
      <Stack direction="column" spacing={1.3}>
        <TextField
          placeholder="Search anything here"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch />
              </InputAdornment>
            ),
          }}
          sx={{
            width: 300,
            "& .MuiInputBase-root": {
              height: 44,
              borderRadius: 2,
            },
          }}
        />
      </Stack>
      <div>
        <div className="flex item-center gap-4">
          <img
            src={profile}
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <div>
            <p>Esther Howard</p>
            <p>estherhoward@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
