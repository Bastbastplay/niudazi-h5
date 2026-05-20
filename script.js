const TYPES = {
  "牛马续命型": {
    color: "#df4b35",
    accent: "#f4c341",
    prop: "coffee",
    tags: ["靠一口脆活着", "deadline代谢快", "嘴上摆烂手上交付"],
    copy:
      "你的人生像后台常驻程序，明明显示电量 3%，还能顺手救一个项目。你的情绪不是稳定，是被工作腌入味了；每次说“我真不行了”，下一秒已经把表格修到能发给老板。大脆条对你来说不是零食，是续命条。"
  },
  "已读不回型": {
    color: "#2864a4",
    accent: "#fffaf0",
    prop: "message",
    tags: ["精神离线", "消息冷处理", "不回但都看见了"],
    copy:
      "你的社交状态常年显示“在，但不完全在”。不是没礼貌，是灵魂刚刚被工作群挤出屏幕。你擅长用沉默制造悬念，用已读保持边界；别人以为你高冷，其实你只是想把最后一点电量留给自己。"
  },
  "周五复活型": {
    color: "#28734f",
    accent: "#f4c341",
    prop: "friday",
    tags: ["周一低血糖", "周五满血", "下班即开机"],
    copy:
      "你不是没有能量，你的能量只是被设置成周五到账。前四天像被生活抽真空，周五下午突然出现人格反转：眼神有光、走路带风、甚至开始主动约局。你的快乐很准时，像工资到账前的幻觉一样动人。"
  },
  "工位囤货型": {
    color: "#df4b35",
    accent: "#93c7a2",
    prop: "snacks",
    tags: ["抽屉有粮心不慌", "办公室补给站", "脆条外交官"],
    copy:
      "你的工位不是工位，是末日避难所。抽屉里有零食、纸巾、药、充电线和一种“我早就料到”的从容。大家嘴上说你囤，身体却很诚实地来借。你用大脆条建立办公室外交，靠库存维持人类文明。"
  },
  "情绪稳定假装型": {
    color: "#725f48",
    accent: "#f4c341",
    prop: "mask",
    tags: ["微笑营业", "内心弹幕爆炸", "体面崩溃"],
    copy:
      "你看起来像一杯温水，内心其实在开摇滚音乐节。你说“没关系”的时候，脑内已经开了三场发布会。你的稳定不是天赋，是成年人把尖叫折叠成微笑的技术。偶尔嚼点脆的，是为了证明自己还拥有咬合力。"
  },
  "硬刚反卷型": {
    color: "#1d1a15",
    accent: "#df4b35",
    prop: "boxing",
    tags: ["拒绝无效忙", "边界感外露", "该怼就怼"],
    copy:
      "你是会议室里的清醒剂，专治“要不再优化一下”。你不是叛逆，是对无效内耗过敏；不是不配合，是拒绝把人生交给 PPT 动画。你的人设很简单：该干的干漂亮，不该卷的当场退订。"
  },
  "深夜回血型": {
    color: "#2864a4",
    accent: "#f7d98c",
    prop: "moon",
    tags: ["白天省电", "夜里开机", "凌晨灵感股东"],
    copy:
      "白天的你像被世界静音，深夜的你突然开始系统更新。别人睡觉，你回血；别人早起，你刚把人生想明白。你的情绪需要夜色解压，也需要一点咔嚓声提醒自己：今天虽然乱七八糟，但我还在。"
  },
  "社交发疯型": {
    color: "#df4b35",
    accent: "#2864a4",
    prop: "speaker",
    tags: ["气氛组编外", "见人来电", "梗比工资多"],
    copy:
      "你是群聊里的氧气瓶，也是饭局里的自动续杯。你的脑子里常驻十个热梗，情绪像开了弹幕。你不是社牛，你是把尴尬现场加工成喜剧片的人。唯一的问题是，发疯结束后需要独自躺平三小时。"
  },
  "安静蓄能型": {
    color: "#28734f",
    accent: "#fffaf0",
    prop: "plant",
    tags: ["低电量社交", "慢热但可靠", "安静恢复中"],
    copy:
      "你不是冷淡，只是能量条比较精致，不能随便被人乱点。你擅长在角落观察世界，把话留给真正需要的时候。你的存在感不吵，但很稳；像一包藏在包里的大脆条，关键时刻才拿出来救场。"
  },
  "精致自律型": {
    color: "#2864a4",
    accent: "#93c7a2",
    prop: "dumbbell",
    tags: ["计划表本人", "健康但不扫兴", "自律带点松弛"],
    copy:
      "你的生活像被排版过，连崩溃都讲究节奏。你可以早起运动，也可以认真享受一口脆；你知道自律不是把快乐删掉，而是给快乐安排一个体面的出场顺序。别人靠玄学，你靠清单。"
  },
  "嘴硬逞强型": {
    color: "#725f48",
    accent: "#df4b35",
    prop: "armor",
    tags: ["没事但快碎了", "嘴上能扛", "心里开裂"],
    copy:
      "你最常说“我可以”，真实意思是“我先把自己骗过去”。你擅长把委屈压成玩笑，把疲惫包装成没睡好。嘴硬是你的铠甲，逞强是你的默认皮肤；但请记得，偶尔喊饿、喊累、喊人一起吃点脆的，也算一种高级生存。"
  },
  "说走就走型": {
    color: "#28734f",
    accent: "#f4c341",
    prop: "suitcase",
    tags: ["临时起意专家", "出门回血", "地图型人格"],
    copy:
      "你的人生最大按钮叫“先走再说”。被工作压到变形时，你会突然搜索高铁票、露营地和附近能看风的地方。你不是逃避现实，你是在给现实换个背景板。你的快乐不爱排队，主打一个即刻出发。"
  }
};

const QUESTIONS = [
  {
    title: "周一开机那一秒，你的灵魂在干嘛？",
    options: [
      ["肉身坐下了，灵魂还在地铁口排队。", ["牛马续命型", "深夜回血型"]],
      ["先把微信划走，假装世界还没上班。", ["已读不回型", "安静蓄能型"]],
      ["打开抽屉盘点口粮，今天先稳住血条。", ["工位囤货型", "情绪稳定假装型"]],
      ["谁先说“简单同步下”，谁先接受我的凝视。", ["硬刚反卷型", "嘴硬逞强型"]]
    ]
  },
  {
    title: "同事问“下班吃啥”，你的人格弹窗是？",
    options: [
      ["我来组局，但请大家尊重我的发疯节奏。", ["社交发疯型", "周五复活型"]],
      ["嘴上随便，备忘录里已经三家候选。", ["精致自律型", "说走就走型"]],
      ["先吃我抽屉里的，别让胃参与决策。", ["工位囤货型", "牛马续命型"]],
      ["我先隐身，等你们吵出结果再优雅出现。", ["已读不回型", "安静蓄能型"]]
    ]
  },
  {
    title: "老板发来一句“有个小需求”，你会？",
    options: [
      ["回“收到”，内心已把桌面掀了三遍。", ["情绪稳定假装型", "嘴硬逞强型"]],
      ["先问交付物、截止点、谁拍板，别搞玄学。", ["硬刚反卷型", "精致自律型"]],
      ["很好，今晚又要和月亮签劳动合同。", ["深夜回血型", "牛马续命型"]],
      ["先丢个梗图，给这个需求做临终关怀。", ["社交发疯型", "周五复活型"]]
    ]
  },
  {
    title: "如果大脆条能说话，它会怎么评价你？",
    options: [
      ["此人一边咔嚓一边开会，反骨很脆。", ["硬刚反卷型", "牛马续命型"]],
      ["此人会给零食摆盘，连摆烂都很精装。", ["精致自律型", "工位囤货型"]],
      ["此人适合外放，能把茶水间变脱口秀现场。", ["社交发疯型", "周五复活型"]],
      ["此人请勿打扰，正在夜间独自修复出厂设置。", ["深夜回血型", "安静蓄能型"]]
    ]
  },
  {
    title: "手机 12% 电量，群里开始疯狂 @ 你。",
    options: [
      ["手机低电量，我也低电量，一起装死很合理。", ["已读不回型", "安静蓄能型"]],
      ["插上充电线继续干，像一台没有尊严的共享充电宝。", ["牛马续命型", "嘴硬逞强型"]],
      ["直接问：所以你们到底要我干嘛？", ["硬刚反卷型", "情绪稳定假装型"]],
      ["先回表情包，把灾难现场改成综艺现场。", ["社交发疯型", "说走就走型"]]
    ]
  },
  {
    title: "周五 18:01，你的精神皮肤自动切换成？",
    options: [
      ["快乐皮肤：限时返场，眼神突然有光。", ["周五复活型", "精致自律型"]],
      ["移动皮肤：先出门，目的地路上再编。", ["说走就走型", "社交发疯型"]],
      ["隐身皮肤：回家、关灯、拒绝人类访问。", ["安静蓄能型", "已读不回型"]],
      ["嘴硬皮肤：没事我收个尾，其实人已冒烟。", ["嘴硬逞强型", "情绪稳定假装型"]]
    ]
  },
  {
    title: "你的朋友圈如果突然营业，会是哪种事故？",
    options: [
      ["一张精修生活照，配字短到像高冷免责声明。", ["精致自律型", "安静蓄能型"]],
      ["一张车票或天空，暗示本人已脱离工位引力。", ["说走就走型", "深夜回血型"]],
      ["九宫格热梗连发，朋友以为你被夺舍了。", ["社交发疯型", "周五复活型"]],
      ["不发，主打一个让互联网自行怀念我。", ["已读不回型", "硬刚反卷型"]]
    ]
  },
  {
    title: "你想找一个什么样的牛搭子，陪你渡劫？",
    options: [
      ["在我电量见底时，递来一口脆和一丝人性。", ["牛马续命型", "工位囤货型"]],
      ["陪我体面糊弄今天，明天再假装重新做人。", ["情绪稳定假装型", "精致自律型"]],
      ["陪我深夜复盘，然后一起得出“都怪世界”的结论。", ["深夜回血型", "嘴硬逞强型"]],
      ["陪我分享、出走、发疯、复活，人生主打随机刷新。", ["社交发疯型", "说走就走型", "周五复活型"]]
    ]
  }
];

const typeOrder = Object.keys(TYPES);
const SHARE_URL = "http://yihaoranch.songroad.pro/";
const scores = Object.fromEntries(typeOrder.map((type) => [type, 0]));
const selectedAnswers = [];
let currentQuestion = 0;
let soundEnabled = false;
let isAdvancing = false;
let currentResultType = "";

const startScreen = document.querySelector("#startScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const questionCounter = document.querySelector("#questionCounter");
const progressBar = document.querySelector("#progressBar");
const questionKicker = document.querySelector("#questionKicker");
const questionTitle = document.querySelector("#questionTitle");
const optionList = document.querySelector("#optionList");
const questionCard = document.querySelector("#questionCard");
const resultName = document.querySelector("#resultName");
const resultCopy = document.querySelector("#resultCopy");
const resultIllustration = document.querySelector("#resultIllustration");
const tagRow = document.querySelector("#tagRow");
const posterCode = document.querySelector("#posterCode");
const toast = document.querySelector("#toast");
const posterModal = document.querySelector("#posterModal");
const posterImage = document.querySelector("#posterImage");
const asmrAudio = document.querySelector("#asmrAudio");

document.querySelector("#startBtn").addEventListener("click", () => {
  playCrunch();
  showScreen(startScreen, quizScreen);
  renderQuestion();
});

document.querySelector("#restartBtn").addEventListener("click", () => {
  Object.keys(scores).forEach((key) => {
    scores[key] = 0;
  });
  selectedAnswers.length = 0;
  currentQuestion = 0;
  isAdvancing = false;
  playCrunch();
  showScreen(resultScreen, quizScreen);
  renderQuestion();
});

document.querySelector("#shareBtn").addEventListener("click", async () => {
  const text = `@你的牛搭子 一起测一测：我的牛搭子人格是「${resultName.textContent}」，你是什么型？`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "牛搭子人格，藏不住了", text });
      return;
    } catch (error) {
      showToast("分享没有发出，可以再点一次。");
      return;
    }
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    showToast("分享文案已复制，去 @ 你的牛搭子吧。");
  } else {
    showToast(text);
  }
});

document.querySelector("#posterBtn").addEventListener("click", () => {
  showPosterImage();
});

posterModal.addEventListener("click", (event) => {
  if (event.target === posterModal) closePosterModal();
});

document.querySelector("#soundBtn").addEventListener("click", (event) => {
  soundEnabled = !soundEnabled;
  event.currentTarget.setAttribute("aria-pressed", String(soundEnabled));
  event.currentTarget.textContent = soundEnabled ? "停止专属BGM" : "开启专属BGM";
  if (soundEnabled) {
    asmrAudio.currentTime = 0;
    asmrAudio.play().catch(() => showToast("浏览器拦截了自动播放，请再点一次。"));
  } else {
    asmrAudio.pause();
    asmrAudio.currentTime = 0;
  }
});

function showScreen(from, to) {
  from.classList.add("is-leaving");
  from.classList.remove("is-active");
  setTimeout(() => {
    from.classList.remove("is-leaving");
    to.classList.add("is-active");
  }, 130);
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  questionCounter.textContent = `${String(currentQuestion + 1).padStart(2, "0")} / ${String(QUESTIONS.length).padStart(2, "0")}`;
  questionKicker.textContent = `Q${currentQuestion + 1}`;
  questionTitle.textContent = question.title;
  progressBar.style.width = `${(currentQuestion / QUESTIONS.length) * 100}%`;
  optionList.innerHTML = "";

  question.options.forEach(([label, targetTypes], index) => {
    const button = document.createElement("button");
    const selected = selectedAnswers[currentQuestion]?.label === label;
    button.className = selected ? "option-btn is-selected" : "option-btn";
    button.type = "button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><span><strong>${label}</strong></span>`;
    button.addEventListener("click", () => chooseOption(label, targetTypes));
    optionList.appendChild(button);
  });

  questionCard.classList.remove("pulse-note");
  window.requestAnimationFrame(() => questionCard.classList.add("pulse-note"));
}

function chooseOption(label, targetTypes) {
  if (isAdvancing) return;
  isAdvancing = true;
  selectedAnswers[currentQuestion] = { label, targetTypes };
  playCrunch();
  renderQuestion();

  if (currentQuestion < QUESTIONS.length - 1) {
    setTimeout(() => {
      currentQuestion += 1;
      isAdvancing = false;
      renderQuestion();
    }, 260);
  } else {
    progressBar.style.width = "100%";
    setTimeout(showResult, 320);
  }
}

function showResult() {
  calculateScores();
  const topType = typeOrder.reduce((winner, type) => {
    if (scores[type] > scores[winner]) return type;
    if (scores[type] === scores[winner] && recentAnswerIndex(type) > recentAnswerIndex(winner)) return type;
    return winner;
  }, typeOrder[0]);

  const data = TYPES[topType];
  currentResultType = topType;
  resultName.textContent = topType;
  resultCopy.innerHTML = formatResultCopy(data.copy);
  posterCode.textContent = `NO.${String(typeOrder.indexOf(topType) + 1).padStart(3, "0")}`;
  tagRow.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");
  resultIllustration.innerHTML = createIllustration(topType, data);
  showScreen(quizScreen, resultScreen);
  throwConfetti(data.color, data.accent);
}

function formatResultCopy(copy) {
  return copy
    .split(/(?<=[，。；])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .join("<br>");
}

function calculateScores() {
  Object.keys(scores).forEach((key) => {
    scores[key] = 0;
  });

  selectedAnswers.forEach((answer) => {
    answer.targetTypes.forEach((type, index) => {
      scores[type] += index === 0 ? 2 : 1;
    });
  });
}

function recentAnswerIndex(type) {
  return selectedAnswers.reduce((latest, answer, index) => {
    return answer.targetTypes.includes(type) ? index : latest;
  }, -1);
}

function createIllustration(type, data) {
  const mouth = {
    coffee: "M142 122q18 10 36 0",
    message: "M145 124h34",
    friday: "M136 116q22 22 44 0",
    snacks: "M140 120q20 16 40 0",
    mask: "M144 123q18-7 36 0",
    boxing: "M144 123h34",
    moon: "M142 121q18 10 36 0",
    speaker: "M134 114q25 26 50 0",
    plant: "M145 123h30",
    dumbbell: "M140 118q20 14 40 0",
    armor: "M144 124q17-9 34 0",
    suitcase: "M140 116q20 19 40 0"
  }[data.prop];

  const eyes = {
    coffee: `<path d="M132 95h19M171 95h19" stroke="#1d1a15" stroke-width="6" stroke-linecap="round"/>`,
    message: `<circle cx="140" cy="96" r="5" fill="#1d1a15"/><circle cx="180" cy="96" r="5" fill="#1d1a15"/>`,
    friday: `<path d="M130 93q10-9 21 0M170 93q10-9 21 0" fill="none" stroke="#1d1a15" stroke-width="5" stroke-linecap="round"/>`,
    snacks: `<circle cx="140" cy="96" r="5" fill="#1d1a15"/><circle cx="180" cy="96" r="5" fill="#1d1a15"/>`,
    mask: `<path d="M130 94q11 10 22 0M170 94q11 10 22 0" fill="none" stroke="#1d1a15" stroke-width="5" stroke-linecap="round"/>`,
    boxing: `<path d="M130 92l22 9M192 92l-22 9" stroke="#1d1a15" stroke-width="6" stroke-linecap="round"/>`,
    moon: `<path d="M131 96h20M171 96h20" stroke="#1d1a15" stroke-width="6" stroke-linecap="round"/>`,
    speaker: `<circle cx="140" cy="96" r="7" fill="#1d1a15"/><circle cx="181" cy="96" r="7" fill="#1d1a15"/>`,
    plant: `<circle cx="140" cy="97" r="5" fill="#1d1a15"/><circle cx="180" cy="97" r="5" fill="#1d1a15"/>`,
    dumbbell: `<circle cx="140" cy="96" r="5" fill="#1d1a15"/><circle cx="180" cy="96" r="5" fill="#1d1a15"/>`,
    armor: `<path d="M131 96h19M171 96h19" stroke="#1d1a15" stroke-width="6" stroke-linecap="round"/>`,
    suitcase: `<circle cx="140" cy="96" r="5" fill="#1d1a15"/><circle cx="180" cy="96" r="5" fill="#1d1a15"/>`
  }[data.prop];

  const bull = `
    <g transform="translate(-8 0)">
      <path d="M55 230c16-70 42-107 112-107s96 37 112 107z" fill="#8f4f2c" stroke="#1d1a15" stroke-width="6"/>
      <circle cx="167" cy="87" r="58" fill="#8f4f2c" stroke="#1d1a15" stroke-width="6"/>
      <path d="M128 49c-22-43 27-52 37-14M206 49c22-43-27-52-37-14" fill="#fffaf0" stroke="#1d1a15" stroke-width="6" stroke-linejoin="round"/>
      <path d="M137 132c16 17 44 17 60 0v36h-60z" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/>
      ${eyes}
      <path d="${mouth}" fill="none" stroke="#1d1a15" stroke-width="5" stroke-linecap="round"/>
      <path d="M153 159h39" stroke="#a84b2e" stroke-width="18" stroke-linecap="round"/>
      <circle cx="163" cy="158" r="4" fill="#f5df96"/>
      <circle cx="181" cy="158" r="4" fill="#f5df96"/>
    </g>`;

  const scenes = {
    coffee: `<g><rect x="238" y="36" width="70" height="104" rx="12" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M308 70h18c15 0 15 38 0 38h-18" fill="none" stroke="#1d1a15" stroke-width="6"/><rect x="58" y="50" width="46" height="118" rx="18" fill="#df4b35" stroke="#1d1a15" stroke-width="6"/><rect x="72" y="138" width="18" height="14" fill="#f4c341"/><path d="M44 189h106M74 28h74" stroke="#1d1a15" stroke-width="8" stroke-linecap="round" opacity=".18"/></g>`,
    message: `<g><rect x="228" y="42" width="112" height="142" rx="18" fill="#2864a4" stroke="#1d1a15" stroke-width="6"/><rect x="244" y="62" width="80" height="94" rx="10" fill="#fffaf0"/><circle cx="266" cy="110" r="7" fill="#1d1a15"/><circle cx="284" cy="110" r="7" fill="#1d1a15"/><circle cx="302" cy="110" r="7" fill="#1d1a15"/><path d="M50 70h90M30 102h62M54 184h102" stroke="#2864a4" stroke-width="8" stroke-linecap="round" opacity=".5"/></g>`,
    friday: `<g><rect x="230" y="34" width="100" height="108" rx="14" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M230 70h100" stroke="#1d1a15" stroke-width="6"/><circle cx="258" cy="106" r="13" fill="#df4b35"/><circle cx="298" cy="106" r="13" fill="#28734f"/><path d="M36 156q62 42 134 0" fill="none" stroke="#1d1a15" stroke-width="8" stroke-linecap="round"/><circle cx="78" cy="72" r="35" fill="#f4c341" stroke="#1d1a15" stroke-width="6"/></g>`,
    snacks: `<g><path d="M220 112h122v84H220z" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M238 88h86v38h-86z" fill="#df4b35" stroke="#1d1a15" stroke-width="6"/><rect x="42" y="46" width="88" height="128" rx="10" fill="#f4c341" stroke="#1d1a15" stroke-width="6"/><path d="M58 86h56M58 122h56M70 158h34" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/></g>`,
    mask: `<g><path d="M220 54c34 22 80 22 114 0v70c-28 34-86 34-114 0z" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M244 90q12 11 24 0M290 90q12 11 24 0M258 122q22-9 44 0" fill="none" stroke="#1d1a15" stroke-width="5" stroke-linecap="round"/><path d="M48 48l52 52-52 52-52-52z" fill="#f4c341" stroke="#1d1a15" stroke-width="6"/><path d="M32 190h120" stroke="#1d1a15" stroke-width="8" stroke-linecap="round" opacity=".25"/></g>`,
    boxing: `<g><path d="M230 70c18-42 88-30 88 24v70h-102v-52c0-16 5-30 14-42z" fill="#df4b35" stroke="#1d1a15" stroke-width="6"/><path d="M318 112h38v52h-38z" fill="#df4b35" stroke="#1d1a15" stroke-width="6"/><path d="M26 118h132M92 54v128M46 70l92 92M138 70l-92 92" stroke="#1d1a15" stroke-width="8" stroke-linecap="round"/></g>`,
    moon: `<g><path d="M330 26c-45 10-74 50-63 94 9 35 39 58 75 61-18 14-42 18-65 12-52-13-84-66-71-118 12-50 60-82 110-72 8 2 14 5 14 23z" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><circle cx="72" cy="58" r="8" fill="#f4c341"/><circle cx="126" cy="96" r="6" fill="#f4c341"/><path d="M28 180h138M58 150h78" stroke="#2864a4" stroke-width="8" stroke-linecap="round"/></g>`,
    speaker: `<g><path d="M220 100h40l64-50v130l-64-50h-40z" fill="#2864a4" stroke="#1d1a15" stroke-width="6"/><path d="M338 84q26 38 0 76M26 58l42 16M34 174l50-22M74 40l34 44" fill="none" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/><circle cx="82" cy="110" r="36" fill="#df4b35" stroke="#1d1a15" stroke-width="6"/></g>`,
    plant: `<g><path d="M238 126h92l-14 72h-64z" fill="#df4b35" stroke="#1d1a15" stroke-width="6"/><path d="M276 130c-12-58-50-80-78-58 18 38 46 50 78 58zM286 130c16-64 60-82 84-56-22 40-52 50-84 56z" fill="#28734f" stroke="#1d1a15" stroke-width="6"/><rect x="36" y="70" width="100" height="108" rx="12" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M62 124h50M86 98v52" stroke="#f4c341" stroke-width="9" stroke-linecap="round"/></g>`,
    dumbbell: `<g><path d="M224 106v62M254 92v90M302 92v90M332 106v62M254 137h48" fill="none" stroke="#1d1a15" stroke-width="13" stroke-linecap="round"/><rect x="34" y="42" width="106" height="140" rx="12" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M58 78h58M58 112h58M58 146h36" stroke="#2864a4" stroke-width="8" stroke-linecap="round"/></g>`,
    armor: `<g><path d="M232 42h104v140c-25 25-62 33-104 0z" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/><path d="M254 80h58M254 116h58M284 42v154M238 170l92-92" stroke="#df4b35" stroke-width="6"/><path d="M42 72l100 100M142 72l-100 100" stroke="#1d1a15" stroke-width="8" stroke-linecap="round"/><circle cx="92" cy="122" r="44" fill="none" stroke="#f4c341" stroke-width="9"/></g>`,
    suitcase: `<g><rect x="226" y="76" width="110" height="112" rx="14" fill="#f4c341" stroke="#1d1a15" stroke-width="6"/><path d="M258 76v-26h46v26M258 112h48M258 148h48" fill="none" stroke="#1d1a15" stroke-width="6"/><path d="M26 152c42-54 92-72 150-56" fill="none" stroke="#28734f" stroke-width="9" stroke-linecap="round"/><path d="M164 84l32 18-34 14" fill="none" stroke="#28734f" stroke-width="9" stroke-linecap="round"/></g>`
  }[data.prop];

  return `
    <svg viewBox="0 0 360 230" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${type}插画">
      <rect width="360" height="230" fill="#fff7df"/>
      <path d="M-18 188c52-34 111-36 172-8 68 31 126 28 226-10v70H-18z" fill="${data.color}" opacity="0.2"/>
      <circle cx="32" cy="16" r="64" fill="${data.accent}" stroke="#1d1a15" stroke-width="6"/>
      <circle cx="336" cy="212" r="58" fill="${data.color}" stroke="#1d1a15" stroke-width="6" opacity="0.88"/>
      <path d="M-6 32h114M-2 61h68M246 26h118" stroke="#1d1a15" stroke-width="8" stroke-linecap="round" opacity="0.16"/>
      ${scenes}
      ${bull}
    </svg>
  `;
}

function playCrunch() {
  if (!soundEnabled) return;
  asmrAudio.currentTime = Math.max(0, asmrAudio.currentTime - 0.08);
}

function showPosterImage() {
  if (!currentResultType) return;
  const data = TYPES[currentResultType];
  const tagLines = wrapPosterText(data.tags.join(" / "), 18);
  const copyLines = getPosterCopyLines(data.copy);
  const copyFontSize = copyLines.length > 10 ? 20 : copyLines.length > 8 ? 22 : 24;
  const copyLineGap = copyLines.length > 10 ? 30 : copyLines.length > 8 ? 32 : 36;
  const posterArt = createIllustration(currentResultType, data).replace(
    "<svg ",
    '<svg x="82" y="300" width="556" height="300" '
  );
  const qrCode = createQrSvg(SHARE_URL, 506, 918, 112);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="1120" viewBox="0 0 720 1120">
      <rect width="720" height="1120" fill="#fff2d5"/>
      <path d="M42 42h636v1036H42z" fill="#f9e4b7" stroke="#1d1a15" stroke-width="8" rx="24"/>
      <text x="82" y="105" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#1d1a15">1号牧场，你的牛搭子</text>
      <text x="82" y="190" font-family="Arial, sans-serif" font-size="34" font-weight="900" fill="#df4b35">你的牛搭子人格</text>
      <text x="82" y="270" font-family="Arial, sans-serif" font-size="64" font-weight="900" fill="#1d1a15">${escapeSvg(currentResultType)}</text>
      <rect x="82" y="300" width="556" height="300" rx="24" fill="#fffaf0" stroke="#1d1a15" stroke-width="6"/>
      ${posterArt}
      ${createSvgTextLines(copyLines, 82, 642, copyLineGap, copyFontSize, 700, "#3f3429")}
      ${createSvgTextLines(tagLines, 82, 942, 31, 23, 900, "#28734f")}
      <text x="82" y="1014" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#1d1a15">1号牧场，牛肉大脆条全新上市</text>
      <text x="82" y="1054" font-family="Arial, sans-serif" font-size="21" font-weight="800" fill="#725f48">扫码测你的牛搭子人格</text>
      ${qrCode}
    </svg>`;
  posterImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  posterModal.classList.add("is-visible");
  posterModal.setAttribute("aria-hidden", "false");
}

function closePosterModal() {
  posterModal.classList.remove("is-visible");
  posterModal.setAttribute("aria-hidden", "true");
}

function getPosterCopyLines(copy) {
  return copy
    .split(/(?<=[，。；])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .flatMap((sentence) => wrapPosterText(sentence, 22));
}

function wrapPosterText(text, maxChars) {
  const chunks = [];
  let current = "";

  Array.from(text).forEach((char) => {
    const isWide = /[\u4e00-\u9fff\uff00-\uffef]/.test(char);
    const isPunctuation = /[，。；、：？！）”]/.test(char);
    const nextLength = visualLength(current) + (isWide ? 1 : 0.55);
    if (current && nextLength > maxChars) {
      if (isPunctuation) {
        current += char;
        chunks.push(current);
        current = "";
      } else {
        chunks.push(current);
        current = char;
      }
    } else {
      current += char;
    }
  });

  if (current) chunks.push(current);
  return chunks;
}

function visualLength(text) {
  return Array.from(text).reduce((total, char) => {
    return total + (/[\u4e00-\u9fff\uff00-\uffef]/.test(char) ? 1 : 0.55);
  }, 0);
}

function createSvgTextLines(lines, x, y, gap, size, weight, color) {
  return lines
    .map((line, index) => `<text x="${x}" y="${y + index * gap}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${escapeSvg(line)}</text>`)
    .join("");
}

function createQrSvg(text, x, y, size) {
  const qr = createQrMatrix(text);
  const quiet = 4;
  const module = size / (qr.length + quiet * 2);
  const dots = [];

  qr.forEach((row, rowIndex) => {
    row.forEach((isDark, colIndex) => {
      if (!isDark) return;
      dots.push(`<rect x="${(x + (colIndex + quiet) * module).toFixed(2)}" y="${(y + (rowIndex + quiet) * module).toFixed(2)}" width="${module.toFixed(2)}" height="${module.toFixed(2)}"/>`);
    });
  });

  return `
    <g shape-rendering="crispEdges">
      <rect x="${x}" y="${y}" width="${size}" height="${size}" rx="10" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/>
      <g fill="#1d1a15">${dots.join("")}</g>
      <text x="${x + size / 2}" y="${y + size + 28}" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#1d1a15">扫码开测</text>
    </g>`;
}

function createQrMatrix(text) {
  const version = 3;
  const size = version * 4 + 17;
  const dataCodewords = 55;
  const eccCodewords = 15;
  const matrix = Array.from({ length: size }, () => Array(size).fill(null));

  function set(row, col, value) {
    if (row >= 0 && row < size && col >= 0 && col < size) matrix[row][col] = value;
  }

  function finder(row, col) {
    for (let y = -1; y <= 7; y += 1) {
      for (let x = -1; x <= 7; x += 1) {
        const rr = row + y;
        const cc = col + x;
        const dark = x >= 0 && x <= 6 && y >= 0 && y <= 6 && (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4));
        set(rr, cc, dark);
      }
    }
  }

  function alignment(row, col) {
    for (let y = -2; y <= 2; y += 1) {
      for (let x = -2; x <= 2; x += 1) {
        set(row + y, col + x, Math.max(Math.abs(x), Math.abs(y)) !== 1);
      }
    }
  }

  finder(0, 0);
  finder(0, size - 7);
  finder(size - 7, 0);
  alignment(22, 22);

  for (let i = 8; i < size - 8; i += 1) {
    set(6, i, i % 2 === 0);
    set(i, 6, i % 2 === 0);
  }

  const formatCoords = [
    ...Array.from({ length: 6 }, (_, i) => [8, i]),
    [8, 7],
    [8, 8],
    [7, 8],
    ...Array.from({ length: 6 }, (_, i) => [5 - i, 8]),
    ...Array.from({ length: 8 }, (_, i) => [size - 1 - i, 8]),
    ...Array.from({ length: 7 }, (_, i) => [8, size - 7 + i])
  ];
  formatCoords.forEach(([row, col]) => set(row, col, false));
  set(size - 8, 8, true);

  const bytes = Array.from(new TextEncoder().encode(text));
  const bits = [];
  const pushBits = (value, length) => {
    for (let i = length - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1);
  };

  pushBits(4, 4);
  pushBits(bytes.length, 8);
  bytes.forEach((byte) => pushBits(byte, 8));
  for (let i = 0; i < 4 && bits.length < dataCodewords * 8; i += 1) bits.push(0);
  while (bits.length % 8) bits.push(0);

  const data = [];
  for (let i = 0; i < bits.length; i += 8) {
    data.push(bits.slice(i, i + 8).reduce((value, bit) => (value << 1) | bit, 0));
  }
  for (let pad = 0; data.length < dataCodewords; pad += 1) data.push(pad % 2 ? 0x11 : 0xec);

  const codewords = [...data, ...reedSolomon(data, eccCodewords)];
  const stream = codewords.flatMap((byte) => Array.from({ length: 8 }, (_, i) => (byte >>> (7 - i)) & 1));
  let index = 0;
  let upward = true;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col -= 1;
    for (let step = 0; step < size; step += 1) {
      const row = upward ? size - 1 - step : step;
      for (let offset = 0; offset < 2; offset += 1) {
        const cc = col - offset;
        if (matrix[row][cc] !== null) continue;
        const bit = stream[index] || 0;
        const masked = bit ^ (((row + cc) % 2 === 0) ? 1 : 0);
        matrix[row][cc] = Boolean(masked);
        index += 1;
      }
    }
    upward = !upward;
  }

  const format = formatBits(1, 0);
  const setFormat = (row, col, bitIndex) => set(row, col, Boolean((format >>> bitIndex) & 1));
  for (let i = 0; i <= 5; i += 1) setFormat(8, i, i);
  setFormat(8, 7, 6);
  setFormat(8, 8, 7);
  setFormat(7, 8, 8);
  for (let i = 9; i < 15; i += 1) setFormat(14 - i, 8, i);
  for (let i = 0; i < 8; i += 1) setFormat(size - 1 - i, 8, i);
  for (let i = 8; i < 15; i += 1) setFormat(8, size - 15 + i, i);
  set(size - 8, 8, true);

  return matrix;
}

function reedSolomon(data, degree) {
  const exp = Array(512).fill(0);
  const log = Array(256).fill(0);
  let value = 1;
  for (let i = 0; i < 255; i += 1) {
    exp[i] = value;
    log[value] = i;
    value <<= 1;
    if (value & 0x100) value ^= 0x11d;
  }
  for (let i = 255; i < 512; i += 1) exp[i] = exp[i - 255];
  const multiply = (left, right) => (left && right ? exp[log[left] + log[right]] : 0);
  let generator = [1];
  for (let i = 0; i < degree; i += 1) {
    const next = Array(generator.length + 1).fill(0);
    generator.forEach((coef, index) => {
      next[index] ^= coef;
      next[index + 1] ^= multiply(coef, exp[i]);
    });
    generator = next;
  }
  const result = Array(degree).fill(0);
  data.forEach((byte) => {
    const factor = byte ^ result.shift();
    result.push(0);
    for (let i = 0; i < degree; i += 1) result[i] ^= multiply(generator[i + 1], factor);
  });
  return result;
}

function formatBits(errorLevel, mask) {
  const data = (errorLevel << 3) | mask;
  let bits = data << 10;
  for (let i = 14; i >= 10; i -= 1) {
    if ((bits >>> i) & 1) bits ^= 0x537 << (i - 10);
  }
  return ((data << 10) | bits) ^ 0x5412;
}

function escapeSvg(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function throwConfetti(color, accent) {
  const host = document.querySelector("#app");
  for (let i = 0; i < 22; i += 1) {
    const piece = document.createElement("i");
    piece.style.cssText = `
      position:absolute;left:${Math.random() * 100}%;top:-20px;width:${6 + Math.random() * 8}px;height:${10 + Math.random() * 12}px;
      background:${i % 2 ? color : accent};border:1px solid #1d1a15;z-index:5;transform:rotate(${Math.random() * 180}deg);
      animation:fall-${i} ${1.5 + Math.random()}s ease-in forwards;`;
    const style = document.createElement("style");
    style.textContent = `@keyframes fall-${i}{to{transform:translate(${Math.random() * 90 - 45}px,760px) rotate(${260 + Math.random() * 240}deg);opacity:0}}`;
    document.head.appendChild(style);
    host.appendChild(piece);
    setTimeout(() => {
      piece.remove();
      style.remove();
    }, 2600);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 2200);
}
