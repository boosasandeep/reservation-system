const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+(1) (866) 855 0947",
      text: "+(1) (866) 855 0947",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:care@theairlinedesk.com",
      text: "care@theairlinedesk.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="col-sm-6" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
