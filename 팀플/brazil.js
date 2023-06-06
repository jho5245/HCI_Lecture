// 문서에서 darkmode id를 가지고 있는 요소를 가져와서 클릭 이벤트 등록
document.querySelector('#darkmode').addEventListener('click', () => {
    // 문서에서 body 요소를 가져와서 조건에 따라 다크/라이트 모드 속성 지정
    var body = document.querySelector('body')
    body.setAttribute('theme', body.getAttribute('theme') == 'dark' ? 'light' : 'dark')
})