import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import * as S from './register.style'
import { Button } from 'src/assets/styles/utilities'
import { path } from 'src/constants/path'
import InputText from 'src/components/InputText/InputText'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { register } from '../auth.slice'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

export default function Register() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      navigate(path.home)
    } catch (err) {
      if (err.status === 422) {
        for (let key in err.data) {
          setError(key, {
            type: 'server',
            message: err.data[key]
          })
        }
      }
    }
  }

  return (
    <S.Container className="container">
      <S.Left />
      <S.FormWrapper>
        <S.FormTitle>đăng ký</S.FormTitle>
        <S.Form onSubmit={handleSubmit(handleRegister)} novalidate>
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
          <S.FormControl>
            <Controller
              name="confirmedPassword"
              control={control}
              rules={{
                ...rules.confirmedPassword,
                validate: {
                  samePassword: v =>
                    v === getValues('password') || 'Mật khẩu không khớp.'
                }
              }}
              render={({ field }) => (
                <InputPassword
                  placeholder="Nhập lại mật khẩu"
                  name="confirmedPassword"
                  onChange={field.onChange}
                  value={getValues('confirmedPassword')}
                />
              )}
            />
            {errors.confirmedPassword && (
              <ErrorMessage message={errors.confirmedPassword.message} />
            )}
          </S.FormControl>
          <S.FormButton>
            <Button type="submit">Đăng ký</Button>
          </S.FormButton>
        </S.Form>
        <S.FormFooter>
          <span>Bạn đã có tài khoản?</span>
          <Link to={path.login} className="link">
            Đăng nhập
          </Link>
        </S.FormFooter>
      </S.FormWrapper>
    </S.Container>
  )
}
