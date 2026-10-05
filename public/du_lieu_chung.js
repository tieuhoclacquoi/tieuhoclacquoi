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
  ngayCapNhat: "06/10/2026"
};

let DANH_SACH_GIAO_VIEN = [
  {
    id: "GV001",
    maGV: "GV001",
    hoTen: "Trần Phan Diễm Trang",
    tenDangNhap: "trandiem",
    matKhau: "lacquoi2026",
    khoiPhuTrach: "Khối 1",
    lopPhuTrach: "1A",
    chucVu: "Trưởng khối",
    laAdmin: false,
    trangThai: "hoatdong",
    thongTinCaNhan: {
      ngaySinh: "",
      cccd: "",
      ngayCapCCCD: "",
      noiCapCCCD: "",
      emailChinh: "",
      dienThoai: ""
    }
  },
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
    trangThai: "hoatdong",
    thongTinCaNhan: {
      ngaySinh: "",
      cccd: "",
      ngayCapCCCD: "",
      noiCapCCCD: "",
      emailChinh: CAIDAT_HE_THONG.gmailChinh,
      dienThoai: ""
    }
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
