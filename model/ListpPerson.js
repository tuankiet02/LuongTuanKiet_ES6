import * as res from "../model/Class.js";
import removeVietnameseTones from "../js/help.js";

export default class Listperson {
  constructor() {
    this.arrListPerson = [];
  }
  themNguoiDung(employee) {
    this.arrListPerson.push(employee);
  }
  renderTable = () => {
    let content = this.arrListPerson
      .map((item, index) => {
        let person = new res.default.Employee();
        Object.assign(person, item);

        let {
          maDoiTuong,
          tenNguoiDung,
          email,
          diaChi,
          loai,
          diemTrungBinh,
          tinhLuong,
        } = person;
        return `
      <tr>
        <td>${maDoiTuong}</td>
        <td>${tenNguoiDung}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${
          loai == "loai1" ? "Student" : loai == "loai2" ? "Employee" : "Custome"
        }</td>
    
        <td>
          <button class="bg-danger" onclick="xoaNguoiDung('${maDoiTuong}')">Xóa</button>
          <button class="bg-warning" onclick="layThongTin('${maDoiTuong}')">Cập Nhật</button>
        </td>
      </tr>
      `;
      })
      .join("");
    document.getElementById("tbodyDanhSach").innerHTML = content;
  };
  luulocal() {
    localStorage.setItem("arrListPerson", JSON.stringify(this.arrListPerson));
  }
  laylocal() {
    let personlocal = JSON.parse(localStorage.getItem("arrListPerson"));
    if (personlocal) {
      this.arrListPerson = [...personlocal];
      this.renderTable();
    }
  }
  xoaNguoiDung(ma) {
    let index = this.arrListPerson.findIndex((item) => item.maDoiTuong == ma);
    if (index != -1) {
      this.arrListPerson.splice(index, 1);
      this.renderTable();
      this.luulocal();
    }
  }
  layThongTin(ma) {
    let valuePerson = this.arrListPerson.find((item) => item.maDoiTuong == ma);
    if (valuePerson) {
      document.getElementById("btnThem").click();
      let arrInput = document.querySelectorAll(
        "#FormPerson input, #FormPerson select, #FormPerson textarea"
      );
      for (let item of arrInput) {
        let { id } = item;
        item.value = valuePerson[id];
      }
    }
  }
  capNhatThongTin(employee) {
    let index = this.arrListPerson.findIndex(
      (item) => item.maDoiTuong == employee.maDoiTuong
    );
    console.log(index);
    if (index != -1) {
      this.arrListPerson[index] = employee;

      this.renderTable();
      this.luulocal();
      document.getElementById("btnClose").click();
    }
  }

  timKiemNguoiDung(keyword) {
    let newKeyWord = removeVietnameseTones(keyword);
    let arrTimKiem = this.arrListPerson.filter((item) => {
      let ten = removeVietnameseTones(item.tenNguoiDung);
      console.log(ten);
      return ten.toLowerCase().trim().includes(newKeyWord.toLowerCase().trim());
    });
    console.log(arrTimKiem);
    this.renderTable();
  }
  locNguoiDung() {
    let loai = document.getElementById("selLoai").value,
      loairender = document.getElementById("loai").value,
      tableRender = document.querySelector(".table"),
      trRender = tableRender.getElementsByTagName("tr"),
      tdRender,
      textRender;
    for (let i = 0; i < trRender.length; i++) {
      tdRender = trRender[i].getElementsByTagName("td")[4];
      if (tdRender) {
        textRender = tdRender.textContent;
        if (loai == "all") {
          trRender[i].style.display = "";
        } else if (loai === textRender) {
          trRender[i].style.display = "";
        } else {
          trRender[i].style.display = "none";
        }
      }
    }
  }
  sapXep(colNum) {
    let rows,
      switching,
      i,
      x,
      y,
      shouldwitch,
      dir,
      switchcount = 0,
      table = document.querySelector(".table");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldwitch = false;
        x = rows[i].getElementsByTagName("TD")[colNum];
        y = rows[i + 1].getElementsByTagName("TD")[colNum];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldwitch = true;
            break;
          }
        }
      }
      if (shouldwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
