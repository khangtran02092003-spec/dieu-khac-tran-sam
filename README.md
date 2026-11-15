# Website Điêu khắc Trần Sâm

Website giới thiệu xưởng, làm bằng [Astro](https://astro.build) (trang tĩnh, tải nhanh, tốt cho Google) và có trang quản trị [Decap CMS](https://decapcms.org) để tự đăng tin và thêm tác phẩm mà không cần sửa code.

## Những việc cần làm trước khi đưa lên mạng

1. **Điền thông tin liên hệ.** Sửa file `src/data/site.json`, hoặc vào `/admin` → *Thông tin xưởng*:
   - `phone`: số hiển thị. `phoneHref`: số chỉ có chữ số, dùng cho nút bấm gọi.
   - `zalo`: số Zalo. Để trống thì nút Zalo bị ẩn.
   - `email`, `address`, `hours`, `mapEmbed` (đường dẫn nhúng Google Maps).
   - `stats`: số năm làm nghề, số công trình… Để trống giá trị thì số liệu đó không hiện. Website không tự bịa số.
2. **Viết câu chuyện xưởng** ở `src/pages/gioi-thieu.astro`, chỗ đoạn có chữ `[CẦN ĐIỀN]`.
3. **Đổi tên miền** trong `astro.config.mjs` (`site`) và `public/admin/config.yml` (`site_url`, `display_url`).
4. Repo GitHub: `khangtran02092003-spec/dieu-khac-tran-sam` (đã cấu hình trong `public/admin/config.yml`).
5. Tìm toàn bộ chỗ còn thiếu:
   ```bash
   grep -rn "CẦN ĐIỀN" src public
   ```

## Chạy trên máy

```bash
npm install
```
```bash
npm run dev
```
Mở http://localhost:4321. Muốn sửa nội dung trên máy qua giao diện quản trị, chạy thêm `npx decap-server` ở cửa sổ khác rồi mở http://localhost:4321/admin/.

## Đưa lên mạng (Netlify, miễn phí)

1. Đẩy thư mục này lên một repo GitHub.
2. Vào Netlify → *Add new site* → *Import from Git* → chọn repo. Cấu hình build đã có sẵn trong `netlify.toml`.
3. **Form báo giá:** Netlify Forms tự nhận hai form `bao-gia` và `bao-gia-nhanh` sau lần deploy đầu tiên. Vào *Site configuration → Forms → Form notifications* để cài email nhận thông báo khi có khách gửi.
4. **Trang quản trị `/admin`:**
   - Tạo OAuth App trên GitHub (*Settings → Developer settings → OAuth Apps*), callback URL là `https://api.netlify.com/auth/done`.
   - Trên Netlify: *Site configuration → Access & security → OAuth → Install provider → GitHub*, dán Client ID và Secret.
   - Người đăng bài cần tài khoản GitHub có quyền ghi vào repo.
5. Gắn tên miền riêng ở *Domain management*.

## Đăng bài và thêm tác phẩm

Vào `https://<tên-miền>/admin/`:
- **Tin tức:** tiêu đề, ngày, chủ đề, tóm tắt, ảnh bìa và nội dung. Đánh dấu *Bản nháp* nếu chưa muốn đăng.
- **Tác phẩm:** chọn dòng tác phẩm, tải ảnh lên (ảnh đầu là ảnh đại diện). Bật *Hiện ở trang chủ* để đưa lên mục Tác phẩm tiêu biểu.

Mỗi lần lưu, Netlify tự build lại và website cập nhật sau khoảng 1–2 phút.

**Ảnh tải qua `/admin`** được dùng nguyên bản. Nên nén trước cho nhẹ: ảnh ngang rộng khoảng 2000px, dưới 1 MB.

## Ảnh có sẵn

Ảnh trong website lấy từ thư mục Google Drive của xưởng (198 ảnh). Đã loại ra:
- 1 ảnh giấy tờ cá nhân (tờ khai cư trú) bị lẫn trong thư mục *đầu tượng chân dung*. **Nên xóa ảnh này khỏi Drive** vì thư mục đang để công khai.
- 2 ảnh mặt nạ nhân vật hoạt hình có bản quyền.

Chú thích tác phẩm không ghi tên thương hiệu khách hàng (bia, mỹ phẩm, văn phòng). Nếu được khách đồng ý, có thể thêm vào trường *Công trình / địa điểm* của tác phẩm.

Muốn thêm hàng loạt ảnh mới qua code (không qua /admin):
1. Bỏ ảnh vào `_raw/<nhóm>/<nhóm>-NN.jpg`.
2. Khai báo tác phẩm trong `scripts/works-def.mjs`.
3. Chạy `npm run images` để tạo ảnh WebP nhiều kích thước, rồi `node scripts/seed-works.mjs` để tạo file tác phẩm mới. Script không ghi đè file đã có.

## Cấu trúc

```
src/
  pages/            các trang (trang chủ, tac-pham, dich-vu, quy-trinh, tin-tuc, gioi-thieu, lien-he)
  content/tac-pham/ mỗi tác phẩm là một file .md (sửa qua /admin)
  content/tin-tuc/  mỗi bài viết là một file .md (sửa qua /admin)
  data/site.json    thông tin liên hệ (sửa qua /admin)
  data/categories.ts  mười dòng tác phẩm, quy trình, chất liệu, câu hỏi thường gặp
  components/       RakingHero (hero đèn xiên), QuoteForm, Gallery…
public/images/      ảnh đã tối ưu (WebP)
public/admin/       trang quản trị Decap CMS
DESIGN.md           ý tưởng thiết kế, bảng màu, chữ
```
