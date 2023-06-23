// import Person from "../model/Class.js";
// import Student from "../model/Class.js";
// import Employee from "../model/Class.js";
// import Customer from "../model/Class.js";
import * as res from "../model/Class.js";
import Listperson from "../model/ListpPerson.js";

let listperson = new Listperson();
listperson.laylocal();
document.getElementById("btnThemNguoiDung").addEventListener("click", () => {
  let arrInput = document.querySelectorAll(
    "#FormPerson input, #FormPerson select, #FormPerson textarea"
  );
  let employee = new res.default.Employee();
  for (let item of arrInput) {
    let { id, value } = item;
    employee[id] = value;
  }
  listperson.themNguoiDung(employee);
  listperson.renderTable();
  listperson.luulocal();
  document.getElementById("btnClose").click();
});

// ẩn nội dung input cho từng loại
function anInput() {
  let loaiNguoiDung = document.getElementByIdr("loai").value;
  switch (loaiNguoiDung) {
    case "loai1":
      document.querySelector(".employee").style.display = "none";
      document.querySelector(".custome").style.display = "none";
    case "loai2":
      document.querySelector(".custome").style.display = "none";
      document.querySelector(".student").style.display = "none";
    case "loai3":
      document.querySelector(".employee").style.display = "none";
      document.querySelector(".student").style.display = "none";
  }
}
// anInput();
//chỗ này anh phải dom tới select thực hiện sự kiện onchange chứ khong gọi như này, gọi như này nó sẽ chạy 1 lần duy nhất khi vừa mới load trang
window.xoaNguoiDung = (ma) => {
  listperson.xoaNguoiDung(ma);
};
window.layThongTin = (ma) => {
  listperson.layThongTin(ma);
};
document.getElementById("btnCapNhat").onclick = () => {
  let arrInput = document.querySelectorAll(
    "#FormPerson input, #FormPerson select, #FormPerson textarea"
  );
  let employee = new res.default.Employee();
  for (let item of arrInput) {
    let { id, value } = item;
    employee[id] = value;
  }
  listperson.capNhatThongTin(employee);
};

window.timKiemNguoiDung = (event) => {
  let value = event.target.value;
  listperson.timKiemNguoiDung(value);
};
window.locNguoiDung = () => {
  listperson.locNguoiDung();
  console.log(listperson.locNguoiDung());
};
// document.getElementsByTagName;
window.sapXep = (colNum) => {
  listperson.sapXep(colNum);
};
