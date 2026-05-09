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
    title: "周一早上打开电脑，你的第一反应是？",
    options: [
      ["先找咖啡，再找灵魂。", ["牛马续命型", "深夜回血型"]],
      ["消息先已读，回复等元神归位。", ["已读不回型", "安静蓄能型"]],
      ["把零食摆好，今天的工位要有安全感。", ["工位囤货型", "情绪稳定假装型"]],
      ["谁安排无效会，我先预备反卷发言。", ["硬刚反卷型", "嘴硬逞强型"]]
    ]
  },
  {
    title: "同事问你“下班吃什么”，你会？",
    options: [
      ["马上拉群，顺便把气氛炒热。", ["社交发疯型", "周五复活型"]],
      ["说随便，其实心里已经做好攻略。", ["精致自律型", "说走就走型"]],
      ["贡献抽屉库存：先垫一口再议。", ["工位囤货型", "牛马续命型"]],
      ["假装没看到，等大家决定我再出现。", ["已读不回型", "安静蓄能型"]]
    ]
  },
  {
    title: "突然来了一个“很急但没说清楚”的需求，你的脑内弹幕是？",
    options: [
      ["好的收到，然后暗中爆炸。", ["情绪稳定假装型", "嘴硬逞强型"]],
      ["先问清楚边界，不给模糊需求当燃料。", ["硬刚反卷型", "精致自律型"]],
      ["今晚又要靠夜色回血了。", ["深夜回血型", "牛马续命型"]],
      ["我先发个表情包救一下气氛。", ["社交发疯型", "周五复活型"]]
    ]
  },
  {
    title: "你最像哪一种“脆条打开方式”？",
    options: [
      ["边开会边偷吃，咔嚓声是我的反抗。", ["硬刚反卷型", "牛马续命型"]],
      ["整齐倒进小碟子，生活要有仪式感。", ["精致自律型", "工位囤货型"]],
      ["分享给全场，顺便收获一圈搭子。", ["社交发疯型", "周五复活型"]],
      ["留到深夜，一个人慢慢回血。", ["深夜回血型", "安静蓄能型"]]
    ]
  },
  {
    title: "你的手机电量 12%，但群里开始疯狂 @ 你。",
    options: [
      ["先装死，电量和本人都需要保护。", ["已读不回型", "安静蓄能型"]],
      ["边充电边处理，命可以苦，活不能掉。", ["牛马续命型", "嘴硬逞强型"]],
      ["直接回：重点是什么？", ["硬刚反卷型", "情绪稳定假装型"]],
      ["回个梗图，先把局面变好笑。", ["社交发疯型", "说走就走型"]]
    ]
  },
  {
    title: "周五 18:01，你的精神状态最接近？",
    options: [
      ["灵魂归位，甚至想换一套衣服。", ["周五复活型", "精致自律型"]],
      ["订票、约车、出门，别问去哪。", ["说走就走型", "社交发疯型"]],
      ["回家关机，谁也别碰我的能量条。", ["安静蓄能型", "已读不回型"]],
      ["继续收尾，嘴上说小事，心里在冒烟。", ["嘴硬逞强型", "情绪稳定假装型"]]
    ]
  },
  {
    title: "你在朋友圈最可能发什么？",
    options: [
      ["一张很会生活的图，配字很克制。", ["精致自律型", "安静蓄能型"]],
      ["“世界很吵，我先跑路。”", ["说走就走型", "深夜回血型"]],
      ["热梗九宫格，精神状态领先时代。", ["社交发疯型", "周五复活型"]],
      ["不发，主要靠别人猜我还活着。", ["已读不回型", "硬刚反卷型"]]
    ]
  },
  {
    title: "你想找一个什么样的牛搭子？",
    options: [
      ["在我快没电时，把我从工位上捞回来。", ["牛马续命型", "工位囤货型"]],
      ["陪我优雅地把今天糊弄过去。", ["情绪稳定假装型", "精致自律型"]],
      ["陪我深夜复盘，并假装一切都会好。", ["深夜回血型", "嘴硬逞强型"]],
      ["陪我分享、出走、发疯、复活。", ["社交发疯型", "说走就走型", "周五复活型"]]
    ]
  }
];

const typeOrder = Object.keys(TYPES);
const scores = Object.fromEntries(typeOrder.map((type) => [type, 0]));
const selectedAnswers = [];
let currentQuestion = 0;
let audioContext;
let soundEnabled = false;

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
const prevQuestionBtn = document.querySelector("#prevQuestionBtn");
const nextQuestionBtn = document.querySelector("#nextQuestionBtn");

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
  playCrunch();
  showScreen(resultScreen, quizScreen);
  renderQuestion();
});

prevQuestionBtn.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  playCrunch();
  renderQuestion();
});

nextQuestionBtn.addEventListener("click", () => {
  if (!selectedAnswers[currentQuestion]) {
    showToast("先选一个最像你的状态。");
    return;
  }

  playCrunch();
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    progressBar.style.width = "100%";
    setTimeout(showResult, 180);
  }
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
  document.querySelector("#poster").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("海报已就位，长按或截图保存。");
});

document.querySelector("#momentBtn").addEventListener("click", () => {
  showToast("微信里可长按保存海报，再分享到朋友圈。");
});

document.querySelector("#soundBtn").addEventListener("click", (event) => {
  soundEnabled = !soundEnabled;
  event.currentTarget.setAttribute("aria-pressed", String(soundEnabled));
  event.currentTarget.textContent = soundEnabled ? "咔嚓BGM已开启" : "开启咔嚓BGM";
  if (soundEnabled) playCrunch();
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
  nextQuestionBtn.disabled = !selectedAnswers[currentQuestion];
  nextQuestionBtn.textContent = "下一题";
  prevQuestionBtn.disabled = currentQuestion === 0;
  prevQuestionBtn.textContent = "上一题";

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
  selectedAnswers[currentQuestion] = { label, targetTypes };
  nextQuestionBtn.disabled = false;
  playCrunch();
  renderQuestion();
}

function showResult() {
  calculateScores();
  const topType = typeOrder.reduce((winner, type) => {
    if (scores[type] > scores[winner]) return type;
    if (scores[type] === scores[winner] && recentAnswerIndex(type) > recentAnswerIndex(winner)) return type;
    return winner;
  }, typeOrder[0]);

  const data = TYPES[topType];
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
    .split(/(?<=[。；])/)
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
  const prop = {
    coffee: `<rect x="214" y="68" width="58" height="76" rx="10" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><path d="M272 91h18c13 0 13 30 0 30h-18" fill="none" stroke="#1d1a15" stroke-width="5"/><path d="M226 55c-10-16 12-17 2-33M252 55c-10-16 12-17 2-33" fill="none" stroke="#1d1a15" stroke-width="4"/><path d="M74 152h70" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/>`,
    message: `<rect x="205" y="68" width="106" height="76" rx="14" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><circle cx="236" cy="106" r="6" fill="#1d1a15"/><circle cx="258" cy="106" r="6" fill="#1d1a15"/><circle cx="280" cy="106" r="6" fill="#1d1a15"/><path d="M116 60h64M96 86h54" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/>`,
    friday: `<rect x="210" y="62" width="94" height="92" rx="12" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><path d="M210 90h94" stroke="#1d1a15" stroke-width="5"/><circle cx="235" cy="121" r="11" fill="#df4b35"/><circle cx="268" cy="121" r="11" fill="#28734f"/><path d="M99 138q42 35 92 0" fill="none" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/>`,
    snacks: `<rect x="205" y="94" width="120" height="66" rx="8" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><path d="M222 82h86v26h-86z" fill="#df4b35" stroke="#1d1a15" stroke-width="5"/><path d="M230 130h70" stroke="#1d1a15" stroke-width="5"/><path d="M82 74h74v94H82z" fill="#f4c341" stroke="#1d1a15" stroke-width="5"/>`,
    mask: `<path d="M210 82c30 18 72 18 102 0v58c-21 26-81 26-102 0z" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><path d="M234 112q10 10 20 0M272 112q10 10 20 0" fill="none" stroke="#1d1a15" stroke-width="4"/><path d="M98 80l30 30-30 30-30-30z" fill="#f4c341" stroke="#1d1a15" stroke-width="5"/>`,
    boxing: `<path d="M214 92c13-30 68-22 68 20v45h-78v-38c0-11 4-20 10-27z" fill="#df4b35" stroke="#1d1a15" stroke-width="5"/><path d="M282 118h34v39h-34z" fill="#df4b35" stroke="#1d1a15" stroke-width="5"/><path d="M78 122h88M122 78v88" stroke="#1d1a15" stroke-width="8" stroke-linecap="round"/>`,
    moon: `<path d="M295 58c-36 8-58 40-49 75 7 27 30 45 57 47-12 8-27 11-43 7-42-9-69-50-60-92 8-39 46-66 85-60 5 1 9 2 10 23z" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><circle cx="112" cy="84" r="7" fill="#f4c341"/><circle cx="146" cy="122" r="5" fill="#f4c341"/><path d="M78 164h86" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/>`,
    speaker: `<path d="M206 112h34l52-40v110l-52-40h-34z" fill="#2864a4" stroke="#1d1a15" stroke-width="5"/><path d="M307 100q20 28 0 56M326 84q34 46 0 92" fill="none" stroke="#1d1a15" stroke-width="5"/><circle cx="104" cy="96" r="32" fill="#df4b35" stroke="#1d1a15" stroke-width="5"/>`,
    plant: `<path d="M224 126h82l-12 64h-58z" fill="#df4b35" stroke="#1d1a15" stroke-width="5"/><path d="M260 128c-8-50-40-65-61-49 15 30 38 40 61 49zM266 128c10-54 48-71 68-50-17 34-42 42-68 50z" fill="#28734f" stroke="#1d1a15" stroke-width="5"/><path d="M78 86h82v82H78z" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/>`,
    dumbbell: `<path d="M210 112v48M234 104v64M286 104v64M310 112v48M234 136h52" fill="none" stroke="#1d1a15" stroke-width="12" stroke-linecap="round"/><rect x="76" y="72" width="92" height="104" rx="10" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><path d="M96 102h52M96 128h52M96 154h34" stroke="#2864a4" stroke-width="7" stroke-linecap="round"/>`,
    armor: `<path d="M216 68h94v112c-20 20-52 26-94 0z" fill="#fffaf0" stroke="#1d1a15" stroke-width="5"/><path d="M236 96h54M236 124h54M263 68v128" stroke="#df4b35" stroke-width="5"/><path d="M86 86l74 74M160 86l-74 74" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/>`,
    suitcase: `<rect x="210" y="88" width="96" height="96" rx="13" fill="#f4c341" stroke="#1d1a15" stroke-width="5"/><path d="M238 88v-20h42v20M240 116h40M240 142h40" fill="none" stroke="#1d1a15" stroke-width="5"/><path d="M86 134c35-38 72-52 111-42" fill="none" stroke="#28734f" stroke-width="7" stroke-linecap="round"/><path d="M190 78l24 17-27 9" fill="none" stroke="#28734f" stroke-width="7" stroke-linecap="round"/>`
  }[data.prop];

  return `
    <svg viewBox="0 0 360 230" role="img" aria-label="${type}插画">
      <rect width="360" height="230" fill="#fff7df"/>
      <circle cx="76" cy="54" r="42" fill="${data.accent}" stroke="#1d1a15" stroke-width="5"/>
      <circle cx="285" cy="186" r="28" fill="${data.color}" stroke="#1d1a15" stroke-width="5" opacity="0.9"/>
      <path d="M16 190c42-25 88-27 136-5 56 26 105 25 194-4v49H16z" fill="${data.color}" opacity="0.18"/>
      <path d="M36 36h82M44 62h52M246 38h68" stroke="#1d1a15" stroke-width="6" stroke-linecap="round" opacity="0.22"/>
      <path d="M158 188l20-115 20 115" fill="none" stroke="#1d1a15" stroke-width="7" stroke-linecap="round"/>
      <path d="M151 91h54" stroke="#a84b2e" stroke-width="20" stroke-linecap="round"/>
      <circle cx="164" cy="91" r="5" fill="#f5df96"/>
      <circle cx="188" cy="91" r="5" fill="#f5df96"/>
      ${prop}
    </svg>
  `;
}

function playCrunch() {
  if (!soundEnabled) return;
  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  for (let i = 0; i < 5; i += 1) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(900 + Math.random() * 850, now + i * 0.018);
    gain.gain.setValueAtTime(0.035, now + i * 0.018);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.018 + 0.045);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now + i * 0.018);
    oscillator.stop(now + i * 0.018 + 0.05);
  }
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
