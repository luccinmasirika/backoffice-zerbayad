import { AppBar as MuiAppBar, Menu, MenuItem, Stack, Tooltip } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';
import { LogoIcon } from '../../components';
import { useDispatch, useSelector } from 'react-redux'
//import { logOut } from '../../redux/actions/userActions'
import { useState } from 'react';
import {  Redirect } from 'react-router-dom';

const Root = styled(MuiAppBar)(({ theme }) => ({
  background: theme.palette.grey.dark,
}));

const LogoIconContainer = styled(Stack)({
  margin: 'auto',
  width: 35,
  height: 35,
  justifyContent: 'center',
});

const User = styled('div')({
  float: 'right',
});

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  //const user = useSelector((state) => state?.login?.userInfo?.data);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);



  return (
    <Root position='static'>
      <Toolbar>
        <LogoIconContainer >
          <LogoIcon />
        </LogoIconContainer>
        <Menu
          // elevation={6}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem >Log out</MenuItem>
        </Menu>
        
        <User>
          {/* <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          > */}
            {/* {user ? <LogoutIcon onClick={() => dispatch(logOut())} /> : null} */}
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2, color: "white" }}>
                
               {/*}
                {user ?  <Avatar alt={user.firstname} src={`https://back-office-back-end.herokuapp.com/${user.profile}`} /> : <AccountCircle />}
               {*/}
              </IconButton>
            </Tooltip>
          {/* </IconButton> */}
        </User>
      </Toolbar>
    </Root>
  );
};

export default AppBar;
