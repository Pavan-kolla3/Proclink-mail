/*const marks=[80,90,100];
for(let i=0;i<marks.length;i++)
    {
        console.log("index: ",i,"mark",marks[i]);
    }
    for(let idx in marks)
        {
            console.log("index: ",idx,"mark",marks[idx]);
        }
        for(let idx of marks)
            {
                console.log("mark",marks);
            }
            //task
            
           
            const cart = [
                { name: "Apple", price: 0.5, quantity: 4 },
                { name: "Banana", price: 0.25, quantity: 6 },
              ];
              const newItems = [
                { name: "Cherry", price: 0.75, quantity: 5 },
                { name: "Date", price: 1, quantity: 3 },
              ];
              
              //   Ex 1.1: Combine cart + newItems
              var s=0;
              for (let item of cart) {
                s+=item.price*item.quantity;

              }
              for (let item of newItems) {
                s+=item.price*item.quantity;

              }
              console.log(s);
              */
         /*     const books = [
                { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
                { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
                { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
                { title: "Sapiens", rating: 4.9, genre: "History" },
                { title: "Clean Code", rating: 4.7, genre: "Technology" },
              ];
var a=[];
for(let item of books)
    {
        if(item.rating>=4.7)
            {
                a.push(item.title);
            }
    }
    console.log(a);
   
    const employes = [
        { id: 1, name: "Alice", grade: 78 },
        { id: 2, name: "Bob", grade: 85 },
        { id: 3, name: "Charlie", grade: 92 },
        { id: 4, name: "David", grade: 88 },
        { id: 5, name: "Eva", grade: 76 },
      ];
      var a=[];
      for(let item of employes)
        {
            if(item.grade>80)
                {
                    //a.push(item.id);
                    d={};
                    d.id=item.id;
                    d.status="promoted";
                    a.push(d);
                    

                }
        }
       

        console.log(a);
        
        const movies = [
            { title: "Inception", ratings: [5, 4, 5, 4, 5] },
            { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
            { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
            { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
            { title: "Memento", ratings: [4, 5, 4, 5, 4] },
          ];
          var s=0,m=0;
          for(let i of movies)
            {
                e = 0
              var d=i.ratings;
              for(let j of d)
                {
                    e+=j;
                    
                }
                if(e>m)
                    {
                        m=e;
                        var k=i.title;
                    }
               // console.log(s)
              
           
            }
                console.log(k);
                
                // Task 5
// const movieUrl = (domain, genre, year) => {
//   return "http://" + domain + "?genere=" + genre + "&year=" + year;
// };

// console.log(movieUrl("imdb.com", "thriller", 2020));

const movieUrl=(domain,genre,year)=>{
  return `http://${domain}genere=${genre}&year= ${year}`;
};
*/const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

let total=0;
for(let i of allitems)
  {
    const {price,quantity}=i;
    total+=price*quantity;
  }
  console.log(total);

            
          

              
              
