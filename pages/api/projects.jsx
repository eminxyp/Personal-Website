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
      image: "https://instagram.fszf2-1.fna.fbcdn.net/v/t51.2885-19/400626705_270071646018449_8590311698300496875_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fszf2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=F3-8cKoUtG4AX9aHPNW&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBIiqyhae3MGLg8jQKOeiZOZNmrrRFg5ioWrJBwHIKwWQ&oe=6563FCE6&_nc_sid=8b3546",
      name: "Wojakapk",
      description: "Wojakapk instagram üzerinden yönettiğim bir hesaptır aktif olarak 54k takipçisi bulunmaktadır.",
      link: "https://instagram.com/wojakapk",
    }
  ];
  res.status(200).json(data);
};
