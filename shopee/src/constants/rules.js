import isEmail from '../utils/helper'

export const rules = {
  email: {
    required: {
      value: true,
      message: 'Vui lòng điền vào mục này.'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 5 - 160 ký tự.'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài từ 5 - 160 ký tự.'
    },
    validate: {
      email: v => isEmail(v) || 'Email không đúng định dạng.'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng điền vào mục này.'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6 - 20 ký tự.'
    },
    maxLength: {
      value: 20,
      message: 'Mật khẩu có độ dài từ 6 - 20 ký tự.'
    }
  },
  confirmedPassword: {
    required: {
      value: true,
      message: 'Vui lòng điền vào mục này.'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6 - 20 ký tự.'
    },
    maxLength: {
      value: 20,
      message: 'Mật khẩu có độ dài từ 6 - 20 ký tự.'
    }
  }
}
