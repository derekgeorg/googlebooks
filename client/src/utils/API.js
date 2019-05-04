import axios from "axios";

export default {
   getSavedBooks(){
       return axios.get("/api/books");
   } ,
   getBookById(bookId){
       return axios.get("/api/books/" + id);
   } ,
   saveBook(bookId){
       return axios.post("/api/books/" + id);
   } ,
   deleteBook(bookId){
       return axios.delete("api/books/" + id);
   } ,
   searchGoogleBooks(bookQuery){
       return axios.get("https://www.googleapis.com/books/v1/volumes", { params: {q: bookQuery }})
   }
}
