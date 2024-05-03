export const Footer = () => {
  return (
    <footer className="flex w-full mb-[120px] mt-[200px] pr-[230px] pl-[100px] h-full justify-center items-center max-lg:px-[40px]">
      <div className="max-w-[1460px] w-full flex max-lg:flex-col gap-7">
        <div className="flex-[1.45] flex flex-col justify-between">
          <div>
            <p className="mb-[24px] text-[24px] leading-[36.4px] tracking-[1%]">
              HILL
            </p>
            <p className="font-bold text-[18px] leading-[32px]">
              Get out there & discover your next <br /> slope, mountain &
              destination!
            </p>
          </div>
          <p className="font-medium text-[18px] leading-[32px] opacity-50">
            Copyright 2023 HILL, Inc. Terms & Privacy
          </p>
        </div>
        <div className="flex justify-between flex-[1] max-md:flex-col gap-7">
          <div className="flex flex-col gap-[16px]">
            <h2 className="mb-[8px] font-bold text-[24px] leading-[32px] text-[#FBD784]">
              More on The Blog
            </h2>
            <p>About MNTN</p>
            <p>Contributors & Writers</p>
            <p>Write For Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="mb-[8px] font-bold text-[24px] leading-[32px] text-[#FBD784]">
              More on HILL
            </h2>
            <p>The Team</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
