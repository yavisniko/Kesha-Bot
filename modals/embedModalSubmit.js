const { EmbedBuilder } = require("discord.js");
const { httpRegex } = require("./utils/httpRegex");

module.exports = {
  id: "myModal",
  run: async (_, interaction) => {
    if (!interaction.isModalSubmit()) return;

    const title = interaction.fields.getTextInputValue("title");
    const description = interaction.fields.getTextInputValue("description");
    const image = interaction.fields.getTextInputValue("image");

    const userColor = interaction.member.displayHexColor

    const modalEmbed = new EmbedBuilder()
      .setColor(userColor)
      .setTitle(title || null)
      .setDescription(description)
      .setImage(httpRegex(image))
      .setTimestamp()
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });

    await interaction.reply({ embeds: [modalEmbed] });
  },
};
