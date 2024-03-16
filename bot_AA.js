const Mastodon = require('mastodon-api');
const env = require('dotenv');
env.config();
console.log("Mastodon Bot starting...");


const M = new Mastodon({
    client_key:'syYu2nlCjw05JzWHmQavWpQE5I-T2ERwt93OAFXeneA',
    client_secret: '0Ou_-R0t0ZutXPARdmmASedXKEseAaybNbRqAET4W3k',
    access_token: 'vxWGpg92myHqTAC1hYnHkyhguBNsz-j7OdSAy6mDkGs',
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
            const bing = [`파스타면`, `볼로네즈 파스타`, `크림 파스타`, `알리오 올리오`, `봉골레 파스타`, `토마토`, `마늘 한 줌`, `생크림`, `조개 한 팩`, `올리브 오일 500ml`, `베이컨 샌드위치`, `에그마요 샌드위치`, `참치마요 샌드위치`, `특별한 할라피뇨 오이 샌드위치`, `특별한 소스가 들어간 샌드위치`, `피넛버터 젤리 샌드위치`, `식빵 두 쪽`, `에그마요 한 통`, `딸기잼 한 통`, `마요네즈 250ml`, `마늘 두 쪽`, `순대국밥`, `순대`, `머릿고기`, `돼지국밥`, `뼈해장국`, `들깨가루`, `따끈한 곰탕`, `브리또`, `케밥`, `살아있는 문어`, `오징어`, `새우`, `휴지`, `물티슈`, `백지로 된 책`, `선인장`, `귀걸이`, `목걸이`, `팔찌`, `반지`, `종합 비타민제`, `오이 비누`, `오이 샴푸`, `오이 린스`, `오이 바디워시`, `오이 치약`, `머리끈`, `작은 솜인형`, `동물귀 머리띠`, `착용감이 있는 신발`, `우산`, `검모양으로 생긴 우산`, `손수건`, `수건`, `큰 수건`, `목욕가운`, `윤활유`, `속박용 로프`, `최음제가 들어간 녹차`, `로션이 나오는 딜도`, `목줄`, `수갑`, `형틀`, `채찍`, `산란 딜도`, `오나홀`, `콕링`, `애널플러그`, `안대`, `말채찍`, `패들`, `재갈`, `정조대`
            ]
            const star = bing[Math.floor(Math.random()* bing.length)]
            if (regex1.test(content)) {
                M.post(`@${acct} 멘션 반응 테스트 `)
                  if (error) console.error(error);
                  else console.log(`mention ${id} ${data.id}`)
            }
            const regex2 = /선물/i;
            if (regex2.test(content)) {
                console.log('가챠')
                const reply = `@${acct} 당신이 말하자 네로가 가판대 아래에서 【 ${star} 】 을/를 건네주었다. `
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
