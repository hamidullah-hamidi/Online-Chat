import supabase from "./supabase"

export async function getUsers(){
    let { data, error } = await supabase
    .from('users')
    .select('*')

    if(error){
        throw new Error('users could not be loaded')
        console.error(error)
    }
    return data
}

export async function createUser(name,lastName,password) {
 try{
    
    const { data, error } = await supabase.from('users').insert([ { name, lastName,password },]).select()
    if (error) {
        console.error('Error inserting data:', error);
        return null;
      }
      return data
}catch(err){
 console.log(err);
 }
}