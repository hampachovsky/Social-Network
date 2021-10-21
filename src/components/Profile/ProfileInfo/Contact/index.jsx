import React from 'react';

const Contact = ({ contactTitle, contactValue, style }) => {
  if (contactValue === null || contactValue.length <= 1) return null;
  return (
    <span className={style.contact}>
      {contactTitle}: {contactValue}
    </span>
  );
};

export default Contact;
