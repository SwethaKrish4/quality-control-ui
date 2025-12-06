import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ShieldTickIcon from "../../assets/icons/shield-tick.svg";
import BriefcaseIcon from "../../assets/icons/brifecase-tick.svg";
import ReceiptSearch from "../../assets/icons/receipt-search.svg";
import TickmarkCircle from "../../assets/icons/Tick-mark-circle.svg";
import SecuritySafe from "../../assets/icons/security-safe.svg";
import ClinicLogo from "../../assets/icons/Clinic-Logo.svg";
import VidaiLogo from "../../assets/icons/Vidai-logo.svg";
import UpdatedVersionIcon from "../../assets/icons/Updated_Version.svg";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Card,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';

import { useView } from '@/utils/viewContext';

const drawerWidth = 240;

const getMenuItems = (view: 'technician' | 'admin' | 'user') => {
  switch (view) {
    case 'admin':
      return [
        { text: 'Dashboard', path: '/admin-dashboard' },
        { text: 'Clinical', path: '/clinical' },
        { text: 'Lab', path: '/lab' },
        { text: 'Reports', path: '/reports' },
        { text: 'Configuration', path: '/configuration' },
      ];
    case 'user':
      return [
        { text: 'Dashboard', path: '/dashboard' },
        { text: 'Configuration', path: '/user-configuration' },
      ];
    case 'technician':
    default:
      return [
        { text: 'Dashboard', path: '/dashboard' },
        { text: 'Clinical', path: '/clinical' },
        { text: 'Lab', path: '/lab' },
        { text: 'Reports', path: '/reports' },
        { text: 'Configuration', path: '/configuration' },
      ];
  }
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentView } = useView();

  // ✏️ ADDED: State to track which icon is selected (0, 1, 2, or 3)
  const [selectedIcon, setSelectedIcon] = useState(0);

  const menuItems = getMenuItems(currentView);

  // ✏️ ADDED: Function to handle icon clicks
  const handleIconClick = (iconIndex: number) => {
    setSelectedIcon(iconIndex);
    // You can add navigation logic here if each icon should navigate somewhere
    // For example: navigate('/some-path');
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      {/* Logo at Top (replaced with Clinic Logo) */}
      <Box sx={{ p: 2, pb: 1.5, display: 'flex', alignItems: 'center' }}>
        <img
          src={ClinicLogo}
          alt="Clinic Logo"
          style={{
            width: 134,
            height: 46,
            transform: 'rotate(0deg)',
            opacity: 1,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Box>

      {/* ✏️ MODIFIED: Icon Row - Now with clickable selection behavior */}
      <Card
          sx={{
    p: 1,
    mx: 1,
    mt: 1,
    mb: 1,
    borderRadius: 2,
    // requested box-shadow
    boxShadow: '0px 0px 14px 0px #0000000F',
    position: 'relative',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 56,
    minHeight: 50,
    flexShrink: 0,
    overflow: "hidden",
    opacity: 1,
  }}
      >
        <Box
          sx={{
            position: 'relative',
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            pl: 1.5,
            pr: 1,
            gap: 1.5,
          }}
        >
          {/* ✏️ MODIFIED: Icon 1 - Shield with checkmark */}
          <IconButton
            size="small"
            onClick={() => handleIconClick(0)}
            sx={{
              p: 0.5,
              position: 'relative',
              width: 40,
              height: 40,
              backgroundColor: 'transparent',
              color: selectedIcon === 0 ? '#E17E61' : '#6b7280',
              borderRadius: 0,
              border: 'none',
              boxShadow: 'none',
              transition: 'none',
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            <img
              src={TickmarkCircle}
              alt="tick mark"
              style={{
                width: 36,
                height: 36,
                objectFit: 'contain',
                display: 'block',
                opacity: 1,
                transform: 'none',
              }}
            />
          </IconButton>

          {/* ✏️ MODIFIED: Icon 2 - Work/Briefcase */}
          <IconButton
            size="small"
            onClick={() => handleIconClick(1)}
            sx={{
              p: 0.5,
              position: 'relative',
              width: 40,
              height: 40,
              backgroundColor: 'transparent',
              color: selectedIcon === 1 ? '#E17E61' : '#6b7280',
              borderRadius: 0,
              border: 'none',
              boxShadow: 'none',
              transition: 'none',
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            <img src={BriefcaseIcon} alt="briefcase" style={{ width: 20, height: 20, objectFit: 'contain', opacity: 1 }} />
          </IconButton>

          {/* ✏️ MODIFIED: Icon 3 - Security Safe */}
          <IconButton
            size="small"
            onClick={() => handleIconClick(2)}
            sx={{
              p: 0.5,
              position: 'relative',
              width: 40,
              height: 40,
              backgroundColor: 'transparent',
              color: selectedIcon === 2 ? '#E17E61' : '#6b7280',
              borderRadius: 0,
              border: 'none',
              boxShadow: 'none',
              transition: 'none',
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            <img src={SecuritySafe} alt="security safe" style={{ width: 20, height: 20, objectFit: 'contain', opacity: 1 }} />
          </IconButton>

          {/* ✏️ MODIFIED: Icon 4 - Description/Document */}
          <IconButton
            size="small"
            onClick={() => handleIconClick(3)}
            sx={{
              p: 0.5,
              position: 'relative',
              width: 40,
              height: 40,
              backgroundColor: 'transparent',
              color: selectedIcon === 3 ? '#E17E61' : '#6b7280',
              borderRadius: 0,
              border: 'none',
              boxShadow: 'none',
              transition: 'none',
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            <img src={ReceiptSearch} alt="receipt search" style={{ width: 20, height: 20, objectFit: 'contain', opacity: 1 }} />
          </IconButton>
        </Box>
      </Card>

      {/* Quality Control Heading */}
      <div>
        <Box sx={{
          width: 282,
          height: 898,
          backgroundColor: '#FFFFFF',
          mx: 1,
          mt: 1,
          borderRadius: '20px',
          // Use transparent border with gradient source for border-image
          border: '1px solid transparent',
          borderImageSource: 'linear-gradient(174.5deg, rgba(228, 228, 228, 0) -0.5%, #EEEEEE 100%)',
          borderImageSlice: 1,
          boxShadow: '0px 0px 14px 0px #0000000F',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          transform: 'rotate(0deg)',
          opacity: 1,
        }}>
            <Box sx={{ px: 2.5, pt: 1.5, pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    
    {/* Logo Circle (bigger & centered like your screenshot) */}
<Box
  sx={{
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  }}
>
  <img
    src={ShieldTickIcon}
    alt="Shield Tick Icon"
    style={{
      width: "28px",
      height: "28px",
      objectFit: "contain",
      

    }}
  />
</Box>


    {/* Title in single horizontal line */}
    <Typography
      sx={{
        transform: 'none',
        opacity: 1,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '0',
        color: '#E17E61',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        ml: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Quality Control
    </Typography>

  </Box>
</Box>

          {/* Navigation Menu - Simple text, active in black */}
          <List sx={{ pt: 0, flex: 1, px: 2 }}>
            {menuItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (location.pathname.startsWith(item.path.split('?')[0]) && item.path.includes('?'));

              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.125 }}>
                  <ListItemButton
                    onClick={() => navigate(item.path)}
                    sx={{
                      px: 2,
                      py: 1.25,
                      borderRadius: 1,
                      backgroundColor: 'transparent',
                      '&:hover': {
                        backgroundColor: '#f9fafb',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: '0.8125rem',
                        fontWeight: isActive ? 700 : 400,
                        color: isActive ? '#111827' : '#9ca3af',
                        letterSpacing: '-0.01em',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Bottom Section with VIDAI Logo */}
          <Box sx={{ p: 2, mt: 'auto' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.375,
              }}
            >
             
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={VidaiLogo}
                  alt="VIDAI Logo"
                  style={{
                    width: 163.00006103515625,
                    height: 51.643035888671875,
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: 124,
                  height: 15,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  borderRadius: 1,
                }}
              >
                <img
                  src={UpdatedVersionIcon}
                  alt="Updated Version 2.0"
                  style={{
                    width: 124,
                    height: 15,
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </Drawer>
  );
};

export default Sidebar;