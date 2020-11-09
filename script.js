const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

let valutes = []

// const converter = new Proxy({}, {
//     get(target, name){
//         if(target[name] !== undefined){
//             return target[name]
//         }

//         const key = '_of_'
//         const indexOfKey = name.indexOf(key)
//         const oneElement = name.slice(0,indexOfKey)
//         const twoElement = name.slice(indexOfKey + key.length)
        
//         const oneNomenal = valutes[oneElement].Nominal
//         console.log(oneNomenal)
//         const oneValue = valutes[oneElement].Value
//         const twoValue = valutes[twoElement].Value

//         return val => { return val * oneValue / oneNomenal / twoValue }


//     }
// })

// fet()
// async function fet(){
//     const response = await fetch(url)
//     const data = await response.json()
    
//     valutes = data.Valute
//     const result = converter.EUR_of_USD(1)
//     console.log(result)
// }

function conwert(fromValute, toValute, sum){
    fromNominal = valutes[fromValute].Nominal
    fromVal = valutes[fromValute].Value
    toVal = valutes[toValute].Value
    return sum * fromVal / fromNominal / toVal
}


fet()
async function fet(){
    const response = await fetch(url)
    const data = await response.json()

    valutes = data.Valute
    const result = conwert('EUR', 'USD', 1)
    console.log(result)
}