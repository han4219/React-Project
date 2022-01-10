# 1.Guard

- Giúp ngăn chặn người dùng truy cập vào route (page) không được phép. ví dụ như trang admin, user hoặc là login và chưa login.

Ví dụ:

- Chưa đăng nhập: Có thể truy cập vào trang login, register, home nhưng không thể truy cập vào user
  => vì thế nên là tạo AuthenticatedGuard để bảo vệ cho user
- Đã đăng nhập: Có thể truy cập vào user nhưng không thể truy cập vào login, register trừ khi phải logout => tạo UnauthenticatedGuard để bảo vệ cho login, register.
