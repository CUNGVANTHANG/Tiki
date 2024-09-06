import BreadCrumb from "~/components/BreadCrumb";
import Layout from "./components/Content";
import Discount from "./components/Discount";
import Information from "./components/Information";
import RelatedSeaches from "./components/RelatedSeaches";
import Watched from "./components/Watched";

const category = [
  {
    item: { name: "English Books", href: "#" },
    subItem: [
      { name: "Art & Photography", href: "#" },
      { name: "Biographies & Memoirs", href: "#" },
      { name: "Business & Economics", href: "#" },
      { name: "How-to - Self Help", href: "#" },
      { name: "Children's Books", href: "#" },
      { name: "Dictionary", href: "#" },
      { name: "Education - Teaching", href: "#" },
      { name: "Fiction - Literature", href: "#" },
      { name: "Magazines", href: "#" },
      { name: "Medical Books", href: "#" },
      { name: "Parenting & Relationships", href: "#" },
      { name: "Reference", href: "#" },
      { name: "Science - Technology", href: "#" },
      { name: "History, Politics & Social Sciences", href: "#" },
      { name: "Travel & Holiday", href: "#" },
      { name: "Cookbooks, Food & Wine", href: "#" },
    ],
  },
  {
    item: { name: "Sách tiếng Việt", href: "#" },
    subItem: [
      { name: "Sách văn học", href: "#" },
      { name: "Sách kinh tế", href: "#" },
      { name: "Sách thiếu nhi", href: "#" },
      { name: "Sách kỹ năng sống", href: "#" },
      { name: "Nuôi dạy con", href: "#" },
      { name: "Sách Giáo Khoa - Giáo Trình", href: "#" },
      { name: "Sách Học Ngoại Ngữ", href: "#" },
      { name: "Sách Tham Khảo", href: "#" },
      { name: "Từ Điển", href: "#" },
      { name: "Sách Kiến Thức Tổng Hợp", href: "#" },
      { name: "Sách Khoa Học - Kỹ Thuật", href: "#" },
      { name: "Sách Lịch sử", href: "#" },
      { name: "Điện Ảnh - Nhạc - Họa", href: "#" },
      { name: "Truyện Tranh, Manga, Comic", href: "#" },
      { name: "Sách Tôn Giáo - Tâm Linh", href: "#" },
      { name: "Sách Văn Hóa - Địa Lý - Du Lịch", href: "#" },
      { name: "Sách Chính Trị - Pháp Lý", href: "#" },
      { name: "Sách Nông - Lâm - Ngư Nghiệp", href: "#" },
      { name: "Sách Công Nghệ Thông Tin", href: "#" },
      { name: "Sách Y Học", href: "#" },
      { name: "Tạp Chí - Catalogue", href: "#" },
      { name: "Sách Tâm lý - Giới tính", href: "#" },
      { name: "Sách Thường Thức - Gia Đình", href: "#" },
      { name: "Thể Dục - Thể Thao", href: "#" },
    ],
  },
  {
    item: { name: "Văn phòng phẩm", href: "#" },
    subItem: [
      { name: "Dụng Cụ Văn Phòng", href: "#" },
      { name: "Bút - Viết các loại", href: "#" },
      { name: "Bút Chì Màu - Bút Lông Màu - Sáp Màu", href: "#" },
      { name: "Dụng Cụ Học Sinh", href: "#" },
      { name: "Flashcards", href: "#" },
      { name: "Sổ Tay Các Loại", href: "#" },
      { name: "Tập vở các loại", href: "#" },
      { name: "Văn Hóa Phẩm", href: "#" },
      { name: "Thiết Bị Giáo Dục Trường Học", href: "#" },
      { name: "Balo Học Sinh - Cặp học sinh", href: "#" },
      { name: "Máy Tính Điện Tử", href: "#" },
      { name: "Lịch", href: "#" },
      { name: "Bút Kỹ Thuật", href: "#" },
      { name: "Sản phẩm về giấy", href: "#" },
      { name: "Thiết bị văn phòng", href: "#" },
      { name: "Phấn - Bảng viết - Lau bảng", href: "#" },
    ],
  },
  {
    item: { name: "Quà lưu niệm", href: "#" },
    subItem: [
      { name: "Thú Nhồi Bông", href: "#" },
      { name: "Bookmark", href: "#" },
      { name: "Bưu ảnh - Postcard", href: "#" },
      { name: "Quà tặng trang sức", href: "#" },
      { name: "Album", href: "#" },
      { name: "Mô hình trang trí", href: "#" },
      { name: "Sticker - Decal trang trí", href: "#" },
      { name: "Ly - Cốc", href: "#" },
      { name: "Kẹp Ảnh Gỗ", href: "#" },
      { name: "Hộp quà", href: "#" },
      { name: "Tượng", href: "#" },
      { name: "Móc Khóa", href: "#" },
      { name: "Đồng Hồ Cát", href: "#" },
      { name: "Quả Cầu Tuyết", href: "#" },
      { name: "Hộp Nhạc", href: "#" },
      { name: "Phụ kiện - Vật liệu trang trí", href: "#" },
      { name: "Quà tặng trang trí khác", href: "#" },
      { name: "Gương mini", href: "#" },
      { name: "Khung hình", href: "#" },
      { name: "Thiệp", href: "#" },
      { name: "Túi Quà", href: "#" },
    ],
  },
];

const Category = () => {
  return (
    <>
      <BreadCrumb route="Nhà Sách Tiki" />
      <Layout route="Nhà Sách Tiki" category={category} />
      <Discount />
      <Watched />
      <Information />
      <RelatedSeaches />
    </>
  );
};

export default Category;
