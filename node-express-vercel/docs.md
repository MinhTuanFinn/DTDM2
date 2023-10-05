# Triển khai Dự án Node.js với Express trên Vercel

Trong tài liệu này, chúng tôi sẽ hướng dẫn bạn cách triển khai một dự án Node.js sử dụng framework Express trên nền tảng Vercel. Điều này cho phép bạn triển khai ứng dụng web của mình một cách dễ dàng và hiệu quả.

## Bước 1: Chuẩn bị Dự án Node.js

Trước hết, hãy đảm bảo rằng bạn đã có một dự án Node.js sử dụng framework Express. Hãy đảm bảo bạn đã cài đặt Express và các gói phụ thuộc cần thiết trong dự án của bạn.

## Bước 2: Cấu hình Vercel

1. Truy cập trang web [Vercel](https://vercel.com/) và đăng nhập hoặc đăng ký tài khoản nếu bạn chưa có.
2. Sau khi đăng nhập, nhấp vào "Dự án Mới" để tạo một dự án mới.
3. Chọn dự án từ kho lưu trữ của bạn (ví dụ: GitHub, GitLab, Bitbucket) hoặc kéo và thả mã nguồn của bạn vào Vercel.
4. Vercel sẽ tự động phát hiện dự án Node.js và cung cấp một số tùy chọn cấu hình.

## Bước 3: Cấu hình Biến Môi trường

Nếu dự án của bạn sử dụng biến môi trường (environment variables), bạn cần phải cấu hình chúng trong Vercel. Điều này có thể thực hiện trong phần "Cài Đặt" của dự án trên Vercel.

## Bước 4: Tạo tệp `vercel.json`

Để Vercel hiểu cách triển khai ứng dụng Node.js của bạn, bạn cần tạo một tệp `vercel.json` trong thư mục gốc của dự án. Dưới đây là một ví dụ cơ bản của tệp `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ]
}
```

## Bước 5: Chèn Mã Code

Trong dự án Express của bạn, hãy chèn mã code sau vào tệp `index.js`:

```js
// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
```

Và chèn mã code sau vào tệp `routes/home.js`:

```js
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;
```

## Bước 6: Triển Khai Ứng Dụng

Sau khi đã cấu hình và chèn mã code, bạn có thể triển khai ứng dụng của mình bằng cách đẩy mã nguồn lên Vercel từ hệ thống quản lý mã nguồn của bạn (ví dụ: GitHub). Vercel sẽ tự động xây dựng và triển khai ứng dụng của bạn.

## Kết Luận

Bằng cách làm theo các bước trên, bạn đã triển khai thành công một dự án Node.js sử dụng framework Express trên nền tảng Vercel. Ứng dụng của bạn hiện đã sẵn sàng chạy trực tuyến và có thể truy cập qua URL được cung cấp bởi Vercel.
