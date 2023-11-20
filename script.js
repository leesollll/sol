function addToCart() {
  // 여기에 상품을 장바구니에 추가하는 로직을 추가하세요.
  const cartItemsElement = document.getElementById('cart-items');
  const productTitle = document.querySelector('.product h2').innerText;
  const listItem = document.createElement('li');
  listItem.innerText = productTitle;
  cartItemsElement.appendChild(listItem);
}

function checkout() {
  // 여기에 주문 처리 로직을 추가하세요.
  alert('주문이 완료되었습니다!');
}
let cartItems = [];

function addToCart() {
  const productTitle = document.querySelector('.product h2').innerText;
  cartItems.push(productTitle);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  // 기존의 장바구니 목록을 비우고 새로 갱신
  cartItemsElement.innerHTML = '';
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    cartItemsElement.appendChild(listItem);
  });
}

function checkout() {
  // 여기에 주문 처리 로직을 추가하세요.
  if (cartItems.length === 0) {
    alert('장바구니가 비어있습니다!');
  } else {
    alert('주문이 완료되었습니다!\n' + '주문 내역: ' + cartItems.join(', '));
    cartItems = []; // 주문 후 장바구니 비우기
    updateCart(); // 장바구니 화면 업데이트
  }
}
// ... (이전 코드) ...

function signup(event) {
  event.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  
  // 서버로 회원가입 요청을 보내는 부분을 여러분의 실제 서버 코드로 대체해야 합니다.
  // 아래는 가상의 서버 응답을 나타낸 것입니다.
  alert(`가상의 서버 응답: 회원가입 성공!\n사용자명: ${username}\n비밀번호: ${password}`);
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  // 서버로 로그인 요청을 보내는 부분을 여러분의 실제 서버 코드로 대체해야 합니다.
  // 아래는 가상의 서버 응답을 나타낸 것입니다.
  alert(`가상의 서버 응답: 로그인 성공!\n사용자명: ${username}\n비밀번호: ${password}`);
}

// ... (이전 코드) ...
// ... (이전 코드) ...

function addToCart(productTitle) {
  cartItems.push(productTitle);
  updateCart();
}

// ... (이전 코드) ...
