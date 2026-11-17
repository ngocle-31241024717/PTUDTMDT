// 1) Đổi giao diện sáng/tối (không lưu, chỉ trong phiên xem)
var themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  var root = document.documentElement;
  var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var current = root.getAttribute("data-theme") || (dark ? "dark" : "light");
  root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

// 2) Ảnh đại diện: nếu ảnh trực tuyến lỗi thì ẩn ảnh
var avatar = document.getElementById("avatar");
avatar.addEventListener("error", function onErr() {
  var fb = avatar.getAttribute("data-fallback");
  if (fb && avatar.src.indexOf(fb) === -1) {
    avatar.src = fb;
  } else {
    avatar.removeEventListener("error", onErr);
    avatar.style.visibility = "hidden";
  }
});

// 3) Nhắc những chỗ còn chưa điền (class "todo")
var todos = document.querySelectorAll(".todo");
var banner = document.getElementById("todoBanner");
if (todos.length > 0) {
  banner.textContent = "⚠ Còn " + todos.length + " chỗ chưa điền thông tin (khung vàng nét đứt). Điền xong thì xóa class=\"todo\".";
  banner.style.display = "block";
}

// 4) Xem số từ phần tự đánh giá khi mở trang với đuôi ?check
if (location.search.indexOf("check") !== -1) {
  var text = document.getElementById("selfEval").textContent.trim();
  var words = text === "" ? 0 : text.split(/\s+/).length;
  var box = document.getElementById("wordCount");
  box.style.display = "block";
  box.textContent = "Số từ hiện tại: " + words + " (yêu cầu khoảng 100–150 từ)";
}
