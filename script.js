//Q1 https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    }
    display (){
        console.log(`${this.title},${this.studio},${this.rating}`)
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getgetPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
   let Movie1=new movie("Athadu","aaa")
   Movie1.display()
  let Movie2=new movie("Bahubhali","Arka media works","PG")
  let Movie3=new movie("Fidda","Sri Venkateswara Creations","PG")
  let Movie4=new movie("Bahubhali 2","Arka media works","PG")
  let film=new movie("Casino Royale","Eon Productions","PG13")
 film.display()
  let arr=[]
   arr.push(Movie1.movieobject())
   arr.push(Movie2.movieobject())
   arr.push(Movie3.movieobject())
   arr.push(Movie4.movieobject())
   console.log(arr)
//OUTPUT
//   Athadu,aaa,PG
//   Casino Royale,Eon Productions,PG13
//   [ { title: 'Athadu', studio: 'aaa', rating: 'PG' },
//   { title: 'Bahubhali', studio: 'Arka media works', rating: 'PG' },
//   { title: 'Fidda',studio: 'Sri Venkateswara Creations',rating: 'PG' },
//   { title: 'Bahubhali 2',studio: 'Arka media works',rating: 'PG' } ]

//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class Circle{
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2)
        return `"Area of circle is" ${area}`
    }
   getCircumference(){
       let circum=(2*3.14*this.getRadius()).toFixed(2)
       return `"Circumference of circle is" ${circum}`
   }
   display(){
       let str =  `[ radius : ${this.getRadius()} , color : ${this.getColor()}]`;
       return str;
   }
}
let circle1=new Circle();
let circle2=new Circle("red")
let circle3=new Circle("green",3)
circle1.setRadius(6)
circle1.setColor("white")
circle2.setRadius(9)
console.log(circle1.display())
console.log(circle2.display())
console.log(circle3.getArea())
console.log(circle3.getCircumference())
//OUTPUT
//  [ radius : 6 , color : white]
//  [ radius : 9 , color : red]
//   "Area of circle is" 28.26
//   "Circumference of circle is" 18.84


//3. Write a “person” class to hold all the details.
class Person{
    constructor(name,heigth,weigth,age,colour,qualification,city, state){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.colour=colour;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("vinoth","5.4","75","32","Asian","B.E","chennai","Tamilnadu")
Person1.details()
//OUTPUT
// name:vinoth
// height:5.4
// weight:75
// age:32
// color:Asian
// qualification:B.E
// city:chennai
// state:tamilnadu

//4) write a class to calculate uber price.

class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new Uber_Price(10);
  console.log(uber.getPrice());
  //OUTPUT
 // 200