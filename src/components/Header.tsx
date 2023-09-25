import React, { useState } from 'react';
import { Box, Flex, Image, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

interface HeaderProps {
  // Define your props here
}

const Header: React.FC<HeaderProps> = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Box boxShadow="base" bgColor="spotifyGreen" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <Image src="placeholder-logo.png" alt="Logo" boxSize="40px" />

        {/* Avatar with Dropdown */}
        <Menu>
          <MenuButton as={Button} onClick={toggleDropdown}>
            <Image src="avatar.png" alt="Avatar" boxSize="40px" borderRadius="50%" mr={2} />
          </MenuButton>
          {/* Dropdown Menu */}
          {showDropdown && (
            <MenuList>
              <MenuItem>Edit Profile</MenuItem>
              <MenuItem>Integrations</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

export default Header;
