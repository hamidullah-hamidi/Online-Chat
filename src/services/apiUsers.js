import supabase from "./supabase"

async function getUsers(){
    let { data: users, error } = await supabase
    .from('users')
    .select('*')
}
export default getUsers