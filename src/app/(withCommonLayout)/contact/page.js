import style from "./contact.module.css";
export const metadata = {
  title: "Contact",
  description: "Contact Page",
};

const ContactPage = () => {
  return (
    <div>
      <h1 className={style.text_style}>This Contact Page</h1>
    </div>
  );
};

export default ContactPage;
