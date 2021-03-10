const canvas = $("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 250;

let speedY = 0.6;

class Wall {
    constructor(x, y, w, h, col) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
    }
    draw() {
        ctx.fillStyle = this.col;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update() {
        this.draw();
    }
}

class Block {
    constructor(x, y, w, h, col, word) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.vel = {
            x: 0,
            y: speedY
        };
        this.word = word;
        this.active = true;
    }
    draw() {
        ctx.fillStyle = this.col;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        ctx.fillStyle = "#fff";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(this.word, canvas.width/2, this.y + this.h - 4);
    }
    update() {
        this.draw();
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
}

// Wall
let dis = 80;
wall1 = new Wall(canvas.width/2 - dis, 100, 10, 100, "#08f");
wall2 = new Wall(canvas.width/2 + dis - wall1.w, wall1.y, wall1.w, wall1.h, wall1.col);
wall3 = new Wall(wall1.x, wall1.y + wall1.h, wall2.x - wall1.x + wall1.w, wall1.w, wall1.col);

// blocks
let blocks = [];
let collisionY = wall3.y;
let lastLetter = null, currentBlock = null;
let score = 0;
let gameOver = false;

function createBlock() {
    let words = [
        "Abandon",
        "Ability",
        "Able",
        "Abortion",
        "About",
        "Above",
        "Abroad",
        "Absence",
        "Absolute",
        "Absolutely",
        "Absorb",
        "Abuse",
        "Academic",
        "Accept",
        "Access",
        "Accident",
        "Accompany",
        "Accomplish",
        "According",
        "Account",
        "Accurate",
        "Accuse",
        "Achieve",
        "Achievement",
        "Acid",
        "Acknowledge",
        "Acquire",
        "Across",
        "Act",
        "This",
        "Action",
        "Active",
        "Activist",
        "Activity",
        "Actor",
        "Actress",
        "Actual",
        "Actually",
        "Ad",
        "Adapt",
        "Add",
        "Addition",
        "Additional",
        "Address",
        "Adequate",
        "Adjust",
        "Adjustment",
        "Administration",
        "Administrator",
        "Admire",
        "Admission",
        "Admit",
        "Adolescent",
        "Adopt",
        "Adult",
        "Advance",
        "Advanced",
        "Advantage",
        "Adventure",
        "Advertising",
        "Advice",
        "Advise",
        "Adviser",
        "Advocate",
        "Affair",
        "Affect",
        "Afford",
        "Afraid",
        "African",
        "African-American",
        "After",
        "Afternoon",
        "Again",
        "Against",
        "Age",
        "Agency",
        "Agenda",
        "Agent",
        "Aggressive",
        "Ago",
        "Agree",
        "Agreement",
        "Agricultural",
        "Ah",
        "Ahead",
        "Aid",
        "Aide",
        "AIDS",
        "Aim",
        "Air",
        "Aircraft",
        "Airline",
        "Airport",
        "Album",
        "Alcohol",
        "Alive",
        "All",
        "Alliance",
        "Allow",
        "Ally",
        "Almost",
        "Alone",
        "Along",
        "Already",
        "Also",
        "Alter",
        "Alternative",
        "Although",
        "Always",
        "AM",
        "Amazing",
        "American",
        "Among",
        "Amount",
        "Analysis",
        "Analyst",
        "Analyze",
        "Ancient",
        "And",
        "Anger",
        "Angle",
        "Angry",
        "Animal",
        "Anniversary",
        "Announce",
        "Annual",
        "Another",
        "Answer",
        "Anticipate",
        "Anxiety",
        "Any",
        "Anybody",
        "Anymore",
        "Anyone",
        "Anything",
        "Anyway",
        "Anywhere",
        "Apart",
        "Apartment",
        "Apparent",
        "Apparently",
        "Appeal",
        "Appear",
        "Appearance",
        "Apple",
        "Application",
        "Apply",
        "Appoint",
        "Appointment",
        "Appreciate",
        "Approach",
        "Appropriate",
        "Approval",
        "Approve",
        "Approximately",
        "Arab",
        "Architect",
        "Area",
        "Argue",
        "Argument",
        "Arise",
        "Arm",
        "Armed",
        "Army",
        "Around",
        "Arrange",
        "Arrangement",
        "Arrest",
        "Arrival",
        "Arrive",
        "Art",
        "Article",
        "Artist",
        "Artistic",
        "As",
        "Asian",
        "Aside",
        "Ask",
        "Asleep",
        "Aspect",
        "Assault",
        "Assert",
        "Assess",
        "Assessment",
        "Asset",
        "Assign",
        "Assignment",
        "Assist",
        "Assistance",
        "Assistant",
        "Associate",
        "Association",
        "Assume",
        "Assumption",
        "Assure",
        "At",
        "Athlete",
        "Athletic",
        "Atmosphere",
        "Attach",
        "Attack",
        "Attempt",
        "Attend",
        "Attention",
        "Attitude",
        "Attorney",
        "Attract",
        "Attractive",
        "Attribute",
        "Audience",
        "Author",
        "Authority",
        "Auto",
        "Available",
        "Average",
        "Avoid",
        "Award",
        "Aware",
        "Awareness",
        "Away",
        "Awful",
        "Baby",
        "Back",
        "Background",
        "Bad",
        "Badly",
        "Bag",
        "Bake",
        "Balance",
        "Ball",
        "Ban",
        "Band",
        "Bank",
        "Bar",
        "Barely",
        "Barrel",
        "Barrier",
        "Base",
        "Baseball",
        "Basic",
        "Basically",
        "Basis",
        "Basket",
        "Basketball",
        "Bathroom",
        "Battery",
        "Battle",
        "Be",
        "Beach",
        "Bean",
        "Bear",
        "Beat",
        "Beautiful",
        "Beauty",
        "Because",
        "Become",
        "Bed",
        "Bedroom",
        "Beer",
        "Before",
        "Begin",
        "Beginning",
        "Behavior",
        "Behind",
        "Being",
        "Belief",
        "Believe",
        "Bell",
        "Belong",
        "Below",
        "Belt",
        "Bench",
        "Bend",
        "Beneath",
        "Benefit",
        "Beside",
        "Besides",
        "Best",
        "Bet",
        "Better",
        "Between",
        "Beyond",
        "Bible",
        "Big",
        "Bike",
        "Bill",
        "Billion",
        "Bind",
        "Biological",
        "Bird",
        "Birth",
        "Birthday",
        "Bit",
        "Bite",
        "Black",
        "Blade",
        "Blame",
        "Blanket",
        "Blind",
        "Block",
        "Blood",
        "Blow",
        "Blue",
        "Board",
        "Boat",
        "Body",
        "Bomb",
        "Bombing",
        "Bond",
        "Bone",
        "Book",
        "Boom",
        "Boot",
        "Border",
        "Born",
        "Borrow",
        "Boss",
        "Both",
        "Bother",
        "Bottle",
        "Bottom",
        "Boundary",
        "Bowl",
        "Box",
        "Boy",
        "Boyfriend",
        "Brain",
        "Branch",
        "Brand",
        "Bread",
        "Break",
        "Breakfast",
        "Breast",
        "Breath",
        "Breathe",
        "Brick",
        "Bridge",
        "Brief",
        "Briefly",
        "Bright",
        "Brilliant",
        "Bring",
        "British",
        "Broad",
        "Broken",
        "Brother",
        "Brown",
        "Brush",
        "Buck",
        "Budget",
        "Build",
        "Building",
        "Bullet",
        "Bunch",
        "Burden",
        "Burn",
        "Bury",
        "Bus",
        "Business",
        "Busy",
        "But",
        "Butter",
        "Button",
        "Buy",
        "Buyer",
        "By",
        "Cabin",
        "Cabinet",
        "Cable",
        "Cake",
        "Calculate",
        "Call",
        "Camera",
        "Camp",
        "Campaign",
        "Campus",
        "Can",
        "Canadian",
        "Cancer",
        "Candidate",
        "Cap",
        "Capability",
        "Capable",
        "Capacity",
        "Capital",
        "Captain",
        "Capture",
        "Car",
        "Carbon",
        "Card",
        "Care",
        "Career",
        "Careful",
        "Carefully",
        "Carrier",
        "Carry",
        "Case",
        "Cash",
        "Cast",
        "Cat",
        "Catch",
        "Category",
        "Catholic",
        "Cause",
        "Ceiling",
        "Celebrate",
        "Celebration",
        "Celebrity",
        "Cell",
        "Center",
        "Central",
        "Century",
        "CEO",
        "Ceremony",
        "Certain",
        "Certainly",
        "Chain",
        "Chair",
        "Chairman",
        "Challenge",
        "Chamber",
        "Champion",
        "Championship",
        "Chance",
        "Change",
        "Changing",
        "Channel",
        "Chapter",
        "Character",
        "Characteristic",
        "Characterize",
        "Charge",
        "Charity",
        "Chart",
        "Chase",
        "Cheap",
        "Check",
        "Cheek",
        "Cheese",
        "Chef",
        "Chemical",
        "Chest",
        "Chicken",
        "Chief",
        "Child",
        "Childhood",
        "Chinese",
        "Chip",
        "Chocolate",
        "Choice",
        "Cholesterol",
        "Choose",
        "Christian",
        "Christmas",
        "Church",
        "Cigarette",
        "Circle",
        "Circumstance",
        "Cite",
        "Citizen",
        "City",
        "Civil",
        "Civilian",
        "Claim",
        "Class",
        "Classic",
        "Classroom",
        "Clean",
        "Clear",
        "Clearly",
        "Client",
        "Climate",
        "Climb",
        "Clinic",
        "Clinical",
        "Clock",
        "Close",
        "Closely",
        "Closer",
        "Clothes",
        "Clothing",
        "Cloud",
        "Club",
        "Clue",
        "Cluster",
        "Coach",
        "Coal",
        "Coalition",
        "Coast",
        "Coat",
        "Code",
        "Coffee",
        "Cognitive",
        "Cold",
        "Collapse",
        "Colleague",
        "Collect",
        "Collection",
        "Collective",
        "College",
        "Colonial","Color","Column","Combination","Combine","Come","Comedy","Comfort","Comfortable","Command","Commander","Comment","Commercial","Commission","Commit","Commitment","Committee","Common","Communicate","Communication","Community","Company","Compare","Comparison","Compete","Competition","Competitive","Competitor","Complain","Complaint","Complete","Completely","Complex","Complicated","Component","Compose","Composition","Comprehensive","Computer","Concentrate","Concentration","Concept","Concern","Concerned","Concert","Conclude","Conclusion","Concrete","Condition","Conduct","Conference","Confidence","Confident","Confirm","Conflict","Confront","Confusion","Congress","Congressional","Connect","Connection","Consciousness","Consensus","Consequence","Conservative","Consider","Considerable","Consideration","Consist","Consistent","Constant","Constantly","Constitute","Constitutional","Construct","Construction","Consultant","Consume","Consumer","Consumption","Contact","Contain","Container","Contemporary","Content","Contest","Context","Continue","Continued","Contract","Contrast","Contribute","Contribution","Control","Controversial","Controversy","Convention","Conventional","Conversation","Convert","Conviction","Convince","Cook","Cookie","Cooking","Cool","Cooperation","Cop","Cope","Copy","Core","Corn","Corner","Corporate","Corporation","Correct","Correspondent","Cost","Cotton","Couch","Could","Council","Counselor","Count","Counter","Country","County","Couple","Courage","Course","Court","Cousin","Cover","Coverage","Cow","Crack","Craft","Crash","Crazy","Cream","Create","Creation","Creative","Creature","Credit","Crew","Crime","Criminal","Crisis","Criteria","Critic","Critical","Criticism","Criticize","Crop","Cross","Crowd","Crucial","Cry","Cultural","Culture","Cup","Curious","Current","Currently","Curriculum","Custom","Customer","Cut","Cycle","Dad","Daily","Damage","Dance","Danger","Dangerous","Dare","Dark","Darkness","Data","Date","Daughter","Day","Dead","Deal","Dealer","Dear","Death","Debate","Debt","Decade","Decide","Decision","Deck","Declare","Decline","Decrease","Deep","Deeply","Deer","Defeat","Defend","Defendant","Defense","Defensive","Deficit","Define","Definitely","Definition","Degree","Delay","Deliver","Delivery","Demand","Democracy","Democrat","Democratic","Demonstrate","Demonstration","Deny","Department","Depend","Dependent","Depending","Depict","Depression","Depth","Deputy","Derive","Describe","Description","Desert","Deserve","Design","Designer","Desire","Desk","Desperate","Despite","Destroy","Destruction","Detail","Detailed","Detect","Determine","Develop","Developing","Development","Device","Devote","Dialogue","Die","Diet","Differ","Difference","Different","Differently","Difficult","Difficulty","Dig","Digital","Dimension","Dining","Dinner","Direct","Direction","Directly","Director","Dirt","Dirty","Disability","Disagree","Disappear","Disaster","Discipline","Discourse","Discover","Discovery","Discrimination","Discuss","Discussion","Disease","Dish","Dismiss","Disorder","Display","Dispute","Distance","Distant","Distinct","Distinction","Distinguish","Distribute","Distribution","District","Diverse","Diversity","Divide","Division","Divorce","DNA","Do","Doctor","Document","Dog","Domestic","Dominant","Dominate","Door","Double","Doubt","Down","Downtown","Dozen","Draft","Drag","Drama","Dramatic","Dramatically","Draw","Drawing","Dream","Dress","Drink","Drive","Driver","Drop","Drug","Dry","Due","During","Dust","Duty","Each","Eager","Ear","Early","Earn","Earnings","Earth","Ease","Easily","East","Eastern","Easy","Eat","Economic","Economics","Economist","Economy","Edge","Edition","Editor","Educate","Education","Educational","Educator","Effect","Effective","Effectively","Efficiency","Efficient","Effort","Egg","Eight","Either","Elderly","Elect","Election","Electric","Electricity","Electronic","Element","Elementary","Eliminate","Elite","Else","Elsewhere","E-mail","Embrace","Emerge","Emergency","Emission","Emotion","Emotional","Emphasis","Emphasize","Employ","Employee","Employer","Employment","Empty","Enable","Encounter","Encourage","End","Enemy","Energy","Enforcement","Engage","Engine","Engineer","Engineering","English","Enhance","Enjoy","Enormous","Enough","Ensure","Enter","Enterprise","Entertainment","Entire","Entirely","Entrance","Entry","Environment","Environmental","Episode","Equal","Equally","Equipment","Era","Error","Escape","Especially","Essay","Essential","Essentially","Establish","Establishment","Estate","Estimate","Etc","Ethics","Ethnic","European","Evaluate","Evaluation","Even","Evening","Event","Eventually","Ever","Every","Everybody","Everyday","Everyone","Everything","Everywhere","Evidence","Evolution","Evolve","Exact","Exactly","Examination","Examine","Example","Exceed","Excellent","Except","Exception","Exchange","Exciting","Executive","Exercise","Exhibit","Exhibition","Exist","Existence","Existing","Expand","Expansion","Expect","Expectation","Expense","Expensive","Experience","Experiment","Expert","Explain","Explanation","Explode","Explore","Explosion","Expose","Exposure","Express","Expression","Extend","Extension","Extensive","Extent","External","Extra","Extraordinary","Extreme","Extremely","Eye","Fabric","Face","Facility","Fact","Factor","Factory","Faculty","Fade","Fail","Failure","Fair","Fairly","Faith","Fall","False","Familiar","Family","Famous","Fan","Fantasy","Far","Farm","Farmer","Fashion","Fast","Fat","Fate","Father","Fault","Favor","Favorite","Fear","Feature","Federal","Fee","Feed","Feel","Feeling","Fellow","Female","Fence","Few","Fewer","Fiber","Fiction","Field","Fifteen","Fifth","Fifty","Fight","Fighter","Fighting","Figure","File","Fill","Film","Final","Finally","Finance","Financial","Find","Finding","Fine","Finger","Finish","Fire","Firm","First","Fish","Fishing","Fit","Fitness","Five","Fix","Flag","Flame","Flat","Flavor","Flee","Flesh","Flight","Float","Floor","Flow","Flower","Fly","Focus","Folk","Follow","Following","Food","Foot","Football","For","Force","Foreign","Forest","Forever","Forget","Form","Formal","Formation","Former","Formula","Forth","Fortune","Forward","Found","Foundation","Founder","Four","Fourth","Frame","Framework","Free","Freedom","Freeze","French","Frequency","Frequent","Frequently","Fresh","Friend","Friendly","Friendship","From","Front","Fruit","Frustration","Fuel","Full","Fully","Fun","Function","Fund","Fundamental","Funding","Funeral","Funny","Furniture","Furthermore","Future","Gain","Galaxy","Gallery","Game","Gang","Gap","Garage","Garden","Garlic","Gas","Gate","Gather","Gay","Gaze","Gear","Gender","Gene","General","Generally","Generate","Generation","Genetic","Gentleman","Gently","German","Gesture","Get","Ghost","Giant","Gift","Gifted","Girl","Girlfriend","Give","Given","Glad","Glance","Glass","Global","Glove","Go","Goal","God","Gold","Golden","Golf","Good","Government","Governor","Grab","Grade","Gradually","Graduate","Grain","Grand","Grandfather","Grandmother","Grant","Grass","Grave","Gray","Great","Greatest","Green","Grocery","Ground","Group","Grow","Growing","Growth","Guarantee","Guard","Guess","Guest","Guide","Guideline","Guilty","Gun","Guy","Habit","Habitat","Hair","Half","Hall","Hand","Handful","Handle","Hang","Happen","Happy","Hard","Hardly","Hat","Hate","Have","He","Head","Headline","Headquarters","Health","Healthy","Hear","Hearing","Heart","Heat","Heaven","Heavily","Heavy","Heel","Height","Helicopter","Hell","Hello","Help","Helpful","Her","Here","Heritage","Hero","Herself","Hey","Hi","Hide","High","Highlight","Highly","Highway","Hill","Him","Himself","Hip","Hire","His","Historian","Historic","Historical","History","Hit","Hold","Hole","Holiday","Holy","Home","Homeless","Honest","Honey","Honor","Hope","Horizon","Horror","Horse","Hospital","Host","Hot","Hotel","Hour","House","Household","Housing","How","However","Huge","Human","Humor","Hundred","Hungry","Hunter","Hunting","Hurt","Husband","Hypothesis","I","Ice","Idea","Ideal","Identification","Identify","Identity","Ie","If","Ignore","Ill","Illegal","Illness","Illustrate","Image","Imagination","Imagine","Immediate","Immediately","Immigrant","Immigration","Impact","Implement","Implication","Imply","Importance","Important","Impose","Impossible","Impress","Impression","Impressive","Improve","Improvement","In","Incentive","Incident","Include","Including","Income","Incorporate","Increase","Increased","Increasing","Increasingly","Incredible","Indeed","Independence","Independent","Index","Indian","Indicate","Indication","Individual","Industrial","Industry","Infant","Infection","Inflation","Influence","Inform","Information","Ingredient","Initial","Initially","Initiative","Injury","Inner","Innocent","Inquiry","Inside","Insight","Insist","Inspire","Install","Instance","Instead","Institution","Institutional","Instruction","Instructor","Instrument","Insurance","Intellectual","Intelligence","Intend","Intense","Intensity","Intention","Interaction","Interest","Interested","Interesting","Internal","International","Internet","Interpret","Interpretation","Intervention","Interview","Into","Introduce","Introduction","Invasion","Invest","Investigate","Investigation","Investigator","Investment","Investor","Invite","Involve","Involved","Involvement","Iraqi","Irish","Iron","Islamic","Island","Israeli","Issue","It","Italian","Item","Its","Itself","Jacket","Jail","Japanese","Jet","Jew","Jewish","Job","Join","Joint","Joke","Journal","Journalist","Journey","Joy","Judge","Judgment","Juice","Jump","Junior","Jury","Just","Justice","Justify","Keep","Key","Kick","Kid","Kill","Killer","Killing","Kind","King","Kiss","Kitchen","Knee","Knife","Knock","Know","Knowledge","Lab","Label","Labor","Laboratory","Lack","Lady","Lake","Land","Landscape","Language","Lap","Large","Largely","Last","Late","Later","Latin","Latter","Laugh","Launch","Law","Lawn","Lawsuit","Lawyer","Lay","Layer","Lead","Leader","Leadership","Leading","Leaf","League","Lean","Learn","Learning","Least","Leather","Leave","Left","Leg","Legacy","Legal","Legend","Legislation","Legitimate","Lemon","Length","Less","Lesson","Let","Letter","Level","Liberal","Library","License","Lie","Life","Lifestyle","Lifetime","Lift","Light","Like","Likely","Limit","Limitation","Limited","Line","Link","Lip","List","Listen","Literally","Literary","Literature","Little","Live","Living","Load","Loan","Local","Locate","Location","Lock","Long","Long-term","Look","Loose","Lose","Loss","Lost","Lot","Lots","Loud","Love","Lovely","Lover","Low","Lower","Luck","Lucky","Lunch","Lung","Machine","Mad","Magazine","Mail","Main","Mainly","Maintain","Maintenance","Major","Majority","Make","Maker","Makeup","Male","Mall","Man","Manage","Management","Manager","Manner","Manufacturer","Manufacturing","Many","Map","Margin","Mark","Market","Marketing","Marriage","Married","Marry","Mask","Mass","Massive","Master","Match","Material","Math","Matter","May","Maybe","Mayor","Me","Meal","Mean","Meaning","Meanwhile","Measure","Measurement","Meat","Mechanism","Media","Medical","Medication","Medicine","Medium","Meet","Meeting","Member","Membership","Memory","Mental","Mention","Menu","Mere","Merely","Mess","Message","Metal","Meter","Method","Mexican","Middle","Might","Military","Milk","Million","Mind","Mine","Minister","Minor","Minority","Minute","Miracle","Mirror","Miss","Missile","Mission","Mistake","Mix","Mixture","Mm-hmm","Mode","Model","Moderate","Modern","Modest","Mom","Moment","Money","Monitor","Month","Mood","Moon","Moral","More","Moreover","Morning","Mortgage","Most","Mostly","Mother","Motion","Motivation","Motor","Mount","Mountain","Mouse","Mouth","Move","Movement","Movie","Mr","Mrs","Ms","Much","Multiple","Murder","Muscle","Museum","Music","Musical","Musician","Muslim","Must","Mutual","My","Myself","Mystery","Myth","Naked","Name","Narrative","Narrow","Nation","National","Native","Natural","Naturally","Nature","Near","Nearby","Nearly","Necessarily","Necessary","Neck","Need","Negative","Negotiate","Negotiation","Neighbor","Neighborhood","Neither","Nerve","Nervous","Net","Network","Never","Nevertheless","New","Newly","News","Newspaper","Next","Nice","Night","Nine","No","Nobody","Nod","Noise","Nomination","None","Nonetheless","Nor","Normal","Normally","North","Northern","Nose","Not","Note","Nothing","Notice","Notion","Novel","Now","Nowhere","N't","Nuclear","Number","Numerous","Nurse","Nut","Object","Objective","Obligation","Observation","Observe","Observer","Obtain","Obvious","Obviously","Occasion","Occasionally","Occupation","Occupy","Occur","Ocean","Odd","Odds","Of","Off","Offense","Offensive","Offer","Office","Officer","Official","Often","Oh","Oil","Ok","Okay","Old","Olympic","On","Once","One","Ongoing","Onion","Online","Only","Onto","Open","Opening","Operate","Operating","Operation","Operator","Opinion","Opponent","Opportunity","Oppose","Opposite","Opposition","Option","Or","Orange","Order","Ordinary","Organic","Organization","Organize","Orientation","Origin","Original","Originally","Other","Others","Otherwise","Ought","Our","Ourselves","Out","Outcome","Outside","Oven","Over","Overall","Overcome","Overlook","Owe","Own","Owner","Pace","Pack","Package","Page","Pain","Painful","Paint","Painter","Painting","Pair","Pale","Palestinian","Palm","Pan","Panel","Pant","Paper","Parent","Park","Parking","Part","Participant","Participate","Participation","Particular","Particularly","Partly","Partner","Partnership","Party","Pass","Passage","Passenger","Passion","Past","Patch","Path","Patient","Pattern","Pause","Pay","Payment","PC","Peace","Peak","Peer","Penalty","People","Pepper","Per","Perceive","Percentage","Perception","Perfect","Perfectly","Perform","Performance","Perhaps","Period","Permanent","Permission","Permit","Person","Personal","Personality","Personally","Personnel","Perspective","Persuade","Pet","Phase","Phenomenon","Philosophy","Phone","Photo","Photograph","Photographer","Phrase","Physical","Physically","Physician","Piano","Pick","Picture","Pie","Piece","Pile","Pilot","Pine","Pink","Pipe","Pitch","Place","Plan","Plane","Planet","Planning","Plant","Plastic","Plate","Platform","Play","Player","Please","Pleasure","Plenty","Plot","Plus","PM","Pocket","Poem","Poet","Poetry","Point","Pole","Police","Policy","Political","Politically","Politician","Politics","Poll","Pollution","Pool","Poor","Pop","Popular","Population","Porch","Port","Portion","Portrait","Portray","Pose","Position","Positive","Possess","Possibility","Possible","Possibly","Post","Pot","Potato","Potential","Potentially","Pound","Pour","Poverty","Powder","Power","Powerful","Practical","Practice","Pray","Prayer","Precisely","Predict","Prefer","Preference","Pregnancy","Pregnant","Preparation","Prepare","Prescription","Presence","Present","Presentation","Preserve","President","Presidential","Press","Pressure","Pretend","Pretty","Prevent","Previous","Previously","Price","Pride","Priest","Primarily","Primary","Prime","Principal","Principle","Print","Prior","Priority","Prison","Prisoner","Privacy","Private","Probably","Problem","Procedure","Proceed","Process","Produce","Producer","Product","Production","Profession","Professional","Professor","Profile","Profit","Program","Progress","Project","Prominent","Promise","Promote","Prompt","Proof","Proper","Properly","Property","Proportion","Proposal","Propose","Proposed","Prosecutor","Prospect","Protect","Protection","Protein","Protest","Proud","Prove","Provide","Provider","Province","Provision","Psychological","Psychologist","Psychology","Public","Publication","Publicly","Publish","Publisher","Pull","Punishment","Purchase","Pure","Purpose","Pursue","Push","Put","Qualify","Quality","Quarter","Quarterback","Question","Quick","Quickly","Quiet","Quietly","Quit","Quite","Quote","Race","Racial","Radical","Radio","Rail","Rain","Raise","Range","Rank","Rapid","Rapidly","Rare","Rarely","Rate","Rather","Rating","Ratio","Raw","Reach","React","Reaction","Read","Reader","Reading","Ready","Real","Reality","Realize","Really","Reason","Reasonable","Recall","Receive","Recent","Recently","Recipe","Recognition","Recognize","Recommend","Recommendation","Record","Recording","Recover","Recovery","Recruit","Red","Reduce","Reduction","Refer","Reference","Reflect","Reflection","Reform","Refugee","Refuse","Regard","Regarding","Regardless","Regime","Region","Regional","Register","Regular","Regularly","Regulate","Regulation","Reinforce","Reject","Relate","Relation","Relationship","Relative","Relatively","Relax","Release","Relevant","Relief","Religion","Religious","Rely","Remain","Remaining","Remarkable","Remember","Remind","Remote","Remove","Repeat","Repeatedly","Replace","Reply","Report","Reporter","Represent","Representation","Representative","Republican","Reputation","Request","Require","Requirement","Research","Researcher","Resemble","Reservation","Resident","Resist","Resistance","Resolution","Resolve","Resort","Resource","Respect","Respond","Respondent","Response","Responsibility","Responsible","Rest","Restaurant","Restore","Restriction","Result","Retain","Retire","Retirement","Return","Reveal","Revenue","Review","Revolution","Rhythm","Rice","Rich","Rid","Ride","Rifle","Right","Ring","Rise","Risk","River","Road","Rock","Role","Roll","Romantic","Roof","Room","Root","Rope","Rose","Rough","Roughly","Round","Route","Routine","Row","Rub","Rule","Run","Running","Rural","Rush","Russian","Sacred","Sad","Safe","Safety","Sake","Salad","Salary","Sale","Sales","Salt","Same","Sample","Sanction","Sand","Satellite","Satisfaction","Satisfy","Sauce","Save","Saving","Say","Scale","Scandal","Scared","Scenario","Scene","Schedule","Scheme","Scholar","Scholarship","School","Science","Scientific","Scientist","Scope","Score","Scream","Screen","Script","Sea","Search","Season","Seat","Second","Secret","Secretary","Section","Sector","Secure","Security","See","Seed","Seek","Seem","Segment","Seize","Select","Selection","Self","Sell","Senate","Senator","Send","Senior","Sense","Sensitive","Sentence","Separate","Sequence","Series","Serious","Seriously","Serve","Service","Session","Set","Setting","Settle","Settlement","Seven","Several","Severe","Sex","Sexual","Shade","Shadow","Shake","Shall","Shape","Share","Sharp","She","Sheet","Shelf","Shell","Shelter","Shift","Shine","Ship","Shirt","Shit","Shock","Shoe","Shoot","Shooting","Shop","Shopping","Shore","Short","Shortly","Shot","Should","Shoulder","Shout","Show","Shower","Shrug","Shut","Sick","Side","Sigh","Sight","Sign","Signal","Significance","Significant","Significantly","Silence","Silent","Silver","Similar","Similarly","Simple","Simply","Sin","Since","Sing","Singer","Single","Sink","Sir","Sister","Sit","Site","Situation","Six","Size","Ski","Skill","Skin","Sky","Slave","Sleep","Slice","Slide","Slight","Slightly","Slip","Slow","Slowly","Small","Smart","Smell","Smile","Smoke","Smooth","Snap","Snow","So","So-called","Soccer","Social","Society","Soft","Software","Soil","Solar","Soldier","Solid","Solution","Solve","Some","Somebody","Somehow","Someone","Something","Sometimes","Somewhat","Somewhere","Son","Song","Soon","Sophisticated","Sorry","Sort","Soul","Sound","Soup","Source","South","Southern","Soviet","Space","Spanish","Speak","Speaker","Special","Specialist","Species","Specific","Specifically","Speech","Speed","Spend","Spending","Spin","Spirit","Spiritual","Split","Spokesman","Sport","Spot","Spread","Spring","Square","Squeeze","Stability","Stable","Staff","Stage","Stair","Stake","Stand","Standard","Standing","Star","Stare","Start","State","Statement","Station","Statistics","Status","Stay","Steady","Steal","Steel","Step","Stick","Still","Stir","Stock","Stomach","Stone","Stop","Storage","Store","Storm","Story","Straight","Strange","Stranger","Strategic","Strategy","Stream","Street","Strength","Strengthen","Stress","Stretch","Strike","String","Strip","Stroke","Strong","Strongly","Structure","Struggle","Student","Studio","Study","Stuff","Stupid","Style","Subject","Submit","Subsequent","Substance","Substantial","Succeed","Success","Successful","Successfully","Such","Sudden","Suddenly","Sue","Suffer","Sufficient","Sugar","Suggest","Suggestion","Suicide","Suit","Summer","Summit","Sun","Super","Supply","Support","Supporter","Suppose","Supposed","Supreme","Sure","Surely","Surface","Surgery","Surprise","Surprised","Surprising","Surprisingly","Surround","Survey","Survival","Survive","Survivor","Suspect","Sustain","Swear","Sweep","Sweet","Swim","Swing","Switch","Symbol","Symptom","System","Table","Tablespoon","Tactic","Tail","Take","Tale","Talent","Talk","Tall","Tank","Tap","Tape","Target","Task","Taste","Tax","Taxpayer","Tea","Teach","Teacher","Teaching","Team","Tear","Teaspoon","Technical","Technique","Technology","Teen","Teenager","Telephone","Telescope","Television","Tell","Temperature","Temporary","Ten","Tend","Tendency","Tennis","Tension","Tent","Term","Terms","Terrible","Territory","Terror","Terrorism","Terrorist","Test","Testify","Testimony","Testing","Text","Than","Thank","Thanks","That","The","Theater","Their","Them","Theme","Themselves","Then","Theory","Therapy","There","Therefore","These","They","Thick","Thin","Thing","Think","Thinking","Third","Thirty","This","Those","Though","Thought","Thousand","Threat","Threaten","Three","Throat","Through","Throughout","Throw","Thus","Ticket","Tie","Tight","Time","Tiny","Tip","Tire","Tired","Tissue","Title","To","Tobacco","Today","Toe","Together","Tomato","Tomorrow","Tone","Tongue","Tonight","Too","Tool","Tooth","Top","Topic","Toss","Total","Totally","Touch","Tough","Tour","Tourist","Tournament","Toward","Towards","Tower","Town","Toy","Trace","Track","Trade","Tradition","Traditional","Traffic","Tragedy","Trail","Train","Training","Transfer","Transform","Transformation","Transition","Translate","Transportation","Travel","Treat","Treatment","Treaty","Tree","Tremendous","Trend","Trial","Tribe","Trick","Trip","Troop","Trouble","Truck","True","Truly","Trust","Truth","Try","Tube","Tunnel","Turn","TV","Twelve","Twenty","Twice","Twin","Two","Type","Typical","Typically","Ugly","Ultimate","Ultimately","Unable","Uncle","Under","Undergo","Understand","Understanding","Unfortunately","Uniform","Union","Unique","Unit","United","Universal","Universe","University","Unknown","Unless","Unlike","Unlikely","Until","Unusual","Up","Upon","Upper","Urban","Urge","Us","Use","Used","Useful","User","Usual","Usually","Utility","Vacation","Valley","Valuable","Value","Variable","Variation","Variety","Various","Vary","Vast","Vegetable","Vehicle","Venture","Version","Versus","Very","Vessel","Veteran","Via","Victim","Victory","Video","View","Viewer","Village","Violate","Violation","Violence","Violent","Virtually","Virtue","Virus","Visible","Vision","Visit","Visitor","Visual","Vital","Voice","Volume","Volunteer","Vote","Voter","Vs","Vulnerable","Wage","Wait","Wake","Walk","Wall","Wander","Want","War","Warm","Warn","Warning","Wash","Waste","Watch","Water","Wave","Way","We","Weak","Wealth","Wealthy","Weapon","Wear","Weather","Wedding","Week","Weekend","Weekly","Weigh","Weight","Welcome","Welfare","Well","West","Western","Wet","What","Whatever","Wheel","When","Whenever","Where","Whereas","Whether","Which","While","Whisper","White","Who","Whole","Whom","Whose","Why","Wide","Widely","Widespread","Wife","Wild","Will","Willing","Win","Wind","Window","Wine","Wing","Winner","Winter","Wipe","Wire","Wisdom","Wise","Wish","With","Withdraw","Within","Without","Witness","Woman","Wonder","Wonderful","Wood","Wooden","Word","Work","Worker","Working","Works","Workshop","World","Worried","Worry","Worth","Would","Wound","Wrap","Write","Writer","Writing","Wrong","Yard","Yeah","Year","Yell","Yellow","Yes","Yesterday","Yet","Yield","You","Young","Your","Yours","Yourself","Youth","Zone"];
        blocks.push(new Block(wall1.x + wall1.w, -25, wall3.w - wall1.w*2, 20, "#202830", words[Math.floor(Math.random() * words.length)]));
    }
    createBlock();

    function animate() {
        animation = requestAnimationFrame(animate);
        ctx.fillStyle = "#f1f5f8";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        wall1.update();
        wall2.update();
        wall3.update();

        blocks.forEach(block => {
            block.update();
            if (block.y + block.h > collisionY && block.active && !gameOver) {
                block.active = false;
                block.vel.y = 0;
                block.y = collisionY - block.h;
                createBlock();
                collisionY -= block.h;
            }
        })

        if (collisionY - blocks[0].h < wall1.y) {
            blocks.splice(blocks.length -1, 1);
            gameOver = true;
            cancelAnimationFrame(animation);
            blocks[blocks.length -1].y = collisionY;
            blocks[blocks.length -1].update();
            $("#restart").style.opacity = "1";
            $("#restart").style.pointerEvents = "all";
        }

    }
    // animate()

    $("#openKeyboard").addEventListener("click", () => {
        $("#game-input").focus();
    })

    $("#game-input").addEventListener("input", () => {
        if ($("#game-input").value.length == 1) {
            lastLetter = $("#game-input").value;
        } else {
            lastLetter = $("#game-input").value.charAt($("#game-input").value.length -1);
        }

        if (blocks[blocks.length -1].word != "Press Space!") {
            if (lastLetter != blocks[blocks.length -1].word.charAt(0)) {
                score -= 5;
                $("#score").innerHTML = score;
            }
        } else {
            if (lastLetter == " ") {
                score += Math.round(Math.random() * (15 - 5) + 5);
                $("#score").innerHTML = score;
            }
        }

        if (lastLetter == blocks[blocks.length -1].word.charAt(0) && blocks[blocks.length -1].word != "Press Space!") {
            blocks[blocks.length -1].word = blocks[blocks.length -1].word.slice(1, blocks[blocks.length]);
            if (blocks[blocks.length -1].word == "") {
                blocks[blocks.length -1].word = "Press Space!";
            }
        } else if (blocks[blocks.length -1].word == "Press Space!") {
            if (lastLetter == " ") {
                blocks.splice(blocks.length -1, 1);
                createBlock();
            }
        }


    })
    function restartGame() {
        blocks = [];
        gameOver = false;
        collisionY = wall3.y;
        score = 0;
        speedY = 0.6;
        $("#score").innerHTML = score;
        createBlock();
        animate();
        $("#restart").style.opacity = "0";
        $("#restart").style.pointerEvents = "none";
    }
    $("#restart").addEventListener("click", restartGame);

    setInterval(() => {
        speedY += 0.01;
    }, 90000)

    // }



    $("#startGameBtn").addEventListener("click", () => {
        container.style.display = "none";
        nav.style.display = "none";
        restartGame();
        $("#game-container").style.display = "block";
        window.scrollTo(0, 0);
    })
    $("#game-back-btn").addEventListener("click", () => {
        $("#game-container").style.display = "none";
        container.style.display = "block";
        nav.style.display = "flex";
        cancelAnimationFrame(animation);
        // $("#game-input").value = "";
    })


    $("#contact-us-submit-btn").addEventListener("click", e => {
        e.preventDefault();
        sendMail();
    })

    function sendMail() {
        let name = $("#contact-us-name").value;
        let subject = $("#contact-us-subject").value;
        let message = $("#contact-us-message").value;
        message = message.replace(/\n/g,
            "%0A");
        let email = "salahalkaseri786@gmail.com";

        let url = `mailto:${email}?subject=${subject}%20-%20${name}&body=${message}`;
        location.href = url;
    }


    $("#input").addEventListener("paste", e => {
        e.preventDefault();
    })
