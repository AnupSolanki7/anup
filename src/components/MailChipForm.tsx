import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "./NewsLetter";

const MailChipForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }: any) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default MailChipForm;
