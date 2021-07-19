const Mastodon = require('mastodon-api');
const env = require('dotenv');
env.config();
console.log("Mastodon Bot starting...");


const M = new Mastodon({
    client_key: '99J6VbJT3uGHbkaRHtOF4Bz-CkxGtBsrUChavyW7YXs',
    client_secret: 'rui6BsrBxCaD5WgtT8uDAPhWXbGEn2geULETbntEihU',
    access_token: 'Sw9wBkGYW3bJ_D_ShvZ5M6ldiqy2tBmHafKnOpq3_jY', 
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://occm.masto.host/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
  })

const listener = M.stream('streaming/user')
listener.on('error', err => console.log(err))

listener.on('message', msg => {
    // fs.writeFileSync('data.json', JSON.stringify(data), ull, 2));
    // console.log('user event');
    // console.log(msg);
    if (msg.event === 'notification') {
        if (msg.data.type === 'mention') {
            const regex1 = /(test2)/i;
            const acct = msg.data.account.acct;
            const id = msg.data.status.id;
            const content = msg.data.status.content;
            const bing = ['훈제 달걀 5개입', '딸기 우유 한 팩', '초코 우유 한 팩', '칵테일 깔루아 밀크', '칵테일 블러디 메리', '고량주', '유명 메이커 탄산수', '커스터드 푸딩', '초콜릿 무스', '크림 수플레', '딸기 바나나 크레페', '아이스크림 파르페', '대왕 잉어엿', '막대 사탕 3개', '고급 초콜릿 3개입', '마른 안주 세트', '매끈매끈한 애완 돌멩이', '졸업식 날 선물 받은 교복 상의 두 번째 단추', '유리병에 담긴 종이학 10마리', '반짝반짝! 마법소녀 지팡이', '오이가 들어있는 바나나 케이스', '어린이 마술 도구 세트', '고급 만년필', '마사지용 아로마 오일', '무드등', '로즈마리향 디퓨저', '10대들 사이에서 인기있는 에O 운동화', '시트러스향 향수', '학접기용 종이 100매', '책:: 유명한 헌터가 되는 법', '해바라기 편지지 3매', '삼각형 패턴 무늬 장우산', '휴대용 USB 선풍기', '새하얀 베일', '야광 팔찌', '픽셀 선글라스', '공룡 잠옷', '커플 파자마:노란색', '커플 파마자:파란색', '커플 파자마:핑크색', '상어 모양 튜브', '특대 곰인형', '로봇 강아지', '본디지용 테이프', '목걸이에 걸 수 있는 목줄', '패들', '깃털 막대', '러즈벨', '돌기형 핑거 콘돔', '우머나이저', '핫젤', '재갈', '애널비즈', '섹시 란제리', '딸기향 콘돔 5개입', '가터벨트', '가터링', '키위 패턴 속옷', '미약이 들어간 시원한 음료 한 잔', '힘이 불끈! 정력제']
            const star = bing[Math.floor(Math.random()* bing.length)]
            if (regex1.test(content)) {
                M.post(`@${acct} 멘션 반응 테스트 `)
                  if (error) console.error(error);
                  else console.log(`mention ${id} ${data.id}`)
            }
            const regex2 = /거래/i;
            if (regex2.test(content)) {
                console.log('가챠')
                const reply = `@${acct} 하얀 별의 계약자가 당신의 대가를 받더니 ${star} 이/가 나타났다. `
                toot(reply);
            }
            const regex30 = /요정의가루확인/i;
            if (regex30.test(content)) {
                console.log('요정의 가루 확인')
                toot (`@${acct}요정의 가루를 확인했다.\r금빛으로 반짝거리는 가루, 하얀 별 계약자에게 가져가면 한번 더 물건을 줄지도?`)
            }
            const regex31 = /미약확인/i;
            if (regex31.test(content)) {
                console.log('미약 확인')
                toot (`@${acct}미약을 확인했다.\r헌터에게도 효과가 있는 강력한 미약이다. 겉으로 보기에는 평범한 우유 같다.`)
            }
            const regex32 = /슬라임젤리확인/i;
            if (regex32.test(content)) {
                console.log('슬라임 젤리 확인')
                toot (`@${acct}슬라임 젤리를 확인했다.\r말랑말랑, 몰랑몰랑한 슬라임 젤리! 먹으면 안 됩니다.`)
            }
            const regex33 = /촉수딜도확인/i;
            if (regex33.test(content)) {
                console.log('촉수 딜도 확인')
                toot (`@${acct}촉수 딜도를 확인했다.\r끈적한 촉수의 체액이 묻어나 있는…딜도? 사용 시 깨끗하게 닦아 쓰자.`)
            }
            const regex35 = /가공되지않은보석확인/i;
            if (regex35.test(content)) {
                console.log('가공되지 않은 보석 확인')
                toot (`@${acct}가공되지 않은 보석을 확인했다.\r보석보다는 돌멩이에 가깝다. 안에 어떤 보석이 들어있는지는 세공해봐야 알 수 있다.`)
            }
            const regex36 = /고양이귀머리띠확인/i;
            if (regex36.test(content)) {
                console.log('고양이귀머리띠확인')
                toot (`@${acct}고양이 귀 머리띠를 확인했다.\r당신이 아는 그 머리띠. 기분에 따라서 자연스럽게 움직이는 기능이 있다.`)
            }
            const regex37 = /에그형로터확인/i;
            if (regex37.test(content)) {
                console.log('에그형로터확인')
                toot (`@${acct}에그형 로터를 확인했다.\r게이트에서 왜 이런 물건이…? 라고 생각했지만 마나로 작동한다. 위잉.`)
            }
            const regex38 = /금화확인/i;
            if (regex38.test(content)) {
                console.log('금화 확인')
                toot (`@${acct}금화를 확인했다.\r반짝반짝 빛이 나고, 깨물어보면 잇자국이 나는 진짜 금!`)
            }
        }
    }
});

  function toot(content) {
  const params = {
      status: content
  }
 M.post('statuses', params, (error,data) => {
     if(error) {
         console.error(error);
     } else {
         //fs.writeFileSync('data.json', JSON.stringify(data), ull, 2));
         //console.log(data);
         console.log(`ID: ${data.id} and timestamp: ${data.created_at}`);
         console.log(data.content);

        }
   });
}