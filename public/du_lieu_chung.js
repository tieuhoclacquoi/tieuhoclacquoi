// =====================================================
// DỮ LIỆU CHUNG — SỬA 1 NƠI = ÁP DỤNG TOÀN BỘ HỆ THỐNG
// =====================================================
const CAIDAT_HE_THONG = {
  tenTruong: "TRƯỜNG TIỂU HỌC LẠC QUỚI",
  slogan: "Tất cả vì học sinh thân yêu",
  namHoc: "2026-2027",
  gmailChinh: "quanly@lacquoi.edu.vn",
  gmailPhu: "tinhthuong.lacquoi@gmail.com",
  thongDiep: "Mỗi thầy cô là một tấm gương đạo đức, tự học và sáng tạo.",
  quyetNghi: "KỸ CƯƠNG – TÌNH THƯƠNG – TRÁCH NHIỆM",
  ngayCapNhat: "07/10/2026",
  // === Link thư mục chung các khối ===
  linkKhoi1: "https://drive.google.com/drive/folders/15UlsyIjHv0dVvSWAXDMNNQC87l40vLDi", // Bạn điền link thư mục KHỐI 1 vào đây
  linkKhoi2: "https://drive.google.com/drive/folders/1WQEy2v4FiYoA7ZNbLutBin22NQToqwl8", // Bạn điền link thư mục KHỐI 2 vào đây
  linkKhoi3: "https://drive.google.com/drive/folders/11Yx-QWPINPsVg3wCm1uiLK4-Uep3CN4S", // Bạn điền link thư mục KHỐI 3 vào đây
  linkKhoi4: "https://drive.google.com/drive/folders/12y8ctjYCkmh66OZeRfet4AyNiz56GGTI", // Bạn điền link thư mục KHỐI 4 vào đây
  linkKhoi5: "https://drive.google.com/drive/folders/1db9rarIEFxKukHUwgLVpsvZajiGKpp17"  // Bạn điền link thư mục KHỐI 5 vào đây
  
  // === Link thư mục tổng trường ===
  linkTruong: "https://drive.google.com/drive/folders/1SA77KUhA24fizpGUjqjqkkwPq0voUwA6"
};

let DANH_SACH_GIAO_VIEN = [
  // === KHỐI 1 ===
  {
    id: "GV001",
    maGV: "GV001",
    hoTen: "Trần Phan Diễm Trang",
    tenDangNhap: "trandiem",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 1",
    lopPhuTrach: "1A",
    chucVu: "Trưởng khối",
    linkDriveHoSo: "", // Giáo viên tự tạo → tự điền
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV002",
    maGV: "GV002",
    hoTen: "Nguyễn Thị Thanh Thảo",
    tenDangNhap: "thaont",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 1",
    lopPhuTrach: "1B",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV003",
    maGV: "GV003",
    hoTen: "Lê Thị Yến Thiên",
    tenDangNhap: "thienly",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 1",
    lopPhuTrach: "1C",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV004",
    maGV: "GV004",
    hoTen: "Nguyễn Văn Sang",
    tenDangNhap: "sangnv",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 1",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV005",
    maGV: "GV005",
    hoTen: "Ngô Ái Liên",
    tenDangNhap: "lienngo",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 1",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },

  // === KHỐI 2 ===
  {
    id: "GV006",
    maGV: "GV006",
    hoTen: "Trần Thị Ngọc Thơ",
    tenDangNhap: "thottn",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 2",
    lopPhuTrach: "2A",
    chucVu: "Trưởng khối",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV007",
    maGV: "GV007",
    hoTen: "Lê Thị Thúy Loan",
    tenDangNhap: "loanlt",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 2",
    lopPhuTrach: "2B",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV008",
    maGV: "GV008",
    hoTen: "Lê Thị Tuấn Kha",
    tenDangNhap: "khaletk",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 2",
    lopPhuTrach: "2C",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV009",
    maGV: "GV009",
    hoTen: "Trần Quốc Đạt",
    tenDangNhap: "dattq",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 2",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV010",
    maGV: "GV010",
    hoTen: "Lý Vĩnh An",
    tenDangNhap: "anlyv",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 2",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },

  // === KHỐI 3 ===
  {
    id: "GV011",
    maGV: "GV011",
    hoTen: "Thạch Tuyết Xuân",
    tenDangNhap: "xuanthach",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 3",
    lopPhuTrach: "3A",
    chucVu: "Trưởng khối",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV012",
    maGV: "GV012",
    hoTen: "Trần Thị Mỹ Linh",
    tenDangNhap: "linhtm",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 3",
    lopPhuTrach: "3B",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV013",
    maGV: "GV013",
    hoTen: "Trình Thị Bích Phượng",
    tenDangNhap: "phuongttb",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 3",
    lopPhuTrach: "3C",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV014",
    maGV: "GV014",
    hoTen: "Phan Thị Kim Loan",
    tenDangNhap: "loanptk",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 3",
    lopPhuTrach: "3D",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV015",
    maGV: "GV015",
    hoTen: "Nguyễn Chí Tâm",
    tenDangNhap: "tamnc",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 3",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },

  // === KHỐI 4 ===
  {
    id: "GV016",
    maGV: "GV016",
    hoTen: "Lưu Thị Cẩm Loan",
    tenDangNhap: "loanltc",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 4",
    lopPhuTrach: "4A",
    chucVu: "Trưởng khối",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV017",
    maGV: "GV017",
    hoTen: "Mai Thị Thảo Ngân",
    tenDangNhap: "nganmtt",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 4",
    lopPhuTrach: "4B",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV018",
    maGV: "GV018",
    hoTen: "Trình Quốc Sĩ",
    tenDangNhap: "sittq",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 4",
    lopPhuTrach: "4C",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV019",
    maGV: "GV019",
    hoTen: "Nguyễn Thị Bảo Trang",
    tenDangNhap: "trangntb",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 4",
    lopPhuTrach: "4D",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV020",
    maGV: "GV020",
    hoTen: "Lê Văn Phương",
    tenDangNhap: "phuonglv",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 4",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV021",
    maGV: "GV021",
    hoTen: "Trần Thị Thanh Ngọc",
    tenDangNhap: "ngocttt",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 4",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },

  // === KHỐI 5 ===
  {
    id: "GV022",
    maGV: "GV022",
    hoTen: "Vương Văn Thanh",
    tenDangNhap: "thanhvv",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 5",
    lopPhuTrach: "5A",
    chucVu: "Trưởng khối",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV023",
    maGV: "GV023",
    hoTen: "Trần Thị Quí",
    tenDangNhap: "quitt",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 5",
    lopPhuTrach: "5B",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV024",
    maGV: "GV024",
    hoTen: "Nguyễn Ngọc Khải",
    tenDangNhap: "khaing",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 5",
    lopPhuTrach: "5C",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV025",
    maGV: "GV025",
    hoTen: "Ngô Văn Thơm",
    tenDangNhap: "thomnv",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 5",
    lopPhuTrach: "5D",
    chucVu: "Giáo viên",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV026",
    maGV: "GV026",
    hoTen: "Phan Thị Linh",
    tenDangNhap: "linhpt",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 5",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },
  {
    id: "GV027",
    maGV: "GV027",
    hoTen: "Nguyễn Văn Ngoan",
    tenDangNhap: "ngoannv",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 5",
    lopPhuTrach: "",
    chucVu: "Giáo viên bộ môn",
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: "", dienThoai: "" }
  },

  // === TÀI KHOẢN QUẢN TRỊ ===
  {
    id: "ADM001",
    maGV: "ADM001",
    hoTen: "Quản trị Hệ thống",
    tenDangNhap: "quantri",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Tất cả khối",
    lopPhuTrach: "",
    chucVu: "Quản trị viên",
    laAdmin: true,
    linkDriveHoSo: "",
    trangThai: "hoatdong",
    thongTinCaNhan: { ngaySinh: "", cccd: "", ngayCapCCCD: "", noiCapCCCD: "", emailChinh: CAIDAT_HE_THONG.gmailChinh, dienThoai: "" }
  }
];

let NHAT_KY_HOAT_DONG = [];

// === Hàm ghi nhật ký ===
function ghiNhatKy(nguoiDung, hanhDong, chiTiet) {
  const ghiChu = {
    thoiGian: new Date().toLocaleString("vi-VN"),
    nguoiThucHien: nguoiDung,
    hanhDong: hanhDong,
    chiTiet: chiTiet
  };
  NHAT_KY_HOAT_DONG.unshift(ghiChu);
  localStorage.setItem("nhatKy", JSON.stringify(NHAT_KY_HOAT_DONG));
}

// === Lưu dữ liệu ra localStorage ===
function luuDuLieu() {
  localStorage.setItem("danhSachGV", JSON.stringify(DANH_SACH_GIAO_VIEN));
  localStorage.setItem("caiDat", JSON.stringify(CAIDAT_HE_THONG));
}

// === Tải dữ liệu từ localStorage ===
function taiDuLieu() {
  const dsGV = localStorage.getItem("danhSachGV");
  const nhatKy = localStorage.getItem("nhatKy");
  if (dsGV) DANH_SACH_GIAO_VIEN = JSON.parse(dsGV);
  if (nhatKy) NHAT_KY_HOAT_DONG = JSON.parse(nhatKy);
}

// === Khởi tạo ===
taiDuLieu();
