const main= document.querySelector("#main");
const qna= document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 10;
const select = [0,0,0,0,0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-'+ point +'.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  var recImg = document.createElement('img');
  const imgDiv2 = document.querySelector('#recImg');
  var imgURL2 = 'img/rec-'+ point +'.png';
  recImg.src = imgURL2;
  recImg.alt = point;
  recImg.classList.add('img-fluid');
  imgDiv2.appendChild(recImg);

  var advImg = document.createElement('img');
  const imgDiv3 = document.querySelector('#advImg');
  var imgURL3 = 'img/adv-'+ point +'.png';
  advImg.src = imgURL3;
  advImg.alt = point;
  advImg.classList.add('img-fluid');
  imgDiv3.appendChild(advImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation= "fadeOut 1s";
  qna.style.animation="fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation="fadeIn 1s";
    qna.style.animation="fadeIn 1s";
    setTimeout(()=> {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a= document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i= 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation= "fadeOut 0.5s";
      children[i].style.animation="fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i=0; i < target.length; i++){
        select[target[i]] +=1;
      }

      for(let i= 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q= document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint)*(qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation= "fadeOut 1s";
  main.style.animation="fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation="fadeIn 1s";
    qna.style.animation="fadeIn 1s";
    setTimeout(()=> {
      main.style.display = "none";
      qna.style.display = "block";

    }, 450)
    let qIdx=0;
    goNext(qIdx);
  }, 450);
}
