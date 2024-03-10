export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1213892717495722115/1216376735453548544/adsads.webp?ex=66002a1c&is=65edb51c&hm=0917b606f99919d299c0591ca41571a6b5766db21a0b1d8cf4cd0d367aafa4f1&",
      name: "CodeTR",
      description: "CodeTR discord platformunda bulunan topluluk yazılımım sunucusudur.",
      link: "https://discord.gg/JzqXrWFBjZ",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1213892717495722115/1216384961427538030/400626705_270071646018449_8590311698300496875_n.jpg?ex=660031c6&is=65edbcc6&hm=ad37880f56b400b48fe56a0358f2d85d7394d5b743c878ec4eca3c0225e74a87&",
      name: "Wojakapk",
      description: "Wojakapk instagram üzerinden yönettiğim bir hesaptır, aktif olarak 54k takipçisi bulunmaktadır.",
      link: "https://instagram.com/wojakapk",
    }
  ];
  res.status(200).json(data);
};
