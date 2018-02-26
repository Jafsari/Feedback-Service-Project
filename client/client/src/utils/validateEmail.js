const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .split(',') 
    .map(email => email.trim()) //make sure there are no spaces
    .filter(email => re.test(email) === false); // see if any of the emails don't pass the regex test

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`; //show the emails that are invalid back to the user
  }

  return;
};