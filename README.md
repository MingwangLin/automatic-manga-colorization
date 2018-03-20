
## Manga Colorization In Browser [Demo-Link](http://47.98.46.70)[Project-Page](https://zhuanlan.zhihu.com/p/34672860)

Ongoing web applications for automatic manga colorization with model totally run in browser. 

Built based on [keras.js demos](https://transcranial.github.io/keras-js), Use [Keras.js](https://github.com/transcranial/keras-js) to run Models in everyone's browser.

## Model Training

Model is trained with my keras implementation of [cycle-gan](https://github.com/MingwangLin/cyclegan-keras/blob/master/CycleGAN-keras.ipynb), it's based on [pytorch-CycleGan](https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix) (by junyanz) and [tf/torch/keras/lasagne](https://github.com/tjwei/GANotebooks) (by tjwei).

Trained model is converted to Keras.js model by [keras.js Model Conversion](https://transcranial.github.io/keras-js-docs/conversion/)

## Demo Limits

Due to some compatibility issues of keras,js, demo has problems when run in browsers of mobile devices. 

Latest Chrome desktop version or Firefox desktop version is recommended for best user experience.

