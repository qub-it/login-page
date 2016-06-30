import json
import pystache

templateReader = open("login-page-template.html", 'r')
contentReader =  open("login-page-content.json", 'r')
layoutWriter = open("login-page.html", 'w')

layoutTemplate = templateReader.read().decode('utf-8')
contentJson = json.load(contentReader)


layout = pystache.render(layoutTemplate, contentJson)
layoutUTF = layout.encode('utf-8')
layoutWriter.write(layoutUTF)

templateReader.close()
contentReader.close()
layoutWriter.close()