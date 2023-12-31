window.onload = function(){
  start()
}

keyChoosing = "none";

function left(){
  keyChoosing = "left";
}
function right(){
  keyChoosing = "right";
}

function start(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Start")
  document.getElementById("p5").innerHTML=("Maxwell's journey")
  timerStart = setInterval(()=>{
    if(keyChoosing == "left"){
      intro();
      clearInterval(timerStart);
      document.getElementById("p5").style.zIndex="-1";
    }else if(keyChoosing == "right"){
      document.getElementById("p5").style.zIndex="-1";
      clearInterval(timerStart);
      intro();
    }else{}
  },1)
}

function intro(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I am Maxwell. Vacation was creeping right around the corner.  I had always been a big fan of Premium League. I was planning a trip to watch the Big London Derby. At the same time, I want to visit a few countries on my way. There are two airports I can start from, Kaohsiung International Airport and Taoyuan International Airport.")
  document.getElementById("p2").innerHTML=("Kaohsiung International Airport")
  document.getElementById("p3").innerHTML=("Taoyuan International Airport")
  document.getElementById("p4").innerHTML=("")
  timerIntro = setInterval(()=>{
    if(keyChoosing == "left"){
      kaohsiung();
      clearInterval(timerIntro);
    }else if(keyChoosing == "right"){
      clearInterval(timerIntro);
      taipei();
    }else{}
  },1)
}

function kaohsiung(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("Since I lived in Kaohsiung, I decided to go to KHH airport. The airport was bustling with people and immediately I was overwhelmed. Two flights caught my attention immediately; those were the flights to Colombia and Hong Kong.")
  document.getElementById("p2").innerHTML=("To Colombia")
  document.getElementById("p3").innerHTML=("To Hong Kong")
  document.getElementById("p4").innerHTML=("")
  timerKaohsiung = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerKaohsiung);
      colombia()
    }else if(keyChoosing == "right"){
      clearInterval(timerKaohsiung);
      HongKong()
    }else{}
  },1)
}

function taipei(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I decided that there were more flights in TPE, so I went there. The airport was extremely crowded, which was as expected.  A stranger suddenly shoved two flight tickets to me. I glanced at the tickets, one went to North Korea, and the other was crossed out, and they departed at the same time.")
  document.getElementById("p2").innerHTML=("To North Korea")
  document.getElementById("p3").innerHTML=("Mysterious flight")
  document.getElementById("p4").innerHTML=("")
  timerTaipei = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerTaipei);
      NorthKorea()
    }else if(keyChoosing == "right"){
      clearInterval(timerTaipei);
      colombia()
    }else{}
  },1)
}

function colombia(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I just arrived in Colombia. I saw a train to Argentina that was in an hour and the next one was in 10 hours. I either had to go straight to Argentina or I could go to visit my old friend.")
  document.getElementById("p2").innerHTML=("To Argentina")
  document.getElementById("p3").innerHTML=("To meet old Friend")
  document.getElementById("p4").innerHTML=("")
  timerColombia = setInterval(()=>{
    if(keyChoosing == "left"){
      argentina();
      clearInterval(timerColombia);
    }else if(keyChoosing == "right"){
      oldFriend();
      clearInterval(timerColombia);
    }else{}
  },1)
}

function oldFriend(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I decided to visit my old friend, Ms. Garcia.  I went to her house and met her family members. Ms. Garcia said that she was glad to see me, and she wanted to test if my Spanish ability improved. ")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Accept the challenge")
  timerOldFriend = setInterval(()=>{
    if(keyChoosing == "left"){
      spanishQuestion()
      clearInterval(timerOldFriend);
    }else if(keyChoosing == "right"){
      spanishQuestion()
      clearInterval(timerOldFriend);
    }else{}
  },1)
}

function spanishQuestion(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("Escribe el nombre del mejor profe de Individuos y Sociedades del mundo y la ciudad de donde viene.")
  document.getElementById("p2").innerHTML=("Sra. Garcia - de Bogotá ")
  document.getElementById("p3").innerHTML=("Ian James Baverstock - de Londres")
  document.getElementById("p4").innerHTML=("")
  timerSpanishQuestion = setInterval(()=>{
    if(keyChoosing == "left"){
      Garcia()
      clearInterval(timerSpanishQuestion);
    }else if(keyChoosing == "right"){
      Baverstock()
      clearInterval(timerSpanishQuestion);
    }else{}
  },1)
}

function Garcia(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("Ms. Garcia gave me a reassuring smile, and offered 2 free airplane tickets with two options, one to England and the other back to Kaohsiung.")
  document.getElementById("p2").innerHTML=("Flight to England ")
  document.getElementById("p3").innerHTML=("Flight back to Kaohsiung ")
  document.getElementById("p4").innerHTML=("")
  timerGarcia = setInterval(()=>{
    if(keyChoosing == "left"){
      London()
      clearInterval(timerGarcia);
    }else if(keyChoosing == "right"){
      kaohsiung()
      clearInterval(timerGarcia);
    }else{}
  },1)
}

function Baverstock(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Play again")
  document.getElementById("p1").innerHTML=("Mr. Garcia frowned suddenly. She looked severely disappointed in my Spanish skills. She took out a kitchen knife and before I knew it, my fingers got chopped by Ms. Garcia, and the world slowly faded away.")
  timerBaverstock = setInterval(()=>{
    if(keyChoosing == "left"){
      intro()
      clearInterval(timerBaverstock);
    }else if(keyChoosing == "right"){
      intro()
      clearInterval(timerBaverstock);
    }else{}
  },1)
}

function NorthKorea(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I just arrived in North Korea. I suddenly got arrested by the border control and sent to jail in North Korea, and there was no way I could escape from it. I was told that I would be locked up for 50 years.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Play again")
  timerNorthKorea = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerNorthKorea);
      intro()
    }else if(keyChoosing == "right"){
      clearInterval(timerNorthKorea);
      intro()
    }else{}
  },1)
}

function argentina(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I just arrived in Buenos Aires. I checked the upcoming flights in an hour. One went to Brazil and the other was a flight to Mexico. They were both leaving in an hour, so I had to be fast.")
  document.getElementById("p2").innerHTML=("To Mexico")
  document.getElementById("p3").innerHTML=("To Brazil")
  document.getElementById("p4").innerHTML=("")
  timerArgentina = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerArgentina);
      mexico()
    }else if(keyChoosing == "right"){
      clearInterval(timerArgentina);
      brazil()
    }else{}
  },1)
}

function mexico(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I decided to go to Mexico. Arriving in Mexico City, I realized no one there spoke English. A nice Mexican mom gave me a ticket to New York because she couldn't find her kids. Shortly after, a Mexican kid gave me a ticket to Los Angeles because he couldn't his mom.")
  document.getElementById("p2").innerHTML=("To Los Angeles")
  document.getElementById("p3").innerHTML=("To New York")
  document.getElementById("p4").innerHTML=("")
  timerMexico = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerMexico);
      LosAngeles()
    }else if(keyChoosing == "right"){
      clearInterval(timerMexico);
      NewYork()
    }else{}
  },1)
}

function brazil(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I just arrived at Sao Paulo International Airport. The climate there is hot and humid. I checked the upcoming flights in 3 hours. One went to the South Pole and the other was a flight to Guinea")
  document.getElementById("p2").innerHTML=("To South Pole")
  document.getElementById("p3").innerHTML=("To Guinea")
  document.getElementById("p4").innerHTML=("")
  timerBrazil = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerBrazil);
      SouthPole()
    }else if(keyChoosing == "right"){
      clearInterval(timerBrazil);
      Guinea()
    }else{}
  },1)
}

function NewYork(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("After a long flight, I arrived at the bustling city that was New York. I stayed for the night. The day after I went back to JFK airport and a stranger approached me. I realized a kid was next to her. It was the mother who I saw in Mexico yesterday. She thanked me for helping her reunite with her kids, and gave me a ticket to London.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("To London")
  timerNewYork = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerNewYork);
      London()
    }else if(keyChoosing == "right"){
      clearInterval(timerNewYork);
      London()
    }else{}
  },1)
}

function LosAngeles(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("On the flight to LA, I sensed something off. Flight attendants showed very subtle signs of panic. I heard ''hijacked'' being whispered around the plane. Then it dawned on me. I had to save the flight. I started towards to cockpit, and broke open the door. ")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Punch the Hijacker")
  timerLosAngeles = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerLosAngeles);
      Punch()
    }else if(keyChoosing == "right"){
      clearInterval(timerLosAngeles);
      Punch()
    }else{}
  },1)
}

function Punch(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I punched him as hard as I could, before I realized it was the kid I saw in the Airport in Mexico. His mom burst into the cockpit shouting Spanish words I couldn't understand. She yanked me away and took control of the plane.  She was nose-diving into the Grand Canyon. Seconds later, the world went black.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Play again")
  timerPunch = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerPunch);
      intro()
    }else if(keyChoosing == "right"){
      clearInterval(timerPunch);
      intro()
    }else{}
  },1)
}

function SouthPole(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I just arrived at South Pole airport. The climate there was extremely cold, I forgot the most important thing- warm clothes and equipment. I started shivering vehemently and then before I knew it, the world slowly faded away.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Play again")
  timerSouthPole = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerSouthPole);
      intro()
    }else if(keyChoosing == "right"){
      clearInterval(timerSouthPole);
      intro()
    }else{}
  },1)
}

function Guinea(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("Arriving at CKY airport, I intended to transfer to Morocco. As I went through the customs, a person bumped into me. She quickly apologized and introduced herself. ''Hello, my name is Natalie, I was wondering if you would take this plane ticket. It belongs to my friend but he's gone.'' The ticket was a flight to South Africa, departing in an hour.")
  document.getElementById("p2").innerHTML=("To Morocco")
  document.getElementById("p3").innerHTML=("To South Africa")
  document.getElementById("p4").innerHTML=("")
  timerGuinea = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerGuinea);
      Morocco()
    }else if(keyChoosing == "right"){
      clearInterval(timerGuinea);
      SouthAfrica()
    }else{}
  },1)
}

function Morocco(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I didn't trust the stranger, so I disposed of the ticket and continued my way to Morocco. After I arrived, I saw a person struggling with his luggage and decided to help him. He thanked me and introduced himself, his name was Harold. After that, he offered 2 tickets, one went to Spain and the other crossed out. He then disappeared suddenly.")
  document.getElementById("p2").innerHTML=("Mysterious Flight")
  document.getElementById("p3").innerHTML=("Spain")
  document.getElementById("p4").innerHTML=("")
  timerMorocco = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerMorocco);
      colombia()
    }else if(keyChoosing == "right"){
      clearInterval(timerMorocco);
      Spain()
    }else{}
  },1)
}

function Spain(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("The weather was stiflingly sunny in Spain. At a bus station, I saw Harold. I greeted him and he introduced me to his friend, Ian. Ian originally was planning to go back to London but decided to spend a few more days with Harold in Spain. After I told him my destination, he smiled warmly and spoke in a heavy British accent, ''Have this ticket to London.''")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("To London")
  timerSpain = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerSpain);
      London()
    }else if(keyChoosing == "right"){
      clearInterval(timerSpain);
      London()
    }else{}
  },1)
}

function HongKong(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("In Hong Kong, I met 2 people who also traveled around the world, and they both asked me to go with them. One was going to China and the other was heading to Thailand. I need to choose which one should go with.")
  document.getElementById("p2").innerHTML=("To China")
  document.getElementById("p3").innerHTML=("To Thailand")
  document.getElementById("p4").innerHTML=("")
  timerHongKong = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerHongKong);
      China()
    }else if(keyChoosing == "right"){
      clearInterval(timerHongKong);
      Thailand()
    }else{}
  },1)
}

function China(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("The man I went with was the bank robber, and police thought I was helping him rob a bank. I was arrested, and there was no way I could get out of jail. ")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Play again")
  timerChina = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerChina);
      intro()
    }else if(keyChoosing == "right"){
      clearInterval(timerChina);
      intro()
    }else{}
  },1)
}

function Thailand(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=(" I just arrived in Thailand, The Man I went with was a good guy, and he said was going to Afghanistan next. At the same time, I found the flight to Dubai. Should I go with the man or just go to Dubai?")
  document.getElementById("p2").innerHTML=("Afghanistan")
  document.getElementById("p3").innerHTML=("Dubai")
  document.getElementById("p4").innerHTML=("")
  timerThailand = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerThailand);
      Afghanistan()
    }else if(keyChoosing == "right"){
      clearInterval(timerThailand);
      Dubai()
    }else{}
  },1)
}

function Afghanistan(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("The flight to Afghanistan got hijacked, it turned over and started towards the US. I didn't know the flight got hijacked as I was playing a video game with the man. As I glanced out the window, I saw two tall structures. A few second later, the plane crashed into the World Trade Center. The day was September 11th, 2001.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Play again")
  timerAfghanistan = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerAfghanistan);
      intro()
    }else if(keyChoosing == "right"){
      clearInterval(timerAfghanistan);
      intro()
    }else{}
  },1)
}

function Dubai(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("I just arrived at Dubai International Airport, I saw that the costs here were absurdly high, and felt the need to leave soon. At the airport, the ticket seller told me there was a flight to London, but she encouraged me to go on a mysterious flight. ")
  document.getElementById("p2").innerHTML=("To London")
  document.getElementById("p3").innerHTML=("Mysterious flight")
  document.getElementById("p4").innerHTML=("")
  timerDubai = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerDubai);
      London()
    }else if(keyChoosing == "right"){
      clearInterval(timerDubai);
      colombia()
    }else{}
  },1)
}

function SouthAfrica(){
  keyChoosing = "none";
  document.getElementById("p1").innerHTML=("Arriving in South Africa, I immediately got knocked out by a group of people. In my lingering consciousness, I overheard “South Pole?�? and “Ian, we shouldn’t do this.�? One of the voices sounded oddly familiar. Was it Natalie’s? The other sounded British, but I couldn’t discern. Once I regained consciousness, I found myself sitting alone on another flight.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("Go to South Pole")
  timerSouthAfrica = setInterval(()=>{
    if(keyChoosing == "left"){
      clearInterval(timerSouthAfrica);
      SouthPole()
    }else if(keyChoosing == "right"){
      clearInterval(timerSouthAfrica);
      SouthPole()
    }else{}
  },1)
}

function London(){
  document.getElementById("p1").innerHTML=("I arrived in London, England. I reminisced about the journey while strolling down the street. The next day, I went to watch the Big London Derby. It was a memorable vacation, to say the least.")
  document.getElementById("p2").innerHTML=("")
  document.getElementById("p3").innerHTML=("")
  document.getElementById("p4").innerHTML=("")
  document.getElementById("img2").style.zIndex="1";
}