import axios from "axios";
import qs from "qs";
import "dotenv/config";


const clientId = process.env.BLING_CLIENT_ID!;
const clientSecret = process.env.BLING_CLIENT_SECRET!;
const code = "0bd39faa93e3d9ac4ad44a20e8484650d1e08482";
const redirectUri = "http://localhost:3001/callback";

const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

async function getToken() {
  const body = qs.stringify({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri
  });

  const response = await axios.post("https://www.bling.com.br/Api/v3/oauth/token", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${credentials}`
    }
  });

  console.log(response.data);
}

getToken();
