const getStoredProperties=()=>{
    const storedProperties=localStorage.getItem('Properties');
    if(storedProperties){
        return JSON.parse(storedProperties)
    }
    else{
   return []
    }

}



const addedProperties =id =>{
const storedBook=getStoredProperties();
const exists=storedBook.find(bookID=> bookID===id);
if(!exists){
 storedBook.push(id)
localStorage.setItem('Properties', JSON.stringify(storedBook))
}

}

export{addedProperties,getStoredProperties}