import {google} from googleapis;

//scan itme-- triggers the capture
//display predicted class string
//confirm button-- take the input and item and put it in excel

export default async function addHandler(res, req){


    const keys = JSON.parse(process.env.GOOGLE_AUTH_JSON)
    console.log(keys)
    const auth = new google.auth.GoogleAuth({
        scopes: 'https://ww.googleapis.com/auth/spreadsheets'
    }).fromJSON(keys)

    const client = await auth.getClient
    const googleSheet = google.sheets({version: 'v4', auth: client})
    const spreadsheetId = '1InzVekX9o-pvgr665hoMcdLf52T19s95nl1GZytXcQ4'
    if(req.method !== 'POST'){
        res.send('error')
    } else{
        try {
            const data = JSON.parse(req.body)
            const user_data = [Object.values(data)]

            const response = await googleSheet.spreadsheets.values.append({
                auth,
                spreadsheetId,
                range: 'students!A:G',
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: user_data
                }
            })
            console.log(response)
            if (response.status === 200) {
                res.send({ok: true})
            } else {
                res.send({ok: false})
            }
        } catch(error) {
            console.log(error)
            res.send({ok: false, msg: error})
        }
    }
}