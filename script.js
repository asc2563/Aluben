//error//
function calculator() {
  window.open("assets/calcu.html", "_self");

}
function credits() {
  window.open("https://aluben.allister189o.repl.co/credits.html", "_self");
}
function gcloak() {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href =
    " https://i.scdn.co/image/ab67616d0000b27361caa063de5651b980c3b8bf";
  document.title = "Aluben";
  console.log(document.title);
  document.getElementsByTagName("head")[0].appendChild(link);
}
gcloak();
setInterval(gcloak, 1000);

function discord() {
  window.open("https://discord.gg/Jeybsy2us4");
}

//var passcode = prompt("Welcome to aluben, set your passcode");

function tabname() {
  function gcloak() {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = " https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico?1";
    document.title = "Clever | Portal";
    console.log(document.title);
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  gcloak();
  setInterval(gcloak, 1000);
  function gcloak() {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = " https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico?1";
    document.title = "Clever | Portal";
    console.log(document.title);
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  gcloak();
  setInterval(gcloak, 1000);
  function gcloak() {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = " https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico?1";
    document.title = "Clever | Portal";
    console.log(document.title);
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  gcloak();
  setInterval(gcloak, 1000);
  function gcloak() {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = " https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico?1";
    document.title = "Clever | Portal";
    console.log(document.title);
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  gcloak();
  setInterval(gcloak, 1000);
}

function pass1() {
  var passwordAttempt = prompt("enter password");
  if (passwordAttempt == passcode) {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Aluben";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Nebula";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.bing.com"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
            urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://pd3pc5-8080.csb.app/"),
          urlQueue.push("https://pd3pc5-8080.csb.app/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://xaviersbackup.allister189o.repl.co/"),
          urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else if (passwordAttempt == "129") {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Aluben";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Nebula";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.bing.com"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
            urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://hstuff.gameubg.com/"),
          urlQueue.push("https://hstuff.gameubg.com/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://xaviersbackup.allister189o.repl.co/"),
          urlQueue.push("https://xaviersbackup.allister189o.repl.co/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else {
    alert("incorrect passcode");
  }
}

function pass2() {
  var passwordAttempt = prompt("enter password");
  if (passwordAttempt == passcode) {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Procky list";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Abyss";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.google.com?igu=1"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
            urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://prockylist.5pcfjsczs7.repl.co/"),
          urlQueue.push("https://prockylist.5pcfjsczs7.repl.co/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://game.tilaktharu.com.np/"),
          urlQueue.push("https://game.tilaktharu.com.np/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else if (passwordAttempt == "129") {
    alert("correct passcode");
    let urlQueue = [],
      backButton = document.createElement("button");
    (backButton.style.width = "25px"), (backButton.innerHTML = "<-");
    let urlBox = document.createElement("input");
    (urlBox.type = "text"), (urlBox.style.width = "480px");
    let goButton1 = document.createElement("button");
    goButton1.innerHTML = "Load URL";
    let goButton2 = document.createElement("button");
    goButton2.innerHTML = "Load Procky list";
    let ytButton = document.createElement("button");
    ytButton.innerHTML = "Load Abyss";
    let iframe = document.createElement("iframe");
    (iframe.src = "https://www.bing.com"),
      (iframe.width = window.innerWidth),
      (iframe.height = window.innerHeight),
      goButton1.addEventListener("click", () => {
        0 != urlBox.value.length &&
          urlBox.value.startsWith("http") &&
          ((iframe.src = urlBox.value.toLowerCase()),
            urlQueue.push(urlBox.value.toLowerCase()));
      }),
      goButton2.addEventListener("click", () => {
        (iframe.src = "https://prockylist.5pcfjsczs7.repl.co/"),
          urlQueue.push("https://prockylist.5pcfjsczs7.repl.co/");
      }),
      ytButton.addEventListener("click", () => {
        (iframe.src = "https://game.tilaktharu.com.np/"),
          urlQueue.push("https://game.tilaktharu.com.np/");
      }),
      backButton.addEventListener("click", () => {
        urlQueue.length > 1 && (urlQueue.pop(), (iframe.src = urlQueue.at(-1)));
      }),
      document.body.appendChild(backButton),
      document.body.appendChild(urlBox),
      document.body.appendChild(goButton1),
      document.body.appendChild(goButton2),
      document.body.appendChild(ytButton),
      document.body.appendChild(iframe);
  } else {
    alert("incorrect passcode");
  }
}

function games() {
  var win = window.open();
  var url = "icelandic.html";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}
function gammeon() {
  var win = window.open();
  var url = "https://gammeon.com/";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}

function source() {
  window.open("https://github.com/asc2563/Aluben");

}

function github() {
  window.open("https://github.com/asc2563/Aluben");

}
function proxylist() {
  var win = window.open();
  var url = "https://Prockylist.5pcfjsczs7.repl.co";
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}
function holygames() {
  const w = window.open() // access the "about:blank" window you've opened
  w.document.body.innerHTML = `<!DOCTYPE html ><html><head><title>full screen iframe</title><style type='text / css'>html {overflow: auto; }html, body, div,  iframe { margin: 0px; padding: 0px;
      height: 100 %;
      border: none;
    }

                iframe {
      display: block;
      width: 100 %;
      border: none;
      overflow - y: auto;
      overflow - x: hidden;
    }
              </style >
            </head >
     
        <body>
        <iframe src='https://ur2ndlibrary.com/12.html'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          width='100%'
          height='100%'
          scrolling='auto'>
        </iframe>

            </body >

          </html > `;
  // or access other parts to add more JS or CSS
  const style = w.document.createElement("link")
  link.href = "/path/to.css"
  link.rel = "stylesheet"
  w.document.head.appendChild(style)
}