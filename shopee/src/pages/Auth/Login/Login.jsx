import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/assets/styles/utilities'
import { path } from 'src/constants/path'
import * as S from '../Register/register.style'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { Controller, useForm } from 'react-hook-form'
import InputText from 'src/components/InputText/InputText'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { useDispatch } from 'react-redux'
import { login } from '../auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'

export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const response = await dispatch(login(body))
      unwrapResult(response)
      navigate(path.home)
    } catch (error) {
      if (error.status === 422) {
        for (let key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }

  return (
    <S.Container className="container">
      <S.Left />
      <S.FormWrapper>
        <S.FormTitle>đăng nhập</S.FormTitle>
        <S.Form onSubmit={handleSubmit(handleLogin)} novalidate>
          <S.FormControl>
            <Controller
              name="email"
              control={control}
              rules={rules.email}
              render={({ field }) => (
                <InputText
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={field.onChange}
                  value={getValues('email')}
                />
              )}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </S.FormControl>
          <S.FormControl>
            <Controller
              name="password"
              control={control}
              rules={rules.password}
              render={({ field }) => (
                <InputPassword
                  placeholder="Mật khẩu"
                  name="password"
                  onChange={field.onChange}
                  value={getValues('password')}
                />
              )}
            />
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}
          </S.FormControl>
          <S.FormButton>
            <Button type="submit">Đăng nhập</Button>
          </S.FormButton>
        </S.Form>
        <S.FormFooter>
          <span>Bạn chưa có tài khoản?</span>
          <Link to={path.register} className="link">
            Đăng ký
          </Link>
        </S.FormFooter>
      </S.FormWrapper>
    </S.Container>
  )
}
