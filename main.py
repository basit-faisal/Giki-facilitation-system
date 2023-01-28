import eel

eel.init("web")

@eel.expose
def getdata():
    return "Got data from python"

eel.start("index.html")

