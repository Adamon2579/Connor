module.exports = (client) => {
  console.log('Bonjour Adamon !');
  console.log("Je m'appelle Connor !");
  console.log("Je viens traquer la déviance !");
  client.user.setActivity('traquer la déviance', { type: 'PLAYING' });
}
