exports.onExecuteCustomEmailProvider = async (event, api) => {
  const axios = require("axios");

  try {
    const payload = {
      from: event.notification.from,
      subject: event.notification.subject,
      text: event.notification.text,
      to: event.notification.to, 
    };

    const emailSentStatus = await axios.post(
      'https://{{enpointname}}.free.beeceptor.com',
      payload,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log(emailSentStatus);

  } catch (err) {
    console.error("SMS Provider Error:", err.response?.data || err.message);
    throw err;
  }
};
