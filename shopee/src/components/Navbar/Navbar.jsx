import React from 'react'
import './navbar.style.scss'
import useAuthenticated from 'src/hooks/useAuthenticated'

export default function Navbar() {
  const authenticated = useAuthenticated()
  return (
    <div className="wrapper">
      <div className="nav-left">
        <a href="">kênh người bán</a>
        <a href="">trở thành người bán shopee</a>
        <a href="">tải ứng dụng</a>
        <p className="connect">
          kết nối
          <a href="">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
        </p>
      </div>
      <div className="nav-right">
        <a href="" className="noti">
          <i className="far fa-bell"></i>thông báo
        </a>
        <a href="" className="support">
          <i className="far fa-question-circle"></i>hỗ trợ
        </a>
        <p href="" className="language">
          <i className="fas fa-language"></i>
          <select name="language">
            <option value="Tiếng Việt">Tiếng Việt</option>
            <option value="English">English</option>
          </select>
        </p>
        {authenticated && <div></div>}
        {!authenticated && (
          <div>
            <a href="" className="login">
              đăng nhập
            </a>
            <a href="" className="signup">
              đăng ký
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
