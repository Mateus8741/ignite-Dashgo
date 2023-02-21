import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function Logo() {
  const router = useRouter()

  if (router.pathname === '/') {
    return (
      <Text
        fontSize={['2xl', '5xl']}
        fontWeight="bold"
        letterSpacing="tight"
        mb={10}
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
    )
  }

  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  )
}
