import supabase from "./supabase"

async function getUsers(){
    let { data, error } = await supabase
    .from('users')
    .select('*')

    if(error){
        throw new Error('users could not be loaded')
        console.error(error)
    }
    return data
}
export default getUsers