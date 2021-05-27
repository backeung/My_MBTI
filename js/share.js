const url = 'https://hdcdvp.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle= '인테리어로 알아보는 나의 성격';
  const shareDes = '친구의 결과가 궁금하다면?';
  const shareImage = url + 'img/ima-' + resultAlt + '.png';
  const shareURL= url + 'page/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
    ]
  });
}
