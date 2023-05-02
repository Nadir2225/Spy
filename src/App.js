import { useState } from 'react';
import './App.css';
import Start from './Start.js';
import Players from './players.js';
import Spies from './spies.js';
import Time from './time.js';
import Section from './sections.js';
import Game from './game.js';

function App() {
  const [selected ,setSelected] = useState({
    countries: true,
    sports: true,
    objects: true,
    places: true,
    transport: true,
    cuisine: true,
    beauty: true,
    animals: true,
    nature: true,
    colors: true,
    educ: true,
  })
  const [selectedItems , setSelectedItems ] = useState(["countries","colors","objects","sports","educ","transport","nature","animals","beauty","cuisine","places"])
  const [single ,setSingle]= useState(true)
  const [singlee ,setSinglee]= useState(true)
  const [singleee ,setSingleee]= useState(true)
  const [eng, setEng] = useState(true);
  const [timee, setTimee] = useState(5);
  const [screen ,setScreen] = useState({
    home: true,
    players: false,
    spies: false,
    time: false,
    sections: false
  })
  const [game, setGame] = useState(false)
  const [playersn ,setPlayersn] = useState(6)
  const [spiesn ,setSpiesn] = useState(1)
  const nature = [  "Planet",  "sea",  "forest",  "mountain",  "animal",  "human",  "insect",  "sunset",  "flower",  "rain",  "snow",  "sun",  "moon",  "sky",  "wind",  "storm",  "cave",  "cloud",  "waterfall",  "grass",  "desert",  "tree",  "sand",  "earth",  "air",  "thunder",  "lightning",  "plants",  "rainbow",  "river",  "rock",  "lake",  "ocean",  "sunrise"]
  const naturea = [  "كوكب",  "بحر",  "غابة",  "جبل",  "حيوان",  "إنسان",  "حشرة",  "غروب",  "زهرة",  "مطر",  "ثلج",  "شمس",  "قمر",  "سماء",  "ريح",  "عاصفة",  "كهف",  "غيمة",  "شلال",  "عشب",  "صحراء",  "شجرة",  "رمل",  "أرض",  "هواء",  "رعد",  "برق",  "نباتات",  "قوس قزح",  "نهر",  "صخرة",  "بحيرة",  "محيط",  "شروق الشمس"]
  const objects = ["book", "magazine", "newspaper", "pen", "pencil", "notebook", "calculator", "ruler", "scissors", "stapler", "tape", "glue", "marker", "highlighter", "backpack", "briefcase", "umbrella", "hat", "sunglasses", "watch", "bracelet", "necklace", "ring", "earring", "belt", "wallet", "keychain", "cellphone", "laptop", "tablet", "television", "remote", "speaker", "headphones", "guitar", "piano", "violin", "trumpet", "camera", "clock", "lamp", "chair", "table", "bed", "pillow", "blanket", "mirror", "picture frame"]
  const sports = ["soccer", "basketball", "tennis", "football", "golf", "boxing", "baseball", "athletics", "swimming", "ice hockey", "rugby", "volleyball", "table tennis", "badminton", "gymnastics", "cycling", "martial arts", "skiing", "snowboarding", "figure skating", "diving", "synchronized swimming", "weightlifting", "surfing", "horse racing", "Formula One racing"]
  const colors = ["red", "blue", "green", "pink", "brown", "black", "white", "gray", "yellow", "orange", "purple"]
  const transport = [  "Car",  "Bus",  "Traffic lights",  "Hot air balloon",  "Gas pump",  "Jet ski",  "Jet plane",  "Train",  "Taxi",  "Tram",  "Metro",  "Subway",  "Parachute",  "Cruise",  "Boat",  "Ship",  "Yacht",  "Scooter",  "Bicycle",  "Motorcycle",  "Helicopter",  "Airplane",  "Road",  "Speed",  "Race",  "Kayak",  "Driver",  "Pilot",  "Ambulance",  "Truck",  "Tractor"]
  const educ = ["school", "university", "college", "classroom", "teacher", "student", "homework", "exam", "lecture", "textbook", "notebook", "pencil", "pen", "backpack", "laptop", "whiteboard", "blackboard", "chalk", "eraser", "calculator"]
  const places = ["park", "museum", "library", "restaurant", "cafe", "beach", "cinema", "shopping mall", "stadium", "hospital", "airport", "train station", "bus stop", "post office", "public square", "city hall", "police station", "fire station", "public restroom", "playground"]
  const animals = [  "leash",  "dog",  "cat",  "lion",  "spider",  "snake",  "mosquito",  "butterfly",  "fly",  "tiger",  "bear",  "wolf",  "bat",  "monkey",  "cow",  "horse",  "chicken",  "pig",  "sheep",  "goat",  "rabbit",  "hamster",  "duck",  "bee",  "ant",  "shark",  "zebra",  "elephant",  "giraffe",  "kangaroo",  "koala",  "dolphin",  "octopus",  "frog" ]
  const countries = [  "Afghanistan",  "Albania",  "morocco",  "Angola",  "Argentina",  "Australia",  "Austria",  "Bangladesh",  "Belgium",  "Brazil",  "Canada",  "Chile",  "China",  "Colombia",  "Cuba",  "Denmark",  "Egypt",  "France",  "Germany",  "Greece",  "India",  "saudi",  "Iraq",  "palastine",  "Italy",  "Japan",  "Mexico",  "Netherlands",  "Norway",  "Pakistan",  "Russia",  "Spain",  "Sweden",  "Switzerland",  "United Kingdom",  "United States" ]
  const beauty = ["perfume", "beauty", "makeup", "powder", "eyeliner", "mascara", "eyeshadow", "lipstick", "catwalk", "fashion", "hairstyle", "skin", "barber"]
  const cuisine = [  "Fire",  "Recipe",  "Cooking",  "Spice",  "Dessert",  "Chef",  "Menu",  "Gourmet",  "Sweet",  "Taste",  "Plating",  "Plate",  "Boil",  "Oil",  "Roasting",  "Bread",  "Butter",  "Cheese",  "Burger",  "Tea",  "Coffee",  "Chocolate",  "Water",  "Dinner table",  "Kitchen",  "Breakfast",  "Salad",  "Meat",  "Beef",  "Egg",  "Sushi",  "Pizza",  "Tacos",  "Steak"]
  const objectsa = ["كتاب", "مجلة", "جريدة", "قلم", "قلم رصاص", "مفكرة", "آلة حاسبة", "مسطرة", "مقص", "دباسة", "شريط لاصق", "غراء", "علامة", "محدد النص", "حقيبة ظهر", "حقيبة ملفات", "مظلة", "قبعة", "نظارات شمسية", "ساعة يد", "سوار", "عقد", "خاتم", "أقراط", "حزام", "محفظة", "حلقة مفاتيح", "هاتف نقال", "حاسوب محمول", "لوحي", "تلفاز", "جهاز تحكم عن بعد", "مكبر صوت", "سماعات رأس", "جيتار", "بيانو", "كمان", "ترومبيت", "كاميرا", "ساعة حائط", "مصباح", "كرسي", "طاولة", "سرير", "وسادة", "بطانية", "مرآة", "إطار صور"]
  const sportsa = ["كرة القدم", "كرة السلة", "تنس", "كرة القدم الأمريكية", "الغولف", "الملاكمة", "البيسبول", "ألعاب القوى", "السباحة", "هوكي الجليد", "الرجبي", "كرة الطائرة", "تنس الطاولة", "ريشة الطائرة", "الجمباز", "ركوب الدراجات", "الفنون القتالية", "التزلج", "التزلج على الجليد", "التزلج الفني", "الغطس", "السباحة التزامنية", "رفع الأثقال", "ركوب الأمواج", "سباق الخيول", "سباق الفورمولا وان"]
  const colorsa = ["أحمر", "أزرق", "أخضر", "وردي", "بني", "أسود", "أبيض", "رمادي", "أصفر", "برتقالي", "أرجواني"]
  const transporta = [  "سيارة",  "حافلة",  "إشارة مرور",  "بالون حارق",  "مضخة وقود",  "جت سكي",  "طائرة جت",  "قطار",  "تاكسي",  "ترام",  "مترو",  "مترو أنفاق",  "مظلة هبوط",  "رحلة بحرية",  "قارب",  "سفينة",  "يخت",  "سكوتر",  "دراجة",  "دراجة نارية",  "مروحية",  "طائرة",  "طريق",  "سرعة",  "سباق",  "كاياك",  "سائق",  "طيار",  "إسعاف",  "شاحنة",  "جرار"]
  const educa = ["مدرسة", "جامعة", "كلية", "صف دراسي", "معلم", "طالب", "واجب منزلي", "امتحان", "محاضرة", "كتاب دراسي", "دفتر", "قلم رصاص", "قلم حبر", "حقيبة ظهر", "حاسوب محمول", "سبورة بيضاء", "سبورة سوداء", "طبشور", "ممحاة", "آلة حاسبة"]
  const placesa = ["حديقة", "متحف", "مكتبة", "مطعم", "مقهى", "شاطئ", "سينما", "مركز تسوق", "ملعب", "مستشفى", "مطار", "محطة قطار", "موقف الحافلات", "مكتب البريد", "ساحة عامة", "دار البلدية", "مركز شرطة", "مركز إطفاء", "حمام عام", "ملعب أطفال"]
  const countriesa = [  "أفغانستان",  "ألبانيا",  "المغرب",  "أنغولا",  "الأرجنتين",  "أستراليا",  "النمسا",  "بنجلاديش",  "بلجيكا",  "البرازيل",  "كندا",  "تشيلي",  "الصين",  "كولومبيا",  "كوبا",  "الدنمارك",  "مصر",  "فرنسا",  "ألمانيا",  "اليونان",  "الهند",  "السعودية",  "العراق",  "فلسطين",  "إيطاليا",  "اليابان",  "المكسيك",  "هولندا",  "النرويج",  "باكستان",  "روسيا",  "إسبانيا",  "السويد",  "سويسرا",  "المملكة المتحدة",  "الولايات المتحدة الأمريكية" ]
  const beautya = ["عطر", "جمال", "ماكياج", "بودرة", "أيلاينر", "ماسكارا", "ظلال العيون", "أحمر الشفاه", "منصة عرض الأزياء", "أزياء", "تسريحة شعر", "بشرة", "حلاق"]
  const animalsa = [  " تمساح",  "كلب",  "قطة",  "أسد",  "عنكبوت",  "ثعبان",  "بعوضة",  "فراشة",  "ذبابة",  "نمر",  "دب",  "ذئب",  "خفاش",  "قرد",  "بقرة",  "حصان",  "دجاجة",  "خنزير",  "غنم",  "ماعز",  "أرنب",  "هامستر",  "بطة",  "نحلة",  "نملة",  "قرش",  "حمار الوحش",  "فيل",  "زرافة",  "كنغر",  "كوالا",  "دلفين",  "أخطبوط",  "ضفدع"]
  const cuisinea = [  "نار",  "وصفة",  "طهي",  "توابل",  "حلوى",  "طاهي",  "قائمة طعام",  "ذواقة",  "حلو",  "طعم",  "تنسيق",  "طبق",  "غلي",  "زيت",  "شواء",  "خبز",  "زبدة",  "جبن",  "برجر",  "شاي",  "قهوة",  "شوكولاتة",  "ماء",  "طاولة العشاء",  "مطبخ",  "وجبة الإفطار",  "سلطة",  "لحم",  "لحم بقر",  "بيض",  "سوشي",  "بيتزا",  "تاكوس",  "ستيك"]
  const [word ,setWord] = useState("")
  const [sectionn ,setSectionn] = useState("")
  
  const startg = () => {
    setScreen({
    home: false,
    players: false,
    spies: false,
    time: false,
    sections: false
  })
  setGame(true)
  let sectionName = selectedItems[Math.floor(selectedItems.length * Math.random())]
  setSectionn(sectionName)
  if (sectionName === 'nature') {
    if (eng === true) {
      let wordd = nature[Math.floor(nature.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = naturea[Math.floor(naturea.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'countries') {
    if (eng === true) {
      let wordd = countries[Math.floor(countries.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = countriesa[Math.floor(countriesa.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'objects') {
    if (eng === true) {
      let wordd = objects[Math.floor(objects.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = objectsa[Math.floor(objectsa.length * Math.random())]
      setWord(wordd)
    }
  }else  if (sectionName === 'sports') {
    if (eng === true) {
      let wordd = sports[Math.floor(sports.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = sportsa[Math.floor(sportsa.length * Math.random())]
      setWord(wordd)
    }
  }else  if (sectionName === 'colors') {
    if (eng === true) {
      let wordd = colors[Math.floor(colors.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = colorsa[Math.floor(colorsa.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'educ') {
    if (eng === true) {
      let wordd = educ[Math.floor(educ.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = educa[Math.floor(educa.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'transport') {
    if (eng === true) {
      let wordd = transport[Math.floor(transport.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = transporta[Math.floor(transporta.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'places') {
    if (eng === true) {
      let wordd = places[Math.floor(places.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = placesa[Math.floor(placesa.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'animals') {
    if (eng === true) {
      let wordd = animals[Math.floor(animals.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = animalsa[Math.floor(animalsa.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'beauty') {
    if (eng === true) {
      let wordd = beauty[Math.floor(beauty.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = beautya[Math.floor(beautya.length * Math.random())]
      setWord(wordd)
    }
  }else if (sectionName === 'cuisine') {
    if (eng === true) {
      let wordd = cuisine[Math.floor(cuisine.length * Math.random())]
      setWord(wordd)
    }else {
      let wordd = cuisinea[Math.floor(cuisinea.length * Math.random())]
      setWord(wordd)
    }
  }else {
    return
  }
  }
  
  
  return (
    <div className="App">
      {screen.players && 
      <Players 
      single={single}
      setSingle={setSingle}
      spiesn={spiesn}
      setPlayersn={setPlayersn}
      playersn={playersn}
      setScreen={setScreen}
      screen={screen}
      eng={eng}
      />}
      {screen.spies && 
      <Spies 
      single={singlee}
      setSingle={setSinglee}
      setSpiesn={setSpiesn}
      spiesn={spiesn}
      setPlayersn={setPlayersn}
      playersn={playersn}
      setScreen={setScreen}
      screen={screen}
      eng={eng}
      />}
      {screen.time && 
      <Time 
      single={singleee}
      setSingle={setSingleee}
      time={timee}
      setTimee={setTimee}
      setScreen={setScreen}
      screen={screen}
      eng={eng}
      />}
      {screen.sections && 
      <Section
      selected={selected}
      setSelected={setSelected}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      eng={eng}
      setScreen={setScreen}
      />}
      {screen.home && 
      <Start 
      selectedItems={selectedItems}
      time={timee}
      eng={eng}
      setEng={setEng}
      playersn={playersn}
      setScreen={setScreen}
      screen={screen}
      spiesn={spiesn}
      startg={startg}
      />}
      {game && 
      <Game
      eng={eng}
      setGame={setGame}
      setScreen={setScreen}
      word={word}
      sectionn={sectionn}
      playersn={playersn}
      spiesn={spiesn}
      timee={timee}
      />}
    </div>
  );
}

export default App;