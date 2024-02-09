import { InputAdornment } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { Stack, TextField } from "@mui/material";
import profile from "./../../assets/profile.png";

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
          <div className="profile w-[50px] h-[50px]  relative">
            <img src={profile} alt="" className="w-full h-full object-cover rounded-[50%] overflow-hidden" />
            <div className="active-status w-[16px] h-[16px] bg-white rounded-[50%] flex items-center justify-center absolute bottom-0 right-0">
              <div className="inner w-[13px] h-[13px] bg-[#00E600] rounded-[50%]" />
            </div>
          </div>
          <div>
            <p className="font-bold">Esther Howard</p>
            <p>estherhoward@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
