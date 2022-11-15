import os
from PIL import Image, ImageFilter
d,dbl='events',"events_blur"
def resize(file):
    image = Image.open(d+'/'+file)
    image = image.convert('RGBA')
    image = image.resize((image.size[0]//15,image.size[1]//15),Image.ANTIALIAS)
    image = image.filter(ImageFilter.GaussianBlur(radius = 5))
    image.save(dbl+'/'+file,optimize=True,quality=95)


files = os.listdir(d)
for f in files:
    if os.path.isfile(d+'/'+f):
        resize(f)
