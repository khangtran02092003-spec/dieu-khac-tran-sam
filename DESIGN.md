# Điêu khắc Trần Sâm — Design plan

## Ý tưởng chủ đạo: "Ánh sáng xiên"
Thợ phù điêu kiểm tra độ nổi bằng một ngọn đèn chiếu xiên (raking light): ánh sáng thấp, nghiêng,
làm từng đường đục hiện lên bằng bóng đổ. Website mượn đúng thao tác nghề đó.
Điểm táo bạo duy nhất: **hero là một bức phù điêu chìm trong bóng tối, có một vệt đèn xiên đi theo con trỏ**
(trên điện thoại / khi giảm chuyển động: vệt đèn đứng yên ở góc trên trái). Mọi thứ còn lại tiết chế.

## Màu (theo brief: xanh lá, trắng, kem)
| Tên | Hex | Vai trò |
|---|---|---|
| Rêu đá (moss-950) | #102119 | nền hero, footer, khối tối |
| Rêu sẫm (moss-800) | #1E3A2C | khối phụ tối, hover |
| Ngọc bích (jade-600) | #2E6B4E | nút chính, link |
| Đồng xanh (verdigris-300) | #9CC3AD | nhấn trên nền tối |
| Thạch cao (plaster) | #FBFAF6 | nền trắng chính |
| Đá vôi (limestone) | #EFE8D8 | nền kem, khối xen kẽ |
| Mực (ink) | #15211B | chữ |
Không dùng vàng/đất nung cho giao diện: ảnh tác phẩm đã mang sắc ấm (giả đồng, mạ vàng), UI giữ lạnh để ảnh nổi.

## Chữ
- Noto Serif Display (variable, wdth 62.5–100): tiêu đề, dùng bản hẹp (wdth ~70) cỡ lớn → gợi chữ khắc bia.
- Be Vietnam Pro: nội dung, giao diện. Thiết kế cho tiếng Việt, dấu không bị đè.
- Thang: 14 / 16 / 18 / 22 / 28 / 40 / 64 / clamp(56–136). Body 17px, line-height 1.6, max 68ch.
- Không chữ in hoa cho nhãn, không tô màu riêng một từ trong tiêu đề, không mũi tên "→" trong nút.

## Bố cục
- Lưới 12 cột, căn trái, lề rộng; ảnh tràn lề xen với khối chữ hẹp.
- Thẻ tác phẩm = **nhãn bảo tàng**: ảnh, rồi tên + chất liệu + kích thước bằng chữ nhỏ có kẻ một đường mảnh.
  Không bo góc, không đổ bóng.
- Quy trình 6 bước là chuỗi thật → được đánh số.

```
[HERO tối: phù điêu + đèn xiên | tên, 1 câu, 2 nút]
[Dòng tác phẩm: lưới so le ảnh dọc/ngang, nhãn bảo tàng]
[Quy trình: 6 bước, ảnh xưởng thật]
[Công trình tiêu biểu: bảo tàng — ảnh lớn + đoạn kể]
[Chất liệu: 5 mục ngắn]
[Tin tức: 3 bài mới]
[Báo giá: form ngắn trên nền kem]
```

## Chuyển động
Một khoảnh khắc: đèn xiên ở hero. Còn lại chỉ có phản hồi theo thao tác (mở lightbox, lọc, gửi form).
Tôn trọng prefers-reduced-motion.

## Tự rà soát so với mặc định chung
- Kem + serif dễ thành "trang sinh tự động" → nền chủ đạo là trắng thạch cao và rêu tối, kem chỉ là khối xen.
- Thẻ bo góc đổ bóng → thay bằng nhãn bảo tàng phẳng.
- Hero "số to + gradient" → thay bằng tương tác ánh sáng gắn với nghề.
