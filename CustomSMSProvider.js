exports.onExecuteCustomPhoneProvider = async (event, api) => {

  const { notification } = event;

  const { code, recipient } = notification;

  try {
      const axios = require('axios');

      const options = {
        method: 'POST',
        url: 'https://{{enpointname}}.free.beeceptor.com',
        data: {
          recipient,
          body: event.notification.as_text,
          code: event.notification.code
        }
      }

      await axios(options);

  } catch(error) {
    console.log(error);
  }
  return;
};
