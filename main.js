let ul = document.querySelector("ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let lis = ul.querySelectorAll("li");

ul.style.marginLeft = "-100%";

next.addEventListener("click", (e) => {
  e.preventDefault();

  // 이 다음 슬라이더로 이동을 시키는 코드작성
  ul.style.marginLeft = "-200%";
  ul.append(ul.firstElementChild);
});

prev.addEventListener("click", (e) => {
  e.preventDefault();

  // 이 다음 슬라이더로 이동을 시키는 코드작성
  ul.style.marginLeft = "0%";
  ul.prepend(ul.lastElementChild);
});

/*
DOM구조를 변경시키는 코드
부모요소의 안쪽 가장 뒤에 자식요소를 삽입하는 방법
부모요소명.append ( 자식요소 ) 

부모요소의 안쪽 가장 앞에 자식요소를 삽입하는 방법
부모요소명.prepend ( 자식요소 )

loop 슬라이더의 경우
프레임을 기준으로 양쪽에 적어도 하나 이상의 패널이 존재해야 합니다
따라서 적어도 3개의 패널이 있어야 loop가 가능합니다

loop를 시키려면 DOM구조를 변경시켜서
앞의 요소가 뒤로, 뒤의 요소가 앞으로 변경되어야 loop가 가능한데
이렇게 하였을때 DOM의 구조순서에 따라 설정하는 nth의 css코드는 적용할 수가 없습니다
nth로 적용할 경우 DOM구조가 변경되면 순서도 변경되어 고유한
스타일이 입혀지는게 아니라 변경되어 순서가 입혀진대로 css가 입혀지는 결과가 발생합니다

해결방법 1. 클래스를 매 프레임마다 적용해서 하는 방법,( 비추천 )
2. data 속성을 부여하여 적용시키는 방법 ( 추천 )

data속성이란??
개발자가 속성값으로 특정 정보를 은닉하는 방법입니다
DOM요소에는 영향을 주지 않습니다 data-이름을 자유롭게 작성 = "";
data 속성으로 지정하고, 값을 넣은 값은 개발자가 자유롭게 활용이 가능합니다
*/
