const auth0 = {
    domain: "", // Tenent Domain from auth0.com website
    clientId: "", // App Client ID from auth0.com website
    clientSecret: "", // App Client Secret from auth0.com website
    callbackUrl: "", // your domain with /auth at the end. eg. https://example.com/auth, add this in auth0.com too
    logoutUrl: "", // your domain logout page eg. https://example.com, add this in auth0.com too
}

var authConfig = {
    version: "1.0.1-fix2",
    dailyLimit: true, // Whether to limit each mailbox to submit requests only once a day
    client_id: '746239575955-oao9hkv614p8glrqpvuh5i8mqfoq145b.apps.googleusercontent.com', // Google Client ID
    client_secret: 'u5a1CSY5pNjdD2tGTU93TTnI', // Google Client Secret
    refresh_token: '', // Refresh token
    domain: "Google", //College name to display
    black_list: ["example@gmail.com"],
    enable_auth0_com: false,
    cors_domain: "*", // your TD generator domain i.e. eg. https://example.com
    domainCount: 1
};

var hCaptchaConfig = {
    secret: '',
    sitekey: ''
};

const botToken = ""; // Telegram Bot Token
const chatId = "-100XXXXXXXXXX";
const tdhostid = "";

var gd;

var today;

var html = `<html lang="us-en">
   <head>
      <meta charset="utf-8">
      <title>Temp TD by Hash Hackers</title>
      <meta name="robots" content="noindex">
      <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/favicon-16x16.png">
      <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha256-DF7Zhf293AJxJNTmh5zhoYYIMs2oXitRfBjY+9L//AY=" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/mail-box-style.css" integrity="sha256-MXCVuCLGn34iVReQoHZzuEi5fjt0WH3YGxMUrRsGpgU=" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/classic-button.css" integrity="sha256-2O3BzKqYcXKGjs+J3+o9xNpfM0E2iKYC69I6oI73Yoc=" crossorigin="anonymous">
      <script src="https://hcaptcha.com/1/api.js" async defer></script>
   </head>
   <body style="background-image: url('https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.12/images/bg-01.jpg');">
      <br>
      <center>
         <a href="/"><img border="0" alt="Hash Hackers" src="https://images.cdn.hashhackers.com/logo/logo-white-d.svg" height="25px"></a>
         <br>
         <br>
      </center>
      <main>
         <div class="modal fade" id="bd-popup-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title">Important</h5>
                  </div>
                  <div class="modal-body">
                     <p>By using this site, you agree to terms of service of Hash Hackers. You also agree that even you do not click on the agree button and somehow bypass it and use the site, you still agree to our terms of service. You also agree that you'll not abuse this service and you have read all the details below.</p>
                     <p>The Drives user generates on Free Websites are not safe because of their heavy usage. You can understand this by this one example, in last 24 hours 2500 Drives are made by users, out of which 500 are made using DDOS attack. There are more Drives made using DDOS which Telegram ignored to log, due to Flood Wait.</p>
                     <p>Please note that this is not permanent or safe TD/SD. Use it for Normal Backups up to 2 TB Per User. Users storing more than 2 TB will see that their Drive is deleted in the next Few Days. This Generator is available till 31 March 2022. Make 1 TD per user, extra TDs will be removed by us after 31st March.</p>
                     <p>This Website Logs user details on Public Telegram Channel. By using this, you agree that we are not liable to any kind of damage.</p>
                     <p>If you can afford, we've better solutions for smaller storage users like 1TB to 10 TB and few 100 TB with limited stock, you can buy these plans from our website <a href="https://store.hashhackers.com/shop">Hash Hackers Store</a>.</p>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agree</button>
                  </div>
               </div>
            </div>
         </div>
         <div class="container min-height">
         <div>
         <div class="card waiting-screen">
            <div class="card-block" style="display: none;">
               <h6>Site Offline for Maintenance</h6>
               <p>Will be back soon, Stay Tuned</p>
            </div>
            <div class="card-block">
               <div class="row">
                  <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
                     <h1><img src="https://cdn.jsdelivr.net/gh/jscdn/images@1.0/google/google-logo-t.png" alt="Google Logo" style="width:50px;height:50px;"></h1>
                     <h5>Free Shared Drive from Hash Hackers</h5>
                     <p>
                        Multiple back-end API requests, the process takes a long time, please be patient,
                        <span style="color: red"><b>Never Submit Again, It'll ruin the System</b></span>.
                     </p>
                     <center>
                        <h4 id="status" style="color:green;">Status: App Online</h4>
                     </center>
                     <div class="info-form text-left">
                        <form id="teamDriveForm">
                           <div class="form-group">
                              <input type="text" class="form-control" id="teamDriveName" placeholder="Name for your New Drive" required>
                           </div>
                           <div class="form-group">
                              <input type="email" class="form-control" id="emailAddress" placeholder="username@gmail.com" value="" required>
                           </div>
                           <div class="form-group">
                              <select class="form-control" id="channel"  type="text" list="chlist" class="dropdownlist">
                                 <option value="0" selected>🎲 Random</option>
                                 <option value="1">1. Google</option>
                                 <option value="2" disabled>2. Microsoft</option>
                                 <option value="3" disabled>3. Tesla</option>
                                 <option value="4" disabled>4. SpaceX</option>
                              </select>
                           </div>
                           <div class="form-group">
                              <div class="h-captcha" data-sitekey="0d643af9-bcde-47de-b86c-94b1c4269aa0" data-theme="dark"></div>
                           </div>
                           <div class="form-check" style="display:none;">
                              <input type="checkbox" class="form-check-input" id="customTheme" value="" />
                              <label class="form-check-label" for="customTheme">
                              Custom Shared Drive Theme Header (can be changed later)
                              </label>
                           </div>
                           <div id="customThemeSection" class="d-none">
                              <div id="teamDriveThemePreview"></div>
                              <div id="teamDriveThemeOptions">
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="teamDriveTheme" id="teamDriveThemeOptionRandom" value="random" checked />
                                    <label class="form-check-label" for="teamDriveThemeOptionRandom">
                                    random
                                    </label>
                                 </div>
                              </div>
                           </div>
                           <br />
                           <center>
                              <button type="submit" class="btn btn-primary">Submit</button> <a class="btn btn-info" href="https://gitlab.com/ParveenBhadooOfficial/create-google-shared-drive" role="button" target="_blank">Credits</a> <a class="btn btn-danger" href="https://telegram.dog/+EcXjRTVoS7xmY2Qx" role="button">Logs</a>  <a class="btn btn-info" href="http://td.msgsuite.workers.dev" target="_blank" role="button">MSGsuite</a> <a class="btn btn-info" href="https://telegram.dog/HashHackers" role="button">Telegram</a>
                           </center>
                        </form>
                        <br>
                        <center>
                           <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftd.hashhackers.win&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a><br>
                           <br>
                           <p style="font-size:80%;">&copy; 2022 Hash Hackers, All Rights Reserved. Based on Open Source Softwares, <a href="https://gitlab.com/ParveenBhadooOfficial/create-google-shared-drive" target="_blank">S1</a> and <a href="https://github.com/MsGsuite/Shared-Drives-Creator-Website" target="_blank">S2</a>.</p>
                        </center>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="modal fade" id="loadMe" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
               <div class="modal-content">
                  <div class="modal-body text-center">
                     <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                           <span class="sr-only">Processing...</span>
                        </div>
                     </div>
                     <div clas="loader-txt">
                        <p>Processing...</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <script>
            $(document).ready(function(){
                $("#bd-popup-modal").modal('show');
            });
            var teamDriveThemes;
            $("input[id=customTheme]").change(function() {
                if ($(this).is(":checked")) {
                    $("#customThemeSection").removeClass("d-none");
                } else {
                    $("#customThemeSection").addClass("d-none");
                    $("input[name=teamDriveTheme]")[0].click();
                }
            });
            $.get("/teamDriveThemes", function(json) {
                        teamDriveThemes = json.teamDriveThemes;
                        $.each(json.teamDriveThemes, function(i, item) {
                                    $("#teamDriveThemeOptions").append(\`
                <div class="form-check">
                   <input
                    class="form-check-input"
                    type="radio"
                    name="teamDriveTheme"
                    id="teamDriveThemeOption-\${item.id}"
                    value="\${item.id}"
                  />
                  <label class="form-check-label" for="teamDriveThemeOption-\${item.id}">
                   \${item.id}
                  </label>
                </div>
                \`);
              });
              $("input[name=teamDriveTheme]").change(function() {
                var themeId = this.value;
                if (themeId === "random") {
                  $("#teamDriveThemePreview").html("");
                } else {
                  var theme = teamDriveThemes.find(function(t) {
                    return t.id == themeId;
                  });
                  $("#teamDriveThemePreview").html(
                    \`
                  <div class="card" style="background-color: \${theme.colorRgb}">
                    <img src="\${theme.backgroundImageLink}" class="card-img-top" alt="\${theme.id}" />
                    <div class="card-body">
                      <h5 class="card-text" style="color: white">
                        \${theme.id}
                      </h5>
                    </div>
                  </div>
              \`
                  );
                }
              });
              $("#teamDriveForm").on("submit", function(event) {
                event.preventDefault();
                $("#loadMe").modal("show");
                $.ajax({
                  type: "POST",
                  url: "/drive",
                  data: JSON.stringify({
                    teamDriveName: $("input[id=teamDriveName]").val(),
                    teamDriveThemeId: $("input[name=teamDriveTheme]:checked").val(),
                    emailAddress: $("input[id=emailAddress]").val(),
                    channel: $("select[id=channel]").val(),
                    recaptcha: hcaptcha.getResponse()
                  }),
                  success: function(data) {
                    $("#loadMe").modal("hide");
                    document.getElementById("status").innerHTML = "Drive " + $("input[id=teamDriveName]").val() + " Created for " + $("input[id=emailAddress]").val();
                  },
                  error: function(request, status, error) {
                    $("#loadMe").modal("hide");
                    document.getElementById("status").innerHTML = "Process Failed! " + request.responseText;
                    alert("Process Failed! " + request.responseText);
                  },
                  contentType: "application/json"
                });
              });
            });
         </script>
         <style type="text/css">
            .card-img-top {
            width: 100%;
            object-fit: cover;
            }
         </style>
      </main>
   </body>
</html>`;

var notallowed = `
<html>
<head>
<title>API Server</title>
<style>
body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    color:#b0bec5;
    display:table;
    font-weight:100;
    font-family:Lato
}
.container{
    text-align:center;
    display:table-cell;
    vertical-align:middle
}
.content{
    text-align:center;
    display:inline-block
}
.message{
    font-size:80px;
    margin-bottom:40px
}
.submessage{
    font-size:40px;
    margin-bottom:40px
}
.copyright{
    font-size:20px;
}
a{
    text-decoration:none;
    color:#3498db
}

</style>
</head>
<body>
<div class="container">
<div class="content">
<div class="message">API Server</div>
<div class="submessage">All Systems Operational</div>
<div class="copyright">Hash Hackers and Bhadoo Cloud Cyber Systems</div>
</div>
</div>
</body>
</html>`;

const AUTH0_DOMAIN = auth0.domain
const AUTH0_CLIENT_ID = auth0.clientId
const AUTH0_CLIENT_SECRET = auth0.clientSecret
const AUTH0_CALLBACK_URL = auth0.callbackUrl
const AUTH0_LOGOUT_URL = auth0.logoutUrl
const SALT = `keys565`

const cookieKey = 'AUTH0-AUTH'

const generateStateParam = async () => {
    const resp = await fetch('https://csprng.xyz/v1/api')
    const {
        Data: state
    } = await resp.json()
    await AUTH_STORE.put(`state-${state}`, true, {
        expirationTtl: 60
    })
    return state
}

const exchangeCode = async code => {
    const body = JSON.stringify({
        grant_type: 'authorization_code',
        client_id: auth0.clientId,
        client_secret: auth0.clientSecret,
        code,
        redirect_uri: auth0.callbackUrl,
    })

    return persistAuth(
        await fetch(AUTH0_DOMAIN + '/oauth/token', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body,
        }),
    )
}

// https://github.com/pose/webcrypto-jwt/blob/master/index.js
const decodeJWT = function(token) {
    var output = token
        .split('.')[1]
        .replace(/-/g, '+')
        .replace(/_/g, '/')
    switch (output.length % 4) {
        case 0:
            break
        case 2:
            output += '=='
            break
        case 3:
            output += '='
            break
        default:
            throw 'Illegal base64url string!'
    }

    const result = atob(output)

    try {
        return decodeURIComponent(escape(result))
    } catch (err) {
        console.log(err)
        return result
    }
}

const validateToken = token => {
    try {
        const dateInSecs = d => Math.ceil(Number(d) / 1000)
        const date = new Date()

        let iss = token.iss

        // ISS can include a trailing slash but should otherwise be identical to
        // the AUTH0_DOMAIN, so we should remove the trailing slash if it exists
        iss = iss.endsWith('/') ? iss.slice(0, -1) : iss

        if (iss !== AUTH0_DOMAIN) {
            throw new Error(
                `Token iss value (${iss}) doesn't match AUTH0_DOMAIN (${AUTH0_DOMAIN})`,
            )
        }

        if (token.aud !== AUTH0_CLIENT_ID) {
            throw new Error(
                `Token aud value (${token.aud}) doesn't match AUTH0_CLIENT_ID (${AUTH0_CLIENT_ID})`,
            )
        }

        if (token.exp < dateInSecs(date)) {
            throw new Error(`Token exp value is before current time`)
        }

        // Token should have been issued within the last day
        date.setDate(date.getDate() - 1)
        if (token.iat < dateInSecs(date)) {
            throw new Error(`Token was issued before one day ago and is now invalid`)
        }

        return true
    } catch (err) {
        console.log(err.message)
        return false
    }
}

const persistAuth = async exchange => {
    const body = await exchange.json()

    if (body.error) {
        throw new Error(body.error)
    }

    const date = new Date()
    date.setDate(date.getDate() + 1)

    const decoded = JSON.parse(decodeJWT(body.id_token))
    const validToken = validateToken(decoded)
    if (!validToken) {
        return {
            status: 401
        }
    }

    const text = new TextEncoder().encode(`${SALT}-${decoded.sub}`)
    const digest = await crypto.subtle.digest({
        name: 'SHA-256'
    }, text)
    const digestArray = new Uint8Array(digest)
    const id = btoa(String.fromCharCode.apply(null, digestArray))

    await AUTH_STORE.put(id, JSON.stringify(body))

    const headers = {
        Location: '/',
        'Set-cookie': `${cookieKey}=${id}; Secure; HttpOnly; SameSite=Lax; Expires=${date.toUTCString()}`,
    }

    return {
        headers,
        status: 302
    }
}

const redirectUrl = state =>
    `${auth0.domain}/authorize?response_type=code&client_id=${
    auth0.clientId
  }&redirect_uri=${
    auth0.callbackUrl
  }&scope=openid%20profile%20email&state=${encodeURIComponent(state)}`

const handleRedirect = async event => {
    const url = new URL(event.request.url)

    const state = url.searchParams.get('state')
    if (!state) {
        return null
    }

    const storedState = await AUTH_STORE.get(`state-${state}`)
    if (!storedState) {
        return null
    }

    const code = url.searchParams.get('code')
    if (code) {
        return exchangeCode(code)
    }

    return null
}

function getCookie(cookie, name) {
    var nameEQ = name + "=";
    var ca = cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

async function getAssetFromKV(event) {
    return null
}
const verify = async event => {
    const cookieHeader = event.request.headers.get('Cookie')

    if (cookieHeader && cookieHeader.includes(cookieKey)) {
        // cookieHeader.includes(cookieKey)
        // throw new Error(getCookie(cookieHeader,cookieKey))
        // const cookies = cookie.parse(cookieHeader)
        if (!getCookie(cookieHeader, cookieKey)) return {}
        const sub = getCookie(cookieHeader, cookieKey)

        const kvData = await AUTH_STORE.get(sub)
        if (!kvData) {
            return {}
            //throw new Error('Unable to find authorization data')
        }

        let kvStored
        try {
            kvStored = JSON.parse(kvData)
        } catch (err) {
            throw new Error('Unable to parse auth information from Workers KV')
        }

        const {
            access_token: accessToken,
            id_token: idToken
        } = kvStored
        const userInfo = JSON.parse(decodeJWT(idToken))
        return {
            accessToken,
            idToken,
            userInfo
        }
    }
    return {}
}

const authorize = async event => {
    const authorization = await verify(event)
    if (authorization.accessToken) {
        return [true, {
            authorization
        }]
    } else {
        const state = await generateStateParam()
        return [false, {
            redirectUrl: redirectUrl(state)
        }]
    }
}

// const logout = event => {
//   const cookieHeader = event.request.headers.get('Cookie')
//   if (cookieHeader && cookieHeader.includes(cookieKey)) {
//     return {
//       headers: {
//         'Set-cookie': `${cookieKey}=""; HttpOnly; Secure; SameSite=Lax;`,
//       },
//     }
//   }
//   return {}
// }

const hydrateState = (state = {}) => ({
    element: el => {
        el.setInnerContent(JSON.stringify(state))
    },
})


// addEventListener('fetch', event => event.respondWith(handleRequest(event)))

// see the readme for more info on what these config options do!
const config = {
    // opt into automatic authorization state hydration
    hydrateState: true,
    // return responses at the edge
    originless: true,
}

async function loginHandleRequest(event) {
    try {
        let request = event.request

        const [authorized, {
            authorization,
            redirectUrl
        }] = await authorize(event)

        const url = new URL(event.request.url)
        if (url.pathname === '/auth') {
            const authorizedResponse = await handleRedirect(event)
            if (!authorizedResponse) {
                let redirectHeaders = new Headers()
                redirectHeaders.set('Refresh', `1; url=${auth0.logoutUrl}`)
                redirectHeaders.set('Set-cookie', `${cookieKey}=""; HttpOnly; Secure; SameSite=Lax;`)
                return new Response('Unauthorized - Redirecting', {
                    status: 302,
                    headers: redirectHeaders
                })

            }
            response = new Response(request.body, {
                request,
                ...authorizedResponse,
            })
            return response
        }

        if (!authorized) {
            return Response.redirect(redirectUrl)
        }

        if (url.pathname === '/logout') {

            let redirectHeaders = new Headers()
            redirectHeaders.set('Location', `${auth0.domain}/v2/logout?client_id=${auth0.clientId}&returnTo=${auth0.logoutUrl}`)
            redirectHeaders.set('Set-cookie', `${cookieKey}=""; HttpOnly; Secure; SameSite=Lax;`)

            return new Response('', {
                status: 302,
                headers: redirectHeaders
            })
        }

        // return new Response("Hello World !")
        return null

    } catch (err) {
        return new Response(err.toString())
    }
}


addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request, event));
});

var dailyLimit = [];

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request, event) {
    var loginCheck = await loginHandleRequest(event)
    if (authConfig['enable_auth0_com'] && loginCheck != null) {
        return loginCheck
    }
    if (authConfig.dailyLimit) {
        if (!today) today = new Date().getDate();

        // Remove email rate limit every day
        if (new Date().getDate() != today) {
            today = new Date().getDate();
            dailyLimit.length = 0;
        }
    }

    if (gd == undefined) {
        gd = new googleDrive(authConfig);
    }
    let url = new URL(request.url);
    let path = url.pathname;

    switch (path) {
        case "/teamDriveThemes":
            let teamDriveThemes = await gd.getTeamDriveThemes();
            return new Response(JSON.stringify(teamDriveThemes), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": authConfig.cors_domain,
                    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                }
            });
        case "/drive":
            if (request.method === "POST") {
                const requestBody = await request.json();
                if (requestBody.recaptcha.length == 0) {
                    return new Response("You have to complete the captcha to get a shared drive.", {
                        status: 400,
                        headers: {
                            "Access-Control-Allow-Origin": authConfig.cors_domain,
                            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                        }

                    });
                } else {
                    let hc = new hCaptcha(hCaptchaConfig.secret, hCaptchaConfig.sitekey);
                    let verificationResponse = await hc.verify(requestBody.recaptcha);
                    if (!verificationResponse.success) {
                        return new Response("Captcha verification: " + verificationResponse["error-codes"], {
                            status: 400,
                            headers: {
                                "Access-Control-Allow-Origin": authConfig.cors_domain,
                                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                            }
                        });
                    }
                }

                if (requestBody.channel == 0) {
                    requestBody.channel = getRandomInteger(1, authConfig.domainCount);
                }
                //The client secret and the refresh token used here are the one set in the beginning of the file
                if (requestBody.channel == 1) {
                    authConfig.refresh_token = "REFRESH TOKEN";
                    authConfig.domain = "Google";
                }
                if (requestBody.channel == 2) {
                    authConfig.refresh_token = "REFRESH TOKEN";
                    authConfig.domain = "Microsoft";
                }
                if (requestBody.channel == 3) {
                    authConfig.refresh_token = "REFRESH TOKEN";
                    authConfig.domain = "Tesla";
                }
                // If you want to use a custom client id & secret :
                if (requestBody.channel == 4) {
                    authConfig.client_id = "CLIENT ID";
                    authConfig.client_secret = "CLIENT SECRET";
                    authConfig.refresh_token = "REFRESH TOKEN";
                    authConfig.domain = "SpaceX";
                }

                if (authConfig.dailyLimit) {
                    if (dailyLimit.includes(requestBody.emailAddress)) {
                        return new Response("⏳ You have reached the maximum number of creations allowed today!", {
                            status: 429,
                            headers: {
                                "Access-Control-Allow-Origin": authConfig.cors_domain,
                                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                            }
                        });
                    } else {
                        dailyLimit.push(requestBody.emailAddress);
                    }
                }

                if (authConfig.black_list.includes(requestBody.emailAddress)) {
                    return new Response("Failed", {
                        status: 429,
                        headers: {
                            "Access-Control-Allow-Origin": authConfig.cors_domain,
                            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                        }
                    });
                }

                try {
                    let result = await gd.createAndShareTeamDrive(requestBody);
                    return new Response("✅ Your Shared Drive created successfully!", {
                        status: 200,
                        headers: {
                            "Access-Control-Allow-Origin": authConfig.cors_domain,
                            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                        }
                    });
                } catch (err) {
                    return new Response("Domain #" + requestBody.channel + " - " + err.toString(), {
                        status: 500,
                        headers: {
                            "Access-Control-Allow-Origin": authConfig.cors_domain,
                            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                        }
                    });
                }
            } else if (request.method === "OPTIONS") {
                return new Response("", {
                    status: 200,
                    headers: {
                        "Access-Control-Allow-Origin": authConfig.cors_domain,
                        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    }
                });
            } else {
                return new Response(notallowed, {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                        "Access-Control-Allow-Origin": authConfig.cors_domain,
                        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    }
                });
            }
            case "/":
                return new Response(html, {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                        "Access-Control-Allow-Origin": authConfig.cors_domain,
                        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    }
                });
            default:
                return new Response(html, {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                        "Access-Control-Allow-Origin": authConfig.cors_domain,
                        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    }
                });
    }
}
// https://stackoverflow.com/a/2117523
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        // tslint:disable-next-line:one-variable-per-declaration
        const r = (Math.random() * 16) | 0,
            // tslint:disable-next-line:triple-equals
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

class googleDrive {
    constructor(authConfig) {
        this.authConfig = authConfig;
        this.accessToken();
    }

    async getTeamDriveThemes() {
        let url = "https://www.googleapis.com/drive/v3/about";
        let requestOption = await this.requestOption();
        let params = {
            fields: "teamDriveThemes"
        };
        url += "?" + this.enQuery(params);
        let response = await fetch(url, requestOption);
        return await response.json();
    }


    async createAndShareTeamDrive(requestBody) {
        // Create team drive
        console.log("Creating TeamDrive");
        let url = "https://www.googleapis.com/drive/v3/drives";
        let requestOption = await this.requestOption({
                "Content-Type": "application/json"
            },
            "POST"
        );
        let params = {
            requestId: uuidv4()
        };
        url += "?" + this.enQuery(params);
        let post_data = {
            name: requestBody.teamDriveName
        };
        if (
            requestBody.teamDriveThemeId &&
            requestBody.teamDriveThemeId !== "random"
        ) {
            post_data.themeId = requestBody.teamDriveThemeId;
        }
        requestOption.body = JSON.stringify(post_data);
        let response = await fetch(url, requestOption);
        let result = await response.json();
        const newresult = result;
        const teamDriveId = result.id;
        const teamDriveName = escape(result.name);
        //console.log("Created TeamDrive ID ", teamDriveId);
        const LOG_URL = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=Website: " + tdhostid + "\nDrive: "
        const LOG_DATA = " \nDrive Link: https://drive.google.com/drive/folders/";
        const emailofuser = requestBody.emailAddress.slice(5);

        function postLog() {
            return fetch(LOG_URL + teamDriveName + LOG_DATA + teamDriveId + "\nCreated By: XXXXXXXXX" + emailofuser + "\n\n@HashHackers", {
                method: "GET",
                //body: data,
            })
        }
        postLog()

        // Get created drive user permission ID
        console.log(`Getting creator permission ID`);
        url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions`;
        params = {
            supportsAllDrives: true
        };
        params.fields = "permissions(id,emailAddress)";
        url += "?" + this.enQuery(params);
        requestOption = await this.requestOption();
        response = await fetch(url, requestOption);
        result = await response.json();
        const currentUserPermissionID = result.permissions[0].id;
        console.log(currentUserPermissionID);

        // Share team drive with email address
        console.log(`Sharing the team drive to ${requestBody.emailAddress}`);
        url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions`;
        params = {
            supportsAllDrives: true
        };
        url += "?" + this.enQuery(params);
        requestOption = await this.requestOption({
                "Content-Type": "application/json"
            },
            "POST"
        );
        post_data = {
            role: "organizer",
            type: "user",
            emailAddress: requestBody.emailAddress
        };
        requestOption.body = JSON.stringify(post_data);
        response = await fetch(url, requestOption);
        await response.json();

        // Delete creator from the team drive
        console.log("Deleting creator from the team drive");
        url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions/${currentUserPermissionID}`;
        params = {
            supportsAllDrives: true
        };
        url += "?" + this.enQuery(params);
        requestOption = await this.requestOption({}, "DELETE");
        response = await fetch(url, requestOption);
        return await response.text();
    }


    async accessToken() {
        console.log("accessToken");
        if (
            this.authConfig.expires == undefined ||
            this.authConfig.expires < Date.now()
        ) {
            const obj = await this.fetchAccessToken();
            if (obj.access_token != undefined) {
                this.authConfig.accessToken = obj.access_token;
                this.authConfig.expires = Date.now() + 3500 * 1000;
            }
        }
        return this.authConfig.accessToken;
    }

    async fetchAccessToken() {
        console.log("fetchAccessToken");
        const url = "https://www.googleapis.com/oauth2/v4/token";
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const post_data = {
            client_id: this.authConfig.client_id,
            client_secret: this.authConfig.client_secret,
            refresh_token: this.authConfig.refresh_token,
            grant_type: "refresh_token"
        };

        let requestOption = {
            method: "POST",
            headers: headers,
            body: this.enQuery(post_data)
        };

        const response = await fetch(url, requestOption);
        return await response.json();
    }

    async requestOption(headers = {}, method = "GET") {
        const accessToken = await this.accessToken();
        headers["authorization"] = "Bearer " + accessToken;
        return {
            method: method,
            headers: headers
        };
    }

    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        }
        return ret.join("&");
    }
}

// hCaptcha Verification Class
class hCaptcha {
    constructor(secret, sitekey) {
        this.secret = secret;
        this.sitekey = sitekey;
    }

    //Verification function, the result.success flag would be "true" on successful verification
    async verify(response_token) {

        console.log("Verifying hCaptcha");
        let url = "https://hcaptcha.com/siteverify";

        let post_data = {
            secret: this.secret,
            response: response_token,
            sitekey: this.sitekey
        };

        console.log(this.enQuery(post_data));
        let response = await fetch(url, {
            method: 'POST',
            body: this.enQuery(post_data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });


        let result = await response.json();
        return result; //check for result.success for status of verification
    }

    //Reusing the googleDrive Object to QueryString Method
    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        }
        return ret.join("&");
    }
}

function getRandomInteger(min, max){
    let rndchoice = Math.floor(Math.random() * Math.floor(max)) + (min-1);
    console.log(rndchoice);
    return rndchoice;
}
