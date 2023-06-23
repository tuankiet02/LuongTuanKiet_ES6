class Person {
  constructor() {
    this.tenNguoiDung = "";
    this.maDoiTuong = "";
    this.email = "";
    this.diaChi = "";
  }
}
class Student extends Person {
  constructor() {
    super(tenNguoiDung, maDoiTuong, email, diaChi);
    this.toan = "";
    this.ly = "";
    this.hoa = "";
  }
  diemTrungBinh = () => {
    return (this.toan + this.ly + this.hoa) / 3;
  };
}
class Employee extends Person {
  constructor() {
    super(tenNguoiDung, maDoiTuong, email, diaChi);
    this.soNgayLam = "";
    this.luongTheoNgay = "";
  }
  tinhLuong = () => {
    return this.soNgayLam * this.luongNgay;
  };
}
class Customer extends Person {
  constructor() {
    super(tenNguoiDung, maDoiTuong, email, diaChi);
    this.tenCongTy = "";
    this.triGiaHoaDon = "";
    this.danhGia = "";
  }
}
const res = { Person, Employee, Customer, Student };
export default res;
