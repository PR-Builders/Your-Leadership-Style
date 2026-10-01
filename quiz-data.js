// Source: Finding Your Leadership Style: A Guide for Educators, Appendices A and B.
// Each category lists the statement numbers (1-based) that count toward it when answered True.

const QUIZZES = {
  quality: {
    id: "quality",
    title: "Natural Leadership Quality",
    appendix: "Appendix A",
    blurb: "56 statements. Discover your natural leadership quality type.",
    resultHeading: "Your Natural Leadership Quality",
    categories: [
      { name: "Adaptive Assertive", items: [1, 14, 16, 30, 31, 35, 38, 56] },
      { name: "Creative Assertive", items: [2, 13, 15, 29, 39, 40, 44, 55] },
      { name: "Adaptive Supportive", items: [3, 12, 18, 22, 32, 36, 46, 50] },
      { name: "Dynamic Assertive", items: [4, 11, 17, 24, 27, 37, 48, 54] },
      { name: "Dynamic Supportive", items: [5, 10, 20, 23, 26, 34, 45, 51] },
      { name: "Dynamic Aggressive", items: [6, 9, 19, 28, 41, 47, 49, 53] },
      { name: "Adaptive Aggressive", items: [7, 8, 21, 25, 33, 42, 43, 52] },
    ],
    statements: [
      "I feel I'm good at supervising a small group of people, and I enjoy doing so.",
      "When I'm in a new situation, such as a new job setting or relationship, I spend a lot of time comparing it to situations I've been in previously.",
      "I believe that respect for authority is one of the cornerstones of good character.",
      "I enjoy thinking about large issues, such as how society is organized politically.",
      "I get asked for help a lot, and have a hard time saying no.",
      "Ever since childhood, I've always seemed to want more out of life than my peers did.",
      "When I first enter a new environment, such as a workplace or a school, I make it a point to become acquainted with as many people as possible.",
      "I rarely seek quiet.",
      "I can work harder than most people, and I enjoy doing so.",
      "When I meet people, I'll give them the benefit of the doubt; in other words, I'll like them until they give me a reason not to.",
      "The idea of a lifelong and exclusive intimate partner doesn't seem desirable or realistic for me.",
      "A lifelong relationship with a romantic partner is one of my goals.",
      "I can sometimes work creatively at full throttle for hours on end and not notice the passage of time.",
      "I believe that divorce is to be strongly avoided whenever possible.",
      "I'll periodically go through extremely low-energy periods during which I have to remind myself that it's only a phase.",
      "When it comes to spending and saving habits, I take pride in being more thrifty and less foolish than most people.",
      "Being alone does not scare me; in fact I do some of my best thinking when I'm alone.",
      "My extended family is the most important part of my social life.",
      "I spend much less time than others do on what I consider pointless leisure pursuits, such as TV and movie watching; novel reading; and card, computer, or board game playing.",
      "I procrastinate a lot.",
      "My vacations are always highly structured; several days of just sitting in one place and vegetating would drive me crazy.",
      "Directing a big job and supervising a lot of subordinates is my idea of a headache.",
      "People usually like me.",
      "I find myself getting frustrated because most people's world view is so limited.",
      "Networking as a career and life tool is something that comes naturally to me.",
      "I'm happiest interacting with people and aiding them in some way.",
      "I have a drive to express my ideas and influence the thinking of others.",
      "I find myself getting frustrated because most people operate at a slower pace than I do.",
      "I find myself getting frustrated because most people are not on my mental wavelength.",
      "I generally believe that if individuals behave outside the norms of society, they should be prepared to pay the price.",
      "My home is more organized and cleaner than most homes in my neighborhood.",
      "Holding one job for decades would be okay with me if the conditions were good and the boss was nice.",
      "When tackling a problem or task, I'm usually less defeatist than others.",
      "It sometimes takes an outside force to get me motivated because I tend to be satisfied with what I have.",
      "I enjoy the feeling of my life going along at an even pace like a well-oiled machine; too many stops and starts and ups and downs would really upset me.",
      "Trying to lengthen your life by eating the “right” foods doesn't make much sense to me because, when your time's up, your time's up.",
      "I have no trouble getting people to listen to me and grasp what I'm saying.",
      "I understand that detail work is what ultimately gets a job done, and I have the gumption and know-how to tackle details.",
      "Working by myself is no problem; in fact, I prefer it.",
      "At times, ideas just “come to me,” and if I can't put them down then and there on paper, canvas, or other medium, I'm uncomfortable.",
      "I could never be really happy working for someone else.",
      "I like associating with influential people and am not intimidated by them.",
      "I'm happiest moving and doing, as opposed to sitting and thinking.",
      "Throughout my life, people have called me one or more of the following: temperamental, moody, sad, flighty, different. I never really felt like I was “one of the boys (or girls).”",
      "People tell me I have a great sense of humor.",
      "I believe that blood is thicker than water and that it's more important to be loyal to your relatives than to your friends.",
      "I don't have much time or patience for long family gatherings, such as a whole afternoon spent celebrating Thanksgiving.",
      "The makeup of my social circle is constantly changing.",
      "Managing a big job and having subordinates carry out the detail work is my ideal kind of endeavor.",
      "I prefer to work at a job a set number of hours each day and then have the rest of the 24 hours for relaxation.",
      "I'm good at smoothing over others' conflicts and helping to mediate them.",
      "I thrive on setting goals for myself and then figuring out how to reach them; I can't imagine just drifting through life without a plan.",
      "I'm more intelligent than most people, and others almost always recognize this.",
      "I can't fathom the idea of holding one job for decades.",
      "I find competition distasteful.",
      "I would never dress in a flashy, bohemian, or otherwise attention-getting way.",
    ],
  },

  virtues: {
    id: "virtues",
    title: "Natural Leadership Virtues",
    appendix: "Appendix B, Survey 3",
    blurb: "56 statements. Assess which leadership virtues come naturally to you.",
    resultHeading: "Your Natural Leadership Virtues",
    // Per the guide: 7 or more true responses in a category suggests you probably possess that virtue.
    virtueThreshold: 7,
    categories: [
      { name: "Courage", items: [1, 8, 15, 22, 29, 36, 43, 50] },
      { name: "Impartiality", items: [2, 9, 16, 23, 30, 37, 44, 51] },
      { name: "Empathy", items: [3, 10, 17, 24, 31, 38, 45, 52] },
      { name: "Judgment", items: [4, 11, 18, 25, 32, 39, 46, 53] },
      { name: "Enthusiasm", items: [5, 12, 19, 26, 33, 40, 47, 54] },
      { name: "Humility", items: [6, 13, 20, 27, 34, 41, 48, 55] },
      { name: "Imagination", items: [7, 14, 21, 28, 35, 42, 49, 56] },
    ],
    statements: [
      "If an injustice occurred, I would take action to remedy the situation even though such action might negatively affect my reputation in the educational community.",
      "I acknowledge another point of view when data indicate that the other position is more accurate.",
      "When I hear about another's suffering I am emotionally moved.",
      "I do not have a problem rendering a decision once I have weighed all the facts.",
      "I possess above-average levels of competence in almost any endeavor I undertake.",
      "I do not flaunt my accomplishments. I do not like to be acknowledged for what I have done. I do not consider myself more competent than other educational leaders.",
      "I easily formulate alternative solutions, think of questions, and design new ways of doing things.",
      "If I knew that a child had been tracked in a lower ability group due solely to her ethnicity, I would speak out and attract attention to this injustice.",
      "When I make up my mind about an important educational issue or matter, I easily alter my stance if information is presented contrary to my stance.",
      "I demonstrate my compassion toward others (who are not part of my immediate family) by truly offering assistance and going out of my way to do so.",
      "One of my major strengths, confirmed by people I know, is that I am a good judge of character.",
      "I am a highly motivated, devoted, and ardent individual.",
      "I do not deserve recognition or deference from others because of my training, knowledge, and experience.",
      "I get bored quickly while performing detailed tasks and responsibilities.",
      "I would speak out against any injustice even though I might face possible dismissal or public revilement.",
      "In making decisions, I can absorb varied positions and pieces of evidence and remain neutral until rendering a final decision, even in cases in which I may have vested interests.",
      "I often think or meditate about the welfare of others and wish them the best of luck.",
      "I value openness to participation, diversity, conflict, and reflection.",
      "Strong values and a commitment to actualize them motivate me.",
      "I alter my beliefs when evidence is presented to contradict them.",
      "I easily think of numerous possibilities or alternatives to problems.",
      "A school board member asks me to hire a member of his family as a new teacher, but I believe this relative is inferior to another candidate. Despite pressures from the board member, I would decide not to hire the relative regardless of the consequences.",
      "Despite natural inclinations, I would not favor someone from my ethnic group in rendering a decision about an educational matter.",
      "I would give a friend the shirt off my back.",
      "I am committed to consensus building.",
      "Although not a fanatic, I have a strong commitment to see things through to the end.",
      "I experience feelings of doubt about my job performance.",
      "I possess initiative, independence, and creativity.",
      "The school board wants to remove Harper Lee's novel To Kill a Mockingbird because the book has received complaints of racism. I feel that the charge of racism is misguided and would therefore decide not to remove the book.",
      "I am not stubbornly close-minded even if I believe I am right.",
      "I value commitment to the development of the individual within the school or district and I value treating all individuals as significant stakeholders in the organization.",
      "I work hard to develop evaluative criteria to measure attainment of stated objectives.",
      "People often tell me that I am passionate in whatever I do as opposed to being laid back.",
      "I usually welcome and accept criticism.",
      "People often consult me because they think I possess great imagination and creativity.",
      "At an important meeting to decide the selection of a new textbook series, my colleagues protest the new textbook. However, I strongly feel that the school or district should adopt the book. Despite counterarguments by the opposing side, which represents an overwhelming majority, I would remain adamant and resist efforts by the opposition.",
      "I do not consciously make prejudgments about people.",
      "I openly give recognition to people for outstanding professional performance because I sincerely want to acknowledge their contributions.",
      "I have no problem delegating authority in areas of responsibility to capable subordinates and then holding them accountable for results.",
      "I dislike laziness and procrastination.",
      "I usually admit ignorance and say, “I don't know” when I really don't know something.",
      "Whenever confronted with a problem, I nearly always think “outside the box” initially.",
      "I discover that several of the best starters on the school's basketball team ransacked the girl's locker room (although no girls were present) and did minor damage. The team is scheduled for the playoffs. I could overlook this infraction, but instead I decide to bench the offenders and thereby likely lose the game despite the protests of the other players, parents, and coaches.",
      "I am usually consulted because people consider me fair and nonjudgmental.",
      "Others would characterize me as a person who is kind, caring, nurturing, and sensitive.",
      "I don't jump to conclusions and really try to judge everyone favorably.",
      "I tend to see the glass half-full instead of half-empty.",
      "I have several limitations, but try to accentuate my strengths.",
      "When I participate in committee work, I usually come up with innovative suggestions.",
      "Fellow educational leaders request that I represent them in a contractual dispute. However, I feel that their requests are unreasonable and perhaps unethical. I would decide not to represent them in negotiations.",
      "I value honesty in words and action, and I have an unwavering commitment to ethical conduct.",
      "I am responsive and sensitive to the social and economic conditions of students, as well as to their racial, ethnic, and cultural backgrounds.",
      "I am mentally and emotionally centered and can think clearly about the best course of action to take, even in the face of criticism, insults, nagging, or negativity.",
      "Others would characterize me as resilient, alert, optimistic, and even, at times, humorous.",
      "Without my leadership assistance, things could still get accomplished.",
      "When people tell me that something is impossible or unlikely, I immediately proceed to think of successful options.",
    ],
  },
};

// Plain-language summaries written for this site from what each category's statements measure.
// They are not quoted from the book; swap in the book's own descriptions if preferred.
QUIZZES.quality.details = {
  "Adaptive Assertive": {
    summary: "You lead through structure and follow-through. You are comfortable supervising a small group, you value order, thrift and convention, and you trust that details done well are what get a job finished.",
    strengths: ["Organized, dependable and thorough", "Handles detail work others avoid", "Keeps steady, predictable systems running"],
    watch: "Can be too conventional or rigid when a situation calls for fast change or flashy, bold moves.",
    inSchools: "Shines in roles that need clear procedures, careful oversight and consistent standards, such as building operations, scheduling, compliance and curriculum management."
  },
  "Creative Assertive": {
    summary: "You are an independent, idea-driven thinker. You do your best work alone and in bursts of creative energy, you notice patterns by comparing new situations to old ones, and you may feel a little different from the crowd.",
    strengths: ["Original, imaginative problem solving", "Deep focus and creative intensity", "Thoughtful, sensitive to nuance"],
    watch: "Energy can swing, you may find others' views limited, and competition or office politics can drain you.",
    inSchools: "Strong in program design, instructional innovation and writing or arts leadership. Protect time for solo thinking and pair up with someone who handles follow-through."
  },
  "Adaptive Supportive": {
    summary: "You are loyal, steady and grounded. You respect authority, value family and lasting relationships, and prefer a stable role with reasonable hours over directing a large operation.",
    strengths: ["Loyal and reliable team member", "Calm, accepting and stabilizing presence", "Builds long-term trust with colleagues and families"],
    watch: "May avoid stepping into big supervisory roles or pushing for change, even when your judgment is sound.",
    inSchools: "A cornerstone of a school's culture: mentoring, teacher-leader roles and continuity. Seek out leadership opportunities in a supportive environment rather than waiting to be asked."
  },
  "Dynamic Assertive": {
    summary: "You are a big-picture thinker and communicator. You enjoy large issues, express ideas with conviction, get people to listen, and like variety, independence and a changing circle of people and projects.",
    strengths: ["Visionary and persuasive", "Comfortable alone and with abstract ideas", "Adaptable and quick to move on to what's next"],
    watch: "Impatience with narrower worldviews and long commitments can make it hard to sustain projects and relationships.",
    inSchools: "Well suited to vision-setting, advocacy, policy and change leadership. Partner with detail-oriented colleagues to turn ideas into lasting practice."
  },
  "Dynamic Supportive": {
    summary: "You are warm, likable and people-centered. You are happiest helping others, you give people the benefit of the doubt, you smooth over conflicts, and humor and ease come naturally.",
    strengths: ["Mediates conflict and builds goodwill", "Approachable and trusted", "Helps people feel included and valued"],
    watch: "Difficulty saying no and a relaxed pace can lead to overload and procrastination.",
    inSchools: "Excellent for counseling, family engagement, team building and culture work. Set clear boundaries and deadlines so helping others doesn't crowd out your own priorities."
  },
  "Dynamic Aggressive": {
    summary: "You are driven, hard-working and ambitious. You have always wanted more out of life, set goals, move fast, prefer being your own boss and are happiest running a big job with others handling the details.",
    strengths: ["Relentless drive and work ethic", "Strong at delegating and managing large efforts", "Confident and results-focused"],
    watch: "May grow frustrated with slower colleagues and have little patience for downtime, ritual or consensus-building.",
    inSchools: "Suited to turnaround work, new initiatives and executive roles. Build in time to listen, and recognize that others work at a different pace."
  },
  "Adaptive Aggressive": {
    summary: "You are a confident, sociable go-getter. You meet people easily, network naturally, aren't intimidated by influential figures, plan your time tightly and prefer doing to sitting and thinking.",
    strengths: ["Natural networker and connector", "Action-oriented and optimistic under pressure", "Goal-setting with a plan to reach each goal"],
    watch: "Constant motion and a full schedule can leave little room for reflection or quiet.",
    inSchools: "Effective in community partnerships, fundraising, public-facing leadership and rallying people around a plan. Schedule reflection time before big decisions."
  }
};

QUIZZES.virtues.details = {
  "Courage": {
    summary: "You stand up for what is right even when it costs you. You would speak out against injustice, resist pressure from powerful people and make unpopular decisions on principle.",
    strengths: ["Acts on conviction despite risk", "Protects students and staff from unfairness", "Earns respect for integrity under pressure"],
    watch: "Courage without listening can harden into stubbornness; pair it with openness to evidence.",
    inSchools: "Shows up when you challenge unfair tracking, resist improper hiring pressure or enforce rules fairly when it is costly."
  },
  "Impartiality": {
    summary: "You weigh evidence fairly and set aside personal interests, favoritism and prejudgments. You change your mind when the data say you should.",
    strengths: ["Fair, even-handed decision making", "Open to other views and new data", "Avoids favoritism and bias"],
    watch: "Be sure that staying neutral doesn't delay decisions that need to be made.",
    inSchools: "Valuable in discipline, hiring, evaluation and any dispute where people need to trust that the process is fair."
  },
  "Empathy": {
    summary: "You are moved by the suffering of others and act on it. You are kind, caring and generous, and you try to see people favorably.",
    strengths: ["Builds trust and a caring climate", "Notices who needs support", "Generous with time and help"],
    watch: "Strong feelings for others can make tough decisions or boundaries harder.",
    inSchools: "Helps you connect with struggling students, families and staff, and keeps decisions human-centered."
  },
  "Judgment": {
    summary: "You are a good judge of people and situations. You gather the facts, stay level-headed under criticism and are comfortable making the call.",
    strengths: ["Decisive after weighing the facts", "Reads character well", "Stays centered under pressure"],
    watch: "Confidence in your read of people should still be checked against evidence.",
    inSchools: "Key for high-stakes decisions: hiring, budgets, crises and conflict between stakeholders."
  },
  "Enthusiasm": {
    summary: "You bring energy, passion and optimism. You are motivated by strong values, see the glass as half-full and commit to seeing things through.",
    strengths: ["Energizes and motivates others", "Resilient and optimistic", "Persistent follow-through"],
    watch: "High energy can overwhelm quieter colleagues; make room for their pace.",
    inSchools: "Lifts school morale, launches new initiatives and keeps momentum through setbacks."
  },
  "Humility": {
    summary: "You don't need the spotlight. You admit what you don't know, welcome criticism, accentuate strengths while owning limitations, and recognize that others can get things done without you.",
    strengths: ["Open to feedback and learning", "Shares credit and empowers others", "Honest about limits"],
    watch: "Don't let modesty keep you from claiming authority or recognition when it is warranted.",
    inSchools: "Builds a culture where staff feel safe to speak up, and models learning for the whole community."
  },
  "Imagination": {
    summary: "You generate options easily and think outside the box. When told something is impossible, you start looking for successful alternatives.",
    strengths: ["Creative problem solving", "Brings innovative ideas to committees", "Sees possibilities where others see obstacles"],
    watch: "Bring others along and attend to detail so ideas turn into results.",
    inSchools: "Drives new programs, solutions to tough constraints and fresh approaches to old problems."
  }
};

// What to watch for in any day job (not just schools).
const AT_WORK = {
  quality: {
    "Adaptive Assertive": "Watch for micromanaging and resisting change. In a fast-moving workplace, pressure to \"just ship it\" can feel threatening; set a rule for when good enough is good enough. Make sure your reliability gets noticed, because quiet competence is easy to overlook at review time.",
    "Creative Assertive": "Watch for isolating yourself, missing deadlines in favor of ideas, and taking office politics or competition personally. Say your ideas out loud in meetings, not just in your head, and agree on check-ins so your solo work stays visible. Burnout dips are real; plan lighter weeks around your high-energy bursts.",
    "Adaptive Supportive": "Watch for staying in a role too long, being passed over because you don't ask for promotion, and absorbing extra work to keep the peace. Speak up about your own goals in one-on-ones. A boss who is kind is not the same as a boss who is developing you.",
    "Dynamic Assertive": "Watch for starting more than you finish, getting bored with routine and talking over people who think more slowly. Pair yourself with a detail person, commit to finishing before launching the next idea, and check that people agreed rather than just stopped arguing.",
    "Dynamic Supportive": "Watch for becoming the office helper whose own work slips. Saying yes to everything leads to overload, missed deadlines and resentment. Set a daily limit on favors, write down commitments, and don't let being liked stop you from giving hard feedback.",
    "Dynamic Aggressive": "Watch for steamrolling slower teammates, burning out your team (and yourself) and resisting managers. Because you may never be happy working for someone else, expect friction with authority. Ask for input before you decide, and treat rest as part of performance, not a weakness.",
    "Adaptive Aggressive": "Watch for confusing activity with progress, relying on charm and connections over substance, and skipping reflection. Block thinking time before big decisions, and follow up on introductions you make so networking turns into results."
  },
  virtues: {
    "Courage": "Watch for picking fights that don't need to be fought, burning bridges, and being seen as difficult. Choose which hills matter, raise concerns privately first when you can, and bring evidence so you're respected, not just feared.",
    "Impartiality": "Watch for analysis paralysis and being seen as having no opinion. Neutrality is useful until a decision is due; set a deadline and then commit. Also check whether staying neutral is avoiding a conflict you should address.",
    "Empathy": "Watch for taking on other people's problems, avoiding hard conversations and decision fatigue from caring too much. Protect your own energy, and remember that honest feedback is also a form of care.",
    "Judgment": "Watch for overconfidence in first impressions of people and deciding before everyone has had their say. Your reads are often right; test them against data and ask someone who disagrees.",
    "Enthusiasm": "Watch for overpromising, wearing out quieter coworkers and burning hot then flat. Pace yourself, give others room to speak, and back your excitement with a realistic plan.",
    "Humility": "Watch for under-selling yourself at review time, not claiming credit and letting louder colleagues set the agenda. Keep a running list of wins, and practice saying what you did, plainly.",
    "Imagination": "Watch for dropping ideas before they are finished, bringing too many options and boredom with routine tasks. Pick one idea to take through to the end, and tie each pitch to a business result."
  }
};
