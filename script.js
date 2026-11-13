'use strict';
const $=id=>document.getElementById(id);
const MEMBERS=[['ERIC','에릭'],['JACOB','제이콥'],['YOUNGHOON','영훈'],['HYUNJAE','현재'],['JUYEON','주연'],['KEVIN','케빈'],['NEW','뉴'],['Q','큐'],['SUNWOO','선우']];
const LEVELS=[['First Encounter','첫 만남'],['Everyday Moments','일상 대화'],['An Invitation','특별한 초대'],['Secret Messages','비밀 메시지'],['The Final Evening','특별한 밤']];
const FAN_LEVEL = LEVELS.length;
LEVELS.push(['Fan Meeting', '팬미팅']);
const FAN_EXAMPLES = [
  ["이렇게 많이 와 주셔서 감사드려요.", "谢谢这么多人来到现场。"],
  ["오늘 밖이 너무 추워요. 집에 갈 때 따뜻하게 입어요.", "今天外面很冷，回家时穿暖一点。"],
  ["팬미팅 첫째 날부터 이렇게 많이 와 줘서 고마워요.", "见面会第一天就有这么多人来，谢谢大家。"],
  ["오늘 더비를 이렇게 가까이서 만나니까 꿈같아요.", "今天能这么近地见到 THE B，感觉像做梦一样。"],
  ["더비가 매일 행복했으면 좋겠어요.", "希望 THE B 每天都能幸福。"],
  ["너무 감동해서 울 수도 있어요.", "太感动了，可能会哭。"],
  ["오늘의 추억은 영원할 거예요.", "今天的回忆会永远留在心里。"],
  ["너무 아쉬워하지 마. 또 만나잖아.", "别太舍不得啦，还会再见面嘛。"],
];
const BANK=[
[['안녕하세요','你好',['谢谢','再见','对不起']],['감사합니다','谢谢',['晚安','没关系','请进']],['이름','名字',['时间','地点','朋友']],['친구','朋友',['老师','家人','天气']],['만나다','见面',['喝水','回家','等待']],['반갑습니다','很高兴认识你',['我很累','我饿了','晚安']],['저는 학생이에요','我是学生',['我是老师','我在家','我是韩国人']],['잘 가요','再见',['谢谢','请坐','早上好']]],
[['오늘','今天',['昨天','明天','现在']],['내일','明天',['今天','昨天','上周']],['어제','昨天',['明天','今天','下个月']],['물','水',['咖啡','牛奶','茶']],['밥','饭',['书','衣服','房间']],['좋아요','很好／喜欢',['讨厌','不知道','很远']],['어디예요?','在哪里？',['多少钱？','几点了？','你是谁？']],['괜찮아요','没关系',['对不起','谢谢','再见']]],
[['시간','时间',['天气','朋友','名字']],['약속','约定',['礼物','房间','窗户']],['같이','一起',['独自','昨天','非常']],['기다리다','等待',['离开','吃饭','忘记']],['초대하다','邀请',['拒绝','睡觉','学习']],['언제','什么时候',['哪里','为什么','谁']],['주말','周末',['工作日','早晨','夜晚']],['만날까요?','要见面吗？',['吃过了吗？','在哪里？','下雨了吗？']]],
[['비밀','秘密',['声音','照片','回忆']],['메시지','消息',['电影','书本','钥匙']],['기억하다','记得',['忘记','离开','关闭']],['보고 싶어요','我想你',['我困了','我害怕','我饱了']],['조용히','安静地',['迅速地','明亮地','突然地']],['진심','真心',['谎言','秘密','运气']],['설레다','心动／期待',['生气','悲伤','无聊']],['믿어요','我相信',['我忘记','我拒绝','我离开']]],
[['별','星星',['月亮','太阳','云']],['밤','夜晚',['早晨','中午','下午']],['함께','一起',['永远','独自','突然']],['소중하다','珍贵',['危险','便宜','复杂']],['행복하다','幸福',['疲惫','生气','寒冷']],['고마워요','谢谢你',['对不起','请离开','我不知道']],['계속','继续',['停止','偶尔','已经']],['내일도 만나요','明天也见面吧',['昨天见过了','现在回家吧','今天不见了']]],
[
  ["감사드리다", "感谢（敬语）", ["道歉", "问候", "祝贺"]],
  ["추워요", "冷", ["暖和", "凉快", "下雪"]],
  ["첫째 날", "第一天", ["第二天", "最后一天", "前一天"]],
  ["꿈같아요", "像做梦一样", ["像第一次见面一样", "像昨天一样", "像电影一样"]],
  ["행복하다", "幸福", ["感动", "紧张", "期待"]],
  ["울다", "哭", ["笑", "唱歌", "鼓掌"]],
  ["영원하다", "永恒、长存", ["继续", "珍惜", "重逢"]],
  ["또", "又、再", ["已经", "刚刚", "从来"]],
]
];

const EXTENDED_LEVELS=[["Day 6 · 温柔的关心", "JACOB · 温柔的关心"], ["Day 7 · 小狗的约会邀请", "ERIC · 小狗的约会邀请"], ["Day 8 · 公主的特别待遇", "NEW · 公主的特别待遇"], ["Day 9 · 音乐与暧昧玩笑", "KEVIN · 音乐与暧昧玩笑"], ["Day 10 · 学长的温柔鼓励", "Q · 学长的温柔鼓励"], ["Day 11 · 嘴欠的真心话", "SUNWOO · 嘴欠的真心话"], ["Day 12 · 今天换你哄我", "HYUNJAE · 今天换你哄我"], ["Day 13 · 安静的心动", "JUYEON · 安静的心动"], ["Day 14 · 贵公子的私人邀请", "YOUNGHOON · 贵公子的私人邀请"], ["Day 15 · 更亲密的陪伴", "JACOB · 更亲密的陪伴"]];
LEVELS.push(...EXTENDED_LEVELS);
BANK.push(...[[["피곤하다", "疲惫", ["没关系", "照顾", "笑"]], ["괜찮다", "没关系", ["疲惫", "照顾", "笑"]], ["챙기다", "照顾", ["疲惫", "没关系", "笑"]], ["웃다", "笑", ["疲惫", "没关系", "照顾"]], ["함께", "一起", ["疲惫", "没关系", "照顾"]], ["챙기다", "照顾", ["疲惫", "没关系", "笑"]], ["웃다", "笑", ["疲惫", "没关系", "照顾"]], ["함께", "一起", ["疲惫", "没关系", "照顾"]]], [["만나다", "见面", ["玩", "等待", "约定"]], ["놀다", "玩", ["见面", "等待", "约定"]], ["기다리다", "等待", ["见面", "玩", "约定"]], ["약속", "约定", ["见面", "玩", "等待"]], ["신나다", "兴奋", ["见面", "玩", "等待"]], ["괜찮다", "没关系", ["见面", "玩", "等待"]], ["챙기다", "照顾", ["见面", "玩", "等待"]], ["웃다", "笑", ["见面", "玩", "等待"]]], [["예쁘다", "漂亮", ["夸奖", "礼物", "选择"]], ["칭찬하다", "夸奖", ["漂亮", "礼物", "选择"]], ["선물", "礼物", ["漂亮", "夸奖", "选择"]], ["고르다", "选择", ["漂亮", "夸奖", "礼物"]], ["특별하다", "特别", ["漂亮", "夸奖", "礼物"]], ["놀다", "玩", ["漂亮", "夸奖", "礼物"]], ["기다리다", "等待", ["漂亮", "夸奖", "礼物"]], ["약속", "约定", ["漂亮", "夸奖", "礼物"]]], [["노래", "歌曲", ["听", "好笑", "秘密"]], ["듣다", "听", ["歌曲", "好笑", "秘密"]], ["웃기다", "好笑", ["歌曲", "听", "秘密"]], ["비밀", "秘密", ["歌曲", "听", "好笑"]], ["기억하다", "记得", ["歌曲", "听", "好笑"]], ["칭찬하다", "夸奖", ["歌曲", "听", "好笑"]], ["선물", "礼物", ["歌曲", "听", "好笑"]], ["고르다", "选择", ["歌曲", "听", "好笑"]]], [["천천히", "慢慢地", ["困难", "做得好", "自在"]], ["어렵다", "困难", ["慢慢地", "做得好", "自在"]], ["잘하다", "做得好", ["慢慢地", "困难", "自在"]], ["편하다", "自在", ["慢慢地", "困难", "做得好"]], ["믿다", "相信", ["慢慢地", "困难", "做得好"]], ["듣다", "听", ["慢慢地", "困难", "做得好"]], ["웃기다", "好笑", ["慢慢地", "困难", "做得好"]], ["비밀", "秘密", ["慢慢地", "困难", "做得好"]]], [["장난", "玩笑", ["好奇", "有趣", "闹别扭"]], ["궁금하다", "好奇", ["玩笑", "有趣", "闹别扭"]], ["재미있다", "有趣", ["玩笑", "好奇", "闹别扭"]], ["삐지다", "闹别扭", ["玩笑", "好奇", "有趣"]], ["솔직하다", "坦率", ["玩笑", "好奇", "有趣"]], ["어렵다", "困难", ["玩笑", "好奇", "有趣"]], ["잘하다", "做得好", ["玩笑", "好奇", "有趣"]], ["편하다", "自在", ["玩笑", "好奇", "有趣"]]], [["쉬다", "休息", ["担心", "照顾", "拥抱"]], ["걱정하다", "担心", ["休息", "照顾", "拥抱"]], ["챙겨 주다", "照顾", ["休息", "担心", "拥抱"]], ["안아 주다", "拥抱", ["休息", "担心", "照顾"]], ["부탁", "请求", ["休息", "担心", "照顾"]], ["궁금하다", "好奇", ["休息", "担心", "照顾"]], ["재미있다", "有趣", ["休息", "担心", "照顾"]], ["삐지다", "闹别扭", ["休息", "担心", "照顾"]]], [["조용하다", "安静", ["注视", "近", "真心"]], ["바라보다", "注视", ["安静", "近", "真心"]], ["가깝다", "近", ["安静", "注视", "真心"]], ["진심", "真心", ["安静", "注视", "近"]], ["보고 싶다", "想念", ["安静", "注视", "近"]], ["걱정하다", "担心", ["安静", "注视", "近"]], ["챙겨 주다", "照顾", ["安静", "注视", "近"]], ["안아 주다", "拥抱", ["安静", "注视", "近"]]], [["초대하다", "邀请", ["座位", "视线", "选择"]], ["자리", "座位", ["邀请", "视线", "选择"]], ["시선", "视线", ["邀请", "座位", "选择"]], ["선택하다", "选择", ["邀请", "座位", "视线"]], ["기다려 주다", "等待某人", ["邀请", "座位", "视线"]], ["바라보다", "注视", ["邀请", "座位", "视线"]], ["가깝다", "近", ["邀请", "座位", "视线"]], ["진심", "真心", ["邀请", "座位", "视线"]]], [["소중하다", "珍贵", ["熟悉", "温暖", "心意"]], ["익숙하다", "熟悉", ["珍贵", "温暖", "心意"]], ["따뜻하다", "温暖", ["珍贵", "熟悉", "心意"]], ["마음", "心意", ["珍贵", "熟悉", "温暖"]], ["곁", "身边", ["珍贵", "熟悉", "温暖"]], ["자리", "座位", ["珍贵", "熟悉", "温暖"]], ["시선", "视线", ["珍贵", "熟悉", "温暖"]], ["선택하다", "选择", ["珍贵", "熟悉", "温暖"]]]]);
const EXTRA_EXAMPLES={"seed-6-0": ["오늘 많이 피곤하지? 조금 쉬어도 괜찮아.", "今天很累吧？稍微休息一下也没关系。"], "seed-6-1": ["괜찮아. 천천히 해도 돼.", "没关系，慢慢来就好。"], "seed-6-2": ["밥은 잘 챙겨 먹었어?", "有好好吃饭吗？"], "seed-6-3": ["네가 웃으니까 나도 기분이 좋아.", "看到你笑，我心情也变好了。"], "seed-6-4": ["오늘도 나랑 함께해 줘서 고마워.", "谢谢你今天也陪着我。"], "seed-6-5": ["밥은 잘 챙겨 먹었어?", "有好好吃饭吗？"], "seed-6-6": ["네가 웃으니까 나도 기분이 좋아.", "看到你笑，我心情也变好了。"], "seed-6-7": ["오늘도 나랑 함께해 줘서 고마워.", "谢谢你今天也陪着我。"], "seed-7-0": ["오늘 너 만나서 진짜 신나!", "今天见到你真的超开心！"], "seed-7-1": ["공부 끝나면 나랑 놀자!", "学完之后和我一起玩吧！"], "seed-7-2": ["나 너 기다리고 있었어!", "我一直在等你呢！"], "seed-7-3": ["우리 내일도 만나는 거다? 약속!", "我们明天也要见面哦？约好了！"], "seed-7-4": ["너랑 있으면 괜히 더 신나.", "和你在一起就莫名更兴奋。"], "seed-7-5": ["괜찮아. 천천히 해도 돼.", "没关系，慢慢来就好。"], "seed-7-6": ["밥은 잘 챙겨 먹었어?", "有好好吃饭吗？"], "seed-7-7": ["네가 웃으니까 나도 기분이 좋아.", "看到你笑，我心情也变好了。"], "seed-8-0": ["오늘 나 좀 예쁘지 않아?", "我今天是不是有点漂亮？"], "seed-8-1": ["나 오늘 열심히 했는데, 칭찬 안 해 줘?", "我今天这么努力，不夸夸我吗？"], "seed-8-2": ["이거 나 주는 선물이야? 진짜?", "这是送我的礼物？真的吗？"], "seed-8-3": ["이거랑 저거 중에 뭐가 더 예뻐?", "这个和那个，哪个更漂亮？"], "seed-8-4": ["오늘은 나한테 좀 특별하게 해 줘.", "今天对我特别一点嘛。"], "seed-8-5": ["공부 끝나면 나랑 놀자!", "学完之后和我一起玩吧！"], "seed-8-6": ["나 너 기다리고 있었어!", "我一直在等你呢！"], "seed-8-7": ["우리 내일도 만나는 거다? 약속!", "我们明天也要见面哦？约好了！"], "seed-9-0": ["이 노래 들으면 네 생각이 나.", "听这首歌就会想起你。"], "seed-9-1": ["잠깐, 이 부분 같이 들어 봐.", "等一下，这一段一起听听。"], "seed-9-2": ["나 지금 좀 웃겼지? 아니야?", "我刚才挺好笑的吧？不是吗？"], "seed-9-3": ["이건 우리 둘만 아는 비밀이야.", "这是只有我们两个知道的秘密。"], "seed-9-4": ["오늘 네가 웃던 거 오래 기억할 것 같아.", "我应该会记得你今天笑的样子很久。"], "seed-9-5": ["나 오늘 열심히 했는데, 칭찬 안 해 줘?", "我今天这么努力，不夸夸我吗？"], "seed-9-6": ["이거 나 주는 선물이야? 진짜?", "这是送我的礼物？真的吗？"], "seed-9-7": ["이거랑 저거 중에 뭐가 더 예뻐?", "这个和那个，哪个更漂亮？"], "seed-10-0": ["천천히 해. 내가 옆에서 도와줄게.", "慢慢来，我会在旁边帮你。"], "seed-10-1": ["어려우면 언제든 물어봐.", "觉得难的话随时问我。"], "seed-10-2": ["오늘 정말 잘했어. 많이 늘었네.", "今天真的做得很好，进步了好多。"], "seed-10-3": ["나랑 있을 땐 편하게 있어도 돼.", "和我在一起时放轻松就好。"], "seed-10-4": ["난 네가 잘할 거라고 믿어.", "我相信你一定能做好。"], "seed-10-5": ["잠깐, 이 부분 같이 들어 봐.", "等一下，这一段一起听听。"], "seed-10-6": ["나 지금 좀 웃겼지? 아니야?", "我刚才挺好笑的吧？不是吗？"], "seed-10-7": ["이건 우리 둘만 아는 비밀이야.", "这是只有我们两个知道的秘密。"], "seed-11-0": ["왜 그렇게 진지해? 장난이야.", "干嘛那么认真？开玩笑的。"], "seed-11-1": ["근데 너 아까 왜 웃었어? 좀 궁금한데.", "不过你刚才为什么笑？我有点好奇。"], "seed-11-2": ["너 놀리는 거 생각보다 재밌네.", "逗你玩比想象中还有趣。"], "seed-11-3": ["설마 삐졌어? 에이, 귀엽게.", "不会生气了吧？哎呀，真可爱。"], "seed-11-4": ["솔직히 말해 봐. 나 보고 싶었지?", "说实话。想我了吧？"], "seed-11-5": ["어려우면 언제든 물어봐.", "觉得难的话随时问我。"], "seed-11-6": ["오늘 정말 잘했어. 많이 늘었네.", "今天真的做得很好，进步了好多。"], "seed-11-7": ["나랑 있을 땐 편하게 있어도 돼.", "和我在一起时放轻松就好。"], "seed-12-0": ["오늘은 여기까지 하고 좀 쉬자.", "今天先到这里，休息一下吧。"], "seed-12-1": ["너 또 무리할까 봐 걱정돼.", "我担心你又太勉强自己。"], "seed-12-2": ["맨날 내가 챙겨 주잖아.", "一直都是我在照顾你嘛。"], "seed-12-3": ["오늘은 네가 나 좀 안아 주면 안 돼?", "今天换你抱抱我，不行吗？"], "seed-12-4": ["나 부탁 하나만 해도 돼?", "我能拜托你一件事吗？"], "seed-12-5": ["근데 너 아까 왜 웃었어? 좀 궁금한데.", "不过你刚才为什么笑？我有点好奇。"], "seed-12-6": ["너 놀리는 거 생각보다 재밌네.", "逗你玩比想象中还有趣。"], "seed-12-7": ["설마 삐졌어? 에이, 귀엽게.", "不会生气了吧？哎呀，真可爱。"], "seed-13-0": ["여기 조용해서 좋다. 너도 그렇지?", "这里很安静，真好。你也这么觉得吧？"], "seed-13-1": ["왜 그렇게 바라봐?", "为什么那样看着我？"], "seed-13-2": ["조금 더 가까이 와도 돼.", "可以再靠近一点。"], "seed-13-3": ["그냥 하는 말 아니야. 진심이야.", "不是随口说说的。我是认真的。"], "seed-13-4": ["아까 헤어졌는데 벌써 보고 싶네.", "明明刚分开，却已经想你了。"], "seed-13-5": ["너 또 무리할까 봐 걱정돼.", "我担心你又太勉强自己。"], "seed-13-6": ["맨날 내가 챙겨 주잖아.", "一直都是我在照顾你嘛。"], "seed-13-7": ["오늘은 네가 나 좀 안아 주면 안 돼?", "今天换你抱抱我，不行吗？"], "seed-14-0": ["오늘 저녁에 널 초대하고 싶어.", "今晚想邀请你。"], "seed-14-1": ["여기 앉아. 네 자리야.", "坐这里。这是你的位置。"], "seed-14-2": ["잠깐, 시선 돌리지 말고 나 봐.", "等一下，别移开视线，看着我。"], "seed-14-3": ["오늘은 네가 선택해도 돼.", "今天可以由你来选择。"], "seed-14-4": ["준비될 때까지 기다려 줄게.", "我会等到你准备好。"], "seed-14-5": ["왜 그렇게 바라봐?", "为什么那样看着我？"], "seed-14-6": ["조금 더 가까이 와도 돼.", "可以再靠近一点。"], "seed-14-7": ["그냥 하는 말 아니야. 진심이야.", "不是随口说说的。我是认真的。"], "seed-15-0": ["너랑 보내는 시간이 참 소중해.", "和你一起度过的时间真的很珍贵。"], "seed-15-1": ["이제 네 목소리가 익숙해졌어.", "现在已经熟悉你的声音了。"], "seed-15-2": ["네 말 한마디가 참 따뜻하게 느껴져.", "你的一句话就让我觉得很温暖。"], "seed-15-3": ["내 마음이 잘 전해졌으면 좋겠어.", "希望我的心意能好好传达给你。"], "seed-15-4": ["앞으로도 네 곁에 있고 싶어.", "以后也想陪在你身边。"], "seed-15-5": ["여기 앉아. 네 자리야.", "坐这里。这是你的位置。"], "seed-15-6": ["잠깐, 시선 돌리지 말고 나 봐.", "等一下，别移开视线，看着我。"], "seed-15-7": ["오늘은 네가 선택해도 돼.", "今天可以由你来选择。"]};


// V5: original practice inspired by the classic Seoul National University Korean 1A unit progression.
const SNU_LESSONS = [{"title": "Greetings · Hello", "topic": "1과 · 안녕하세요?", "items": [["안녕하세요", "Hello", "안녕하세요. 오늘도 와 줘서 고마워요.", "你好。谢谢你今天也来。"], ["이름", "Name", "이름이 뭐예요? 더 알고 싶어요.", "你叫什么名字？我想更了解你。"], ["저", "I (humble)", "저는 오늘도 여기 있어요.", "我今天也在这里。"], ["학생", "Student", "저는 학생이에요. 같이 공부해요.", "我是学生。一起学习吧。"], ["친구", "Friend", "우리 친구예요?", "我们是朋友吗？"], ["사람", "Person", "좋은 사람이네요.", "你真是个好人。"], ["한국", "Korea", "한국에 같이 가고 싶어요.", "想和你一起去韩国。"], ["만나다", "To meet", "오늘 만나서 정말 좋아요.", "今天见到你真开心。"]]}, {"title": "Greetings · Introductions", "topic": "1과 · 자기소개", "items": [["누구", "Who", "저 사람은 누구예요?", "那个人是谁？"], ["선생님", "Teacher", "선생님, 오늘도 잘 부탁해요.", "老师，今天也请多关照。"], ["네", "Yes", "네, 내일도 만나요.", "好，明天也见。"], ["아니요", "No", "아니요, 아직 안 가요.", "不，我还不走。"], ["나라", "Country", "어느 나라 사람이에요?", "你是哪国人？"], ["한국어", "Korean language", "한국어를 같이 공부해요.", "一起学韩语吧。"], ["반갑다", "To be glad to meet", "만나서 반가워요.", "很高兴见到你。"], ["이름이 뭐예요?", "What is your name?", "이름이 뭐예요? 기억하고 싶어요.", "你叫什么名字？我想记住。"]]}, {"title": "Objects · This and That", "topic": "2과 · 이거는 뭐예요?", "items": [["이거", "This thing", "이거 네 거예요?", "这是你的吗？"], ["그거", "That thing (near you)", "그거 나한테 줄래요?", "那个可以给我吗？"], ["저거", "That thing (over there)", "저거 같이 볼까요?", "要一起看看那个吗？"], ["책", "Book", "이 책 같이 읽어요.", "一起读这本书吧。"], ["가방", "Bag", "가방 제가 들어 줄게요.", "包我来帮你拿。"], ["시계", "Clock", "시계를 자꾸 보네요.", "你一直看表呢。"], ["사진", "Photo", "사진 같이 찍을까요?", "要一起拍照吗？"], ["뭐", "What", "뭐 좋아해요?", "你喜欢什么？"]]}, {"title": "Objects · Possessions", "topic": "2과 · 물건", "items": [["제", "My (humble)", "이건 제 책이에요.", "这是我的书。"], ["네", "Your (informal)", "이거 네 사진이야?", "这是你的照片吗？"], ["휴대전화", "Mobile phone", "휴대전화 번호 알려 줄래요?", "能告诉我手机号吗？"], ["연필", "Pencil", "연필 하나 빌려줄래요?", "能借我一支铅笔吗？"], ["공책", "Notebook", "공책에 이름을 썼어요.", "我在笔记本上写了名字。"], ["우산", "Umbrella", "우산 같이 써요.", "一起撑伞吧。"], ["의자", "Chair", "여기 의자 있어요. 앉아요.", "这里有椅子，坐吧。"], ["있다", "To exist / have", "여기 네 자리가 있어.", "这里有你的位置。"]]}, {"title": "Daily Life · Activities", "topic": "3과 · 한국어를 공부해요", "items": [["공부하다", "To study", "오늘도 같이 공부해요.", "今天也一起学习吧。"], ["읽다", "To read", "이거 같이 읽어요.", "这个一起读吧。"], ["쓰다", "To write", "네 이름을 써 봐도 돼요?", "可以写下你的名字吗？"], ["듣다", "To listen", "내 이야기 좀 들어 줄래요?", "能听我说说话吗？"], ["보다", "To see / watch", "나 좀 봐요.", "看我一下嘛。"], ["먹다", "To eat", "나랑 밥 먹어요.", "和我一起吃饭吧。"], ["마시다", "To drink", "커피 같이 마실래요?", "要一起喝咖啡吗？"], ["좋아하다", "To like", "저는 너랑 공부하는 걸 좋아해요.", "我喜欢和你一起学习。"]]}, {"title": "Daily Life · Places", "topic": "3과 · 일상생활", "items": [["학교", "学校", "학교 앞에서 만나요.", "在学校门口见吧。"], ["집", "家", "집에 잘 들어갔어요?", "平安到家了吗？"], ["카페", "咖啡馆", "카페에서 기다릴게요.", "我在咖啡馆等你。"], ["도서관", "图书馆", "도서관에서 같이 공부해요.", "在图书馆一起学习吧。"], ["오늘", "今天", "오늘도 보고 싶었어요.", "今天也想见你。"], ["내일", "明天", "내일도 같이 있어요.", "明天也一起待着吧。"], ["가다", "去", "어디 가요? 같이 가요.", "去哪儿？一起去吧。"], ["오다", "来", "오늘도 와 줘서 고마워요.", "谢谢你今天也来。"]]}, {"title": "Locations · Where", "topic": "4과 · 어디에 있어요?", "items": [["어디", "哪里", "지금 어디에 있어요?", "你现在在哪里？"], ["여기", "这里", "여기 앉아요. 내 옆에.", "坐这里，我旁边。"], ["거기", "那里（靠近对方）", "거기서 기다려요.", "在那里等我。"], ["앞", "前面", "학교 앞에서 만나요.", "在学校门口见。"], ["뒤", "后面", "내 뒤에 있어요?", "你在我后面吗？"], ["옆", "旁边", "내 옆에 앉아도 돼요.", "可以坐我旁边。"], ["안", "里面", "가방 안에 선물이 있어요.", "包里有礼物。"], ["없다", "没有", "오늘은 약속이 없어요.", "今天没有安排。"]]}, {"title": "Locations · Around Town", "topic": "4과 · 위치", "items": [["위", "上面", "책상 위에 있어요.", "在桌子上。"], ["아래", "下面", "책상 아래를 봐요.", "看看桌子下面。"], ["왼쪽", "左边", "내 왼쪽에 앉아요.", "坐我左边。"], ["오른쪽", "右边", "오른쪽으로 와요.", "往右边来。"], ["은행", "银行", "은행 앞에서 만나요.", "在银行门口见。"], ["편의점", "便利店", "편의점에 같이 갈래요?", "要一起去便利店吗？"], ["식당", "餐厅", "좋은 식당을 알아요.", "我知道一家不错的餐厅。"], ["방", "房间", "이 방은 조용해서 좋아요.", "这个房间很安静，我喜欢。"]]}, {"title": "Weekend · Days", "topic": "5과 · 주말에 친구를 만났어요", "items": [["주말", "周末", "주말에 나랑 만날래요?", "周末要和我见面吗？"], ["월요일", "星期一", "월요일에도 만나요.", "星期一也见吧。"], ["화요일", "星期二", "화요일에 시간 있어요?", "星期二有空吗？"], ["수요일", "星期三", "수요일에 같이 공부해요.", "星期三一起学习吧。"], ["목요일", "星期四", "목요일에 기다릴게요.", "星期四我等你。"], ["금요일", "星期五", "금요일 저녁에 만나요.", "星期五晚上见吧。"], ["토요일", "星期六", "토요일에 영화 볼까요?", "星期六去看电影好吗？"], ["일요일", "星期日", "일요일에는 같이 쉬어요.", "星期日一起休息吧。"]]}, {"title": "Weekend · Past Events", "topic": "5과 · 지난 주말", "items": [["어제", "昨天", "어제도 네 생각을 했어요.", "昨天也想起你了。"], ["지난주", "上周", "지난주에 같이 공부했죠?", "上周我们一起学习了吧？"], ["만났어요", "见过了", "어제 너를 만났어요.", "昨天见到你了。"], ["갔어요", "去了", "어제 카페에 갔어요.", "昨天去了咖啡馆。"], ["봤어요", "看过了", "어제 영화를 봤어요.", "昨天看了电影。"], ["했어요", "做了", "어제도 공부했어요.", "昨天也学习了。"], ["재미있다", "有趣", "너랑 있으면 재미있어요.", "和你在一起很有趣。"], ["같이", "一起", "다음에도 같이 가요.", "下次也一起去吧。"]]}, {"title": "Shopping · Prices", "topic": "6과 · 얼마예요?", "items": [["얼마", "多少钱", "이거 얼마예요?", "这个多少钱？"], ["돈", "钱", "돈은 제가 낼게요.", "钱我来付。"], ["원", "韩元", "이거 만 원이에요.", "这个一万韩元。"], ["사다", "买", "너한테 선물 사고 싶어요.", "想给你买礼物。"], ["비싸다", "贵", "조금 비싸지만 예뻐요.", "虽然有点贵，但很漂亮。"], ["싸다", "便宜", "이건 싸고 좋아요.", "这个便宜又好。"], ["가게", "商店", "저 가게에 같이 가요.", "一起去那家店吧。"], ["선물", "礼物", "작은 선물이 있어요.", "有个小礼物送你。"]]}, {"title": "Shopping · Requests", "topic": "6과 · 쇼핑", "items": [["주세요", "请给我", "물 하나 주세요.", "请给我一瓶水。"], ["하나", "一个", "이거 하나 주세요.", "这个请给我一个。"], ["두 개", "两个", "두 개 주세요. 하나는 네 거예요.", "请给我两个，一个是你的。"], ["옷", "衣服", "이 옷 잘 어울려요.", "这件衣服很适合你。"], ["예쁘다", "漂亮", "오늘 정말 예뻐요.", "今天真的很漂亮。"], ["크다", "大", "이거 너무 커요?", "这个太大了吗？"], ["작다", "小", "작은 선물이에요.", "是个小礼物。"], ["고르다", "选择", "네가 골라 줘요.", "你帮我选吧。"]]}, {"title": "Weather · Today", "topic": "7과 · 날씨가 어떻습니까?", "items": [["날씨", "天气", "오늘 날씨가 좋아요.", "今天天气很好。"], ["맑다", "晴朗", "하늘이 맑아요. 같이 걸어요.", "天空很晴朗，一起走走吧。"], ["비", "雨", "비가 와요. 우산 있어요?", "下雨了，有伞吗？"], ["눈", "雪", "눈이 오면 같이 봐요.", "下雪的话一起看吧。"], ["춥다", "冷", "추워요? 내 옆으로 와요.", "冷吗？到我旁边来。"], ["덥다", "热", "더우면 쉬었다 가요.", "热的话休息一下再走。"], ["바람", "风", "바람이 많이 불어요.", "风吹得很大。"], ["좋다", "好", "너랑 있으면 기분이 좋아요.", "和你在一起心情很好。"]]}, {"title": "Invitations · Plans", "topic": "8과 · 영화 볼까요?", "items": [["영화", "电影", "나랑 영화 볼까요?", "要和我一起看电影吗？"], ["볼까요?", "一起看吗？", "오늘 같이 볼까요?", "今天一起看好吗？"], ["갈까요?", "一起去吗？", "우리 같이 갈까요?", "我们一起去好吗？"], ["시간", "时间", "오늘 저녁에 시간 있어요?", "今晚有空吗？"], ["약속", "约定", "내일 약속 있어요?", "明天有约吗？"], ["기다리다", "等待", "여기서 기다릴게요.", "我在这里等你。"], ["저녁", "晚上／晚餐", "저녁 같이 먹을래요?", "晚饭一起吃吗？"], ["주말에", "在周末", "주말에 다시 만나요.", "周末再见吧。"]]}, {"title": "Invitations · Review", "topic": "8과 · 초대와 복습", "items": [["초대하다", "邀请", "너를 초대하고 싶어요.", "想邀请你。"], ["함께", "一起", "오늘도 함께해 줘서 고마워요.", "谢谢你今天也陪着我。"], ["만날까요?", "要见面吗？", "내일 또 만날까요?", "明天再见面好吗？"], ["언제", "什么时候", "우리 언제 만날까요?", "我们什么时候见面？"], ["어디에서", "在哪里", "어디에서 만날까요?", "在哪里见面？"], ["좋아해요", "我喜欢", "너랑 있는 시간이 좋아요.", "我喜欢和你在一起的时间。"], ["다음", "下一个", "다음 주에도 만나요.", "下周也见吧。"], ["다시", "再次", "다시 만나서 기뻐요.", "再次见到你很开心。"]]}];
const YONSEI_EXAMPLES = {};
SNU_LESSONS.forEach((lesson,day)=>{if(day<5)return; const level=day+1; LEVELS[level]=[lesson.title,lesson.topic]; BANK[level]=lesson.items.map(([word,answer,ko,zh],i)=>{YONSEI_EXAMPLES[`seed-${level}-${i}`]=[ko,zh]; const distractors=lesson.items.filter(x=>x[1]!==answer).slice((i+1)%5).map(x=>x[1]); return [word,answer,[...distractors,...lesson.items.filter(x=>x[1]!==answer).map(x=>x[1])].filter((v,j,a)=>a.indexOf(v)===j).slice(0,3)];});});
const STORY=[{ko:'아직 안 갔어?',zh:'还没走吗？',note:'深夜的私人休息室，灯光还亮着。'},{ko:'오늘도 열심히 했네.',zh:'今天也很努力呢。',note:'他放下手中的书，向你走近。'},{ko:'벌써 닷새째야. 대단하다.',zh:'已经是第五天了，真厉害。',note:'你听见他轻轻笑了一声。'},{ko:'내일도 같이 공부할래?',zh:'明天也要一起学习吗？',note:'你要怎样回答？',choices:['응, 약속해! · 嗯，约好了！','물론이지! · 当然！']},{ko:'그럼 내일 여기서 기다릴게.',zh:'那我明天就在这里等你。',note:'一段新的故事，才刚刚开始。'}];
const DB='tb-private-quest-v1';let db,assets=[],custom=[],progress={selected:4,passed:[],attempts:0,dates:[],storyUnlocked:false},quiz=null,scene=0,audio=null,objectURL=null;
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB,1);req.onupgradeneeded=()=>{const d=req.result;d.createObjectStore('assets',{keyPath:'key'});d.createObjectStore('questions',{keyPath:'id'});d.createObjectStore('state',{keyPath:'key'});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
function getAll(store){return new Promise((resolve,reject)=>{const req=db.transaction(store,'readonly').objectStore(store).getAll();req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
function purgeAnswerVoiceAssets(){return new Promise((resolve,reject)=>{const tx=db.transaction('assets','readwrite');const store=tx.objectStore('assets');for(let i=0;i<MEMBERS.length;i++){for(const type of ['correct','wrong']){store.delete(`${i}:voice:${type}`);store.delete(`${i}:caption:${type}`);}}tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Voice cleanup failed'));});}
function put(store,value){return new Promise((resolve,reject)=>{const tx=db.transaction(store,'readwrite');tx.objectStore(store).put(value);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}
function dateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function parseDay(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d);}
function streak(){const days=new Set(progress.dates);let cursor=new Date();if(!days.has(dateKey(cursor)))cursor.setDate(cursor.getDate()-1);let count=0;while(days.has(dateKey(cursor))){count++;cursor.setDate(cursor.getDate()-1);}return count;}
function toast(msg){const e=$('toast');e.textContent=msg;e.style.display='block';clearTimeout(toast.timer);toast.timer=setTimeout(()=>e.style.display='none',3600);}
function stopAudio(){if(audio){audio.pause();audio=null;}if(objectURL){URL.revokeObjectURL(objectURL);objectURL=null;}}
function play(blob){stopAudio();if(!blob){toast('Upload this audio in COLLECTION first.');return;}objectURL=URL.createObjectURL(blob);audio=new Audio(objectURL);audio.onended=stopAudio;audio.play().catch(()=>{toast('音频无法播放，请检查文件格式。');stopAudio();});}
function asset(key){return assets.find(x=>x.key===key)?.blob||null;}
function playVoice(type){const memberIndex = progress.selected; const blob=asset(`${memberIndex}:voice:${type}`); showVoiceCaption(memberIndex,type);if(blob)play(blob);}
function renderMembers(){const root=$('memberGrid');root.replaceChildren();MEMBERS.forEach(([name,ko],i)=>{const b=document.createElement('button');b.type='button';b.className='member-card'+(progress.selected===i?' active':'');const photo=document.createElement('div');photo.className='member-photo';const blob=asset(`${i}:photo`);if(blob){const img=document.createElement('img');const url=URL.createObjectURL(blob);img.src=url;img.alt=name;img.onload=()=>URL.revokeObjectURL(url);photo.append(img);}else{const initial=document.createElement('span');initial.textContent=name[0];photo.append(initial);}const details=document.createElement('div');details.className='member-details';const strong=document.createElement('strong');strong.textContent=name;const small=document.createElement('small');small.textContent=ko;details.append(strong,small);b.append(photo,details);b.addEventListener('click',async()=>{if(progress.selected!==i){storyStarted=false;scene=0;stopAudio();}progress.selected=i;playVoice('welcome');await saveProgress();renderMembers();renderDashboard();toast(`${name} 已成为你的陪学成员`);});root.append(b);});$('selectedNote').textContent=`CURRENT COMPANION · ${MEMBERS[progress.selected][0]} / ${MEMBERS[progress.selected][1]}`;}
function renderDashboard(){const n=progress.passed.filter(level=>level<FAN_LEVEL).length;$('dashMember').textContent=MEMBERS[progress.selected][0];$('dashLevels').textContent=`${n} / ${LEVELS.length-1}`;$('dashStreak').textContent=`${streak()} DAYS`;$('archiveSummary').textContent=`已通关 ${n} / ${FAN_LEVEL} 关 · 累计答题 ${progress.attempts} 次 · 已记录 ${progress.dates.length} 个有效学习日。`;const mark=$('dayMarks');mark.replaceChildren();for(let i=1;i<=5;i++){const box=document.createElement('div');box.className='day'+(i<=Math.min(streak(),5)?' done':'');box.textContent=`DAY ${i}`;mark.append(box);}const today=progress.dates.includes(dateKey());$('streakDetail').textContent=`当前连续 ${streak()} 天。${today?'今天的学习已达标。':'今天尚未完成有效关卡。'} 只有连续自然日达标才计入五日约定。`;renderLevels();renderStory();}
function renderLevels(){const map=$('levelMap');map.replaceChildren();LEVELS.forEach(([en,ko],i)=>{const passed=progress.passed.includes(i);const available=passed||i===FAN_LEVEL||i===0||(i===FAN_LEVEL+1?progress.passed.includes(FAN_LEVEL-1):progress.passed.includes(i-1));const b=document.createElement('button');b.type='button';b.className='level'+(passed?' passed':'');b.disabled=!available;const circle=document.createElement('span');circle.className='node';circle.textContent=passed?'✓':available?(i===FAN_LEVEL?'★':String(i+1).padStart(2,'0')):'♢';const copy=document.createElement('span');const name=document.createElement('strong');name.textContent=en;const sub=document.createElement('small');sub.textContent=`${ko} · ${i===FAN_LEVEL?'特别支线 · ':''}${passed?'COMPLETED · REPLAY':available?'AVAILABLE · START':'LOCKED'}`;copy.append(name,sub);b.append(circle,copy);b.addEventListener('click',()=>startQuiz(i));map.append(b);});}
function pool(level){return [...BANK[level].map((q,i)=>({id:level===FAN_LEVEL?`seed-fm-dec-${[0,4,5,7].includes(i)?'word-':''}${i}`:`seed-${level}-${i}`,level,word:q[0],answer:q[1],wrong:q[2]})),...custom.filter(q=>q.level===level)];}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function startQuiz(level){stopAudio();hideVoiceCaption();const list=shuffle(pool(level));if(list.length<8){toast('This lesson needs at least eight questions.');return;}quiz={level,items:list.slice(0,8),index:0,correct:0,selected:null,done:false};$('quizModal').classList.remove('hidden');document.body.style.overflow='hidden';renderQuestion();}
function closeQuiz(){quiz=null;stopAudio();$('quizModal').classList.add('hidden');document.body.style.overflow='';}
function renderQuestion(){if(!quiz)return;const q=quiz.items[quiz.index];$('quizBar').style.width=`${quiz.index/8*100}%`;$('quizNext').disabled=true;$('quizNext').textContent='CONTINUE →';$('quizFeedback').textContent='';const root=$('quizBody');root.replaceChildren();const eyebrow=document.createElement('div');eyebrow.className='eyebrow';eyebrow.textContent=`QUESTION ${quiz.index+1} / 8 · ${LEVELS[quiz.level][0]}`;const h=document.createElement('h3');h.textContent=q.word;const intro=document.createElement('p');intro.className='muted';intro.textContent='Choose the correct Chinese meaning.';const audioBlob=asset(`question:${q.id}`)||q.audio;if(audioBlob){const listen=document.createElement('button');listen.type='button';listen.className='btn ghost';listen.textContent='♫ LISTEN TO WORD';listen.addEventListener('click',()=>play(audioBlob));root.append(eyebrow,h,intro,listen);}else root.append(eyebrow,h,intro);const options=document.createElement('div');options.className='answers';shuffle([q.answer,...q.wrong]).forEach(label=>{const btn=document.createElement('button');btn.type='button';btn.textContent=label;btn.addEventListener('click',()=>{if(quiz.selected!==null)return;quiz.selected=label;const correct=label===q.answer;if(correct){quiz.correct++;}hideVoiceCaption();options.querySelectorAll('button').forEach(x=>{x.disabled=true;if(x.textContent===q.answer)x.classList.add('correct');else if(x===btn)x.classList.add('wrong');});$('quizFeedback').textContent=correct?'CORRECT · Well done!':'NOT QUITE · Correct answer: '+q.answer;root.append(renderExample(q));$('quizNext').disabled=false;});options.append(btn);});root.append(options);}
async function finishQuiz(){const score=quiz.correct;const level=quiz.level;progress.attempts+=8;const passed=score>=6;if(passed){if(!progress.passed.includes(level))progress.passed.push(level);if(level!==FAN_LEVEL){const today=dateKey();if(!progress.dates.includes(today))progress.dates.push(today);progress.dates.sort();if(longestStreak()>=5)progress.storyUnlocked=true;}}playVoice(passed ? 'finish' : 'retry');await saveProgress();const root=$('quizBody');root.replaceChildren();const title=document.createElement('h3');title.textContent=passed?'TRIAL COMPLETE':'TRY AGAIN';const desc=document.createElement('p');desc.className='muted';desc.textContent=`Score: ${score} / 8 · ${passed?(level===FAN_LEVEL?'Fan Meeting completed.':'Lesson passed. Your study day has been recorded.'):'You need at least 6 correct answers to pass.'}`;root.append(title,desc);$('quizBar').style.width='100%';$('quizFeedback').textContent=progress.storyUnlocked?'SECRET STORY UNLOCKED':'THE CLUB AWAITS YOUR RETURN';$('quizNext').disabled=false;$('quizNext').textContent='RETURN TO THE CLUB →';quiz.done=true;renderDashboard();}
async function saveProgress(){await put('state',{key:'progress',value:progress});}
function legacyRenderStory(){const unlocked=progress.storyUnlocked;$('storyBadge').textContent=unlocked?'UNLOCKED · JUYEON STORY 001':`LOCKED · ${Math.min(streak(),5)} / 5 DAYS`;$('storyNext').disabled=!unlocked;if(!unlocked){$('storyKorean').textContent='A story worth earning.';$('storyChinese').textContent='连续五个不同自然日完成至少一关，解锁柱延的原创韩语互动剧情。';$('storyChoices').replaceChildren();return;}const s=STORY[scene];$('storyKorean').textContent=s.ko;$('storyChinese').textContent=s.zh+' · '+s.note;const root=$('storyChoices');root.replaceChildren();(s.choices||[]).forEach(choice=>{const b=document.createElement('button');b.type='button';b.textContent=choice;b.addEventListener('click',()=>{scene=(scene+1)%storyLines(MEMBERS[progress.selected][0],episode).length;renderStory();});root.append(b);});$('storyNext').disabled=!!s.choices;$('storyNext').textContent=scene===STORY.length-1?'REPLAY STORY ↺':'CONTINUE →';}
function validateFile(file,type){if(!file)return true;const limit=type==='image'?5:12;if(file.size>limit*1024*1024)throw Error(`文件过大，${type==='image'?'照片':'音频'}不能超过 ${limit} MB`);if(type==='image'&&!file.type.startsWith('image/'))throw Error('请选择图片文件');if(type==='audio'&&!file.type.startsWith('audio/')&&!/\.(mp3|m4a|wav|ogg)$/i.test(file.name))throw Error('请选择音频文件');return true;}
async function saveMember(e){e.preventDefault();const i=Number($('memberSelect').value);const photo=$('memberPhoto').files[0];const voice=$('memberVoice').files[0];const korean=$('captionKorean').value.trim(),chinese=$('captionChinese').value.trim();if(!photo&&!voice&&!korean&&!chinese){$('memberStatus').textContent='请上传头像、语音，或填写字幕。';return;}try{validateFile(photo,'image');validateFile(voice,'audio');if(photo){const obj={key:`${i}:photo`,blob:photo};await put('assets',obj);assets=assets.filter(a=>a.key!==obj.key).concat(obj);}if(voice){const obj={key:`${i}:voice:${$('voiceType').value}`,blob:voice};await put('assets',obj);assets=assets.filter(a=>a.key!==obj.key).concat(obj);}if(korean||chinese||(!photo&&!voice)){const cap={key:`${i}:caption:${$('voiceType').value}`,korean,chinese};await put('assets',cap);assets=assets.filter(a=>a.key!==cap.key).concat(cap);}$('memberPhoto').value='';$('memberVoice').value='';$('memberStatus').textContent='已保存。游戏字幕将同步更新。';renderMembers();renderStory();toast('成员素材已保存');}catch(err){$('memberStatus').textContent='保存失败：'+err.message;}}
async function saveQuestion(e){e.preventDefault();const audio=$('qAudio').files[0];try{validateFile(audio,'audio');const id=`custom-${Date.now()}-${Math.random().toString(36).slice(2)}`;const q={id,level:Number($('qLevel').value),word:$('qKorean').value.trim(),answer:$('qAnswer').value.trim(),wrong:[$('qWrong1').value.trim(),$('qWrong2').value.trim(),$('qWrong3').value.trim()],audio:audio||null};if(!q.word||!q.answer||q.wrong.some(x=>!x)||new Set([q.answer,...q.wrong]).size!==4)throw Error('请填写四个互不相同的答案选项。');await put('questions',q);custom.push(q);renderAudioQuestions();e.target.reset();$('questionStatus').textContent='Question added to the bank.';toast('Question saved.');}catch(err){$('questionStatus').textContent='保存失败：'+err.message;}}
function exportData(){const data={version:1,exportedAt:new Date().toISOString(),progress,customQuestions:custom.map(({audio,...q})=>q)};const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='the-boyz-learning-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function wire(){const menu=$('menu');menu.addEventListener('click',()=>{const open=$('nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});$('nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('nav').classList.remove('open');menu.setAttribute('aria-expanded','false');}));$('memberForm').addEventListener('submit',saveMember);$('questionForm').addEventListener('submit',saveQuestion);$('closeQuiz').addEventListener('click',closeQuiz);$('quizNext').addEventListener('click',async()=>{if(!quiz)return;if(quiz.done){closeQuiz();return;}if(quiz.selected===null)return;if(quiz.index===7){await finishQuiz();return;}quiz.index++;quiz.selected=null;renderQuestion();});$('exportBtn').addEventListener('click',exportData);}
async function init(){wire();MEMBERS.forEach(([en],i)=>{const opt=new Option(`${en} · ${MEMBERS[i][1]}`,String(i));$('memberSelect').add(opt);});LEVELS.forEach(([en],i)=>$('qLevel').add(new Option(`${i+1} · ${en}`,String(i))));try{db=await openDB();await purgeAnswerVoiceAssets();const [saved,qs,files]=await Promise.all([getAll('state'),getAll('questions'),getAll('assets')]);progress={...progress,...(saved.find(x=>x.key==='progress')?.value||{})};custom=qs;assets=files;refreshEditorLines();loadCaptionFields();renderAudioQuestions();loadExampleFields();renderMembers();renderDashboard();}catch(err){toast('Unable to open local storage. Try Live Server: '+err.message);$('memberStatus').textContent='Local storage unavailable: '+err.message;}}
function exampleFor(q) {
  const saved = assets.find(item => item.key === `example:${q.id}`);
  if (saved) return saved;
  const sample = q.id.startsWith('seed-fm-dec-') ? FAN_EXAMPLES[Number(q.id.split('-').at(-1))] : (YONSEI_EXAMPLES[q.id] || EXTRA_EXAMPLES[q.id] || null);
  return sample ? { korean: sample[0], chinese: sample[1] } : {};
}

function renderExample(q) {
  const example = exampleFor(q);
  const section = document.createElement('section');
  section.className = 'quiz-example';
  const title = document.createElement('strong');
  title.textContent = 'EXAMPLE SENTENCE';
  const korean = document.createElement('p');
  korean.lang = 'ko';
  korean.textContent = example.korean || 'Add an example sentence in COLLECTION.';
  const chinese = document.createElement('p');
  chinese.className = 'muted';
  chinese.textContent = example.chinese || '';
  section.append(title, korean, chinese);
  if (example.blob) {
    const listen = document.createElement('button');
    listen.type = 'button';
    listen.className = 'btn ghost';
    listen.textContent = '♫ LISTEN TO SENTENCE';
    listen.addEventListener('click', () => play(example.blob));
    section.append(listen);
  }
  return section;
}

function loadExampleFields() {
  const id = $('existingAudioQuestion').value;
  const question = LEVELS.flatMap((_, level) => pool(level)).find(q => q.id === id);
  const example = question ? exampleFor(question) : {};
  $('exampleKorean').value = example.korean || '';
  $('exampleChinese').value = example.chinese || '';
  $('exampleFile').value = '';
  $('existingAudioFile').value = '';
  $('existingAudioStatus').textContent = '';
}

$('existingAudioQuestion').addEventListener('change', loadExampleFields);
$('exampleForm').addEventListener('submit', async event => {
  event.preventDefault();
  const id = $('existingAudioQuestion').value;
  const korean = $('exampleKorean').value.trim();
  const chinese = $('exampleChinese').value.trim();
  const file = $('exampleFile').files[0];
  const button = event.currentTarget.querySelector('button');
  const status = $('existingAudioStatus');
  if (!id || !korean) return;
  button.disabled = true;
  try {
    validateFile(file, 'audio');
    const key = `example:${id}`;
    const previous = assets.find(item => item.key === key);
    const blob = file || (previous?.korean === korean ? previous.blob : null);
    const entry = { key, korean, chinese, blob };
    await put('assets', entry);
    assets = assets.filter(item => item.key !== key).concat(entry);
    if ($('existingAudioQuestion').value === id) {
      loadExampleFields();
      status.textContent = 'Example sentence saved.';
    }
  } catch (error) {
    status.textContent = `保存失败：${error.message}`;
  } finally {
    button.disabled = false;
  }
});

function renderAudioQuestions() {
  const select = $('existingAudioQuestion');
  const selected = select.value;
  select.replaceChildren();
  LEVELS.forEach(([name], level) => {
    const group = document.createElement('optgroup');
    group.label = name;
    pool(level).forEach(q => {
      const label = q.word + (asset(`question:${q.id}`) || q.audio ? ' · 已配音' : '');
      group.append(new Option(label, q.id));
    });
    select.append(group);
  });
  if ([...select.options].some(option => option.value === selected)) select.value = selected;
}

$('existingAudioForm').addEventListener('submit', async event => {
  event.preventDefault();
  const file = $('existingAudioFile').files[0];
  const id = $('existingAudioQuestion').value;
  if (!file || !id) return;
  const button = event.currentTarget.querySelector('button');
  button.disabled = true;
  try {
    validateFile(file, 'audio');
    const entry = { key: `question:${id}`, blob: file };
    await put('assets', entry);
    assets = assets.filter(item => item.key !== entry.key).concat(entry);
    $('existingAudioFile').value = '';
    renderAudioQuestions();
    $('existingAudioStatus').textContent = 'Word audio saved.';
  } catch (error) {
    $('existingAudioStatus').textContent = `保存失败：${error.message}`;
  } finally {
    button.disabled = false;
  }
});


// V3 enhancements: collection-backed captions, daily teaching voices, persistent romance chapters.
const TEACHERS=['Q','SUNWOO','HYUNJAE','JUYEON','YOUNGHOON','JACOB','ERIC','NEW','KEVIN'];
function lessonTeacher(level){
 if(level===FAN_LEVEL)return progress.selected;
 const name=TEACHERS[level%TEACHERS.length];
 return MEMBERS.findIndex(m=>m[0]===name);
}
function longestStreak(){
 const days=[...new Set(progress.dates)].sort();let best=0,run=0,prev=null;
 for(const day of days){const current=parseDay(day);run=prev&&Math.round((current-prev)/86400000)===1?run+1:1;best=Math.max(best,run);prev=current;}
 return best;
}
let captionTimer=null,captionDismissed=false;
function photoInto(el,index){
 el.replaceChildren();const blob=asset(`${index}:photo`);
 if(blob){const img=document.createElement('img');const url=URL.createObjectURL(blob);img.src=url;img.alt=MEMBERS[index][0];img.onload=()=>URL.revokeObjectURL(url);el.append(img);}
 else el.textContent=MEMBERS[index][0][0];
}
function showVoiceCaption(index,type){
 const c=assets.find(a=>a.key===`${index}:caption:${type}`);
 const card=$('voiceCaption');clearTimeout(captionTimer);captionDismissed=false;
 if(!c?.korean&&!c?.chinese){card.classList.add('hidden');return;}
 $('voiceName').textContent=MEMBERS[index][0];photoInto($('voiceAvatar'),index);
 $('voiceCaptionKo').textContent=c.korean||'';$('voiceCaptionZh').textContent=c.chinese||'';
 card.classList.remove('hidden');card.classList.remove('dismiss');
 captionTimer=setTimeout(()=>{if(!captionDismissed)hideVoiceCaption();},9000);
}
function hideVoiceCaption(){captionDismissed=true;clearTimeout(captionTimer);$('voiceCaption').classList.add('hidden');}
function loadCaptionFields(){
 const i=Number($('memberSelect').value),type=$('voiceType').value;
 const c=assets.find(a=>a.key===`${i}:caption:${type}`);
 $('captionKorean').value=c?.korean||'';$('captionChinese').value=c?.chinese||'';
}
const ROMANCE={
 ERIC:[['오늘은 공부 말고 나랑 놀자.','今天先不学习了，陪我玩吧。','屋顶私人休息室里，他笑着拉开你身旁的椅子。'],['너 오기 전에 계속 시계 봤어.','你来之前，我一直在看时间。','他装作若无其事地把手机翻了过去。'],['왜 웃어? 나 진짜 기다렸거든.','笑什么？我真的等了很久。','他往你这边靠近一点。'],['내일도 나 만나 줄 거지?','明天也会来见我吧？','你准备怎样回答？'],['좋아. 그럼 내일도 내 옆자리 비워 둘게.','好，那明天我也给你留旁边的位置。','窗外的夜色还很长。']],
 JACOB:[['오늘은 내가 차 준비했어.','今天我准备了茶。','他把温热的杯子轻轻推到你面前。'],['천천히 마셔. 아직 뜨거워.','慢慢喝，还烫。','他注意到你冻红的指尖。'],['네가 와 줘서 기뻐.','你能来，我很开心。','他的声音温柔而认真。']],
 YOUNGHOON:[['여긴 아무나 들어오는 곳 아니야.','这里不是谁都能进来的地方。','他亲自为你拉开椅子。'],['오늘은 네가 주인공이야.','今天你才是主角。','他微笑着看向你。'],['잠깐, 나 좀 봐.','等一下，看着我。','你抬头，对上他的目光。']],
 HYUNJAE:[['오늘도 무리한 거 아니지?','今天没有太勉强自己吧？','他先确认你有没有好好休息。'],['이제 내가 좀 응석 부려도 돼?','现在换我撒个娇，可以吗？','他笑着靠近。'],['조금만 더 같이 있어.','再陪我待一会儿。','这次他没有掩饰自己的期待。']],
 JUYEON:[['아직 안 갔어?','还没走吗？','深夜的私人休息室，灯光还亮着。'],['오늘도 열심히 했네.','今天也很努力呢。','他放下书，向你走近。'],['조금만 더 여기 있을래?','愿意再在这里待一会儿吗？','他的目光安静而真诚。']],
 KEVIN:[['이 노래 너한테 들려주고 싶었어.','这首歌一直想放给你听。','他把耳机的一边递给你。'],['이 부분 가사, 잘 들어 봐.','这一句歌词，仔细听。','他笑着观察你的反应。'],['왜 웃어? 나 꽤 진지한데.','笑什么？我可是很认真的。','他也忍不住笑了。']],
 NEW:[['오늘 나 기다렸지?','今天有等我吧？','他理所当然地坐到你旁边。'],['칭찬부터 해 줘.','先夸夸我。','他故意扬起下巴。'],['그래도 네가 와서 좋다.','不过你来了，我很高兴。','他小声补充。']],
 Q:[['여기 앉아. 같이 보자.','坐这里，我们一起看。','学长为你留好了座位。'],['오늘 정말 잘했어.','今天真的做得很好。','他认真地夸奖你。'],['내일도 같이 할까?','明天也一起，好吗？','他的语气像平常一样温柔。']],
 SUNWOO:[['일부러 늦게 온 거야?','故意来晚的吗？','他靠在门边笑着问。'],['내가 기다린 건 어떻게 알았어?','你怎么知道我在等你？','被你看穿后他反倒笑得更明显。'],['오늘은 좀 더 있다 가. 뭐, 싫으면 말고.','今天多待一会儿。你不想就算了。','这句倒是说得很认真。']]
};
const STORY_PROSE = {"ERIC": ["你还没来得及回答，他已经把旁边的椅子拉得更近。", "他似乎终于意识到自己刚才说得太急，低头笑了笑。", "你故意问他是不是每次都这样邀请别人。", "他立刻摇头，回答得比你预想中还快。", "你们走到露台边，城市的灯光在玻璃上留下细碎的倒影。", "他拿出手机，认真地把明天的时间留了出来。", "临走前，他朝你挥了挥手，却又忍不住叫住你。", "「明天见」明明只是普通的约定，今晚听起来却不太一样。"], "JACOB": ["你捧起茶杯，杯壁的温度慢慢传到指尖。", "他没有急着说话，只是把点心盘推到你伸手就能拿到的地方。", "你问他怎么知道自己今天会来。", "他笑着说，准备两个人的份总不会错。", "窗外开始下起细雨，房间里只剩下轻柔的背景音乐。", "你们聊起今天遇到的小事，他每一句都听得很认真。", "你站起来时，他替你把外套拿了过来。", "走到门口，你发现他悄悄把下次见面的时间写在了杯垫背面。"], "YOUNGHOON": ["你被他过于郑重的邀请逗笑了。", "他却不急着解释，只把一杯饮料放在你面前。", "你问他为什么偏偏把这个位置留给自己。", "他稍稍侧过脸，像是在考虑要不要说出真正的理由。", "吊灯的光落在他的袖口，周围安静得能听见杯子碰到桌面的轻响。", "你故意转移话题，他也配合地跟着聊了几句。", "直到你起身，他才轻声提醒：下次来，还是坐这里。", "那张椅子从此有了只有你们知道的意义。"], "HYUNJAE": ["你故意学着他平时照顾你的语气，问他今天有没有按时吃饭。", "他先是一愣，随即笑得格外得意。", "你发现他明明精神很好，却还在装作需要人哄。", "他把椅子挪近一点，认真听你讲今天的烦心事。", "说到一半，他忽然不再开玩笑。", "你抬头时，发现他正安静地看着你。", "他最终只是伸手把你歪掉的袖口整理好。", "离开时，他又恢复平时的语气，提醒你明天不准太累。"], "JUYEON": ["你没有立刻回答，只在他旁边的空位坐下。", "他合上书，却把书签小心地留在原来的那一页。", "一开始你们谁都没有说话，安静反而变得舒服。", "你问他刚才在读什么，他把书转过来给你看。", "你看不懂其中一句，他便慢慢解释给你听。", "灯光渐渐暗下来，工作人员开始收拾远处的桌椅。", "他看了一眼时间，没有催你离开。", "最后，你们约好下次一起读完剩下的章节。"], "KEVIN": ["你接过耳机，旋律恰好走到他最喜欢的那一段。", "他原本想观察你的反应，却被你发现自己也在偷偷紧张。", "你故意说这首歌的歌词听起来很像告白。", "他笑着反问：那你觉得呢？", "你们各自选了一首歌，交换了今晚的播放列表。", "他给其中一首起了一个只有你看得懂的名字。", "你准备摘下耳机时，他轻轻示意你再听最后十秒。", "那段旋律结束后，你突然有点期待下一次一起听歌。"], "NEW": ["你偏偏不肯立刻夸他，故意认真打量了好几秒。", "他不满地皱起眉，却还是坐在原地等你的回答。", "你终于说出一句真心的称赞，他反而有点不好意思。", "他迅速换了话题，问你今天有没有给自己准备奖励。", "你说还没有，他便把桌上的甜点推到你面前。", "他强调这只是因为自己今天心情好。", "可当你拿起最后一块时，他又故意说要分他一半。", "你们为那一小块甜点争了半天，谁也没真的生气。"], "Q": ["你坐下后，他把练习本翻到刚才停下的地方。", "他没有替你直接写答案，而是耐心地等你自己想出来。", "你终于答对时，他笑得比你还开心。", "休息的时候，你们聊起最近想做的事情。", "他认真听完，又给了你一个意料之外的鼓励。", "你发现自己已经不像刚来时那么紧张。", "收拾书本时，他把写着明日复习重点的纸条递给你。", "纸条背面还有一行很小的字：别忘了好好休息。"], "SUNWOO": ["你故意没有立刻回答，反而慢慢在他旁边坐下。", "他看了你一眼，像是想说什么，又装作若无其事地移开视线。", "你笑着问：刚才是谁说「不想就算了」？", "他轻轻挑眉，嘴上说着随便你，手却把旁边的饮料推了过来。", "你发现那正好是你平时喜欢的口味。", "他见你盯着杯子，立刻抢先解释：只是碰巧买多了。", "你没有拆穿，只把杯子拿起来，故意说了一声谢谢。", "他终于笑了。等你准备离开时，他又问了一句：明天也来吧？"]};
let episode=0;
let storyStarted=false;
let pendingStoryResponse=null;
let adminPreview=false, previewMember=null, previewEpisode=0, previewReturn=null;
function activeStoryMember(){return adminPreview?previewMember:MEMBERS[progress.selected][0];}
function activeStoryIndex(){return adminPreview?MEMBERS.findIndex(m=>m[0]===previewMember):progress.selected;}
function storyKey(member,ep){return `story:${member}:${ep}`;}
function storyDefault(name,ep){
 if((ep===1||ep===2)&&V10_STORIES[name])return structuredClone(V10_STORIES[name][String(ep)]);
 const base=ROMANCE[name]||ROMANCE.JUYEON;
 if(ep===0)return base.map((line,i)=>({ko:line[0],zh:line[1],note:line[2],choices:i===base.length-2?['응, 좋아. · 嗯，好呀。','조금만 더 있을게. · 我再待一会儿。']:[]}));
 const prompts=[['또 만났네.','又见面了。'],['오늘은 어땠어?','今天过得怎么样？'],['네 얘기 좀 더 듣고 싶어.','我想再多听你说说自己的事。'],['다음에도 여기서 볼까?','下次也在这里见面，好吗？']];
 return prompts.map(([ko,zh],i)=>({ko,zh,note:`${name} · 第 ${ep+1} 篇限定约会 · 场景 ${i+1}`,choices:i===prompts.length-2?['응, 좋아. · 嗯，好呀。','조금만 더 있을게. · 我再待一会儿。']:[]}));
}
function storyLines(name,ep){
 const saved=assets.find(a=>a.key===storyKey(name,ep))?.lines;
 const lines=saved||storyDefault(name,ep);
 if(ep!==0)return lines;
 const prose=(STORY_PROSE[name]||[]).map(text=>({ko:'',zh:'',note:text,choices:[],type:'narration'}));
 // Only append after existing recorded lines: their indices and audio keys never change.
 return lines.some(l=>l.type==='narration'&&l.autoProse) ? lines : [...lines,...prose.map(l=>({...l,autoProse:true}))];
}
function storyAudioKey(name,ep,index){return `story-audio:${name}:${ep}:${index}`;}
function currentStoryInfo(){return {name:activeStoryMember(),ep:episode,index:scene};}
function refreshStoryAudio(){const {name,ep,index}=currentStoryInfo(),blob=asset(storyAudioKey(name,ep,index));const b=$('storyPlayAudio');b.hidden=!blob;}
function playStoryScene(){
 stopAudio();
 if(!storyStarted)return;
 const name=activeStoryMember(),line=storyLines(name,episode)[scene];
 if(!line||line.type==='narration'||(!line.ko&&line.note))return;
 const clip=asset(storyAudioKey(name,episode,scene));
 if(clip)play(clip);
}
function nextStoryScene(){
 if(pendingStoryResponse){pendingStoryResponse=null;scene++;renderStory();playStoryScene();return;}
 if(!storyStarted){pendingStoryResponse=null;storyStarted=true;scene=0;renderStory();playStoryScene();return;}
 const lines=storyLines(activeStoryMember(),episode);
 if(lines[scene]?.choices?.length)return;
 if(scene>=lines.length-1){storyStarted=false;scene=0;stopAudio();renderStory();return;}
 pendingStoryResponse=null;scene++;renderStory();playStoryScene();
}
function renderStory(){
 const index=activeStoryIndex(),[name,koName]=MEMBERS[index];
 const count=adminPreview?Math.max(3,previewEpisode+1):Math.floor(longestStreak()/5);progress.storyUnlocked=count>0;
 const art=$('storyArt');photoInto($('storyMonogram'),index);
 art.classList.toggle('has-photo',!!asset(`${index}:photo`));
 $('storyMemberName').textContent=`${name} · ${koName}`;
 $('storyBadge').textContent=adminPreview?'ADMIN PREVIEW · '+name+' · EPISODE '+String(episode+1).padStart(3,'0'):count?`UNLOCKED · ${name} · EPISODE ${String(episode+1).padStart(3,'0')}`:`LOCKED · ${Math.min(streak(),5)} / 5 DAYS`;
 const picker=$('storyEpisodePicker');picker.replaceChildren();
 for(let i=0;i<(adminPreview?3:count);i++){
  const b=document.createElement('button');b.type='button';b.className='episode-tab'+(i===episode?' active':'');b.textContent=`EP ${String(i+1).padStart(2,'0')}`;
  b.onclick=()=>{stopAudio();episode=i;scene=0;storyStarted=false;pendingStoryResponse=null;renderStory();};picker.append(b);
 }
 const voice=$('storyPlayAudio');if(voice)voice.hidden=true;
 const choices=$('storyChoices');choices.replaceChildren();
 $('storyDialogue').classList.toggle('story-playing',!!storyStarted);
 $('previewExit').hidden=!adminPreview;
 if(!count){storyStarted=false;$('storyKorean').hidden=false;$('storyChinese').classList.remove('story-prose');$('storyKorean').textContent='A story worth earning.';$('storyChinese').textContent=`连续五个不同自然日完成学习，解锁 ${name} 的第一篇限定剧情。`;$('storyNext').disabled=true;return;}
 episode=Math.min(episode,count-1);
 if(!storyStarted){$('storyKorean').hidden=false;$('storyChinese').classList.remove('story-prose');$('storyKorean').textContent='Your private chapter awaits.';$('storyChinese').textContent='点击 ENTER STORY 开始。每次点击屏幕，故事推进一句；有配音的台词会自动播放。';$('storyNext').disabled=false;$('storyNext').textContent='ENTER STORY →';return;}
 const lines=storyLines(name,episode);scene=Math.min(scene,lines.length-1);const step=pendingStoryResponse||lines[scene];
 const narration=step.type==='narration'||(!step.ko&&step.note);
 $('storyKorean').textContent=narration?'':step.ko;
 $('storyKorean').hidden=narration;
 $('storyChinese').textContent=narration?step.note:[step.zh,step.note].filter(Boolean).join(' · ');
 $('storyChinese').classList.toggle('story-prose',narration);
 if(step.choices?.length&&!pendingStoryResponse){step.choices.forEach(choice=>{
  const b=document.createElement('button');b.type='button';b.textContent=choice;
  b.onclick=()=>{if(step.responses?.length){pendingStoryResponse=step.responses[Math.min(step.choices.indexOf(choice),step.responses.length-1)];renderStory();}else{scene++;renderStory();playStoryScene();}};choices.append(b);
 });$('storyNext').disabled=true;
 }else $('storyNext').disabled=false;
 $('storyNext').textContent=scene===lines.length-1?'FINISH EPISODE →':'CONTINUE →';
}

function editorMember(){return $('editStoryMember').value;}
function editorEpisode(){return Number($('editStoryEpisode').value);}
function editorLine(){return Number($('editStoryLine').value);}
function refreshEditorLines(keep=0){
 const name=editorMember(),ep=editorEpisode(),lines=storyLines(name,ep),select=$('editStoryLine');select.replaceChildren();
 lines.forEach((line,i)=>select.add(new Option(`${String(i+1).padStart(2,'0')} · ${(line.ko||'新台词').slice(0,26)}`,String(i))));
 select.value=String(Math.min(keep,lines.length-1));loadEditorLine();
}
function loadEditorLine(){
 const name=editorMember(),ep=editorEpisode(),idx=editorLine(),line=storyLines(name,ep)[idx];if(!line)return;
 $('editStoryKo').value=line.ko||'';$('editStoryZh').value=line.zh||'';$('editStoryNote').value=line.note||'';
 $('editStoryChoices').value=(line.choices||[]).join('\n');$('editStoryAudio').value='';
 $('storyEditorStatus').textContent=asset(storyAudioKey(name,ep,idx))?'此句已有配音，可试听或重新上传。':'此句尚未上传配音。';
}
async function storeStoryLines(name,ep,lines){const entry={key:storyKey(name,ep),lines};await put('assets',entry);assets=assets.filter(a=>a.key!==entry.key).concat(entry);}
async function saveEditedLine(){
 const name=editorMember(),ep=editorEpisode(),idx=editorLine(),lines=structuredClone(storyLines(name,ep)),file=$('editStoryAudio').files[0];
 try{validateFile(file,'audio');lines[idx]={...lines[idx],ko:$('editStoryKo').value.trim(),zh:$('editStoryZh').value.trim(),note:$('editStoryNote').value.trim(),choices:$('editStoryChoices').value.split('\n').map(x=>x.trim()).filter(Boolean)};
 if(!lines[idx].ko && !lines[idx].note)throw Error('请填写韩语台词或纯文本旁白。');
 await storeStoryLines(name,ep,lines);
 if(file){const entry={key:storyAudioKey(name,ep,idx),blob:file};await put('assets',entry);assets=assets.filter(a=>a.key!==entry.key).concat(entry);}
 refreshEditorLines(idx);renderStory();$('storyEditorStatus').textContent='台词与语音已保存，游戏剧情实时同步。';
 }catch(e){$('storyEditorStatus').textContent='保存失败：'+e.message;}
}
async function addEditedLine(){const name=editorMember(),ep=editorEpisode(),lines=structuredClone(storyLines(name,ep));lines.push({ko:'새로운 이야기',zh:'新的故事。',note:'',choices:[]});await storeStoryLines(name,ep,lines);refreshEditorLines(lines.length-1);renderStory();$('storyEditorStatus').textContent='已新增一句台词，请编辑并保存。';}
async function deleteEditedLine(){const name=editorMember(),ep=editorEpisode(),idx=editorLine(),lines=structuredClone(storyLines(name,ep));if(lines.length<=1){$('storyEditorStatus').textContent='每篇剧情至少保留一句台词。';return;}
 lines.splice(idx,1);await storeStoryLines(name,ep,lines);
 // Audio is keyed by line index; shift audio files to preserve alignment.
 const originals=assets.filter(a=>a.key.startsWith(`story-audio:${name}:${ep}:`));
 for(const obj of originals){const n=Number(obj.key.split(':').at(-1));if(n>=idx){const tx=db.transaction('assets','readwrite');tx.objectStore('assets').delete(obj.key);await new Promise((resolve,reject)=>{tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});assets=assets.filter(a=>a.key!==obj.key);}}
 for(const obj of originals){const n=Number(obj.key.split(':').at(-1));if(n>idx){const moved={key:storyAudioKey(name,ep,n-1),blob:obj.blob};await put('assets',moved);assets.push(moved);}}
 refreshEditorLines(Math.max(0,idx-1));scene=0;renderStory();$('storyEditorStatus').textContent='已删除当前台词。';
}
function setupStoryEditor(){
 const member=$('editStoryMember'),ep=$('editStoryEpisode');MEMBERS.forEach(m=>member.add(new Option(`${m[0]} · ${m[1]}`,m[0])));
 for(let i=0;i<30;i++)ep.add(new Option(`第 ${i+1} 篇 · ${5*(i+1)} 日解锁`,String(i)));
 member.value=MEMBERS[progress.selected][0];member.addEventListener('change',()=>refreshEditorLines());ep.addEventListener('change',()=>refreshEditorLines());$('editStoryLine').addEventListener('change',loadEditorLine);
 $('saveStoryLine').addEventListener('click',saveEditedLine);$('addStoryLine').addEventListener('click',addEditedLine);$('deleteStoryLine').addEventListener('click',deleteEditedLine);
 $('previewStoryAudio').addEventListener('click',()=>{const blob=asset(storyAudioKey(editorMember(),editorEpisode(),editorLine()));if(blob)play(blob);else $('storyEditorStatus').textContent='当前台词还没有上传配音。';});
 refreshEditorLines();
}
function setupV3(){
 $('memberSelect').addEventListener('change',loadCaptionFields);$('voiceType').addEventListener('change',loadCaptionFields);
 $('voiceCaptionClose').addEventListener('click',hideVoiceCaption);
 let y=null;const card=$('voiceCaption');
 card.addEventListener('touchstart',e=>{y=e.touches[0].clientY;},{passive:true});
 card.addEventListener('touchend',e=>{if(y!==null&&y-e.changedTouches[0].clientY>40)hideVoiceCaption();y=null;},{passive:true});
 card.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')y=e.clientY;});
 card.addEventListener('pointerup',e=>{if(e.pointerType==='mouse'&&y!==null&&y-e.clientY>40)hideVoiceCaption();y=null;});
 
}
setupV3();
setupStoryEditor();
$('storyNext').addEventListener('click',e=>{e.stopPropagation();nextStoryScene();});
$('storyDialogue').addEventListener('click',e=>{
 if(e.target.closest('button, a, input, textarea, select'))return;
 if((progress.storyUnlocked||adminPreview)&&storyStarted)nextStoryScene();
});


function openAdminPreview(){
 previewMember=$('previewMember').value;previewEpisode=Number($('previewEpisode').value);
 adminPreview=true;episode=previewEpisode;scene=0;storyStarted=false;pendingStoryResponse=null;stopAudio();
 $('previewStatus').textContent='已打开玩家同款剧情界面；此操作不会改变学习进度。';
 renderStory();$('story').scrollIntoView({behavior:'smooth',block:'start'});
}
function exitAdminPreview(){adminPreview=false;storyStarted=false;scene=0;pendingStoryResponse=null;stopAudio();episode=0;renderStory();$('previewStudio').scrollIntoView({behavior:'smooth',block:'start'});}
function setupPreview(){
 const m=$('previewMember');if(!m)return;
 MEMBERS.forEach(([en,ko])=>m.add(new Option(en+' · '+ko,en)));
 m.value=MEMBERS[progress.selected][0];
 $('launchPreview').addEventListener('click',openAdminPreview);
 $('previewExit').addEventListener('click',exitAdminPreview);
}
setupPreview();

init();
