import axios from "axios";

export default {
   getSavedBooks(){
       return axios.get("/api/books");
   } ,
   getBookById(id){
       return axios.get("/api/books/" + id);
   } ,
   saveBook(id){
       return axios.post("/api/books/" + id);
   } ,
   deleteBook(id){
       return axios.delete("api/books/" + id);
   } ,
   searchGoogleBooks(bookQuery){
       return axios.get("https://www.googleapis.com/books/v1/volumes", { params: {q: bookQuery }})
   }
}
