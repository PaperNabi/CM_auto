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
            const bing = ['복숭아 타르트 1개', '치즈케이크 1조각', '딸기가 얹어진 초콜릿 케이크 1조각', '레드 와인', 
            '논알콜 모히또', '칵테일 카시스 오렌지', '칵테일 롱 아일랜드 아이스티', '포션인 척 하는 과일 음료 딸기맛', 
            '포션인 척 하는 과일 음료 소다맛', '오렌지맛 탄산 음료', '사과맛 탄산 음료', '마카롱 5개입', 
            '슈크림 3개입', '잘 포장된 모듬 초밥 10피스', '레몬 소르베', '위스키 봉봉 10입', '다듬어지지 않은 보석 원석', 
            '보석 가공 도구', '사슴 모양 블루 사파이어 반지', '페리도트 장식 레이스 초커', '웨이브 모양 루비 팔찌', 
            '눈꽃 모양 옐로 토파즈 귀걸이', '특대형 고양이 인형', '고급 만년필', '말린 하얀 장미 책갈피', '강아지 무늬 튜브', 
            'LED안경', '고양이 동물 잠옷', '강아지 동물 잠옷', '토끼 동물 잠옷', '라벤더 향초', '분홍색 하트모양 선글라스', 
            '이 편지는 세타 세계로부터 시작되어…라고 적힌 행운의 편지', '이세계의 벚꽃잎 한 송이', '녹지 않는 작은 눈사람', 
            '유리병에 꼭 밀봉된 아루루 세계 공기', '가죽 목걸이', '딜도', '에그형 로터', '눈가리개', '채찍', '미약', '저온초', 
            '메이드복', '집사복', '수영복', '토끼 귀 머리띠', '고양이 귀 머리띠', '볼개그', '초박형 콘돔', '야광 콘돔', '바니옷', 
            '검은색 속옷', '바나나 패턴 속옷', '검은색 망사 속옷', '플레이용 가죽 수갑', '플레이용 가죽 족갑', '속박용 로프', 
            '플레이용 안대', '가터벨트', '토끼꼬리 애널 플래그', '역바니옷', '쉽게 지워지는 무성 매직']
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