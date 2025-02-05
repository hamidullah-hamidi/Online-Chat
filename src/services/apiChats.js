import supabase from "./supabase"

export async function getChats(){
let { data, error } = await supabase
.from('chats')
.select('*')

if(error){
    throw new Error('could not laod chat data!')
    console.error(error)
}
return data
}