const all_books = [
    {
        id: "#1236",
        book_name: "Becoming",
        author: "Michelle Obama",
        category: "Biography",
        isbn: "1580569381264",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8PYyhNwHioqoXnGc2aUEOxHjiou2nSoT4B7zk0T81KEYKuVg_",
        language: "English",
        price: "100,00",
        description: "Autobiography ...."
    },
    {
        id: "#1235",
        book_name: "HAPPY PLACE",
        author: "Emily Henry",
        category: "Romance",
        isbn: "1580569381284",
        image: "https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg",
        language: "English",
        price: "50,00",
        description: "Happy Place"
    },
    {
        id: "#1234",
        book_name: "IT ENDS WITH US",
        author: "Colleen Hoover",
        category: "Romance",
        isbn: "1580569381245",
        image: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
        language: "English",
        price: "60,00",
        description: "Lorem Ipsum"
    },
    {
        id: "#1233",
        book_name: "SPARE",
        author: "Prince Harry",
        category: "Biography",
        isbn: "1580569381638",
        image: "https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg",
        language: "English",
        price: "50,00",
        description: "Biohrpahy"
    },
    {
        id: "#1232",
        book_name: "The Da Vinci Code",
        author: "Dan Brown",
        category: "Crime, Thriller, Adventure",
        isbn: "1580569381276",
        image: "hhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuQdFS2wDCS9I3i2eOBfF42N1yoQwiZPlP43CjTqTTofmYRox-",
        language: "English",
        price: "50,00",
        description: "Paid"
    },
    {
        id: "#1231",
        book_name: "The Light We Carry",
        author: "Michelle Obama",
        category: "Biography",
        isbn: "1580569381123",
        image: "https://booklist.usatoday.com/covers/isbn/9780593237465.jpg",
        language: "English",
        price: "50,00",
        description: "The Light We Carry"
    },
    {
        id: "#1230",
        book_name: "Verity",
        author: "Colleen Hoover",
        category: "Fiction",
        isbn: "1580569381253",
        image: "https://booklist.usatoday.com/covers/isbn/9781791392796.jpg",
        language: "English",
        price: "50,00",
        description: "Verity"
    },
    {
        id: "#1229",
        book_name: "Ugly Love",
        author: "Colleen Hoover",
        category: "Fiction",
        isbn: "1580569381789",
        image: "https://images-na.ssl-images-amazon.com/images/I/51SUqssIb2L._SL300.jpg",
        language: "English",
        price: "50,00",
        description: "Ugly Love"
    },
    {
        id: "#1228",
        book_name: "Where the Crawdads Sing",
        author: "Delia Owens",
        category: "Fiction",
        isbn: "1580569381496",
        image: "https://images-na.ssl-images-amazon.com/images/I/51-uh7zesTL._SL300.jpg",
        language: "English",
        price: "50,00",
        description: "Where the Crawdads Sing"
    },
    {
        id: "#1227",
        book_name: "Reminders of Him",
        author: "Colleen Hoover",
        category: "Romance",
        isbn: "1580569381364",
        image: "https://booklist.usatoday.com/covers/isbn/9781542025607.jpg",
        language: "English",
        price: "50,00",
        description: "Colleen Hoover"
    },
    {
        id: "#1226",
        book_name: "Fairy Tale",
        author: "Stephen King",
        category: "Fiction",
        isbn: "1580569381264332",
        image: "https://booklist.usatoday.com/covers/isbn/9781668002179.jpg",
        language: "English",
        price: "50,00",
        description: "Paid"
    },
    {
        id: "#1225",
        book_name: "How the Grinch Stole Christmas!",
        author: "Dr. Seuss",
        category: "Children",
        isbn: "1580569381255",
        image: "https://images-na.ssl-images-amazon.com/images/I/512PxXsTebL.jpg",
        language: "English",
        price: "50,00",
        description: "Dr. Seuss  "
    },
    
    {
        id: "#1223",
        book_name: "HAPPY PLACE",
        author: "Emily Henry",
        category: "Romance",
        isbn: "1580569381284",
        image: "https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg",
        language: "English",
        price: "50,00",
        description: "Happy Place"
    },{
        id: "#1224",
        book_name: "Becoming",
        author: "Michelle Obama",
        category: "Biography",
        isbn: "1580569381264",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8PYyhNwHioqoXnGc2aUEOxHjiou2nSoT4B7zk0T81KEYKuVg_",
        language: "English",
        price: "100,00",
        description: "Autobiography ...."
    },
    {
        id: "#1222",
        book_name: "IT ENDS WITH US",
        author: "Colleen Hoover",
        category: "Romance",
        isbn: "1580569381245",
        image: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
        language: "English",
        price: "60,00",
        description: "Lorem Ipsum"
    },
    {
        id: "#1221",
        book_name: "SPARE",
        author: "Prince Harry",
        category: "Biography",
        isbn: "1580569381638",
        image: "https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg",
        language: "English",
        price: "50,00",
        description: "Biohrpahy"
    },
    {
        id: "#1220",
        book_name: "The Da Vinci Code",
        author: "Dan Brown",
        category: "Crime, Thriller, Adventure",
        isbn: "1580569381276",
        image: "hhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuQdFS2wDCS9I3i2eOBfF42N1yoQwiZPlP43CjTqTTofmYRox-",
        language: "English",
        price: "50,00",
        description: "Paid"
    },
    {
        id: "#1219",
        book_name: "The Light We Carry",
        author: "Michelle Obama",
        category: "Biography",
        isbn: "1580569381123",
        image: "https://booklist.usatoday.com/covers/isbn/9780593237465.jpg",
        language: "English",
        price: "50,00",
        description: "The Light We Carry"
    },
    {
        id: "#1218",
        book_name: "Verity",
        author: "Colleen Hoover",
        category: "Fiction",
        isbn: "1580569381253",
        image: "https://booklist.usatoday.com/covers/isbn/9781791392796.jpg",
        language: "English",
        price: "50,00",
        description: "Verity"
    },
    {
        id: "#1217",
        book_name: "Ugly Love",
        author: "Colleen Hoover",
        category: "Fiction",
        isbn: "1580569381789",
        image: "https://images-na.ssl-images-amazon.com/images/I/51SUqssIb2L._SL300.jpg",
        language: "English",
        price: "50,00",
        description: "Ugly Love"
    },
    {
        id: "#1216",
        book_name: "Where the Crawdads Sing",
        author: "Delia Owens",
        category: "Fiction",
        isbn: "1580569381496",
        image: "https://images-na.ssl-images-amazon.com/images/I/51-uh7zesTL._SL300.jpg",
        language: "English",
        price: "50,00",
        description: "Where the Crawdads Sing"
    },
    {
        id: "#1215",
        book_name: "Reminders of Him",
        author: "Colleen Hoover",
        category: "Romance",
        isbn: "1580569381364",
        image: "https://booklist.usatoday.com/covers/isbn/9781542025607.jpg",
        language: "English",
        price: "50,00",
        description: "Colleen Hoover"
    },
    {
        id: "#1214",
        book_name: "Fairy Tale",
        author: "Stephen King",
        category: "Fiction",
        isbn: "1580569381264332",
        image: "https://booklist.usatoday.com/covers/isbn/9781668002179.jpg",
        language: "English",
        price: "50,00",
        description: "Paid"
    },
    {
        id: "#1213",
        book_name: "How the Grinch Stole Christmas!",
        author: "Dr. Seuss",
        category: "Children",
        isbn: "1580569381255",
        image: "https://images-na.ssl-images-amazon.com/images/I/512PxXsTebL.jpg",
        language: "English",
        price: "50,00",
        description: "Dr. Seuss  "
    }
]

export default all_books;