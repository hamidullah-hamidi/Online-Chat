import supabase from "./supabase"

export async function getChats(){
let { data, error } = await supabase
.from('chats')
.select('*')

if(error){
    throw new Error('could not laod chat data!')
}
return data
}

export async function createChat(chat){
    console.log(chat);
    
    const { data, error } = await supabase.from('chats').insert([
      { chat },]).select()

      if(error){
        console.log('something went wrong whit creating chats');
        return null
    }

    return data
    }