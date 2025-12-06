import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  KeyboardArrowDown,
} from '@mui/icons-material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
// ViewSwitcher removed per request (technical view dropdown)
import CalendarIcon from '../../assets/icons/calendar.svg';
import NotificationIcon from '../../assets/icons/notification.svg';
import MessageQuestionIcon from '../../assets/icons/message-question.svg';
import EllipseIcon from '../../assets/icons/Ellipse_12.svg';

const Header = () => {
  const location = useLocation();
  // removed technical view dropdown (ViewSwitcher)

  // Get breadcrumb path
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbMap: Record<string, string> = {
    dashboard: 'Dashboard',
    'admin-dashboard': 'Admin Dashboard',
    configuration: 'Configuration',
    'user-configuration': 'User Configuration',
    'user-management': 'User Management',
    'audit-trail': 'Audit Trail',
    clinical: 'Clinical',
    lab: 'Lab',
    reports: 'Reports',
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#FAFAFA',
        borderRadius: 2,
        color: '#111827',
        width: '100%',
        maxWidth: 1200,
        height: 48,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2, py: 0.5, width: '100%', height: '100%', minHeight: '48px' }}>
        {/* Left: Logo and Breadcrumbs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#14b8a6',
              fontWeight: 600,
              fontSize: '1.25rem',
              letterSpacing: '-0.025em',
            }}
          >
          
          </Typography>

          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{
              '& .MuiBreadcrumbs-separator': {
                color: '#9ca3af',
                mx: 1,
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: '#6b7280',
                fontSize: '0.875rem',
                '&:hover': {
                  color: '#14b8a6',
                },
              }}
            >
              Quality Control
            </Link>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Typography
                  key={name}
                  sx={{
                    color: '#111827',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'capitalize'
                  }}
                >
                  {breadcrumbMap[name] || name}
                </Typography>
              ) : (
                <Link
                  key={name}
                  component={RouterLink}
                  to={routeTo}
                  sx={{
                    textDecoration: 'none',
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    textTransform: 'capitalize',
                    '&:hover': {
                      color: '#14b8a6',
                    },
                  }}
                >
                  {breadcrumbMap[name] || name}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Box>

        {/* Right: View Switcher, Clinic, Icons, User */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
          <Typography
            variant="body2"
            sx={{
              width: 267,
              height: 22,
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '145%',
              letterSpacing: '0%',
              color: '#232323',
              opacity: 1,
            }}
          >
            Clinic: Crysta IVF, Banglore
          </Typography>

          <IconButton
            size="small"
            sx={{
              width: 48,
              height: 48,
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #e5e7eb',
              opacity: 1,
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            <img
              src={CalendarIcon}
              alt="Calendar"
              style={{
                width: 24,
                height: 24,
                objectFit: 'contain',
              }}
            />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              width: 48,
              height: 48,
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #e5e7eb',
              opacity: 1,
              position: 'relative',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            <img
              src={NotificationIcon}
              alt="Notifications"
              style={{
                width: 24,
                height: 24,
                objectFit: 'contain',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 6,
                right: 6,
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#ef4444',
                border: '2px solid #ffffff',
              }}
            />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              width: 48,
              height: 48,
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #e5e7eb',
              opacity: 1,
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            <img
              src={MessageQuestionIcon}
              alt="Help"
              style={{
                width: 24,
                height: 24,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              width: 158,
              height: 42,
              opacity: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid #FFFFFF',
                backgroundColor: '#D9D9D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1,
              }}
            >
              <img
                src={EllipseIcon}
                alt="User Avatar"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box
              sx={{
                width: 110,
                height: 42,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
                opacity: 1,
              }}
            >
              <Box
                sx={{
                  width: 110,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  opacity: 1,
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 500, 
                    fontSize: '0.875rem', 
                    lineHeight: 1.2,
                    flex: 1,
                  }}
                >
                  Kate Russell
                </Typography>
                <KeyboardArrowDown fontSize="small" sx={{ color: '#6b7280' }} />
              </Box>
              <Typography 
                variant="caption" 
                sx={{ 
                  width: 82,
                  height: 18,
                  fontFamily: 'Noto Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '18px',
                  letterSpacing: '0px',
                  color: '#9E9E9E',
                  opacity: 1,
                }}
              >
                Receptionist
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
