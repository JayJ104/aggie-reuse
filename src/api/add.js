import {google} from googleapis;

//scan itme-- triggers the capture
//display predicted class string
//confirm button-- take the input and item and put it in excel

export default async function addHandler(res, req){
    const auth = new google.auth.GoogleAuth({
        keyFile: 'api-cred.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    })
    const client = await auth.getClient
    const googleSheet = google.sheets({version: 'v4', auth: client})
    const spreadsheetId = '1pshedkf6wLx8CQRGea4szQILU6qIXgTjuCQaqnAjsaw'
}