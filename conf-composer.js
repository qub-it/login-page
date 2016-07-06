var fs = require('fs');
var readlineSync = require('readline-sync');

var jsonStr = fs.readFileSync('conf/login-page-content.json', 'utf8');
var conf = JSON.parse(jsonStr);

var titleDefault = conf.login.title;
var title = readlineSync.question('Título da página' + (titleDefault ? ' (' + titleDefault + '): ' : ': '));
console.log('');
if (title) {
	conf.login.title = title;
}

var faviconDefault = conf.login.favicon;
var favicon = readlineSync.question('URL para o favicon' + (faviconDefault ? ' (' + faviconDefault + '): ' : ': '));
console.log('');
if (favicon) {
	conf.login.favicon = favicon;
}

var backgrounds = [];
var background = readlineSync.question('URL para uma imagem de fundo: ');
if (background) {
	backgrounds.push({'url': background});
	while (background) {
		background = readlineSync.question('URL para outra imagem de fundo: ');
		if (background) {
			backgrounds.push({'url': background});
		}
	}
	conf.login.background = backgrounds;
}
console.log('');

var orgNameDefault = conf.login.organization.name;
var orgName = readlineSync.question('Nome da escola/org' + (orgNameDefault ? ' (' + orgNameDefault + '): ' : ': '));
console.log('');
if (orgName) {
	conf.login.organization.name = orgName;
}

var orgLogoDefault = conf.login.organization.logo;
var orgLogo = readlineSync.question('URL do logo' + (orgLogoDefault ? ' (' + orgLogoDefault + '): ' : ': '));
console.log('');
if (orgLogo) {
	conf.login.organization.logo = orgLogo;
}

var passRecoveryDefault = conf.login.passwordRecoveryUrl;
var passRecovery = readlineSync.question('URL para recuperação de password' + (passRecoveryDefault ? ' (' + passRecoveryDefault + '): ' : ': '));
console.log('');
if (passRecovery) {
	conf.login.passwordRecoveryUrl = passRecovery;
}

var authenticatorDefault = conf.login.authenticationUrl;
var authenticator = readlineSync.question('URL para serviço de autenticação' + (authenticatorDefault ? ' (' + authenticatorDefault + '): ' : ': '));
console.log('');
if (passRecovery) {
	conf.login.authenticationUrl = authenticator;
}

var facebookUrlDefault = conf.login.facebookUrl;
var facebookUrl = readlineSync.question('URL para autenticação com Facebook' + (facebookUrlDefault ? ' (' + facebookUrlDefault + '): ' : ': '));
console.log('');
if (facebookUrl) {
	conf.login.facebookUrl = facebookUrl;
}

var googleplusUrlDefault = conf.login.googleplusUrl;
var googleplusUrl = readlineSync.question('URL para autenticação com Gogole+' + (googleplusUrlDefault ? ' (' + googleplusUrlDefault + '): ' : ': '));
console.log('');
if (googleplusUrl) {
	conf.login.googleplusUrl = googleplusUrl;
}

var citizencardUrlDefault = conf.login.citizencardUrl;
var citizencardUrl = readlineSync.question('URL para autenticação com CC' + (citizencardUrlDefault ? ' (' + citizencardUrlDefault + '): ' : ': '));
console.log('');
if (citizencardUrl) {
	conf.login.citizencardUrl = citizencardUrl;
}

var helpUrlDefault = conf.login.helpUrl;
var helpUrl = readlineSync.question('URL para ajuda/suporte' + (helpUrlDefault ? ' (' + helpUrlDefault + '): ' : ': '));
console.log('');
if (helpUrl) {
	conf.login.helpUrl = helpUrl;
}

var contextPathDefault = conf.login.contextPath;
var contextPath = readlineSync.question('URI para estes recursos estáticos' + (contextPathDefault ? ' (' + contextPathDefault + '): ' : ': '));
console.log('');
if (contextPath) {
	conf.login.contextPath = contextPath;
}

var entrypointUrlDefault = conf.login.entrypointUrl;
var entrypointUrl = readlineSync.question('URL para redirect pós-autenticação' + (entrypointUrlDefault ? ' (' + entrypointUrlDefault + '): ' : ': '));
console.log('');
if (entrypointUrl) {
	conf.login.entrypointUrl = entrypointUrl;
}

var primaryColorDefault = conf.theme.primaryColor;
var primaryColor = readlineSync.question('Tema: Cor predominante [hex|rgb|rgba]' + (primaryColorDefault ? ' (' + primaryColorDefault + '): ' : ': '));
console.log('');
if (primaryColor) {
	conf.theme.primaryColor = primaryColor;
}

jsonStr = JSON.stringify(conf);
fs.writeFileSync("build/login-page-content.json", jsonStr, 'utf8');