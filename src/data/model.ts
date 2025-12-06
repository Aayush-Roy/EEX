export interface ModelItem {
  id: string;
  name: string;
  thumbnail: string;
  glb: string;
  description: string;
}

export const models: ModelItem[] = [
  {
    id: "bagan",
    name: "Bagan Temple",
    thumbnail: "https://c.stocksy.com/a/G5C600/z9/1476422.jpg",
    glb: "https://github.com/Aayush-Roy/EEX/releases/download/v1/bagan_temple_aerial_scan.glb",
    description:
      "The Bagan temple complex represents one of the largest concentrations of Buddhist temples in the world. Built between the 11th and 13th centuries, its pagodas and stupas reflect the artistic richness and spiritual depth of early Southeast Asian architecture. This model captures the layered terraces, pointed spires, and graceful symmetry that make Bagan an iconic ancient city."
  },
  {
    id: "angkor",
    name: "Angkor Wat",
    thumbnail: "https://blog.novatr.com/hubfs/Temple%20Architecture%20in%20India.webp",
    glb: "https://github.com/Aayush-Roy/EEX/releases/download/v1/hindu_temple.glb",
    description:
      "Angkor Wat stands as one of the grandest religious monuments ever constructed. Originally dedicated to Vishnu, it blends Hindu cosmology with Khmer architectural innovation. The towering lotus-shaped spires, detailed carvings, and massive stone enclosures reflect the cultural and spiritual legacy of the Khmer Empire. This 3D model showcases its timeless harmony and monumental scale."
  },
  {
    id: "hindu",
    name: "Hindu Temple",
    thumbnail: "https://static.wixstatic.com/media/537d91_14cd3a934957447f9d594c0ff514bf48~mv2.png/v1/fill/w_1000,h_805,al_c,q_90,usm_0.66_1.00_0.01/537d91_14cd3a934957447f9d594c0ff514bf48~mv2.png",
    glb: "https://github.com/Aayush-Roy/EEX/releases/download/v1/uthirakosamangai_temple_india.glb",
    description:
      "This traditional Hindu temple model represents the Dravidian and Nagara influences found across India. Intricate stone carvings, rising shikharas, symmetrical mandapas, and sacred inner sanctums form the core of its architecture. The temple embodies spiritual symbolism, ritual pathways, and the ancient principles of Vastu Shastra, celebrating centuries of Indian craftsmanship."
  },
  {
    id: "borobudur",
    name: "Borobudur Temple",
    thumbnail: "https://europe.factsanddetails.com/archives/001/202409/large-9f4de01bd36b1646.jpg",
    glb: "https://github.com/Aayush-Roy/EEX/releases/download/v1/temple_of_hephaestus__athens.glb",
    description:
      "Borobudur, located in Indonesia, is one of the world’s greatest Buddhist monuments. Built in the 9th century, it features nine stacked platforms adorned with hundreds of Buddha statues and more than 2,500 relief panels. Designed as a spiritual journey from the earthly realm to enlightenment, the monument blends architecture, philosophy, and astronomy in a remarkable unity."
  },
  {
    id: "meiji",
    name: "Third Century Roman Temple",
    thumbnail: "https://englandsnortheast.co.uk/ne/wp-content/uploads/2021/08/Carrawburgh-Temple-Mithras.jpg",
    glb: "https://github.com/Aayush-Roy/EEX/releases/download/v1/third_century_roman_temple.glb",
    description:
      "The Meiji Shrine in Tokyo is a peaceful Shinto complex dedicated to Emperor Meiji and Empress Shōken. Its architecture emphasizes simplicity, sacred harmony, and deep connection with nature. Surrounded by dense forest, the shrine’s torii gates, courtyards, and wooden structures reflect spiritual purity and traditional Japanese aesthetics."
  },
 
];
