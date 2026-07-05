import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'javierbenitezmarin@gmail.com',
    href: 'mailto:javierbenitezmarin@gmail.com',
  },
  {
    social: 'github',
    link: 'javierbenitezmarin',
    href: 'https://github.com/javierbenitezmarin',
  },
  {
    social: 'linkedin',
    link: 'javier-benitez-marin',
    href: 'https://www.linkedin.com/in/javier-benitez-marin',
  },
  {
    social: 'location',
    link: 'Vilassar de Dalt, Barcelona, ES',
    href: 'https://maps.google.com/?q=Vilassar+de+Dalt',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.comment}># contact.config</span>
      </p>
      <p className={styles.line}>
        <span className={styles.className}>[contact]</span>
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          {item.social} ={' '}
          <a href={item.href} target="_blank" rel="noopener">
            &quot;{item.link}&quot;
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
