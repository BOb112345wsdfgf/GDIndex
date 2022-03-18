const auth0 = {
      domain: "", // Tenent Domain from auth0.com website
      clientId: "", // App Client ID from auth0.com website
      clientSecret: "", // App Client Secret from auth0.com website
       callbackUrl: "", // your domain with /auth at the end. eg. https://example.com/auth, add this in auth0.com too
      logoutUrl: "", // your domain logout page eg. https://example.com, add this in auth0.com too
}

var authConfig = {
  version: "1.0.1-fix1",
  dailyLimit: false, // Whether to limit each mailbox to submit requests only once a day
  client_id: '746239575955-oao9hkv614p8glrqpvuh5i8mqfoq145b.apps.googleusercontent.com', // Google Client ID
  client_secret: 'u5a1CSY5pNjdD2tGTU93TTnI', // Google Client Secret
  refresh_token: '', // Refresh token
  domain: "", // Organization name to display
  black_list: ["example@gmail.com"],
  enable_auth0_com: false
};

const botToken = ""; // Telegram Bot Token, add Bot in Below chat to make it work.
const chatId = "-100XXXXXXXXX"; //eg. -1001189871478
const tdhostid = ""; //website name to display in TG Message

var gd;

var today;

var html = `
<html lang="us-en">
<head>
    <meta charset="utf-8">
    <title>Create Google Shared Drive</title>
    <meta name="robots" content="noindex">
    <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/favicon-16x16.png">
    <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS/icons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/mail-box-style.css" integrity="sha256-MXCVuCLGn34iVReQoHZzuEi5fjt0WH3YGxMUrRsGpgU=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.0/css/classic-button.css" integrity="sha256-2O3BzKqYcXKGjs+J3+o9xNpfM0E2iKYC69I6oI73Yoc=" crossorigin="anonymous">
</head>
<body style="background-image: url('https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.12/images/bg-01.jpg');">
    <br>
    <center>
        <a href="/"><img border="0" alt="Hash Hackers" src="https://images.cdn.hashhackers.com/logo/logo-white-d.svg" height="25px"></a>
        <br>
        <br>
    </center>
    <main>
        <div class="container min-height">
            <div>
                <div class="card waiting-screen">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
                                <h1><img src="//cdn.jsdelivr.net/gh/jscdn/images@1.0/google/google-logo-t.png" alt="Google Logo" style="width:50px;height:50px;"></h1> ${ authConfig.domain ? `
                                <h5>Create Shared Drive from:  ${authConfig.domain}</h5>` : "" }
                                <p>
                                    Multiple back-end API requests, the process takes a long time, please be patient,
                                    <span style="color: red"><b>Never Submit Again, It'll ruin the System</b></span>
                                </p>
                                <br />
                                <div class="info-form text-left">
                                    <form id="teamDriveForm">
                                        <div class="form-group">
                                            <label for="teamDriveName" class="sr-only">
                                                Share Drive Name (can be changed later)
                                            </label>
                                            <input type="text" class="form-control" id="teamDriveName" placeholder="Name for your New Drive" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="emailAddress" class="sr-only">
                                                Your GMail Address
                                            </label>
                                            <input type="email" class="form-control" id="emailAddress" placeholder="username@gmail.com" value="" />
                                        </div>
                                        <div class="form-check">
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
                                            <button type="submit" class="btn btn-primary">Submit</button> <a class="btn btn-info" href="https://gitlab.com/ParveenBhadooOfficial/create-google-shared-drive" role="button">Credits</a></center>

                                    </form>
                                    <center><p id="status"></p></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="loadMe" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel">
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
</body>
<script>
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
        $("#loadMe").modal({
          backdrop: "static", //remove ability to close modal with click
          keyboard: false, //remove option to close with keyboard
          show: true //Display loader!
        });
        $.ajax({
          type: "POST",
          url: "/drive",
          data: JSON.stringify({
            teamDriveName: $("input[id=teamDriveName]").val(),
            teamDriveThemeId: $("input[name=teamDriveTheme]:checked").val(),
            emailAddress: $("input[id=emailAddress]").val()
          }),
          success: function(data) {
            $("#loadMe").modal("hide");
            document.getElementById("status").innerHTML = "Drive " + $("input[id=teamDriveName]").val() + " Created for " + $("input[id=emailAddress]").val();
          },
          error: function(request, status, error) {
            $("#loadMe").modal("hide");
            alert("Process Failed!" + request.responseText);
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
</html>
`;

var notallowed = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'self'">
    <title>Site not found &middot; GitHub Pages</title>
    <style type="text/css" media="screen">
      body {
        background-color: #f1f1f1;
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      .container { margin: 50px auto 40px auto; width: 600px; text-align: center; }

      a { color: #4183c4; text-decoration: none; }
      a:hover { text-decoration: underline; }

      h1 { width: 800px; position:relative; left: -100px; letter-spacing: -1px; line-height: 60px; font-size: 60px; font-weight: 100; margin: 0px 0 50px 0; text-shadow: 0 1px 0 #fff; }
      p { color: rgba(0, 0, 0, 0.5); margin: 20px 0; line-height: 1.6; }

      ul { list-style: none; margin: 25px 0; padding: 0; }
      li { display: table-cell; font-weight: bold; width: 1%; }

      .logo { display: inline-block; margin-top: 35px; }
      .logo-img-2x { display: none; }
      @media
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (   min--moz-device-pixel-ratio: 2),
      only screen and (     -o-min-device-pixel-ratio: 2/1),
      only screen and (        min-device-pixel-ratio: 2),
      only screen and (                min-resolution: 192dpi),
      only screen and (                min-resolution: 2dppx) {
        .logo-img-1x { display: none; }
        .logo-img-2x { display: inline-block; }
      }

      #suggestions {
        margin-top: 35px;
        color: #ccc;
      }
      #suggestions a {
        color: #666666;
        font-weight: 200;
        font-size: 14px;
        margin: 0 10px;
      }

    </style>
  </head>
  <body>

    <div class="container">

      <h1>404</h1>
      <p><strong>There isn't a GitHub Pages site here.</strong></p>

      <p>
        If you're trying to publish one,
        <a href="https://help.github.com/pages/">read the full documentation</a>
        to learn how to set up <strong>GitHub Pages</strong>
        for your repository, organization, or user account.
      </p>

      <div id="suggestions">
        <a href="https://githubstatus.com">GitHub Status</a> &mdash;
        <a href="https://twitter.com/githubstatus">@githubstatus</a>
      </div>

      <a href="/" class="logo logo-img-1x">
        <img width="32" height="32" title="" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTZCRDY3REIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTZCRDY3RUIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdCQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjdDQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SM9MCAAAA+5JREFUeNrEV11Ik1EY3s4+ddOp29Q5b0opCgKFsoKoi5Kg6CIhuwi6zLJLoYLopq4qsKKgi4i6CYIoU/q5iDAKs6syoS76IRWtyJ+p7cdt7sf1PGOD+e0c3dygAx/67ZzzPM95/877GYdHRg3ZjMXFxepQKNS6sLCwJxqNNuFpiMfjVs4ZjUa/pmmjeD6VlJS8NpvNT4QQ7mxwjSsJiEQim/1+/9lgMHgIr5ohuxG1WCw9Vqv1clFR0dCqBODElV6v90ogEDjGdYbVjXhpaendioqK07CIR7ZAqE49PT09BPL2PMgTByQGsYiZlQD4uMXtdr+JxWINhgINYhGT2MsKgMrm2dnZXgRXhaHAg5jEJodUAHxux4LudHJE9RdEdA+i3Juz7bGHe4mhE9FNrgwBCLirMFV9Okh5eflFh8PR5nK5nDabrR2BNJlKO0T35+Li4n4+/J+/JQCxhmu5h3uJoXNHPbmWZAHMshWB8l5/ipqammaAf0zPDDx1ONV3vurdidqwAQL+pEc8sLcAe1CCvQ3YHxIW8Pl85xSWNC1hADDIv0rIE/o4J0k3kww4xSlwIhcq3EFFOm7KN/hUGOQkt0CFa5WpNJlMvxBEz/IVQAxg/ZRZl9wiHA63yDYieM7DnLP5CiAGsC7I5sgtYKJGWe2A8seFqgFJrJjEPY1Cn3pJ8/9W1e5VWsFDTEmFrBcoDhZJEQkXuhICMyKpjhahqN21hRYATKfUOlDmkygrR4o4C0VOLGJKrOITKB4jijzdXygBKixyC5TDQdnk/Pz8qRw6oOWGlsTKGOQW6OH6FBWsyePxdOXLTgxiyebILZCjz+GLgMIKnXNzc49YMlcRdHXcSwxFVgTInQhC9G33UhNoJLuqq6t345p9y3eUy8OTk5PjAHuI9uo4b07FBaOhsu0A4Unc+T1TU1Nj3KsSSE5yJ65jqF2DDd8QqWYmAZrIM2VlZTdnZmb6AbpdV9V6ec9znf5Q7HjYumdRE0JOp3MjitO4SFa+cZz8Umqe3TCbSLvdfkR/kWDdNQl5InuTcysOcpFT35ZrbBxx4p3JAHlZVVW1D/634VRt+FvLBgK/v5LV9WS+10xMTEwtRw7XvqOL+e2Q8V3AYIOIAXQ26/heWVnZCVfcyKHg2CBgTpmPmjYM8l24GyaUHyaIh7XwfR9ErE8qHoDfn2LTNAVC0HX6MFcBIP8Bi+6F6cdW/DICkANRfx99fEYFQ7Nph5i/uQiA214gno7K+guhaiKg9gC62+M8eR7XsBsYJ4ilam60Fb7r7uAj8wFyuwM1oIOWgfmDy6RXEEQzJMPe23DXrVS7rtyD3Df8z/FPgAEAzWU5Ku59ZAUAAAAASUVORK5CYII=">
      </a>

      <a href="/" class="logo logo-img-2x">
        <img width="32" height="32" title="" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQUM1QkUxRUI0MUMxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUM1QkUxRkI0MUMxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdGQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjgwQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hfPRaQAAB6lJREFUeNrsW2mM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">
      </a>
    </div>
  </body>
</html>
`;

const AUTH0_DOMAIN  = auth0.domain
const AUTH0_CLIENT_ID  = auth0.clientId
const AUTH0_CLIENT_SECRET = auth0.clientSecret
const AUTH0_CALLBACK_URL = auth0.callbackUrl
const AUTH0_LOGOUT_URL = auth0.logoutUrl
const SALT = `keys565`

const cookieKey = 'AUTH0-AUTH'

const generateStateParam = async () => {
  const resp = await fetch('https://csprng.xyz/v1/api')
  const { Data: state } = await resp.json()
  await AUTH_STORE.put(`state-${state}`, true, { expirationTtl: 60 })
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
    await fetch(AUTH0_DOMAIN  + '/oauth/token', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
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
    return { status: 401 }
  }

  const text = new TextEncoder().encode(`${SALT}-${decoded.sub}`)
  const digest = await crypto.subtle.digest({ name: 'SHA-256' }, text)
  const digestArray = new Uint8Array(digest)
  const id = btoa(String.fromCharCode.apply(null, digestArray))

  await AUTH_STORE.put(id, JSON.stringify(body))

  const headers = {
    Location: '/',
    'Set-cookie': `${cookieKey}=${id}; Secure; HttpOnly; SameSite=Lax; Expires=${date.toUTCString()}`,
  }

  return { headers, status: 302 }
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

function getCookie(cookie,name) {
    var nameEQ = name + "=";
    var ca = cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

async function getAssetFromKV(event){
  return null
}
const verify = async event => {
  const cookieHeader = event.request.headers.get('Cookie')

  if (cookieHeader && cookieHeader.includes(cookieKey)) {
    // cookieHeader.includes(cookieKey)
    // throw new Error(getCookie(cookieHeader,cookieKey))
    // const cookies = cookie.parse(cookieHeader)
    if (!getCookie(cookieHeader,cookieKey)) return {}
    const sub = getCookie(cookieHeader,cookieKey)

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

    const { access_token: accessToken, id_token: idToken } = kvStored
    const userInfo = JSON.parse(decodeJWT(idToken))
    return { accessToken, idToken, userInfo }
  }
  return {}
}

const authorize = async event => {
  const authorization = await verify(event)
  if (authorization.accessToken) {
    return [true, { authorization }]
  } else {
    const state = await generateStateParam()
    return [false, { redirectUrl: redirectUrl(state) }]
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

    const [authorized, { authorization, redirectUrl }] = await authorize(event)

    const url = new URL(event.request.url)
    if (url.pathname === '/auth') {
      const authorizedResponse = await handleRedirect(event)
      if (!authorizedResponse) {
        let redirectHeaders = new Headers()
        redirectHeaders.set('Refresh', `1; url=${auth0.logoutUrl}`)
        redirectHeaders.set('Set-cookie', `${cookieKey}=""; HttpOnly; Secure; SameSite=Lax;`)
        return new Response('Unauthorized - Redirecting', { status: 302, headers: redirectHeaders })

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
  if(authConfig['enable_auth0_com'] && loginCheck != null){return loginCheck}
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
          "Access-Control-Allow-Origin": "*"
        }
      });
    case "/drive":
      if (request.method === "POST") {
        const requestBody = await request.json();

        if (authConfig.dailyLimit) {
          if (dailyLimit.includes(requestBody.emailAddress)) {
            return new Response("Submit only one request per day.", {
              status: 429
            });
          } else {
            dailyLimit.push(requestBody.emailAddress);
          }
        }

        if (authConfig.black_list.includes(requestBody.emailAddress)) {
          return new Response("Failed", {
            status: 429
          });
        }

        try {
          let result = await gd.createAndShareTeamDrive(requestBody);
          return new Response("OK", {
            status: 200
          });
        } catch (err) {
          return new Response(err.toString(), {
            status: 500
          });
        }
      } else if (request.method === "OPTIONS") {
        return new Response("", {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
      } else {
        return new Response("Bad Request", {
          status: 400
        });
      }
    case "/":
      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    default:
      return new Response(notallowed, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
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
    let params = { fields: "teamDriveThemes" };
    url += "?" + this.enQuery(params);
    let response = await fetch(url, requestOption);
    return await response.json();
  }


  async createAndShareTeamDrive(requestBody) {
    // Create team drive
    console.log("Creating TeamDrive");
    let url = "https://www.googleapis.com/drive/v3/drives";
    let requestOption = await this.requestOption(
      { "Content-Type": "application/json" },
      "POST"
    );
    let params = { requestId: uuidv4() };
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
    console.log("Created TeamDrive ID ", teamDriveId);
    const LOG_URL = "https://api.telegram.org/bot"+botToken+"/sendMessage?chat_id="+chatId+"&text=Website: "+tdhostid+"\nDrive: "
    const LOG_DATA = " \nDrive Link: https://drive.google.com/drive/folders/";
    function postLog() {
      return fetch(LOG_URL+teamDriveName+LOG_DATA+teamDriveId+"\nCreated By: "+requestBody.emailAddress, {
        method: "GET",
        //body: data,
      })
    }
    postLog()

    // Get created drive user permission ID
    console.log(`Getting creator permission ID`);
    url = `https://www.googleapis.com/drive/v3/files/${teamDriveId}/permissions`;
    params = { supportsAllDrives: true };
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
    params = { supportsAllDrives: true };
    url += "?" + this.enQuery(params);
    requestOption = await this.requestOption(
      { "Content-Type": "application/json" },
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
    params = { supportsAllDrives: true };
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
    return { method: method, headers: headers };
  }

  enQuery(data) {
    const ret = [];
    for (let d in data) {
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    }
    return ret.join("&");
  }
}
