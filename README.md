This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
# Tài Liệu Frontend Dự Án Onboarding và Storage

## 1. Tổng Quan Dự Án
- **Tên dự án:** Onboarding và Storage.
- **Mô tả ngắn:** Monalia là trang web đặt phòng nghỉ dưỡng cao cấp tại Parga, Hy Lạp. Website cung cấp thông tin chi tiết về các suite và villa sang trọng, giúp khách hàng dễ dàng đặt chỗ với trải nghiệm trực tuyến mượt mà và giao diện thân thiện.

## 2. Cấu Trúc Thư Mục

Các thư mục chính và vai trò:
- `allroom/`, `book/`, `booknow/`, `nominee/`: Chứa các component button tái sử dụng để chuyển trang.
- `header/`, `nav/`: Chứa các thành phần điều hướng và giao diện chính của trang web.
- `suites/`, `villas/`, `room/`, `suitesRoom/`, `villaRoom/`, `section-1/`, `section-2/`: Hiển thị thông tin chi tiết về các loại phòng nghỉ.
- `location/`, `parga/`, `axerontasRiver/`, `locationChild/`: Cung cấp thông tin về vị trí và các điểm tham quan.
- `contact/`, `contactChild/`: Chứa các form và thông tin liên hệ.
- `gallery/`, `slideIMG/`: Hiển thị hình ảnh phòng, khu nghỉ dưỡng.

Thư mục `pages/` chứa các màn hình chính của ứng dụng, bao gồm:
- `home/`: Trang chủ của website.
- `anthea/`, `elea/`, `gaea/`, `ganili/`: Trang giới thiệu chi tiết về các loại phòng hoặc villa.
- `contact/`: Trang liên hệ, chứa form và thông tin liên hệ của Monalia.
- `gallery/`: Trang hiển thị hình ảnh về khu nghỉ dưỡng.
- `location/`: Trang thông tin về vị trí, bản đồ và các điểm tham quan gần đó.
- `monalia/`: Trang giới thiệu chung về khu nghỉ dưỡng Monalia.
- `room/`: Trang danh sách các loại phòng và chi tiết phòng.
- `termsConditions/`: Trang điều khoản và điều kiện sử dụng dịch vụ.

Các thư mục khác:
- `hooks/`: Các custom hook sử dụng xuyên suốt dự án.
- `api/`: Chứa các hàm gọi API liên quan đến các chức năng.
- `assets/`: Chứa các file hình ảnh, file lottie JSON.
- `config/`: Chứa các cấu hình như địa chỉ smart contract, settings cần thiết.
- `contract/`: Chứa các hàm smart contract và hàm gọi smart contract.
- `redux/`: Quản lý global state với Redux Toolkit.

## 3. Chức Năng Chính
1. **Hiển thị danh sách phòng và villa**: Cung cấp thông tin chi tiết về các suite, villa cao cấp, bao gồm mô tả, tiện nghi và hình ảnh.
2. **Trang đặt phòng**: Cho phép người dùng chọn loại phòng hoặc villa và thực hiện yêu cầu đặt phòng.
3. **Thông tin về vị trí và du lịch**: Cung cấp bản đồ, thông tin về khu vực xung quanh, các điểm du lịch nổi bật như Parga và sông Acheron.
4. **Thư viện hình ảnh**: Hiển thị ảnh về khu nghỉ dưỡng, bao gồm phòng, tiện nghi, không gian xung quanh.
5. **Trang liên hệ**: Cung cấp form để khách hàng gửi yêu cầu hỗ trợ hoặc đặt câu hỏi.
6. **Giới thiệu về Monalia**: Cung cấp thông tin tổng quan về khu nghỉ dưỡng, phong cách thiết kế và dịch vụ.
7. **Điều khoản và chính sách**: Hiển thị các điều khoản sử dụng dịch vụ, chính sách đặt phòng và hủy phòng.

## 4. Công Nghệ Sử Dụng
- **Frontend Framework:** Next.js + TypeScript
- **UI Library:** Bootstrap 5.3.3
- **State Management:** Redux Toolkit
- **Giao tiếp API:** Fetch API
- **Blockchain Integration:** ethers.js hoặc web3.js để tương tác với smart contract

## 5. Ghi Chú
- Dự án sử dụng cấu trúc thư mục rõ ràng, tách biệt các thành phần để dễ bảo trì.
- Sử dụng `useSelector` và `useDispatch` để quản lý state trong Redux.
- Cấu hình môi trường (`.env`) lưu trữ các biến quan trọng như `API_KEY`, `SMART_CONTRACT_ADDRESS`.
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
