const API_KEY = ''

async function getCompletion(){
   const res = await fetch('https://api.openai.com/v1/completions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
             },
             body: JSON.stringify({
                model: 'gpt-3.5-turbo-instruct-0914',
                prompt: 'DIME HOLA',
                max_tokens: 15,
            })

    })

    const data = await res.json()
    console.log(data)
}

getCompletion() 


