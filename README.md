# 현대산업개발 HDC 디지털혁신팀 프로젝트(21.04)

## 1. 개요
ㄱ. 작성 목적: 마이호미 플랫폼 브랜딩
ㄴ. 프로모션 진행 시기: 2021/04/26~ 05/11(약 2주)
ㄷ. 타겟 대상:
- 마이호미앱 이용자- 전체 13개 단지(일산제외)
- 마이호미앱 비이용자(일반인)

## 2. 추진 배경
ㄱ.	배경
1)	컨텐츠: 앱 사용자들의 프로모션의 참여도가 저조하며, 매번 비슷한 내용의 이벤트를 진행하고 있음. 
2)	브랜드: 타 생활편의 플랫폼과 비교했을 때 “마이호미” 브랜드에 대한 인지도가 매우 낮음.
3)	O2O 생활편의: 이용률이 저조하며, 수수료 이익을 얻기 위한 목적이라는 고객불만이 다수 발생함.
4)	마이호미몰: 이용률이 저조하며, 해당 서비스의 고객 신뢰성이 낮음.

ㄴ.	목적
1)	참신한컨텐츠: 마이호미앱 이용자가 즐길 수 있는 참여형 컨텐츠를 제공하고자 함
2)	브랜드 이미지 전략: 프로모션을 통해 “마이호미”라는 브랜드 이미지를 소비자들이 인지할 수 있도록 함.
3)	O2O 생활편의: 업체 홍보 목적이라는 부정적인 인식을 개선하고자 함
4)	마이호미몰: 해당 기능을 앱 이용자에게 인지할 수 있도록 하여, 추후 사용을 유도하고자 함.

## 3. 진행 방법
(2번-ㄴ)의 목적을 이루기 위해 앱 사용자가 참여할 수 있는 1)컨텐츠를 자체적으로 개발하여 프로모션을 진행하고, 대외적인 목적 수립을 위한 2)디지털 마케팅과 내부적으로 인사이트를 얻기 위한 3)GA분석을 동시에 실시한다. 

ㄱ.	참여형 컨텐츠 자체개발
1)	컨셉: 인테리어로 알아보는 나의 성격
2)	마이호미몰 페이지 생성: 
- 마이호미 몰에서 판매하는 제품을 성격결과에 따라 개인 맞춤형으로 추천하여 마이호미몰 접속을 유도함. 
- 맞춤형 제품을 따로 모아 MBTI 프로모션 페이지 제작
3)	MBTI 웹페이지 개발
- javascript/css/html(Front-end Programming)으로 반응형 웹사이트 개발 후, Netlify를 통해 무료 배포(주소: https://hdcdvp.netlify.app/)
- 테스트 내용: 인테리어 논문 등을 참고하여 테스트의 신뢰성을 높임.
- 이미지 제작: 망고보드로 직접 제작, 마인드블룸 외주 요청.  
- API 연동: 카카오톡 메시지 API를 사용하여 사용자간 공유를 가능하게 한다.

ㄴ.	디지털 마케팅
1)	SNS(인스타그램/페이스북) 광고 게재
- 타겟 설정: 생활편의 플랫폼에 관심을 갖는 대상을 선정함(주택, 아파트, 가구, 재미, 웃음, 집 수리/인테리어, 친구, 엔터테인먼트, 집, 가족, 부동산, 행복, 유머, 친구관계 또는 가족 및 결혼/연애 상태)
-	타켓 지역 : 대한민국 전체
- 기간: 2021/04/26/15:43 ~ 2021/05/11/14:08(약 15일)
- 가격: 평균 11,000(원/일)*약15(일) =164,998원(부가세포함)
- 예상 일일 추산 도달수(일 11000원 기준): 1.4천~4.2천

ㄷ.	바이럴 마케팅
: 블로그나 카페, SNS등을 통해 소비자들에게 자연스럽게 정보를 제공하여 소비자들이 자발적으로 컨텐츠를 홍보하기 위해 널리 퍼뜨리도록 한다.
1)	네이버 카페: 맘카페 3곳, 인테리어 카페 1곳
2)	마이호미 공식 블로그: MBTI 게시글 업로드
3)	SNS: 개인 계정을 통해 홍보

ㄹ.	GA-4(Google Analytics-4)
: GA-4 웹로그 분석도구를 이용하여 프로모션 성과를 측정하고 개선하는데 사용한다. (*태그 설정: GTM 사용)
1)	MBTI 참여자 세부 분석
2)	목표: 컨텐츠 링크 클릭수 대비 마이호미몰&블로그 클릭수를 비교하여 관심있는 사람의 비율을 파악한다. 
3)	‘링크 클릭’ 이벤트 태그 설치를 통해 관심도 분석
- 링크1: 마이호미 블로그 url
- 링크2: 마이호미 몰 url
* HDC현대산업개발 단지 페이지 공개: 외부인도 로그인하여 이용할 수 있도록 문구 안내 + 비회원의 경우 마이호미 로그인 페이지로 연동되도록 마이호미몰 url 삽입
- 링크3: 카카오톡 공유하기(분석 포함X)

4. 결과
- MBTI 결과물: https://hdcdvp.netlify.app/
*세부 결과 비공개
