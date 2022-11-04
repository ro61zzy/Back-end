//creating classes in ES6

class Consultant {
  name = ''

  setName(name) {
    this.name = name
  }
  sayHello() {
    console.log(this.name)
  }
}
myConsultant = new Consultant()
myConsultant.setName('Christian')
myConsultant.sayHello()
