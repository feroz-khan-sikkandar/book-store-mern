import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import banner from '../../assets/banner.png'
import { useTheme } from '@mui/material/styles';

const Banner = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex',  flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', bgcolor: 'background.paper', py: 8, px: 4 }}>
     
      <Box sx={{
        width: { xs: '100%', md: '50%' },
        order: { xs: 2, md: 1 },
        pr: { md: 4 },
        mt: { xs: 4, md: 0 }
      }}>
        <Typography variant="h3" component="h1" gutterBottom fontFamily="primary.fontFamily">
          New Releases This Week
        </Typography>
        <Typography variant="body1" paragraph fontFamily="secondary.fontFamily">
         It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
        </Typography>
        <Button variant="contained" color="primary" size="large" className="btn-primary" sx={{ color: theme.palette.buttonText.main }}>
         Subscribe
        </Button>
      </Box>
      <Box sx={{ width: { xs: '100%', md: '30%' }, order: { xs: 1, md: 2 } }}>
        <img 
          src={banner} 
          alt="Banner Image" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: 3 }}
        />
      </Box>
    </Box>
  )
}

export default Banner

// This component, Banner, is a React functional component that creates a responsive banner section for a website.

// It imports necessary components from Material-UI (MUI) and a banner image.

// The component structure:
// 1. Outer Box: Creates a flex container that changes direction based on screen size.
//    - On small screens (xs), it's a column layout.
//    - On medium screens and larger (md), it's a row layout.

// 2. Left Box (Text content):
//    - Takes 50% width on medium screens, full width on small screens.
//    - Order changes based on screen size (appears second on small screens, first on medium+).
//    - Contains:
//      a. A main heading (h1) using MUI's Typography component.
//      b. A paragraph of text.
//      c. A "Get Started" button styled with custom CSS class.

// 3. Right Box (Image):
//    - Takes 50% width on medium screens, full width on small screens.
//    - Order changes based on screen size (appears first on small screens, second on medium+).
//    - Contains the banner image, styled to be responsive and with some visual enhancements.

// The component uses MUI's sx prop for styling, allowing for responsive design and theme-based styling.
// It also uses custom font families defined in the theme ('primary.fontFamily' and 'secondary.fontFamily').

// This layout ensures the banner is visually appealing and functional on both mobile and desktop views.

{/* 
The `order` property in the `sx` prop is used to control the visual order of flex items.

In this case:
- `xs: 1` means on extra small screens (mobile), this box will appear first in the order.
- `md: 2` means on medium screens and larger (tablets and desktops), this box will appear second in the order.

This responsive ordering allows for a mobile-first design where:
1. On mobile, the image appears above the text content for better visual appeal.
2. On larger screens, the text content appears on the left and the image on the right.

This flexibility in ordering helps create a layout that's optimized for different screen sizes
without changing the structure of the HTML.
*/}

