#### CNN

Convolutional Neural Network

#### Feature Map

In a [CNN](#CNN) a feature map is the resulting tensor we get by applying our convolution on an input.

---

![Convolution_schematic](https://ujjwalkarn.me/wp-content/uploads/2016/07/convolution_schematic.gif?w=268&h=196)

*Feature map obtained after applying a convolution. Feature map is here denoted as “Convolved Feature” ([Source](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/))*

---

#### Logits

These are the raw outputs values of a neural network before applying the final activation function. For instace, we usually use a softmax function to map the outputs of our model to class probabilities. The raw values that go into the softmax function (which can be positive or negative and are not normalized to $[0,1]$ ) are the logits.

---

![Temperature scaling - AWS Prescriptive Guidance](https://docs.aws.amazon.com/images/prescriptive-guidance/latest/ml-quantifying-uncertainty/images/temperature-scaling.png)

*Illustration of the relationship between logit values and final prediction scores when using softmax ([Source](https://docs.aws.amazon.com/images/prescriptive-guidance/latest/ml-quantifying-uncertainty/images/temperature-scaling.png))*

---

#### XAI

Explainable AI