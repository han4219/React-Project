# 1.Guard

- Giúp ngăn chặn người dùng truy cập vào route (page) không được phép. ví dụ như trang admin, user hoặc là login và chưa login.

Ví dụ:

- Chưa đăng nhập: Có thể truy cập vào trang login, register, home nhưng không thể truy cập vào user
  => vì thế nên là tạo AuthenticatedGuard để bảo vệ cho user
- Đã đăng nhập: Có thể truy cập vào user nhưng không thể truy cập vào login, register trừ khi phải logout => tạo UnauthenticatedGuard để bảo vệ cho login, register.

# 2.Các lưu ý khi làm việc với redux - redux toolkit

- Các data dùng chung ở nhiều component khác nhau, nhiều page khác nhau thì nên lưu ở redux
- Các data chỉ dùng ở 1 chỗ thì nên lưu ở component.
- Khi get api thì nên thông qua sử dụng `createAsyncThunk` để có được những action như `.../fulfilled` hoặc `.../rejected` để dễ dàng tracking sử dụng sau này cho các tính năng như loading
- Không cần thiết phải xử lý mọi action mà `createAsyncThunk` trả về, chỉ xử lý những cái cần dùng. Cũng như không cần thiết phải lưu hết mọi thứ vào redux.
