import {
  Container,
  Stack,
  VStack,
  IconButton,
  ButtonGroup,
  Text,
  Divider,
  Box,
  Link,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { ConsensysIcon } from "./ConsensysIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionContainer = motion(Container);

export default function Footer() {
  return (
    <>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        mt={20}
      >
        <Divider />
      </MotionBox>
      <MotionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        as="footer"
        py={{ base: "5", md: "5" }}
        maxW={{ base: "container.sm", md: "container.xl" }}
      >
        <Stack spacing={0}>
          <Stack
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <ConsensysIcon boxSize="8em" />
            <ButtonGroup variant="ghost">
              <Link
                isExternal
                href="https://www.linkedin.com/company/engram-network"
              >
                <IconButton
                  aria-label="LinkedIn"
                  icon={
                    <FontAwesomeIcon
                      icon={faLinkedin as IconProp}
                      fontSize="1.25rem"
                    />
                  }
                />
              </Link>
              <Link
                isExternal
                href="https://github.com/engram-network"
              >
                <IconButton
                  aria-label="GitHub"
                  icon={
                    <FontAwesomeIcon
                      icon={faGithub as IconProp}
                      fontSize="1.25rem"
                    />
                  }
                />
              </Link>
              <Link isExternal href="https://x.com/engramnet">
                <IconButton
                  aria-label="Twitter"
                  icon={
                    <FontAwesomeIcon
                      icon={faTwitter as IconProp}
                      fontSize="1.25rem"
                    />
                  }
                />
              </Link>
            </ButtonGroup>
          </Stack>
          <VStack mt={0}>
            <Box>
              <Link isExternal href="https://stryatum.com/">
                {" "}
                Stryatum{" "}
              </Link>{" "}
              |
              <Link
                isExternal
                href="https://engramnet.io"
              >
                {" "}
                Engram Network{" "}
              </Link>{" "}
              |
              <Link
                isExternal
                href="https://engramlabs.technology"
              >
                {" "}
                Engramlabs Factory{" "}
              </Link>{" "}
              |
              <Link
                isExternal
                href="https://t.me/engramnet/"
              >
                {" "}
                Telegram{" "}
              </Link>{" "}
              |
              <Link isExternal href="mailto:dev@engramnet.io">
                {" "}
                Contact{" "}
              </Link>
            </Box>
            <Text
              align={{ base: "center", md: "left" }}
              fontSize="sm"
              color="subtle"
            >
              &copy; {new Date().getFullYear()} Engramlabs Technology. All
              rights reserved.
            </Text>
          </VStack>
        </Stack>
      </MotionContainer>
    </>
  );
}
