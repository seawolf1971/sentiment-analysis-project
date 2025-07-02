import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY < lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <MotionBox
      position="sticky"
      top="0"
      zIndex="1000"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      boxShadow="sm"
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.3 }}
    >
      <Flex px={6} py={3} align="center" justify="space-between">
        <Heading size="md">Sentiment Analyzer</Heading>
        <Flex align="center" gap={6}>
          <HStack spacing={4} align="center">
            <Text fontWeight="medium" mb="0">Contact Me</Text>
            <Link href="https://github.com/seawolf1971" isExternal>
              <FaGithub size="20" />
            </Link>
            <Link href="https://linkedin.com/in/egemendurgun" isExternal>
              <FaLinkedin size="20" />
            </Link>
            <Link href="https://www.kaggle.com/egemendrgn" isExternal fontWeight="medium">
            Kaggle
            </Link>
          </HStack>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default Navbar;
