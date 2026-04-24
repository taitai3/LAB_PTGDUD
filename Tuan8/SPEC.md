# Tuan8 – Chefify Search No Results Page

## Mô tả
Giao diện trang kết quả tìm kiếm của ứng dụng Chefify khi không tìm thấy kết quả nào phù hợp với từ khóa người dùng nhập vào.

---

## Cấu trúc giao diện

### 1. Navbar (Header)
- Logo Chefify (icon + text màu hồng) ở góc trái
- Thanh tìm kiếm ở giữa bên trái, hiển thị từ khóa đã tìm
- Menu điều hướng: What to cook | Recipes | Ingredients | Occasions | About Us
- Nút "Your Recipe Box" (màu hồng nhạt, icon bookmark)
- Avatar người dùng ở góc phải

### 2. Layout chính (2 cột)
#### Cột trái – Bộ lọc (Filters)
- Tiêu đề "FILTERS" với icon list
- **Type** (có thể thu gọn):
  - Checkbox: Pan-fried, Stir-fried, Grilled (checked-pink), Roasted (checked-pink), Sauteed, Baked, Steamed, Stewed
- **Time** (có thể thu gọn):
  - Range slider từ 30 phút đến 50 phút (màu hồng)
- **Rating** (có thể thu gọn):
  - 5 hàng rating từ 5 sao đến 1 sao
  - Hàng 3, 4, 5 có checkbox được check (màu hồng)
  - Hiển thị sao vàng và sao xám

#### Cột phải – Kết quả tìm kiếm
- Tiêu đề: `Sorry, no results were found for "cakescascsa"`
- Hình ảnh minh họa: hộp rỗng với kính lúp (nothing.png)
- Mô tả: "We have all your Independence Day sweets covered."
- Tags gợi ý: Sweet Cake | Black Cake | Pozole Verde | Healthy food

---

## Components

| Component | File | Mô tả |
|-----------|------|--------|
| Navbar | `src/components/Navbar.jsx` | Header toàn trang |
| FilterPanel | `src/components/FilterPanel.jsx` | Bộ lọc bên trái |
| FilterSection | `src/components/FilterSection.jsx` | Từng nhóm filter có thể thu gọn |
| NoResults | `src/components/NoResults.jsx` | Khu vực hiển thị không có kết quả |
| App | `src/App.jsx` | Layout chính, quản lý state tìm kiếm |

---

## State Management
- `searchQuery` (string): từ khóa tìm kiếm hiện tại
- `filters.types` (array): danh sách loại món ăn được chọn
- `filters.timeRange` (array [min, max]): khoảng thời gian nấu
- `filters.rating` (array): các mức rating được chọn
- `openSections` (object): trạng thái mở/đóng của từng section filter

---

## Assets sử dụng
| File | Dùng cho |
|------|----------|
| `chefify.png` | Logo Chefify trong Navbar |
| `avatar.png` | Avatar người dùng |
| `nothing.png` | Hình minh họa không có kết quả |
| `checkbox.png` | Checkbox chưa được chọn |
| `checkboxpink.png` | Checkbox đã được chọn (màu hồng) |
| `rating_1.png` → `rating_5.png` | Hiển thị rating sao |
| `list_filter.png` | Icon tiêu đề FILTERS |
| `slider.png` | Thumb của range slider |

---

## Màu sắc chính
| Biến | Giá trị | Dùng cho |
|------|---------|----------|
| `--pink` | `#E05C8A` / `#F06292` | Màu chủ đạo (logo, button, checkbox, slider) |
| `--pink-light` | `#FFF0F5` | Nền button "Your Recipe Box" |
| `--text-dark` | `#1A1A1A` | Tiêu đề chính |
| `--text-gray` | `#6B7280` | Text phụ |
| `--border` | `#E5E7EB` | Đường viền |
| `--tag-bg` | `#FFF0F5` | Nền tag gợi ý |

---

## Responsive
- Desktop: 2 cột (filter 280px + kết quả phần còn lại)
- Mobile: 1 cột, filter ẩn hoặc hiện theo toggle
