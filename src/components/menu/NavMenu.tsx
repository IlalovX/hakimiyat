import { Box, Menu, MenuItem } from "@mui/material";
import { Nav } from "../../db/data";
import { useState } from "react";

function NavMenu({ item }: { item: Nav }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <span onClick={handleClick}>{item.title}</span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {item.subtitle.map((sub) => (
          <MenuItem onClick={handleClose}>{sub}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default NavMenu;
