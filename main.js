const clicks = [ "900,google.com",  
     "60,mail.yahoo.com",  
     "10,mobile.sports.yahoo.com",  
     "40,sports.yahoo.com",  
     "300,yahoo.com",  
     "10,stackoverflow.com",  
     "20,overflow.com",  
     "5,com.com",  
     "2,en.wikipedia.org",  
     "1,m.wikipedia.org",  
     "1,mobile.sports",  
     "1,google.co.uk"];

const obj = {};
clicks.forEach(element => {
  const temp = element.split(",");
  const count = Number(temp[0].trim());
  const domain = temp[1].trim().split(".");

  let iDomain = "";
  for (let i = domain.length - 1; i >= 0; i--) {
    iDomain = (domain[i] + "." + iDomain).replace(/\.+$/, "");
    obj[iDomain] = (obj[iDomain] || 0) + count;
  }
});

const ret = {};
Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(e => ret[e[0]] = e[1]);
console.log(ret);