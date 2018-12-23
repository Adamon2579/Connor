exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 0xc32aed,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: `Bonsoir ${client.users.get(message.author).username} ! Je m'appelle Connor !`,
    //pour mettre un lien dans le titre
    //url: "http://google.com",
    description: "Voici la liste des commandes que je connais :",
    fields: [{
      name: "help",
      value: "Une explication de cette commande n'est pas réellement nécéssaire. Si ?"
    },
    {
      name: "Ping",
      value: "Pong !"
    },
    {
      name: "Calc",
      value: "Et oui je fais aussi calculatrice !"
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Connor v1.0"
    }
  }});
}
