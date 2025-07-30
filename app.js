function addItem() {
    const input = document.getElementById("itemInput");
    const itemText = input.value.trim();
    
    if (itemText === "") {
      alert("Iltimos, mahsulot nomini yozing!");
      return;
    }
  
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");
  
    // Mahsulot nomi
    const span = document.createElement("span");
    span.textContent = itemText;
  
    // O‘chirish tugmasi
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => ul.removeChild(li);
  
    // Bajarildi bosilganda chiziq tushsin
    span.onclick = () => li.classList.toggle("done");
  
    // Elementlarni qo‘shamiz
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);
  
    input.value = ""; // Input tozalansin
  }