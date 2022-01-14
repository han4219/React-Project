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

# 3.Filter

## 3.1. Tại sao phải đồng bộ filter lên url

- Chúng ta hoàn toàn có thể filter sản phẩm trên website của chúng ta mà url không hề thay đổi.
  Nhưng điều này chỉ xảy ra trên máy tính của chúng ta, nếu chúng ta refresh lại trang web sẽ bị mất hoàn toàn filter.
- Hoặc đơn giản nếu chúng ta gửi url cho 1 người khác thì họ không thấy được những gì mà máy chúng ta đang filter được.
- Vì thế cần đồng bộ filter lên trên url, khi url thay đổi thì filter cũng thay đổi

## 3.2 Thuật toán

1. Page `Home` sẽ lưu giữ state `filters` và tracking sự thay đổi của url. nếu url thay đổi thì cập nhật lại state `filters` và gọi lại api getProducts

2. State `filters` sẽ được chuyển xuống các component con như `SearchItemResult` hay `FilterPanel` để các component đó tiện xử lý điều hướng

3. Khi thực hiện hành động filter thì chỉ cần chuyển route với `navigate('')` hoặc `Link`. lúc này page `Home` sẽ tracking được url thay đổi và thực hiện cập nhật lại products và filters.

Ví dụ 1 URL là : `http://localhost:3000?limit=30&page=1&rating=3&sortBy=view`

thì lúc này filters sẽ là:

```js
const filters = {
  limit: 30,
  page: 1,
  rating: 3,
  sortBy: 'view'
}
```

# 4.Xử lý unauthorized (token hết hạn hoặc chưa đăng nhập nhưng thêm vào giỏ hàng)

1. Khi token hết hạn hoặc không gửi token => Server trả về status 401
2. Chúng ta sẽ tracking mỗi status server trả về.
   Nếu là status 401 thì sẽ dispatch một action unauthorize
3. Chúng ta cần tìm một component để tracking status này, nơi component luôn tồn tại xuyên suốt app của chúng ta => nên là dùng App component
