

export default function SendText(msg) {
    const Msg = msg;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      "Basic QUNmNzZiZGVkNTdmNDY3NzNjMDAwZmZhZDgyMmU1NmM5OTpiYWNiYzMxYWQ0NzE5MzQwMzI5OGNhMGRmYTEzZTg4MQ=="
    );
  
    const urlencoded = new URLSearchParams();
    urlencoded.append("Body", Msg);
    urlencoded.append("To", "+15197099549");
    urlencoded.append("From", "+12512701067");
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    fetch(
      "https://api.twilio.com/2010-04-01/Accounts/ACf76bded57f46773c000ffad822e56c99/Messages.json",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  


  // NCQ6PCLP3N8PXAZPFVES7168