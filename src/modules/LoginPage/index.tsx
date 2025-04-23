'use client';

import { loginRequest } from '@/api/auth/requests';
import { TextField } from '@/components/form';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { HStack, VStack } from '@/components/utilities';
import { onMutateError } from '@/libs/common';
import { ROUTER } from '@/libs/router';
import { useUserStore } from '@/stores/UserStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { type AuthSchema, authSchema } from './libs/validators';

const LoginPage = () => {
  const router = useRouter();
  const { setUser, setIsWalletConnected } = useUserStore();

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      user_info: '',
      password: '',
    },
  });

  const { mutate: loginCredential, isLoading } = useMutation(loginRequest);

  const handleSubmit: SubmitHandler<AuthSchema> = async (formData) => {
    loginCredential(formData, {
      onSuccess: ({ access_token, refresh_token, access_token_ttl, refresh_token_ttl, user }) => {
        setCookie('access_token', access_token, { maxAge: access_token_ttl * 60 });
        setCookie('refresh_token', refresh_token, {
          maxAge: refresh_token_ttl * 60,
        });
        setUser(user);
        router.replace(ROUTER.HOME);
        toast.success('You have logged in successfully!');
      },
      onError: onMutateError,
    });
  };

  return (
    <VStack justify="center" align="center" className="mx-2 h-[100vh]">
      <div className="-z-10 fixed inset-0 bg-cover bg-repeat opacity-65" style={{ backgroundImage: "url('/images/background.png')" }}>
        <div className="h-full w-full" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}></div>
      </div>

      <VStack className="w-full max-w-[450px] rounded-lg border bg-[#FFFFFF26] px-6 py-6 shadow-card-2 md:px-8" spacing={16}>
        <HStack className="mb-3" pos="center">
          <Image width={400} height={232} src="/images/logo.png" alt="battle logo" className="h-auto w-[11rem]" />
        </HStack>

        <h1 className="mb-5 text-center font-semibold text-2xl md:text-3xl">Admin Login</h1>

        <FormWrapper form={form} onSubmit={handleSubmit}>
          <VStack spacing={32}>
            <TextField
              inputSize="md"
              required
              fullWidth
              control={form.control}
              name="user_info"
              label="Username"
              placeholder="Enter your username"
            />
            <TextField
              required
              fullWidth
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              inputSize="md"
            />
          </VStack>

          <HStack pos="center">
            <Button type="submit" className="mt-8 mb-2 px-10" loading={isLoading}>
              Sign in
            </Button>
          </HStack>
        </FormWrapper>
      </VStack>
    </VStack>
  );
};

export default LoginPage;
