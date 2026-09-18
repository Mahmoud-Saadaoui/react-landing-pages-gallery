import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => (
  <div className="bg-[#f6f6f6] py-[60px]" id="contact">
    <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <h2 className="m-0 text-center text-[100px] font-extrabold leading-none tracking-[-3px] text-[#ebeced] max-[767px]:text-[60px]">
        Contact
      </h2>
      <p className="-mt-[30px] text-center text-[20px] text-[#797979] max-[767px]:-mt-[20px]">
        We are born to create
      </p>
      <div className="py-[60px] text-center">
        <p className="mb-[15px] text-[35px] font-extrabold tracking-[-2px] text-[#2c4755] max-[767px]:text-[25px]">
          Feel free to drop us a line at:
        </p>
        <a
          href="mailto:leonagency@mail.com?subject=Contact"
          className="block text-[35px] font-extrabold text-[#10cab7] no-underline max-[767px]:text-[25px]"
        >
          leonagency@mail.com
        </a>
        <div className="mt-[20px] flex justify-center text-[16px]">
          Find Us On Social Networks
          <FaYoutube className="ml-[10px] text-[#2c4755]" />
          <FaFacebookF className="ml-[10px] text-[#2c4755]" />
          <FaTwitter className="ml-[10px] text-[#2c4755]" />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;