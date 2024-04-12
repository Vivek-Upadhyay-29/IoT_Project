class YBCard {

    constructor(id, title, description, image) {
      this.idCard = id
      this.titre = title
      this.description = description
      this.image = image
    }
  
    initCard() {
      this.updateDom();
      this.activateListeners();
    }
  
    updateDom() {
      var cardDom = document.getElementById(this.idCard)
      if(cardDom.hasChildNodes()){
        var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
        cardDomImage.src = this.image;
  
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        cardDomTitle.innerHTML = this.titre;
  
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        cardDomDesc.innerHTML = this.description;
      }
    }
  
    activateListeners() {
      var cardDom = document.getElementById(this.idCard)
      cardDom.addEventListener("mouseover", function( event ) {
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
        cardDomMiddle.style.height = cardMiddleHeight + 15 + "px";
      }, false);
  
      cardDom.addEventListener("mouseout", function( event ) {
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        cardDomMiddle.style.height = 50 + "px";
      }, false);
    }
  }
  
  var card1 = new YBCard("card1", "Arduino Uno", "The Arduino Uno is a popular microcontroller board based on the ATmega328P chip. </br></br> It features digital and analog input/output pins that can be programmed to interact with various sensors, actuators, and other electronic components. </br></br> The Uno board also includes a USB connection for programming and power supply, making it easy to connect to a computer for code uploading and debugging. It's widely used in prototyping, hobby projects, and educational settings due to its simplicity and versatility.", src="./images/ardino-Img.png")
  card1.initCard();
  
  var card2 = new YBCard("card2", "PIR Motion Sensor", "A motion sensor is a device that detects movement within its field of view, commonly used in security systems, automatic lighting, and home automation. It works by detecting changes in infrared radiation or sound waves caused by moving objects. </br></br>Range - 3 ~ 7m</br></br>Operating Voltage - 4.5 ~ 20V",  src="images/sonic.png");
  card2.initCard();

  var card3 = new YBCard("card3", "GSM Module", "A GSM module is a hardware device that enables communication between electronic devices and the cellular network.</br></br> It allows devices to send and receive data, make voice calls, and send SMS messages over the cellular network, making it useful for applications such as remote monitoring, vehicle tracking, and IoT projects requiring cellular connectivity.</br></br> Operating Voltage - 3.4 ~ 4.4V ",src="images/gsm-modoule.png");
  card3.initCard();
  
  var card4 = new YBCard("card4", "Step Down Converter  ", " A step-down converter reduces a higher input voltage to a lower output voltage while maintaining consistent power. Commonly used in electronics,<br/><br/>  it can convert a 12V input to a 5V output, ensuring efficient operation and safety in battery-powered devices.", src="./images/converter.png");
  card4.initCard();
  
  var card5 = new YBCard("card5", "Rechargeable Batteries", "Rechargeable batteries are energy storage devices that can be recharged and reused multiple times. They are commonly used in electronics and come in various sizes, such as AA and AAA, providing a sustainable power source for devices like smartphones and laptops.", src="./images/batteries.png" );
  card5.initCard();
  
  var card6 = new YBCard("card6", "Jumper Cables  ", "Jumper cables are short, insulated wires with male connectors at both ends, used to connect various components on an Arduino Uno board. <br/><br/>They facilitate the connection of sensors, modules, and other electronic components, allowing for flexible and easy prototyping", src="./images/cabels.png");
  card6.initCard();
  