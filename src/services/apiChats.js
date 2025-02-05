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

export async function createChat(){
    const { data, error } = await supabase.from('chats').insert([
      { some_column: 'someValue', other_column: 'otherValue' },]).select()
      if(error){
        console.log('something went wrong whit creating chats');
        return null
    }
    return data
    }