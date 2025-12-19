// ===== IMAGE IMPORTS =====

// Golden Triangle
import goldenMain from "../assets/images/golden-triangle.jpg";
import golden1 from "../assets/images/golden1.jpg";
import golden2 from "../assets/images/golden2.jpg";
import golden3 from "../assets/images/golden3.jpg";

// Jaipur Pushkar
import jaipurMain from "../assets/images/jaipur-pushkar.jpg";
import jaipur1 from "../assets/images/jaipur1.jpg";
import jaipur2 from "../assets/images/jaipur2.jpg";
import jaipur3 from "../assets/images/jaipur3.jpg";

// Royal Rajasthan
import rajasthanMain from "../assets/images/royal-rajasthan.jpg";
import rajasthan1 from "../assets/images/rajasthan1.jpg";
import rajasthan2 from "../assets/images/rajasthan2.jpg";
import rajasthan3 from "../assets/images/rajasthan3.jpg";

// Leh Ladakh
import ladakhMain from "../assets/images/leh-ladakh.jpg";
import ladakh1 from "../assets/images/ladakh1.jpg";
import ladakh2 from "../assets/images/ladakh2.jpg";
import ladakh3 from "../assets/images/ladakh3.jpg";

// Delhi Agra
import delhiAgraMain from "../assets/images/delhi-agra.jpg";
import delhi1 from "../assets/images/delhi1.jpg";
import delhi2 from "../assets/images/delhi2.jpg";
import delhi3 from "../assets/images/delhi3.jpg";

// Diwali Tour
import diwaliMain from "../assets/images/diwali-tour.jpg";
import diwali1 from "../assets/images/diwali1.jpg";
import diwali2 from "../assets/images/diwali2.jpg";
import diwali3 from "../assets/images/diwali3.jpg";

// Holi Tour
import holiMain from "../assets/images/holi-tour.jpg";
import holi1 from "../assets/images/holi1.jpg";
import holi2 from "../assets/images/holi2.jpg";
import holi3 from "../assets/images/holi3.jpg";

// ===== TOURS DATA =====

const tours = [
  {
    id: "golden-triangle",
    titleKey: "toursData.goldenTriangle.title",
    descKey: "toursData.goldenTriangle.desc",
    image: goldenMain,
    durationKey: "toursData.goldenTriangle.duration",
    itinerary: [
      "goldenTriangle.day1",
      "goldenTriangle.day2",
      "goldenTriangle.day3",
      "goldenTriangle.day4",
      "goldenTriangle.day5",
    ],
    gallery: [golden1, golden2, golden3],
  },

  {
    id: "jaipur-pushkar",
    titleKey: "toursData.jaipurPushkar.title",
    descKey: "toursData.jaipurPushkar.desc",
    image: jaipurMain,
    durationKey: "toursData.jaipurPushkar.duration",
    itinerary: [
      "jaipurPushkar.day1",
      "jaipurPushkar.day2",
      "jaipurPushkar.day3",
      "jaipurPushkar.day4",
    ],
    gallery: [jaipur1, jaipur2, jaipur3],
  },

  {
    id: "royal-rajasthan",
    titleKey: "toursData.royalRajasthan.title",
    descKey: "toursData.royalRajasthan.desc",
    image: rajasthanMain,
    durationKey: "toursData.royalRajasthan.duration",
    itinerary: [
      "royalRajasthan.day1",
      "royalRajasthan.day2",
      "royalRajasthan.day3",
      "royalRajasthan.day4",
      "royalRajasthan.day5",
      "royalRajasthan.day6",
      "royalRajasthan.day7",
      "royalRajasthan.day8",
      "royalRajasthan.day9",
      "royalRajasthan.day10",
      "royalRajasthan.day11",
      "royalRajasthan.day12",
    ],
    gallery: [rajasthan1, rajasthan2, rajasthan3],
  },

  {
    id: "leh-ladakh",
    titleKey: "toursData.lehLadakh.title",
    descKey: "toursData.lehLadakh.desc",
    image: ladakhMain,
    durationKey: "toursData.lehLadakh.duration",
    itinerary: [
      "lehLadakh.day1",
      "lehLadakh.day2",
      "lehLadakh.day3",
      "lehLadakh.day4",
      "lehLadakh.day5",
    ],
    gallery: [ladakh1, ladakh2, ladakh3],
  },

  {
    id: "delhi-agra",
    titleKey: "toursData.delhiAgra.title",
    descKey: "toursData.delhiAgra.desc",
    image: delhiAgraMain,
    durationKey: "toursData.delhiAgra.duration",
    itinerary: ["delhiAgra.day1", "delhiAgra.day2", "delhiAgra.day3"],
    gallery: [delhi1, delhi2, delhi3],
  },

  {
    id: "diwali-cultural-tour",
    titleKey: "toursData.diwaliCultural.title",
    descKey: "toursData.diwaliCultural.desc",
    image: diwaliMain,
    durationKey: "toursData.diwaliCultural.duration",
    itinerary: [
      "diwaliCultural.day1",
      "diwaliCultural.day2",
      "diwaliCultural.day3",
    ],
    gallery: [diwali1, diwali2, diwali3],
  },

  {
    id: "holi-cultural-tour",
    titleKey: "toursData.holiCultural.title",
    descKey: "toursData.holiCultural.desc",
    image: holiMain,
    durationKey: "toursData.holiCultural.duration",
    itinerary: ["holiCultural.day1", "holiCultural.day2", "holiCultural.day3"],
    gallery: [holi1, holi2, holi3],
  },
];

export default tours;
