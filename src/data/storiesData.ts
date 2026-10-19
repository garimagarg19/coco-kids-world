export interface StoryChapter {
  chapterNumber: number;
  chapterTitle: string;
  emoji: string;
  paragraphs: string[];
}

export interface StoryItem {
  id: string;
  title: string;
  tag: string;
  moralTag: string;
  category: 'bedtime' | 'adventure' | 'friendship' | 'learning';
  characters: string;
  characterBadges: { name: string; icon: string; color: string }[];
  readTime: string;
  ageGroup: string;
  coverEmoji: string;
  bg: string;
  border: string;
  textColor: string;
  accentColor: string;
  excerpt: string;
  storytellerTip: string;
  chapters: StoryChapter[];
  moralLesson: {
    title: string;
    description: string;
    quote: string;
  };
  relatedVideoId?: string;
  relatedVideoTitle?: string;
}

export const ALL_STORIES: StoryItem[] = [
  {
    id: 'bobo-magic-garden',
    title: 'Bobo and the Magic Garden 🥕🌈',
    tag: 'Moral: Sharing Brings Joy',
    moralTag: 'Sharing & Kindness',
    category: 'friendship',
    characters: '🐰 Bobo the Bunny & 🐦 Little Birds',
    characterBadges: [
      { name: 'Bobo', icon: '🐰', color: '#EC4899' },
      { name: 'Pip', icon: '🐦', color: '#3B82F6' },
      { name: 'Sunny', icon: '🐥', color: '#EAB308' },
    ],
    readTime: '4 mins',
    ageGroup: 'Ages 2-6',
    coverEmoji: '🥕',
    bg: '#FFF1F2',
    border: '#FECDD3',
    textColor: '#BE123C',
    accentColor: '#F43F5E',
    excerpt:
      'When Bobo the little white bunny discovers a giant glowing rainbow carrot, he learns that happiness multiplies when shared with hungry friends.',
    storytellerTip: 'Make gentle hopping sounds "Hop! Hop! Hop!" whenever Bobo scurries through the garden.',
    relatedVideoId: 'TRAwfd-gLek',
    relatedVideoTitle: 'Bobo and the Magic Garden (Official 3D Cartoon)',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'A Golden Morning in Rainbow Meadow',
        emoji: '☀️',
        paragraphs: [
          'The morning sun was waking up with a warm golden yawn. Dewdrops on the clover leaves glittered like tiny diamonds, and a gentle breeze tickled the tips of Bobo’s long white fluffy ears.',
          'Bobo hopped out of his cozy burrows with a merry "Hop, hop, hop!" Today felt special. The air smelled of sweet strawberries and fresh honey.',
          'As he scampered past the blooming daisy patches, he noticed something peculiar near the old garden gate. A bright, orange glow was shining right beneath a bed of sparkly green moss!',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'The Discovery of the Giant Carrot',
        emoji: '🥕',
        paragraphs: [
          'Bobo rubbed his big curious eyes. He took one cautious hop... two hops... three big leaps! "Gasp!" whispered Bobo.',
          'Poking out of the soft crumbly soil was the largest, most magnificent carrot anyone had ever seen in Rainbow Meadow! Its skin shone like polished coral, and tiny golden sparkles danced around its leafy green crown.',
          'Bobo tugged with all his might. "Heave... ho! Heave... ho!" Pop! Out slipped the giant magical carrot with a soft musical chime.',
          '"My goodness!" cried Bobo. "I could eat this sweet carrot for breakfast, lunch, and dinner for a whole entire year! It is all mine!"',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'A Rustle in the Berry Bush',
        emoji: '🐦',
        paragraphs: [
          'Just as Bobo was about to take his first crunchy bite, he heard a faint little "Chirp... chirp... chirp." Two tiny bluebird fledglings sat shivering on a low blackberry branch. Their tummies made funny gurgling sounds.',
          '"Are you hungry, little friends?" asked Bobo gently.',
          '"We have flown from across Cloud Mountain," chirped Pip softly. "We cannot find any berries left on the bushes, and our wings feel very tired."',
          'Bobo looked down at his enormous golden carrot. Then he looked at the hungry little bird faces. His heart gave a warm, fluttering squeeze. "A treat enjoyed alone only fills your tummy, but a treat shared fills your heart," Bobo remembered his mother’s comforting words.',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'The Rainbow Feast',
        emoji: '🌈',
        paragraphs: [
          'Bobo snapped the giant carrot into generous crunchy slices with a satisfying *SNAP!*',
          '"Here! Take the sweetest top slice!" Bobo beamed, handing big pieces to Pip and Sunny. Then he called across the meadow: "Ellie! Momo! Leo! Come have a morning feast!"',
          'And then, something truly magical happened. As each friend took a bite, the carrot sparkles leaped into the air and painted a glowing rainbow right above their picnic blanket! Everyone laughed, danced, and sang joyful melodies together.',
          'Bobo smiled happily with carrot crumbs on his whiskers. It was the sweetest meal he had ever tasted in his life.',
        ],
      },
    ],
    moralLesson: {
      title: 'Sharing Multiplies Happiness',
      description:
        'When we hold on to good things only for ourselves, we miss the joy of celebration. Sharing what we have with kindness brings friends closer and fills the world with smiles.',
      quote: '"Happiness is the only thing that doubles when you share it with others." ✨',
    },
  },
  {
    id: 'leo-jungle-birthday',
    title: 'Leo’s Jungle Birthday Party 🦁🎂🎈',
    tag: 'Moral: Celebrating True Friends',
    moralTag: 'Gratitude & Friendship',
    category: 'adventure',
    characters: '🦁 Leo the Lion, 🐘 Ellie & 🐵 Momo',
    characterBadges: [
      { name: 'Leo', icon: '🦁', color: '#F59E0B' },
      { name: 'Ellie', icon: '🐘', color: '#06B6D4' },
      { name: 'Momo', icon: '🐵', color: '#10B981' },
    ],
    readTime: '5 mins',
    ageGroup: 'Ages 2-7',
    coverEmoji: '🎂',
    bg: '#FEF3C7',
    border: '#FDE68A',
    textColor: '#B45309',
    accentColor: '#F59E0B',
    excerpt:
      'Leo the brave lion cub thought his friends had forgotten his birthday, only to discover the biggest, most colorful jungle surprise party waiting under the giant banana trees!',
    storytellerTip: 'Do a friendly lion roar "Rooaaar!" but make it sweet and gentle for the little ones.',
    relatedVideoId: 'hphRsKs9pdI',
    relatedVideoTitle: 'Leo’s Jungle Birthday Party (Official 3D Cartoon)',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'Where Did Everyone Go?',
        emoji: '🌴',
        paragraphs: [
          'Today was the most anticipated day of the year for Leo the lion cub. It was his fifth jungle birthday! He woke up bright and early, brushed his fluffy golden mane, and smiled at his reflection in the crystal river.',
          '"Good morning, jungle!" yelled Leo happily. "Today is my birthday party day!"',
          'He skipped down to the banana grove to meet his best buddy Momo the monkey. But Momo was nowhere to be found. Next, Leo trotted over to the waterfall to splash with Ellie the baby elephant. The pool was empty except for two floating water lilies.',
          'Leo’s tail drooped. "Did my friends forget my birthday?" he whispered with a tiny sigh.',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'Footprints of Many Colors',
        emoji: '🐾',
        paragraphs: [
          'Just then, a funny flutter of yellow, pink, and blue confetti floated down from a tall palm tree. Leo looked down and gasped.',
          'There were funny round footprints on the muddy trail! Little monkey handprints, round elephant stomps, and bright orange flower petals leading toward the Whispering Banyan Grove.',
          '"Curious..." whispered Leo, following the colorful trail step by step. "Tip-toe, tip-toe through the ferns!"',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'SURPRISE!',
        emoji: '🎈',
        paragraphs: [
          'Leo pushed aside the giant emerald palm leaves. The clearing was completely quiet for three heartbeats.',
          'Suddenly: "SURPRISE! HAPPY BIRTHDAY, LEO!"',
          'Dozens of pastel balloons floated up into the canopy! Ellie blew a celebratory trumpet through her trunk: "Tooooot!" Momo swung down on a vine with a glowing crown of starfruit, and Bobo carried a towering three-tier jungle strawberry cake!',
          'Leo’s eyes twinkled with joyful tears. "You didn’t forget! You were planning this whole surprise for me!"',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'The Joyful Jungle Dance',
        emoji: '🎉',
        paragraphs: [
          'Ellie gently lifted Leo onto her back so he could blow out the shimmering honey candles in one big, happy puff: "Whooooosh!"',
          'Everyone cheered and clapped their paws. Momo put on a hilarious gymnastics show, doing three backflips and landing right in a pile of soft leaf pillows.',
          'Leo hugged all his friends warmly. "The best birthday gift in the entire universe isn’t toys or cake," said Leo with a full heart. "It is having friends who care for you so much."',
        ],
      },
    ],
    moralLesson: {
      title: 'Friends Are Our Greatest Gift',
      description:
        'Sometimes when friends seem quiet, they are working together behind the scenes to show how much they appreciate you. Gratitude and love make every celebration magical.',
      quote: '"The greatest treasure in the jungle is a circle of caring friends." 🦁💛',
    },
  },
  {
    id: 'amazing-zoo-adventure',
    title: 'Mia & Leo’s Amazing Zoo Adventure 🦁🐘🦒',
    tag: 'Moral: Love & Respect for Animals',
    moralTag: 'Nature & Wonder',
    category: 'adventure',
    characters: '👧 Mia, 🦁 Leo & Friendly Wildlife',
    characterBadges: [
      { name: 'Mia', icon: '👧', color: '#8B5CF6' },
      { name: 'Leo', icon: '🦁', color: '#F59E0B' },
      { name: 'Snowy', icon: '🐆', color: '#06B6D4' },
    ],
    readTime: '6 mins',
    ageGroup: 'Ages 2-7',
    coverEmoji: '🦒',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    textColor: '#047857',
    accentColor: '#10B981',
    excerpt:
      'Grab your safari binoculars! Mia and Leo visit the magical Wildlife Sanctuary, meeting tall giraffes, playful pandas, and a rare, gentle snow leopard.',
    storytellerTip: 'Stretch your neck super high like a giraffe when reaching for the imaginary treetops!',
    relatedVideoId: 'DOatByWh654',
    relatedVideoTitle: 'Amazing Zoo Adventure (Official 3D Cartoon)',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'Entering the Wildlife Sanctuary',
        emoji: '🎟️',
        paragraphs: [
          'The big wooden gates of the Sunshine Wildlife Sanctuary opened with a cheerful welcome melody. Mia adjusted her explorer hat and checked her map.',
          '"Look, Leo!" Mia cheered. "Today we are visiting the tallest, the cuddliest, and the rarest animals in the whole sanctuary!"',
          'Their first stop was Giraffe Valley. Standing tall against the blue clouds was Gerry the Giraffe, with a neck so long it could touch the highest tree blossoms. Gerry gave a gentle nod and gracefully munched on sweet acacia leaves.',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'The Bamboo Playground of the Pandas',
        emoji: '🐼',
        paragraphs: [
          'Next, a soft crunching sound led them down to a misty garden filled with green bamboo shoots. Two round baby pandas were rolling down a grassy hill like furry bowling balls: "Roly-poly, roly-poly, plop!"',
          'Leo giggled. "They look like giant fluffy marshmallows doing somersaults!"',
          'Mia made notes in her little explorer journal: *Pandas love eating crunchy bamboo and taking cozy naps in the shade.*',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'The Mountain of the Snow Leopard',
        emoji: '❄️',
        paragraphs: [
          'As the afternoon turned cool and breezy, Mia and Leo walked up the winding cobblestone path to the Snowy Peak exhibit.',
          'Behind a curtain of soft mist, resting peacefully upon a smooth grey boulder, was the magnificent Snow Leopard. Her fur was thick and patterned with soft silver rosettes, and her long fluffy tail wrapped gently around her paws.',
          '"She is so calm and majestic," whispered Mia in awe. The snow leopard opened her warm turquoise eyes, blinked softly at Mia and Leo, and gave a gentle rumble of greeting.',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'Every Creature Has a Home',
        emoji: '🌿',
        paragraphs: [
          'Sitting on a bench eating fruit snacks, Mia and Leo watched the evening sunset tint the sanctuary in shades of peach and lavender.',
          '"Animals teach us how wonderful our planet is," Mia said thoughtfully. "Whether tall like a giraffe or quiet like a snow leopard, every single creature deserves kindness and a safe place to live."',
          'Leo agreed with a proud swish of his tail. It was the most exciting safari expedition ever!',
        ],
      },
    ],
    moralLesson: {
      title: 'Caring for All Living Creatures',
      description:
        'Animals have feelings, families, and special homes. Observing them with gentle respect teaches us to protect nature and treat every creature with kindness.',
      quote: '"When we protect animals, we protect the wonder of the world." 🌿🐾',
    },
  },
  {
    id: 'magical-train-colors',
    title: 'The Magical Train of Rainbow Colors 🚂🌈',
    tag: 'Moral: The Wonder of Learning',
    moralTag: 'Learning & Curiosity',
    category: 'learning',
    characters: '🚂 Choo-Choo Charlie & Little Passengers',
    characterBadges: [
      { name: 'Charlie', icon: '🚂', color: '#EF4444' },
      { name: 'Mia', icon: '👧', color: '#8B5CF6' },
      { name: 'Pip', icon: '🐦', color: '#3B82F6' },
    ],
    readTime: '4 mins',
    ageGroup: 'Ages 1-5',
    coverEmoji: '🚂',
    bg: '#E0F2FE',
    border: '#BAE6FD',
    textColor: '#0369A1',
    accentColor: '#0284C7',
    excerpt:
      'All aboard the Choo-Choo train! Travel across 5 magical rainbow stations where colors, yummy fruits, and counting from 1 to 5 come alive in song.',
    storytellerTip: 'Make rhythmic train chugging sounds: "Chugga-chugga, chugga-chugga, Choo Choo!"',
    relatedVideoId: 'p52j3TbfUxA',
    relatedVideoTitle: 'Magical Train Adventure for Kids (Official 3D Cartoon)',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'Station Red & Apple Orchards',
        emoji: '🍎',
        paragraphs: [
          '"All aboard! The Rainbow Express is departing on Track Number One!" whistled Charlie the magical steam engine with a cheerful *CHOO CHOO!*',
          'The train puffed fluffy marshmallow smoke as its rainbow wheels spun smoothly on the glittery silver tracks.',
          'The first stop was Station Red! Outside the window, giant ruby-red apples hung from sweet-smelling trees. "One, two, three red apples!" counted the passengers, waving their colorful scarves in the breeze.',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'Station Yellow & The Banana Grove',
        emoji: '🍌',
        paragraphs: [
          '"Chugga-chugga, chugga-chugga, whoosh!" Through the sunny tunnel they went, arriving at Station Yellow.',
          'The sun was smiling in the sky, and warm buttercups carpeted the ground. A friendly baby giraffe leaned over the platform railing and happily received a bouquet of yellow bananas.',
          '"Yellow like the sun! Yellow like the buttercups!" sang the children.',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'Station Green & The Berry Forest',
        emoji: '🍉',
        paragraphs: [
          'Next was Station Green, nestled deep in the emerald pine hills. Big juicy green watermelons with shiny striped coats sat by the wooden platform benches.',
          'Momo the monkey leaped onto the station roof, balancing a green pear on his head and giggling. "Four shiny green leaves, and five green watermelons!"',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'The Rainbow Bridge Finale',
        emoji: '🌈',
        paragraphs: [
          'Finally, Charlie the train soared up into the sky onto a bridge made entirely of pure rainbow light: Red, Orange, Yellow, Green, Blue, Indigo, and Violet!',
          'The passengers clapped their hands and counted together: "1, 2, 3, 4, 5! Learning our colors is the happiest ride!"',
          'As the train gently slid into the evening cloud station, every child had learned all their rainbow colors with a joyful song in their heart.',
        ],
      },
    ],
    moralLesson: {
      title: 'Learning is an Exciting Adventure',
      description:
        'Colors, numbers, and words are all around us in nature. When we look at everyday things with curiosity, learning becomes as fun as a magical ride.',
      quote: '"Keep your eyes open to colors, and you will always see the rainbow." 🚂🌈',
    },
  },
  {
    id: 'whispering-star-mount-candy',
    title: 'The Whispering Star of Mount Candy ⭐🍬',
    tag: 'Moral: Helping Someone in Need',
    moralTag: 'Compassion & Courage',
    category: 'adventure',
    characters: '🐰 Coco the Bunny & 🐻 Bella the Bear',
    characterBadges: [
      { name: 'Coco', icon: '🐰', color: '#EC4899' },
      { name: 'Bella', icon: '🐻', color: '#8B5CF6' },
      { name: 'Twinkle', icon: '⭐', color: '#EAB308' },
    ],
    readTime: '6 mins',
    ageGroup: 'Ages 3-7',
    coverEmoji: '⭐',
    bg: '#FFF1F2',
    border: '#FECDD3',
    textColor: '#BE123C',
    accentColor: '#EC4899',
    excerpt:
      'High atop the marshmallow peak of Mount Candy, a tiny fallen baby star was lost. Coco and Bella pack warm berry tea and hike up to guide the star safely back into the night sky.',
    storytellerTip: 'Whisper softly when Twinkle speaks to give the baby star a gentle, sweet personality.',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'A Glow on the Mountain',
        emoji: '🏔️',
        paragraphs: [
          'Mount Candy was made of pastel spun sugar and soft marshmallow snow. Usually, its peaks glowed soft lilac in the twilight, but tonight, a tiny trembling yellow light was flickering near the snowy summit.',
          'Coco peered through Bella’s star telescope. "Bella, look! That isn’t an ordinary candle. It’s a tiny fallen star, and it looks frightened!"',
          'Bella tied her woolen honey-colored scarf tightly around her neck. "We cannot leave a little star in the cold. Put on your snow boots, Coco. We are climbing Mount Candy!"',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'The Licorice Path',
        emoji: '🥾',
        paragraphs: [
          'The trail wound through sparkling gumdrop hills and sugar-frosted pine trees. The marshmallow snow felt warm and bouncy beneath their boots: "Boing! Boing! Boing!"',
          'When they reached the steep Licorice Bridge, a frosty wind blew Coco’s woolly hat away! Bella reached out her warm furry paw and held Coco steady.',
          '"Step by step, friend," Bella said warmly. "When we walk together, no mountain is too steep."',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'Meeting Baby Star Twinkle',
        emoji: '✨',
        paragraphs: [
          'At the very top of the peak, shivering inside a cup of candy blossom petals, was Twinkle. He was no bigger than a teacup, and his golden tips were dim and cold.',
          '"I tried to do a shooting star loop-de-loop," sniffled Twinkle, "and I tumbled right down into the clouds. Now I am too cold to shine my way back home."',
          'Coco quickly uncorked the thermos and poured a steaming cup of warm raspberry blossom tea. Bella gently wrapped Twinkle in a soft fleece blanket.',
          'As Twinkle took tiny sips, warmth surged through his little star body. His edges began to glow vibrant gold, humming with happy stardust!',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'Back Home Among the Constellations',
        emoji: '🌌',
        paragraphs: [
          '"Hold on to our umbrella!" cheered Coco. Bella and Coco swung the big striped umbrella back and forth, catapulting Twinkle into the cool night breeze: "One, two, three... UP YOU GO!"',
          'Twinkle zipped into the dark velvet sky like a golden firework, leaving a trail of shimmering sparkles. He settled right into his cozy spot next to Mama Moon.',
          'From high above, Twinkle blinked down three times: *Thank-you-friends!*',
          'Coco and Bella waved back happily, walking home under the brightest sky they had ever seen.',
        ],
      },
    ],
    moralLesson: {
      title: 'Kindness Guides the Way',
      description:
        'When someone feels small, lost, or scared, taking the time to help them with warmth and patience gives them the strength to shine once more.',
      quote: '"Even the smallest act of kindness can light up the entire night sky." ⭐💖',
    },
  },
  {
    id: 'amusement-park-surprise',
    title: 'Fun Adventure at the Amusement Park 🎡🛍️',
    tag: 'Moral: Patience & Waiting Your Turn',
    moralTag: 'Patience & Sharing',
    category: 'adventure',
    characters: '👧 Mia, 🦁 Leo & 🐰 Bobo',
    characterBadges: [
      { name: 'Mia', icon: '👧', color: '#8B5CF6' },
      { name: 'Leo', icon: '🦁', color: '#F59E0B' },
      { name: 'Bobo', icon: '🐰', color: '#EC4899' },
    ],
    readTime: '5 mins',
    ageGroup: 'Ages 2-6',
    coverEmoji: '🎡',
    bg: '#FDF4FF',
    border: '#F0ABFC',
    textColor: '#A21CAF',
    accentColor: '#D946EF',
    excerpt:
      'The carnival carousel is spinning! Mia and Leo visit the magical amusement park, learning that patience in line makes the Ferris wheel ride ten times sweeter.',
    storytellerTip: 'Whistle the carnival calliope tune: "La-la-la-la, spin around!"',
    relatedVideoId: 'Js_QYpK-G1s',
    relatedVideoTitle: 'Fun Adventure at the Amusement Park (Official 3D Cartoon)',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'The Sparkling Ferris Wheel',
        emoji: '🎠',
        paragraphs: [
          'Carnival music echoed through the colorful park gates. Big striped circus tents fluttered with candy flags, and the smell of warm buttered popcorn filled the air.',
          '"Look at the Big Wheel!" yelled Leo, jumping up and down on his paws. "It goes so high it touches the marshmallow clouds!"',
          'Mia and Bobo dashed along the colorful brick path. Everyone wanted to ride the grand musical carousel and visit the toy shops!',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'The Queue of Little Friends',
        emoji: '🎟️',
        paragraphs: [
          'When they arrived at the Giant Carousel, there was already a line of little ducklings, baby bunnies, and twin squirrels waiting for their turn.',
          'Leo tapped his paw impatiently. "Aw, why do we have to wait? I want to jump on the golden carousel lion right this second!"',
          'Mia patted Leo’s shoulder kindly. "Think about how we would feel if someone pushed past us when we were waiting. Waiting our turn is how we show respect to all our friends. While we wait, we can play the Alphabet Rhyme Game!"',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'The Whimsical Ride',
        emoji: '🎪',
        paragraphs: [
          'Playing the fun rhyming game made the time fly like a soaring balloon. Soon, the conductor with his big curly mustache called out: "Next friendly riders, please step aboard!"',
          'Leo hopped onto the majestic golden carousel horse, Mia chose the purple unicorn with a glittery mane, and Bobo settled cozy in a swan carriage.',
          'The carousel began to turn smoothly to the tune of sweet bell chimes. Around and around they went, feeling the fresh wind in their hair and waving at the crowd below!',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'The Popcorn Share',
        emoji: '🍿',
        paragraphs: [
          'After the ride, Leo bought a big bucket of sweet honey-drizzled popcorn. Instead of eating it all, he offered the bucket to the ducklings waiting next in line.',
          '"Thank you for waiting so nicely!" smiled Leo. The ducklings quacked with joy.',
          'Leo whispered to Mia: "You were right, Mia. Being patient wasn’t hard at all, and it made the ride feel extra special!"',
        ],
      },
    ],
    moralLesson: {
      title: 'Patience Makes Every Moment Sweeter',
      description:
        'Waiting our turn is a sign of good manners and consideration for others. Good things come to those who wait with a cheerful attitude.',
      quote: '"Patience is showing love and respect to everyone around you." 🎡🎠',
    },
  },
  {
    id: 'little-elephant-umbrella',
    title: 'The Little Elephant & The Tiny Umbrella 🐘☔',
    tag: 'Moral: A Big Heart Needs No Giant Size',
    moralTag: 'Empathy & Care',
    category: 'friendship',
    characters: '🐘 Ellie the Elephant & 🐞 Tiny Ladybug',
    characterBadges: [
      { name: 'Ellie', icon: '🐘', color: '#06B6D4' },
      { name: 'Lulu', icon: '🐞', color: '#EF4444' },
      { name: 'Pip', icon: '🐦', color: '#3B82F6' },
    ],
    readTime: '4 mins',
    ageGroup: 'Ages 1-5',
    coverEmoji: '☔',
    bg: '#CFFAFE',
    border: '#A5F3FC',
    textColor: '#0E7490',
    accentColor: '#06B6D4',
    excerpt:
      'When gentle rain showers fall on Rainbow Meadow, Ellie the baby elephant uses her umbrella not to keep herself dry, but to shield tiny woodland insects.',
    storytellerTip: 'Tap your fingers on the table to make pitter-patter raindrop sounds: "Pitter-patter, drip-drop!"',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'A Sudden Warm Cloud',
        emoji: '🌧️',
        paragraphs: [
          'The sky over Rainbow Meadow began to hum with a soft, peaceful grey light. "Pitter-patter, pitter-patter, drip-drop!" fell the first gentle drops of warm spring rain.',
          'Ellie the baby elephant loved rainy days! She twirled her bright yellow polka-dot umbrella with her trunk and stamped happily in the puddle: "Splish! Splash!"',
          'Her big floppy ears enjoyed the rhythm of the raindrops drumming on the umbrella canopy like little drums.',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'Trouble on a Daisy Leaf',
        emoji: '🌸',
        paragraphs: [
          'As Ellie stepped past a tall pink daisy, she saw a tiny speck of red clinging desperately underneath a bending petal. It was Lulu the little ladybug!',
          'To an elephant, a raindrop is just a refreshing tickle. But to a tiny ladybug, a single heavy raindrop is like a giant water bucket falling from the clouds!',
          '"Help!" squeaked Lulu. "The raindrops are washing my spots away, and my wings are too wet to fly!"',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'The Elephant Shelter',
        emoji: '☂️',
        paragraphs: [
          'Without hesitating for even a second, Ellie leaned down and gently angled her big yellow umbrella directly over Lulu’s daisy leaf.',
          'Then, seeing three little ants and a bumblebee trying to hide under a mushroom, Ellie invited them all under her canopy.',
          'Ellie didn’t mind that the rain was getting her own grey back wet. Her heart was glowing with warmth.',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'The Rainbow Sunbeam',
        emoji: '☀️',
        paragraphs: [
          'Soon, the clouds drifted away like cotton candy pulled apart by friendly wind. Golden sunshine broke through, making all the rain puddles shimmer like mirrors.',
          'Lulu’s wings dried in the warm sun. She fluttered up and landed right on the tip of Ellie’s trunk, giving it a tiny, tickly kiss.',
          '"Thank you, Ellie! You may be the biggest animal in the meadow, but your kindness is even bigger!"',
          'Ellie trumpet-giggled happily: "Toooo-tooot!"',
        ],
      },
    ],
    moralLesson: {
      title: 'Use Your Strength to Protect Others',
      description:
        'Being big or strong is a wonderful gift when we use it to shelter and protect those who are smaller or need a helping hand.',
      quote: '"No one is too big to be gentle, and no one is too small to be a hero." 🐘❤️',
    },
  },
  {
    id: 'lost-red-ball',
    title: 'The Mystery of the Lost Red Ball ⚽🐱',
    tag: 'Moral: Teamwork Never Fails',
    moralTag: 'Teamwork & Perseverance',
    category: 'adventure',
    characters: '🐱 Cleo the Kitten & 🐶 Barnaby the Pup',
    characterBadges: [
      { name: 'Cleo', icon: '🐱', color: '#F97316' },
      { name: 'Barnaby', icon: '🐶', color: '#84CC16' },
      { name: 'Pip', icon: '🐦', color: '#3B82F6' },
    ],
    readTime: '5 mins',
    ageGroup: 'Ages 2-6',
    coverEmoji: '⚽',
    bg: '#FFEDD5',
    border: '#FED7AA',
    textColor: '#C2410C',
    accentColor: '#EA580C',
    excerpt:
      'Cleo’s favorite sparkly red bouncy ball rolled deep into the whispering hedge maze! With the help of Barnaby the puppy and Pip the bird, they crack the clues together.',
    storytellerTip: 'Make bouncing ball sounds: "Boing! Boing! Boing!" as you read through the hedge maze.',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'The Super High Bounce',
        emoji: '🔴',
        paragraphs: [
          'Cleo the kitten was the champion bouncer of Willow Creek. She had a sparkly red rubber ball that could bounce higher than a garden fence!',
          '"Watch this, Barnaby!" meowed Cleo, flicking the ball with her velvet paw. *BOING!* The ball bounced off a rock, tapped against a garden lantern, and sailed high into the air.',
          'Uh-oh! It didn’t land on the lawn. It went straight into the twisting green tunnels of the Whispering Hedge Maze: *Rustle, rustle, thud!*',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'Inside the Green Maze',
        emoji: '🌿',
        paragraphs: [
          'Cleo poked her little pink nose into the dark leafy entrance. "It’s so confusing inside! What if I get lost and can’t find my favorite toy?"',
          'Barnaby the beagle wagged his floppy tail encouragingly. "You won’t be alone, Cleo! My nose can sniff out rubber balls anywhere, and my paws are ready to march!"',
          'Pip the wonder birdie swooped down and perched on a branch. "And I have wings! I can fly up high and scout out the path from the sky!"',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'Follow the Birdie’s Chirp',
        emoji: '🐦',
        paragraphs: [
          'Pip fluttered high above the tall emerald hedges. "Turn left at the purple honeysuckle bush!" called Pip from the sky.',
          'Barnaby followed the scent: "Sniff, sniff, sniff! I smell rubber and peppermint grass!"',
          'They turned around one corner, ducked under a low leafy archway, and found themselves in the central courtyard of the maze.',
          'There it was! Resting right in the mossy hollow of an old hollow log, shining brightly in a ray of sunlight: Cleo’s red ball!',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'One Ball, Three Friends',
        emoji: '🎉',
        paragraphs: [
          'Cleo pounced on the ball with a triumphant purr: "We found it! We actually found it!"',
          'Barnaby barked happily: "Woof! We did it together! Pip guided from the sky, I used my nose on the ground, and you had the courage to enter the maze!"',
          'Instead of playing by herself, Cleo rolled the ball to Barnaby, who tapped it to Pip, who nudged it back to Cleo. They played until the evening stars came out, happy and united.',
        ],
      },
    ],
    moralLesson: {
      title: 'Together, Everyone Achieves More',
      description:
        'When a problem seems too big or tricky for one person, joining hands and combining our different talents makes impossible tasks easy and fun.',
      quote: '"Many paws and wings make light work and big smiles." ⚽🐾',
    },
  },
  {
    id: 'bedtime-starry-willow',
    title: 'Bedtime Under the Starry Willow 🌙✨',
    tag: 'Calming Bedtime Fairy Tale',
    moralTag: 'Peace & Sweet Dreams',
    category: 'bedtime',
    characters: '🐻 Bella the Honey Bear & Forest Friends',
    characterBadges: [
      { name: 'Bella', icon: '🐻', color: '#8B5CF6' },
      { name: 'Moon', icon: '🌙', color: '#FDE047' },
      { name: 'Firefly', icon: '✨', color: '#4ADE80' },
    ],
    readTime: '6 mins',
    ageGroup: 'All Ages (Bedtime)',
    coverEmoji: '🌙',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    textColor: '#6D28D9',
    accentColor: '#7C3AED',
    excerpt:
      'A gentle, soothing bedtime story where Mama Moon sings a soft lullaby, fireflies light tiny lanterns, and all forest creatures drift into peaceful dreams.',
    storytellerTip: 'Lower your voice gradually as the story progresses into a quiet, warm, soothing lullaby whisper.',
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: 'The Evening Shadows Fall',
        emoji: '🌆',
        paragraphs: [
          'The bright golden sun was slowly sinking below the lavender hills, pulling a blanket of velvet blue over the treetops.',
          'The noisy daylight was drifting to sleep. The birds ceased their lively chatter, tucking their heads beneath soft feathered wings. The flowers in the meadow slowly folded their petals into tiny sleeping buds.',
          'Under the great grandmother Willow Tree, Bella the Honey Bear was preparing her cozy nest of dried moss and lavender leaves.',
        ],
      },
      {
        chapterNumber: 2,
        chapterTitle: 'The Lanterns of the Fireflies',
        emoji: '🏮',
        paragraphs: [
          'Deep in the willow branches, tiny emerald lights began to blink: on... and off... on... and off.',
          'The friendly fireflies were waking up to light their bedtime lanterns. They didn’t flash brightly; they glowed with a warm, steady, gentle pulse, like a heartbeat.',
          '"Rest your paws, little bear," whispered the evening breeze as it rustled the willow leaves like a soft lullaby: *Hush-a-bye, hush-a-bye.*',
        ],
      },
      {
        chapterNumber: 3,
        chapterTitle: 'Mama Moon’s Silver Lullaby',
        emoji: '🎶',
        paragraphs: [
          'High in the sky, Mama Moon cast a silver stream of soft light across the quiet forest pond. Water lilies gently rocked in the water, safe and warm.',
          'Baby bunnies nestled close together in their burrow, listening to the soft murmur of the stream.',
          'Leo the lion gave one last, deep, sleepy yawn: "Yaaaawn..." and rested his chin upon his paws. His eyes felt delightfully heavy, filled with sweet dreams of tomorrow’s adventures.',
        ],
      },
      {
        chapterNumber: 4,
        chapterTitle: 'Into the Land of Sweet Dreams',
        emoji: '💤',
        paragraphs: [
          'Bella pulled her warm star-quilt all the way up to her chin. She breathed in the soothing scent of lavender and honey: a deep breath in... and a gentle, relaxed breath out.',
          'All was peaceful. All was safe. The stars twinkled their silent guardians’ watch over every boy and girl, every kitten and puppy, every little dreamer.',
          '"Goodnight, gentle trees. Goodnight, playful birds. Goodnight, magical world," whispered Bella.',
          'And with a smile upon her face, she drifted into the sweetest, happiest dreams. Goodnight, little explorer... sleep tight. ✨',
        ],
      },
    ],
    moralLesson: {
      title: 'Rest Fills Tomorrow with Magic',
      description:
        'A good night’s sleep restores our energy, calms our minds, and prepares our hearts for a brand new day full of wonder and play.',
      quote: '"Close your eyes in peace, for tomorrow holds brand new sunshine." 🌙💤',
    },
  },
];

export const getStoryById = (id: string): StoryItem | undefined => {
  return ALL_STORIES.find((s) => s.id === id);
};
