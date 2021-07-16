const Mastodon = require('Mastodon-api');
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
            const regex3 = /입장/i;
            if (regex3.test(content)) {
                console.log('던전 입장')
                toot (`@${acct} 당신이 입장하자 동굴과도 같은 모습이 보인다. 석재들 사이에 간혹 횃불이 놓여있는 거 같은데...아마 좌우로 나뉜 길인가?\r어디로 이동할까?\r  >A1이동\r  >B1이동`)
            }
            const regex4 = /이동A1|A1이동/i;
            const bong = ['촉수가 보인다. 어떻게 할까?\r  >공격\r  >관찰\r  >도주\r', '보물상자가 보인다. 어떻게 할까?\r  >습득\r  >이동\r','별 달리 특별한 건 보이지 않는다. 어떻게 할까?\r  >재탐색\r  >이동']
            const hrrr = bong[Math.floor(Math.random()* bong.length)]
            if (regex4.test(content)) {
                console.log('던전 A1')
                toot (`@${acct} 당신이 A1로 이동하자 ${hrrr}`)
            }
            const regex5 = /이동A2|A2이동/i;
            if (regex5.test(content)) {
                console.log('던전 A2')
                toot (`@${acct} 당신이 A2로 이동하자 ${hrrr}`)
            }
            const regex6 = /이동A3|A3이동/i;
            if (regex6.test(content)) {
                console.log('던전 A3')
                toot (`@${acct} 당신이 A3로 이동하자 ${hrrr}`)
            }
            const regex7 = /이동A4|A4이동/i;
            if (regex7.test(content)) {
                console.log('던전 A4')
                toot (`@${acct} 당신이 A4로 이동하자 ${hrrr}`)
            }
            const regex8 = /이동A5|A5이동/i;
            if (regex8.test(content)) {
                console.log('던전 A5')
                toot (`@${acct} 당신이 A5로 이동하자 반짝이는 보물상자가 보인다. 어떻게 할까?\r  >이계의 끝`)
            }
            const regex9 = /이동B1|B1이동/i;
            if (regex9.test(content)) {
                console.log('던전 B1')
                toot (`@${acct} 당신이 B1로 이동하자 ${hrrr}`)
            }
            const regex10 = /이동B2|B2이동/i;
            if (regex10.test(content)) {
                console.log('던전 B2')
                toot (`@${acct} 당신이 B2로 이동하자 ${hrrr}`)
            }
            const regex11 = /이동B3|B3이동/i;
            if (regex11.test(content)) {
                console.log('던전 B3')
                toot (`@${acct} 당신이 B3로 이동하자 ${hrrr}`)
            }
            const regex12 = /이동B4|B4이동/i;
            if (regex12.test(content)) {
                console.log('던전 B4')
                toot (`@${acct} 당신이 B4로 이동하자 ${hrrr}`)
            }
            const regex13 = /이동C1|C1이동/i;
            if (regex13.test(content)) {
                console.log('던전 C1')
                toot (`@${acct} 당신이 C1로 이동하자 ${hrrr}`)
            }
            const regex15 = /이동C2|C2이동/i;
            if (regex15.test(content)) {
                console.log('던전 C2')
                toot (`@${acct} 당신이 C2로 이동하자 ${hrrr}`)
            }
            const regex16 = /이동D1|D1이동/i;
            if (regex16.test(content)) {
                console.log('던전 D1')
                toot (`@${acct} 당신이 D1로 이동하자 ${hrrr}`)
            }
            const regex17 = /이동D2|D2이동/i;
            if (regex17.test(content)) {
                console.log('던전 D2')
                toot (`@${acct} 당신이 D2로 이동하자 ${hrrr}`)
            }
            const regex18 = /이동E1|E1이동/i;
            if (regex18.test(content)) {
                console.log('던전 E1')
                toot (`@${acct} 당신이 E1로 이동하자 ${hrrr}`)
            }
            const regex19 = /이동A길|A길이동/i;
            if (regex19.test(content)) {
                console.log('던전 A길')
                toot (`@${acct} 당신이 A길로 이동하자 ${hrrr}`)
            }
            const regex20 = /이동C길|C길이동/i;
            if (regex20.test(content)) {
                console.log('던전 C길')
                toot (`@${acct} 당신이 C길로 이동하자 ${hrrr}`)
            }
            const regex21 = /재탐색/i;
            if (regex21.test(content)) {
                console.log('던전 재탐색')
                toot (`@${acct} 당신이 주변을 살펴보자 ${hrrr}`)
            }

            const regex22 = /습득/i;
            const bobo = ['가공되지 않은 보석', '고양이 귀 머리띠', '에그형 로터', '금화', '요정의 가루', '요정의 가루', '요정의 가루']
            const mimic = bobo[Math.floor(Math.random()* bobo.length)]
            if (regex22.test(content)) {
                console.log('물건 습득')
                toot (`@${acct} 당신이 보물상자를 열자…… 안에서 ${mimic} 이/가 나왔다.`)
            }
            const regex40 = /이계의끝/i;
            if (regex40.test(content)) {
                console.log('던전 엔드')
                toot (`@${acct} 당신이 반짝이는 보물상자를 열자…… \r 코어 조각이 보이더니 게이트 밖으로 이동됐다. 손에는 코어 조각이 들려있다.`)
            }

            const regex41 = /도주/i;
            const bun = ['갑작스러운 몬스터에 놀랐는지 도주에 실패했다.', '도주에 실패했다.', '아…! 성공할 뻔했는데…! 실패했다.']
            const bon = ['도주에 성공했다.', '휴우우… 하마터면 도주에 실패할 뻔했다', '무사히 도망쳤다.', '이정도는 가뿐! 도주에 성공했다.']
            const bubu = bun[Math.floor(Math.random()* bun.length)]
            const bbubbu = bon[Math.floor(Math.random()* bon.length)]
            const popip = Math.floor(Math.random()* 2+1)       
            if (regex41.test(content)) {
                console.log('던전 도주')
                if (popip == '1') {
                    toot (`@${acct} 도주를 시도했다……${bubu}\r 이제 어떻게 할까?\r  >도주\r  >공격`)
                }
                else if (popip == '2') {
                    toot (`@${acct} 도주를 시도했다……${bbubbu}\r 이제 어떻게 할까?\r  >재탐색\r  >이동`)
                }
            }

            const regex23 = /음마관찰/i;
            const von = ['매혹을 걸었다', '유혹하기 시작했다.', '다리 사이에 손을 얹는다.', '농밀한 손길로 쓰다듬는다.', '엉덩이를 움켜쥔다.', '다리 사이를 지분댄다.', '달라붙어 몸을 비빈다.']
            const vivi = von[Math.floor(Math.random()* von.length)]
            if (regex23.test(content)) {
                console.log('음마 관찰')
                toot (`@${acct} 당신이 음마를 관찰하려 하자 ${vivi}\r 어떻게할까?\r  >공격\r  >즐긴다.`)
            }
            const regex24 = /촉수관찰/i;
            const vin = ['팔을 휘감는다.', '다리를 휘감는다.', '다리 사이로 기어들어온다.', '가슴을 움켜쥔다.', '미약을 내뿜는다.', '몸을 간지럽힌다.']
            const vovo = vin[Math.floor(Math.random()* vin.length)]
            if (regex24.test(content)) {
                console.log('촉수 관찰')
                toot (`@${acct} 당신이 촉수를 관찰하려 하자 ${vovo}\r 어떻게할까?\r  >공격\r  >즐긴다.`)
            }
            const regex25 = /슬라임관찰/i;
            const vun = ['옷을 녹이기 시작했다.', '미약가스를 분출하기 시작했다.', '엉켜붙어 간지럽히기 시작했다.', '옷 안쪽으로 파고든다.']
            const vuvu = vun[Math.floor(Math.random()* vun.length)]
            if (regex25.test(content)) {
                console.log('슬라임 관찰')
                toot (`@${acct} 당신이 슬라임을 관찰하려 하자 ${vuvu}\r 어떻게할까?\r  >공격\r  >즐긴다.`)
            }

            const regex26 = /즐긴다/i;
            const yon = ['즐거운 시간을 보냈다!', '끈적한 시간을 보냈다!', '엉망진창으로 당했다!', '정열적인 시간을 보냈다!', '농밀한 행위를 즐겼다!', '기분 좋은 시간을 만끽했다!', '잔뜩 했다']
            const haha = yon[Math.floor(Math.random()* yon.length)]
            if (regex26.test(content)) {
                console.log('몹과 즐겻따')
                toot (`@${acct} 당신은…… ${haha}`)
            }

            const regex27 = /음마공격/i;
            const num = Math.floor(Math.random()* 100);
            const yuhu = ['섹시한', '아름다운', '헐벗은', '화려한']
            const uhu = yuhu[Math.floor(Math.random()* yuhu.length)]
            const yahu = ['매혹적인 미소를 짓는다.', '작은 날개를 퍼덕인다.', '손을 내민다.', '옷을 풀어헤친다.']
            const ahu = yahu[Math.floor(Math.random()* yahu.length)]
            const yihu = ['화들짝 놀란', '얼굴을 붉힌', '황홀함에 취한', '몸을 부르르 떨던']
            const ihu = yihu[Math.floor(Math.random()* yihu.length)]
            const yohu = ['요정의 가루','요정의 가루', '미약']
            const ohu = yohu[Math.floor(Math.random()* yohu.length)]
            if (regex27.test(content)) {
                console.log('음마 공격')
                toot (`@${acct} 당신이 공격을 선언하자 ${uhu} 음마가 ${ahu}\r음마가 ${num}의 데미지를 입었다. \r${ihu} 음마가 도망갔다. \r${ohu}을/를 습득했다.\r\r  >재탐색\r  >이동`)
            }
            const regex28 = /촉수공격/i;
            const yubu = ['매끈매끈한', '부들대는', '길쭉한', '끝이 갈라진']
            const ubu = yubu[Math.floor(Math.random()* yubu.length)]
            const yabu = ['이리저리 흔들린다.','끝에서 미약을 뿜어냈다.', '힘없이 늘어진다.', '푸르르 떨었다.']
            const abu = yabu[Math.floor(Math.random()* yabu.length)]
            const yibu = ['데미지에 깜짝 놀란', '몸을 동그랗게만', '꿀렁대던', '다가오던']
            const ibu = yibu[Math.floor(Math.random()* yibu.length)]
            const yobu = ['요정의 가루','요정의 가루', '촉수 딜도']
            const obu = yobu[Math.floor(Math.random()* yobu.length)]
            if (regex28.test(content)) {
                console.log('촉수 공격')
                toot (`@${acct} 당신이 공격을 선언하자 ${ubu} 촉수가 ${abu}\r촉수가 ${num}의 데미지를 입었다. \r${ibu} 촉수가 도망갔다. \r${obu}을/를 습득했다.\r\r  >재탐색\r  >이동`)
            }
            const regex29 = /슬라임공격/i;
            const yuru = ['분홍빛이 도는', '노란빛이 도는', '붉은빛이 도는', '말랑말랑해 보이는']
            const uru = yuru[Math.floor(Math.random()* yuru.length)]
            const yaru = ['푸르르 떨었다.', '몰랑몰랑함을 뽐낸다.', '느릿하게 기어다닌다.']
            const aru = yaru[Math.floor(Math.random()* yaru.length)]
            const yiru = ['비척비척', '흔들흔들', '흐느적대며']
            const iru = yiru[Math.floor(Math.random()* yiru.length)]
            const yoru = ['요정의 가루','요정의 가루', '슬라임 젤리']
            const oru = yoru[Math.floor(Math.random()* yoru.length)]
            if (regex29.test(content)) {
                console.log('슬라임 공격')
                toot (`@${acct} 당신이 공격을 선언하자 ${uru} 슬라임이 ${aru}\r슬라임이 ${num}의 데미지를 입었다. \r${iru} 슬라임이 도망갔다. \r${oru}을/를 습득했다.\r\r  >재탐색\r  >이동`)
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
            const regex34 = /코어조각확인/i;
            if (regex34.test(content)) {
                console.log('코어 조각 확인')
                toot (`@${acct}코어 조각을 확인했다.\r여러 조각으로 나뉜 코어 조각 중 하나. 하나로 모아 부순다면… .`)
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