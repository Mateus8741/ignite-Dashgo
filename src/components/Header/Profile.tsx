import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Tavares</Text>
          <Text color="gray.300" fontSize="small">
            test@test.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Mateus Tavares"
        src="https://github.com/Mateus8741.png"
      />
    </Flex>
  )
}
