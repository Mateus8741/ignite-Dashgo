import { Input } from '@/components/Form/Input'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting: isLoading, errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })

  async function handleSignIn(data: SignInFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    reset()
    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            {...register('email')}
            error={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt={6}
          size="lg"
          colorScheme="pink"
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
