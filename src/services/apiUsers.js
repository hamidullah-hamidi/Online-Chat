import supabase from './supabase';

export async function getUsers() {
<<<<<<< HEAD
  let { data, error } = await supabase.from('users').select('*');

  if (error) {
    throw new Error('users could not be loaded');
    console.error(error);
  }
  return data;
}

export async function createUser(name, lastName, password) {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, lastName, password }])
      .select();
    if (error) {
      console.error('Error inserting data:', error);
      return null;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
=======
    let { data, error } = await supabase
        .from('users')
        .select('*')

    if (error) {
        throw new Error('users could not be loaded')
        console.error(error)
    }
    return data
}

export async function createUser(name, lastName, password, email) {
    try {
        const { data, error } = await supabase.from('users').insert([{ name, lastName, password, email },]).select()
        if (error) {
            console.error('Error inserting data:', error);
            return null;
        }
        return data
    } catch (err) {
        console.log(err);
    }
}

export async function login(name,password) {
    let { data, error } = await supabase.from('users').select('name,password')
     if(error){
        return null
     }
     
     return data.some(el=> el.name === name && el.password === password)
} 

export async function checkUserEmail(email) {
    try {
        let { data: emailArray, error } = await supabase.from('users').select('email')
        if (error) throw new Error(error)
         const isExist = emailArray.some(el => el.email === email)
          return isExist

    } catch (err) {
        console.log(err);
    }
}

export async function getUser(id) {
    try {
        let { data, error } = await supabase.from('users').eq({id:id}).single()
        if (error) throw new Error(error)
          return data

    } catch (err) {
        console.log(err);
    }
}

>>>>>>> c1416f78be41f27182ee8d8a0c93825cfdc34e53
