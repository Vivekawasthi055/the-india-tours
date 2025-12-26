// ===== IMAGE IMPORTS FROM CLODINARY =====

const tours = [
  {
    id: "golden-triangle",
    titleKey: "toursData.goldenTriangle.title",
    descKey: "toursData.goldenTriangle.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744498/golden-triangle_edpozg.jpg",
    durationKey: "toursData.goldenTriangle.duration",
    itinerary: [
      "goldenTriangle.day1",
      "goldenTriangle.day2",
      "goldenTriangle.day3",
      "goldenTriangle.day4",
      "goldenTriangle.day5",
    ],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744488/golden1_ejvbmm.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744491/golden2_ktwcau.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744495/golden3_uaeadp.jpg",
    ],
  },

  {
    id: "jaipur-pushkar",
    titleKey: "toursData.jaipurPushkar.title",
    descKey: "toursData.jaipurPushkar.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744600/jaipur-pushkar_ovnu1w.jpg",
    durationKey: "toursData.jaipurPushkar.duration",
    itinerary: [
      "jaipurPushkar.day1",
      "jaipurPushkar.day2",
      "jaipurPushkar.day3",
      "jaipurPushkar.day4",
    ],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744587/jaipur1_jda59b.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744593/jaipur2_rdm9b6.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744594/jaipur3_qj2e6c.jpg",
    ],
  },

  {
    id: "royal-rajasthan",
    titleKey: "toursData.royalRajasthan.title",
    descKey: "toursData.royalRajasthan.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744933/royal-rajasthan_n9rb5y.jpg",
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
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744919/rajasthan1_s4sclu.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744927/rajasthan2_cc5grj.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744923/rajasthan3_v9rxvg.jpg",
    ],
  },

  {
    id: "leh-ladakh",
    titleKey: "toursData.lehLadakh.title",
    descKey: "toursData.lehLadakh.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745487/leh-ladakh_svpfvp.jpg",
    durationKey: "toursData.lehLadakh.duration",
    itinerary: [
      "lehLadakh.day1",
      "lehLadakh.day2",
      "lehLadakh.day3",
      "lehLadakh.day4",
      "lehLadakh.day5",
    ],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745477/ladakh1_aan9in.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745481/ladakh2_jjtawb.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745483/ladakh3_qinwyp.jpg",
    ],
  },

  {
    id: "delhi-agra",
    titleKey: "toursData.delhiAgra.title",
    descKey: "toursData.delhiAgra.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745649/delhi-agra_osn8fa.jpg",
    durationKey: "toursData.delhiAgra.duration",
    itinerary: ["delhiAgra.day1", "delhiAgra.day2", "delhiAgra.day3"],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745633/delhi1_ctzu57.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745637/delhi2_wtbgvo.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745645/delhi3_hcsltr.jpg",
    ],
  },

  {
    id: "diwali-cultural-tour",
    titleKey: "toursData.diwaliCultural.title",
    descKey: "toursData.diwaliCultural.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745932/diwali-tour_dlbw9x.jpg",
    durationKey: "toursData.diwaliCultural.duration",
    itinerary: [
      "diwaliCultural.day1",
      "diwaliCultural.day2",
      "diwaliCultural.day3",
    ],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745917/diwali1_lefx0l.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745920/diwali2_zcdteg.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766745928/diwali3_lusekp.jpg",
    ],
  },

  {
    id: "holi-cultural-tour",
    titleKey: "toursData.holiCultural.title",
    descKey: "toursData.holiCultural.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746126/holi-tour_p2wli7.jpg",
    durationKey: "toursData.holiCultural.duration",
    itinerary: ["holiCultural.day1", "holiCultural.day2", "holiCultural.day3"],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746113/holi1_fxst7n.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746116/holi2_cpl1jd.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746123/holi3_mwmgeh.jpg",
    ],
  },
  {
    id: "royal-indian-wedding-experience",
    titleKey: "toursData.royalWedding.title",
    descKey: "toursData.royalWedding.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746163/royal-wedding_ofsgbp.jpg",
    durationKey: "toursData.royalWedding.duration",
    itinerary: [
      "royalWedding.day1",
      "royalWedding.day2",
      "royalWedding.day3",
      "royalWedding.day4",
      "royalWedding.day5",
      "royalWedding.day6",
      "royalWedding.day7",
    ],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746170/wedding1_gykmre.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746176/wedding2_leygqg.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746176/wedding3_zaawjd.jpg",
    ],
  },
  {
    id: "incredible-india-7-days",
    titleKey: "toursData.incredibleIndia.title",
    descKey: "toursData.incredibleIndia.desc",
    image:
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746230/incredible-india_kv1ylq.jpg",
    durationKey: "toursData.incredibleIndia.duration",
    itinerary: [
      "incredibleIndia.day1",
      "incredibleIndia.day2",
      "incredibleIndia.day3",
      "incredibleIndia.day4",
      "incredibleIndia.day5",
      "incredibleIndia.day6",
      "incredibleIndia.day7",
    ],
    gallery: [
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746214/incredible1_tyvllv.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746221/incredible2_ozpmbb.jpg",
      "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746225/incredible3_iehith.jpg",
    ],
  },
];

export default tours;
