const Mastodon = require('Mastodon-api');
const env = require('dotenv');
env.config();
console.log("Mastodon Bot starting...");


const M = new Mastodon({
    client_key:'6Bf0m82xCrH-5EIgAdqmU2yH4C0mInQ1KoJp-64W2BA',
    client_secret: 'kxTruLNYlkI4zgAhwVHgNKi8EjacHsR_JV1UNryObXo',
    access_token: 'PJCEco_FE7sRq33MOGbGc9E_-eC-9lD5EkENS3CF_Ec',
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
            const bing = ['거인의 발가락', '도금된 사과', '통돼지 구이', '꿀에 절인 사과', '꿀에 절인 포도', '바닷바람을 맞으며 성장한 통통한 올리브 열매', '훈제 연어', '식초에 절인 청어', '포도주', '벌꿀주', '버터에 버무린 으깬 감자', '건포도가 들어간 호밀빵', '무화과 3알', '석류 6알', '양젖으로 만든 치즈', '청어 절임', '황금 사과로 만들었다는 사과잼(황금 사과는 안 들어있다.', '염소 뿔에 담긴 염소 고기 스튜', '나무 막대기', '철봉', '나무판', '빈 병', '숯돌 조각', '안드바리의 도금 반지(매일 도금된 돌멩이가 주변에 생긴다)', '생물 제조 키트(생물 탄생을 위한 생명 별도)', '화려하게 장식된 예식용 검', '반짝이는 보석 한 무더기', '켈트 매듭 장식끈', '동물의 뿔로 만든 나팔', '닭깃털로 만든 날개옷', '황금을 얇게 뽑아 만든 양털', '거미줄로 만든 실타래', '반짝이는 황금잔', '행운을 부른다는 토끼발', '스톤헨지를 본 딴 미니어처', '룬문자가 적힌 부적', '마법의 곰 가죽', '다른 지방의 신화 경전', '동물의 뿔로 만든 활과 화살', '늑대 머리탈', '황금으로 만든 종', '동물의 뼈로 만든 주사위', '화톳불의 신이 내려준 영원히 타오르는 불꽃', '제물로 바쳐진 흰 암소', '밀랍으로 엮은 인조 날개(태양빛에 닿으면 녹아내린다)', '수갑 재료로 진상한 여자의 수염과 산의 뿌리 키트', '마법 진동 딜도', '환상적으로 빛나는 미약', '애널 비즈', '마법 산란 딜도', '산란 딜도 별첨(마법으로 만드는 산란용 알)', '튼튼한 밧줄', '본뜬 양물이 고정된 의자', '최면 동전', '토끼 귀 머리띠', '고양이 귀 머리띠' ,'강아지 귀 머리띠', '양 뿔과 귀 머리띠' , '토끼 꼬리 애널 플러그', '고양이 꼬리 애널 플러그', '강아지 꼬리 애널 플러그', '양 꼬리 애널 플러그', '향초', '미약이 함유된 향유', '에그형 마법 진동 로터', '반투명한 천으로 만든 옷', '상처가 나지 않는 검은 가죽 채찍', '속이 빈 놋쇠 딜도' , '가죽 수갑' , '가죽 족갑']
            const star = bing[Math.floor(Math.random()* bing.length)]
            if (regex1.test(content)) {
                M.post(`@${acct} 멘션 반응 테스트 `)
                  if (error) console.error(error);
                  else console.log(`mention ${id} ${data.id}`)
            }
            const regex2 = /공물/i;
            if (regex2.test(content)) {
                console.log('가챠')
                const reply = `@${acct} 하얀 별의 계약자가 당신의 대가를 받더니 ${star}가 나타났다. `
                toot(reply);
            }
        }
    }
});

  function toot(content) {
  const num = Math.floor(Math.random()* 100);
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
