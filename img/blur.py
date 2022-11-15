import os
from PIL import Image, ImageFilter
d,dbl=os.path.join(os.getcwd(),'events'),os.path.join(os.getcwd(),"events_blur")
r=15
def resize(file):
    image = Image.open(os.path.join(d,file))
    print(image.size)
    image = image.convert('RGBA')
    image = image.resize((image.size[0]//r,image.size[1]//15),Image.ANTIALIAS)
    image = image.filter(ImageFilter.GaussianBlur(radius = 5))
    image.save(os.path.join(dbl,file),optimize=True,quality=95)


files = os.listdir(d)
for f in files:
    if os.path.isfile(os.path.join(d,f)):
        resize(f)
