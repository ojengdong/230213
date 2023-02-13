let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownButton = document.querySelector(".dropdown-button");

// dropdownButton에게 "click" 이벤트리스너 추가
// 버튼이 활성 상태면 "active" 클래스 제거하고,
// 버튼이 비활성 상태면 "active" 클래스 추가한다.
dropdownButton.addEventListener("click", function(){
    // 1. toggle
    // dropdownMenu.classList.toggle("active");

    // 2.조건문
    if(this.active) {
        dropdownMenu.classList.remove("active");
    } else {
        dropdownMenu.classList.add("active");
    }

    // this.active : 현재 버튼의 활성상태
    // !this.active : 현재 버튼의 활성상태의 반대 값
    // 버튼이 비활성 상태라면 활성상태로,
    // 활성 상태라면 비활성 상태로 반전 시켜준다.
    this.active = !this.active;
});