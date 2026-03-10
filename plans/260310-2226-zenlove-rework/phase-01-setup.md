# Phase 01: Setup Environment (Màu & Font)

Status: ✅ Complete

## Objective

Cập nhật thiết kế nền tảng: Bổ sung Font chữ nghệ thuật (Playfair Display, Great Vibes/Pinyon Script), chỉnh lại config màu sắc trong Tailwind (kem `#F1EFE7`, xanh rêu `#4D5E4D`). Tạo nền vân giấy chủ đạo.

## Implementation Steps

1. [x] Cài đặt gói font nếu chưa có bằng `next/font/google`.
2. [x] Sửa file `tailwind.config.ts`, bỏ các màu lòa loẹt cũ, thiết lập bảng màu Zenlove.
3. [x] Cập nhật `globals.css` background body với màu kem `#F1EFE7` và hình nền paper texture nếu cần.

## Files to Modify

- `tailwind.config.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`

---

Next Phase: Phase 02: Global Layout & Sticky Bar
