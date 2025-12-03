import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    current: "ar",
    destinations: {
      en: [
        {
          title: "Aswan 3 Days / 2 Nights",
          comment:
            "All transportation are air-conditioned, professional tour guides included.",
          program: {
            "Day 1": [
              "High Dam",
              "Unfinished Obelisk",
              "Philae Temple (by boat)",
            ],
            "Day 2": ["Abu Simple Temple", "Temple of Ramses II & Nefertari"],
            "Day 3": [
              "Visit Aswan Market & Nubian Village OR Transfer to Luxor via Kom Ombo & Edfu",
            ],
          },
        },
        {
          title: "Luxor 3 Days / 2 Nights",
          comment:
            "All transportation are air-conditioned, professional tour guides included.",
          program: {
            "Day 1": ["Karnak Temple", "Luxor Temple", "Avenue of Sphinxes"],
            "Day 2": [
              "Valley of the Kings",
              "Hatshepsut Temple",
              "Colossi of Memnon",
            ],
            "Day 3": [
              "Visit Luxor Market OR Transfer to Aswan via Kom Ombo & Edfu",
            ],
          },
        },
        {
          title: "Custom packages",
          comment:
            "All transportation are air-conditioned, professional tour guides included.",
          program: {
            "Aswan & Abu Simple": [
              "High Dam",
              "Unfinished Obelisk",
              "Philae Temple (by boat)",
            ],
            Luxor: [
              "Airport transportation",
              "Karnak Temple",
              "Luxor Temple",
              "Avenue of Sphinxes",
              "Valley of the Kings",
              "Hatshepsut Temple",
              "Colossi of Memnon",
            ],
          },
        },
      ],
      ar: [
        {
          title: "أسوان ٣ أيام / ليلتين",
          comment:
            "كل المواصلات المدعومة مكيفة و الرحلات مزودة بمرشدين سياحين محترفين",
          program: {
            "اليوم الأول": [
              "السد العالي",
              "المسلةالناقصة",
              "معبد فيلة بالمركب",
            ],
            "اليوم الثاني": ["معبد ابو سيمبل", "معبد رمسيس التاني و نفرتاري"],
            "اليوم الثالث": [
              "زيارة سوق أسوان والقرية النوبية أو الانتقال للأقصر عبر كوم أمبو وإدفو",
            ],
          },
        },
        {
          title: "الأقصر ٣ أيام / ليلتين",
          comment:
            "كل المواصلات المدعومة مكيفة و الرحلات مزودة بمرشدين سياحين محترفين",
          program: {
            "Day 1": [" معبد الكرنك", "معبد الاقصر", "طريق الكباش"],
            "Day 2": ["وادي الملوك", "معبد حتشبسوت", "تمثالي ممنون"],
            "Day 3": ["زيارة سوق الأقصر أو الانتقال لأسوان عبر كوم أمبو وإدفو"],
          },
        },
        {
          title: "باقات مخصصة",
          comment:
            "كل المواصلات المدعومة مكيفة و الرحلات مزودة بمرشدين سياحين محترفين",
          program: {
            "اسوان و ابو سمبل": [
              "استقبال من المطار",
              "السد العالي",
              "المسلةالناقصة",
              "معبد فيلة بالمركب",
              "معبد ابو سيمبل",
              "معبد رمسيس التاني ",
              "معبد نفرتاري",
              "سوق اسوان",
            ],
            Luxor: [
              "استقبال من المطار",
              "معبد الكرنك",
              "معبد الأقصر",
              "طريق الكباش",
              "وادي الملوك",
              "معبد حتشبسوت",
              "تمثالي ممنون",
            ],
          },
        },
      ],
    },
  }),

  actions: {
    toggleLang() {
      this.current = this.current === "en" ? "ar" : "en";
    },
  },
});
