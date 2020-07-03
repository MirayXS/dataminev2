const { RichEmbed } = require("discord.js");

/**
 * Embed Constructor
 *
 * @param {Object} commit
 * @param {String} commit.title
 * @param {String} commit.description
 * @param {String} commit.url
 * @param {Object} commit.user
 * @param {String} commit.user.username
 * @param {String} commit.user.avatarURL
 * @param {String} commit.user.url
 * @returns {RichEmbed}
 */
module.exports = function ConstructEmbed(commit) {
  return new RichEmbed({
    title: commit.title,
    description: (commit.description.length > 2000)
      ? commit.description.substr(0, 2000) + "..."
      : commit.description,
    url: commit.url,
    author: {
      name: commit.user.username,
      icon_url: commit.user.avatarURL,
      url: commit.user.url,
    },
  }).setTimestamp();
};
