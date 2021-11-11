# 1.Cài packages, setup css global và fonts

- Material để dùng 1 vài component nhỏ: `@material-ui/core, @material-ui/lab`
- Redux để quản lý state: `@reduxjs/toolkit, react-redux`
- React Router Dom cho Router: `react-router-dom`
- Axios để fetch API: `axios`
- classnames hỗ trợ set class cho component: `classnames`
- date-fns để quản lý ngày giờ: `date-fns`
- dompurify để render HTML an toàn, hạn chế tấn công XSS: `dompurify`
- lodash để dùng 1 số function hay: `lodash`
- node-sass để dùng scss cho CRA: `node-sass`.
  Lưu ý nếu bị báo lỗi dạng `Node Sass version 6.0.0 is incompatible with ^4.0.0 || ^5.0.0.` nghĩa là do Node Sass bản mới không tương thích, phải hạ bản node sass xuống.
  Ví dụ ở đây hạ xuống 5.0.0.
  ```bash
  yarn remove node-sass
  yarn add node-sass@5.0.0
  ```
- normalize.css để phục vụ reset CSS: `normalize.css`
- prop-types để checktype prop: `prop-types`
- react-router-dom để định tuyến đường dẫn: `react-router-dom`
- query-string để xử lý query params trên URL: `query-string`
- react-hook-form để xử lý Form: `react-hook-form`
- react-toastify để hiển thị thông báo dạng toast: `react-toastify`
- styled-components để CSS cho react: `styled-components`

```bash
yarn add @material-ui/core @material-ui/lab @reduxjs/toolkit react-redux react-router-dom react-router-dom axios classnames date-fns dompurify lodash node-sass normalize.css prop-types query-string react-hook-form react-toastify styled-components
```
