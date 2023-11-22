export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1056959846936748166/1109407852445044856/png_20230520_120953_0000.png?ex=656af493&is=65587f93&hm=40ad15bcf8e77edfff17671cb1ed891def5e5927f76be06e509edfe4301d8750&",
      name: "CodeTR",
      description: "CodeTR discord platformunda bulunan topluluk yazılımım sunucusudur.",
      link: "https://discord.gg/JzqXrWFBjZ",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1120773551255978106/1176965296427384914/wojakk1-min.jpg?ex=6570c959&is=655e5459&hm=0a221a58e7d33b2bba300300aa817498461e12323f4dd77a93b2c57059ec9297&.",
      name: "Wojakapk",
      description: "Wojakapk instagram üzerinden yönettiğim bir hesaptır, aktif olarak 54k takipçisi bulunmaktadır.",
      link: "https://instagram.com/wojakapk",
    }
  ];
  res.status(200).json(data);
};
